"use client";

import { templates, TemplateId } from "@/data/templates";

type Props = {
  selected: TemplateId;
  onChange: (id: TemplateId) => void;
  recommendedIds?: TemplateId[];
};

const TEMPLATE_ICONS: Record<TemplateId, string> = {
  "stat-authority": "#",
  "symptom-question": "?",
  "social-proof": "5★",
  "faq-card": "Q&A",
  "educational": "i",
  "scarcity": "!!",
  "photo-hero": "PH",
  "testimonial": "T",
  "mf-coach-hero": "MF",
  "mf-pillar-highlight": "4P",
  "mf-quote-card": "MQ",
  "mf-stat-insight": "M#",
  "mf-question-hook": "M?",
};

export function TemplateSelector({ selected, onChange, recommendedIds }: Props) {
  const hasRecommendations = recommendedIds && recommendedIds.length > 0;

  return (
    <div className="grid grid-cols-2 gap-2">
      {templates.map((t) => {
        const isRecommended = hasRecommendations && recommendedIds.includes(t.id);
        const isDimmed = hasRecommendations && !isRecommended && selected !== t.id;

        return (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className={`relative rounded-lg border-2 p-3 text-left transition-all ${
              selected === t.id
                ? "border-blue-500 bg-blue-50"
                : isDimmed
                  ? "border-gray-100 bg-gray-50 opacity-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            {isRecommended && (
              <span className="absolute -right-1 -top-1 rounded-full bg-green-500 px-1.5 py-0.5 text-[9px] font-bold text-white leading-none">
                REC
              </span>
            )}
            <div className="mb-1 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-gray-100 text-xs font-bold text-gray-600">
                {TEMPLATE_ICONS[t.id]}
              </span>
              <span className="text-sm font-semibold text-gray-800">
                {t.name}
              </span>
            </div>
            {t.campaignStage && (
              <span className="mb-1 inline-block rounded bg-gray-100 px-1 py-0.5 text-[9px] font-medium text-gray-400 uppercase">
                {t.campaignStage}
              </span>
            )}
            <p className="text-xs text-gray-500">{t.description}</p>
          </button>
        );
      })}
    </div>
  );
}
