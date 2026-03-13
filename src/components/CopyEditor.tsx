"use client";

import { useMemo, useState } from "react";
import { CopyContent, templates, TemplateId } from "@/data/templates";
import { CopyPreset } from "@/data/presets";
import { Sparkles, Loader2 } from "lucide-react";

type Props = {
  templateId: TemplateId;
  copy: CopyContent;
  onChange: (copy: CopyContent) => void;
  presets: CopyPreset[];
  personaId: string | null;
  clientId: string;
};

const FIELD_LABELS: Record<string, string> = {
  hook: "Hook / Título",
  body: "Cuerpo",
  cta: "Call to Action",
  stat: "Número / Estadística",
  question: "Pregunta",
  answer: "Respuesta",
};

const FRAMEWORK_LABELS: Record<string, string> = {
  PAS: "PAS",
  AIDA: "AIDA",
  direct: "Directo",
};

function CharCount({ value }: { value: string }) {
  const len = value.length;
  const color =
    len <= 150 ? "text-green-500" : len <= 200 ? "text-yellow-500" : "text-red-500";
  return <span className={`text-[10px] ${color}`}>{len}</span>;
}

export function CopyEditor({ templateId, copy, onChange, presets, personaId, clientId }: Props) {
  const template = templates.find((t) => t.id === templateId)!;
  const [aiPrompt, setAiPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!personaId) return presets;
    return presets.filter((p) => p.personaId === personaId || p.personaId === "all");
  }, [presets, personaId]);

  const grouped = useMemo(() => {
    const groups: Record<string, CopyPreset[]> = {};
    for (const preset of filtered) {
      const key = preset.framework;
      if (!groups[key]) groups[key] = [];
      groups[key].push(preset);
    }
    return groups;
  }, [filtered]);

  function handleField(field: keyof CopyContent, value: string) {
    onChange({ ...copy, [field]: value });
  }

  function loadPreset(preset: CopyContent) {
    onChange({ ...copy, ...preset });
  }

  async function handleAiGenerate() {
    setIsGenerating(true);
    setAiError(null);
    try {
      const res = await fetch("/api/generate-copy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          templateId,
          clientId,
          personaId,
          instructions: aiPrompt || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAiError(data.error || "Generation failed");
        return;
      }
      onChange({ ...copy, ...data.copy });
      setAiPrompt("");
    } catch (err) {
      setAiError(err instanceof Error ? err.message : "Network error");
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className="space-y-4">
      {/* AI Generate section */}
      <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-3 space-y-2">
        <label className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wide">
          <Sparkles size={14} />
          Generate with AI
        </label>
        <input
          type="text"
          value={aiPrompt}
          onChange={(e) => setAiPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !isGenerating) handleAiGenerate();
          }}
          placeholder="Optional: describe what you want..."
          className="w-full rounded-md border border-blue-200 bg-white px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none placeholder:text-gray-400"
        />
        <button
          onClick={handleAiGenerate}
          disabled={isGenerating}
          className="w-full flex items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isGenerating ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles size={14} />
              Generate Copy
            </>
          )}
        </button>
        {aiError && (
          <p className="text-xs text-red-500">{aiError}</p>
        )}
      </div>

      {/* Preset selector grouped by framework */}
      <div>
        <label className="mb-1 block text-xs font-medium text-gray-500 uppercase tracking-wide">
          Copy Presets
        </label>
        {Object.entries(grouped).map(([framework, groupPresets]) => (
          <div key={framework} className="mb-2">
            <span className="mb-1 inline-block rounded bg-gray-200 px-1.5 py-0.5 text-[10px] font-bold text-gray-500 uppercase">
              {FRAMEWORK_LABELS[framework] || framework}
            </span>
            <div className="flex flex-wrap gap-1">
              {groupPresets.map((preset) =>
                preset.copies.map((c, i) => (
                  <button
                    key={`${preset.label}-${i}`}
                    onClick={() => loadPreset(c)}
                    className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600 hover:bg-gray-200 transition-colors"
                    title={c.hook}
                  >
                    {preset.label} {preset.copies.length > 1 ? i + 1 : ""}
                  </button>
                ))
              )}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-xs text-gray-400 italic">Sin presets para esta persona</p>
        )}
      </div>

      {/* Field inputs with character count */}
      {template.fields.map((field) => (
        <div key={field}>
          <div className="mb-1 flex items-center justify-between">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              {FIELD_LABELS[field] || field}
            </label>
            <CharCount value={copy[field] || ""} />
          </div>
          {field === "body" || field === "answer" ? (
            <textarea
              value={copy[field] || ""}
              onChange={(e) => handleField(field, e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          ) : (
            <input
              type="text"
              value={copy[field] || ""}
              onChange={(e) => handleField(field, e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          )}
        </div>
      ))}
    </div>
  );
}
