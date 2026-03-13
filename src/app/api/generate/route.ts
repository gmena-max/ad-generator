import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function POST(req: NextRequest) {
  try {
    const { prompt, masterInstructions, aspectRatio = "4:5", model } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "GEMINI_API_KEY not configured" }, { status: 500 });
    }

    const fullPrompt = masterInstructions
      ? `${masterInstructions}\n\n${prompt}`
      : prompt;

    // Map aspect ratios to Gemini-supported values
    const aspectMap: Record<string, string> = {
      "4:5": "3:4",   // Closest supported ratio for 4:5
      "1:1": "1:1",
      "16:9": "16:9",
    };

    // Image generation models — try in order, fall back on quota errors
    const imageModels = [model, "gemini-2.5-flash-image", "gemini-2.0-flash"].filter(Boolean);
    let response;
    let lastError;

    for (const m of imageModels) {
      try {
        response = await ai.models.generateContent({
          model: m,
          contents: [{ role: "user", parts: [{ text: fullPrompt }] }],
          config: {
            responseModalities: ["IMAGE", "TEXT"],
            ...(aspectMap[aspectRatio] && {
              imageConfig: { aspectRatio: aspectMap[aspectRatio] },
            }),
          },
        });
        break;
      } catch (err: unknown) {
        lastError = err;
        const msg = err instanceof Error ? err.message : "";
        if (msg.includes("quota") || msg.includes("RESOURCE_EXHAUSTED")) {
          continue;
        }
        throw err;
      }
    }

    if (!response) {
      throw lastError || new Error("All models exhausted");
    }

    // Extract image from response
    const parts = response.candidates?.[0]?.content?.parts;
    if (!parts) {
      return NextResponse.json({ error: "No response from Gemini" }, { status: 502 });
    }

    const imagePart = parts.find((p) => p.inlineData?.mimeType?.startsWith("image/"));
    if (!imagePart?.inlineData) {
      return NextResponse.json(
        { error: "No image generated. Gemini returned text only." },
        { status: 422 }
      );
    }

    const { data, mimeType } = imagePart.inlineData;
    const dataUrl = `data:${mimeType};base64,${data}`;

    return NextResponse.json({
      image: dataUrl,
      mimeType: mimeType || "image/png",
    });
  } catch (err: unknown) {
    console.error("Generate error:", err);
    const message = err instanceof Error ? err.message : "Generation failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
