"use client";

import { CopyContent, templates, TemplateId } from "@/data/templates";
import { CopyPreset } from "@/data/presets";

type Props = {
  templateId: TemplateId;
  copy: CopyContent;
  onChange: (copy: CopyContent) => void;
  presets: CopyPreset[];
};

const FIELD_LABELS: Record<string, string> = {
  hook: "Hook / Título",
  body: "Cuerpo",
  cta: "Call to Action",
  stat: "Número / Estadística",
  question: "Pregunta",
  answer: "Respuesta",
};

export function CopyEditor({ templateId, copy, onChange, presets }: Props) {
  const template = templates.find((t) => t.id === templateId)!;

  function handleField(field: keyof CopyContent, value: string) {
    onChange({ ...copy, [field]: value });
  }

  function loadPreset(preset: CopyContent) {
    onChange({ ...copy, ...preset });
  }

  return (
    <div className="space-y-4">
      {/* Preset selector */}
      <div>
        <label className="mb-1 block text-xs font-medium text-gray-500 uppercase tracking-wide">
          Copy Presets
        </label>
        <div className="flex flex-wrap gap-1">
          {presets.map((preset) =>
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

      {/* Field inputs */}
      {template.fields.map((field) => (
        <div key={field}>
          <label className="mb-1 block text-xs font-medium text-gray-500 uppercase tracking-wide">
            {FIELD_LABELS[field] || field}
          </label>
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
