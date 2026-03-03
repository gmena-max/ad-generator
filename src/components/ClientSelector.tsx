"use client";

import { clients, ClientBrand } from "@/data/clients";

type Props = {
  selected: string;
  onChange: (id: string) => void;
};

export function ClientSelector({ selected, onChange }: Props) {
  const entries = Object.values(clients);

  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none"
    >
      {entries.map((c: ClientBrand) => (
        <option key={c.id} value={c.id}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
