"use client";

import { templates, TemplateId } from "@/data/templates";

type Props = {
  selected: TemplateId;
  onChange: (id: TemplateId) => void;
};

const TEMPLATE_ICONS: Record<TemplateId, string> = {
  "stat-authority": "#",
  "symptom-question": "?",
  "social-proof": "5★",
  "faq-card": "Q&A",
  "educational": "i",
  "scarcity": "!!",
};

export function TemplateSelector({ selected, onChange }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {templates.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`rounded-lg border-2 p-3 text-left transition-all ${
            selected === t.id
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <div className="mb-1 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-gray-100 text-xs font-bold text-gray-600">
              {TEMPLATE_ICONS[t.id]}
            </span>
            <span className="text-sm font-semibold text-gray-800">
              {t.name}
            </span>
          </div>
          <p className="text-xs text-gray-500">{t.description}</p>
        </button>
      ))}
    </div>
  );
}
