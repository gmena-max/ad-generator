"use client";

import { Persona } from "@/data/personas";

type Props = {
  personas: Persona[];
  selected: string | null;
  onChange: (personaId: string | null) => void;
};

export function PersonaSelector({ personas, selected, onChange }: Props) {
  if (personas.length === 0) return null;

  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      <button
        onClick={() => onChange(null)}
        className={`flex-shrink-0 rounded-lg border px-3 py-2 text-xs transition-all ${
          selected === null
            ? "border-blue-500 bg-blue-50 font-semibold text-blue-700"
            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
        }`}
      >
        Todos
      </button>
      {personas.map((p) => (
        <button
          key={p.id}
          onClick={() => onChange(p.id)}
          className={`flex-shrink-0 rounded-lg border px-3 py-2 text-left transition-all ${
            selected === p.id
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <div className="text-xs font-semibold text-gray-800">{p.name}</div>
          <div className="text-[10px] text-gray-400">{p.ageRange}</div>
        </button>
      ))}
    </div>
  );
}
