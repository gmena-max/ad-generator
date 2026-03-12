import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { readFileSync } from "fs";
import { join } from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

// Load review criteria once at module level
let reviewCriteria: string;
try {
  reviewCriteria = readFileSync(join(process.cwd(), "review-agent.md"), "utf-8");
} catch {
  reviewCriteria = "";
}

type BrandContext = {
  clientName: string;
  colors: Record<string, string>;
  mood: string[];
  forbidden: string[];
};

type TemplateContext = {
  textAreas: string[];
  templateType: string;
};

export async function POST(req: NextRequest) {
  try {
    const { image, stage, brandContext, templateContext } = (await req.json()) as {
      image: string;
      stage: "background" | "composition";
      brandContext: BrandContext;
      templateContext?: TemplateContext;
    };

    if (!image || !stage || !brandContext) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "GEMINI_API_KEY not configured" }, { status: 500 });
    }

    // Strip data URL prefix to get raw base64
    const base64Match = image.match(/^data:([^;]+);base64,(.+)$/);
    const mimeType = base64Match?.[1] || "image/png";
    const base64Data = base64Match?.[2] || image;

    // Build the review prompt
    const brandSection = `
BRAND CONTEXT:
- Client: ${brandContext.clientName}
- Colors: ${Object.entries(brandContext.colors).map(([k, v]) => `${k}: ${v}`).join(", ")}
- Mood: ${brandContext.mood.join(", ")}
- Forbidden elements: ${brandContext.forbidden.join(", ")}
`;

    const stageSection = stage === "background"
      ? "Evaluate this as a BACKGROUND IMAGE (Stage 1). Use the Stage 1 checklist."
      : `Evaluate this as a FULL COMPOSITION (Stage 2). Use the Stage 2 checklist.
Template context:
- Template type: ${templateContext?.templateType || "unknown"}
- Text overlay areas: ${templateContext?.textAreas?.join(", ") || "center"}`;

    const prompt = `${reviewCriteria}

---

${brandSection}

${stageSection}

Evaluate the provided image. Respond ONLY with valid JSON matching the output format specified above. No markdown, no explanation — just the JSON object.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              inlineData: {
                mimeType,
                data: base64Data,
              },
            },
            { text: prompt },
          ],
        },
      ],
    });

    const text = response.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      return NextResponse.json({ error: "No review response from Gemini" }, { status: 502 });
    }

    // Parse JSON from response (strip markdown fences if present)
    const jsonStr = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const result = JSON.parse(jsonStr);

    return NextResponse.json(result);
  } catch (err: unknown) {
    console.error("Review error:", err);
    const message = err instanceof Error ? err.message : "Review failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
