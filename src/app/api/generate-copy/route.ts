import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { templates } from "@/data/templates";
import { clients } from "@/data/clients";
import { getPersonasForClient } from "@/data/personas";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function POST(req: NextRequest) {
  try {
    const { templateId, clientId, personaId, instructions } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY not configured" },
        { status: 500 }
      );
    }

    const template = templates.find((t) => t.id === templateId);
    if (!template) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 400 }
      );
    }

    const brand = clients[clientId];
    const personas = getPersonasForClient(clientId);
    const persona = personas.find((p) => p.id === personaId);

    const fieldDescriptions: Record<string, string> = {
      hook: "Hook / Título — the scroll-stopping headline. Short, punchy, emotional. Max 80 characters ideal, 150 max.",
      body: "Cuerpo — supporting text that expands on the hook. 1-3 sentences. Max 200 characters ideal. For pillar templates, use newlines to separate bullet points.",
      cta: "Call to Action — what the user should do. Short verb phrase. Max 30 characters. Examples: 'Descubrí cómo', 'Empezá hoy'.",
      stat: "Número / Estadística — a compelling number or short label. Examples: '87%', '30+', '8x Campeón', 'Sicológico'. Max 20 characters.",
      question: "Pregunta — a direct question to the audience. Must end with '?'.",
      answer: "Respuesta — answer to the question above. Informative, builds trust.",
    };

    const fieldsNeeded = template.fields
      .map((f) => `- ${f}: ${fieldDescriptions[f] || f}`)
      .join("\n");

    const personaContext = persona
      ? `
TARGET PERSONA: ${persona.name}
- ${persona.description}
- Age range: ${persona.ageRange}
- Pain points: ${persona.painPoints.join("; ")}
- Hook approach: ${persona.hookType}
- Core angle: ${persona.messageAngle}`
      : "No specific persona selected. Write for a general audience interested in the product.";

    const brandContext = brand
      ? `
BRAND: ${brand.name}
- Headline: ${brand.headline}
- Subheadline: ${brand.subheadline}
- Tagline: ${brand.tagline}
- Mood: ${brand.brandRules?.mood?.join(", ") || "professional"}`
      : "";

    const prompt = `You are a direct-response ad copywriter for Spanish-language (Costa Rica) social media ads.

${brandContext}

TEMPLATE: ${template.name} — ${template.description}

${personaContext}

FIELDS TO GENERATE:
${fieldsNeeded}

RULES:
- Write in Costa Rican Spanish (use "vos" / "tu" forms, not "usted" unless the persona is formal)
- Be concise. Every word must earn its place.
- Hook must stop the scroll — use emotion, curiosity, or a bold claim
- CTA must be a clear action verb phrase (never generic like "Click aquí")
- Do NOT use hashtags, emojis, or quotation marks around the hook
- Do NOT repeat the brand name in the hook
- If the template has a "stat" field, pick a real, compelling number relevant to the brand
- Match the template's purpose: ${template.description}
${instructions ? `\nUSER INSTRUCTIONS: ${instructions}` : ""}

Respond with ONLY a valid JSON object with the fields: ${template.fields.join(", ")}. No explanation, no markdown, no backticks. Just the JSON.`;

    // Try models in order of preference — free tier quotas vary
    const models = ["gemini-2.5-flash", "gemini-1.5-flash"];
    let response;
    let lastError;

    for (const model of models) {
      try {
        response = await ai.models.generateContent({
          model,
          contents: [{ role: "user", parts: [{ text: prompt }] }],
        });
        break;
      } catch (err: unknown) {
        lastError = err;
        const msg = err instanceof Error ? err.message : "";
        if (msg.includes("quota") || msg.includes("RESOURCE_EXHAUSTED")) {
          continue; // try next model
        }
        throw err; // non-quota error, don't retry
      }
    }

    if (!response) {
      throw lastError || new Error("All models exhausted");
    }

    const text = response.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      return NextResponse.json(
        { error: "No response from Gemini" },
        { status: 502 }
      );
    }

    // Parse JSON from response (strip any markdown fencing)
    const cleaned = text.replace(/```json?\s*\n?/g, "").replace(/```\s*$/g, "").trim();
    const copy = JSON.parse(cleaned);

    return NextResponse.json({ copy });
  } catch (err: unknown) {
    console.error("Generate copy error:", err);
    const message = err instanceof Error ? err.message : "Copy generation failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
