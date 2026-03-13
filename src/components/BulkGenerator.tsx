"use client";

import { useState } from "react";
import { CopyContent } from "@/data/templates";
import { BatchItem } from "@/types/batch";
import { Plus, Copy } from "lucide-react";

type Props = {
  variations: BatchItem[];
  onChange: (variations: BatchItem[]) => void;
  currentCopy: CopyContent;
};

export function BulkGenerator({ variations, onChange, currentCopy }: Props) {
  const [bulkText, setBulkText] = useState("");
  const [showBulkInput, setShowBulkInput] = useState(false);

  function addCurrentAsVariation() {
    onChange([...variations, { copy: { ...currentCopy } }]);
  }

  function parseBulkText() {
    const lines = bulkText
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    const newVariations: BatchItem[] = lines.map((line) => {
      const parts = line.split("|").map((p) => p.trim());
      return {
        copy: {
          hook: parts[0] || "",
          body: parts[1] || "",
          cta: parts[2] || currentCopy.cta,
          stat: parts[3] || currentCopy.stat,
        },
      };
    });

    onChange([...variations, ...newVariations]);
    setBulkText("");
    setShowBulkInput(false);
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <button
          onClick={addCurrentAsVariation}
          className="flex items-center gap-1 rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600 transition-colors"
        >
          <Plus size={12} /> Agregar actual
        </button>
        <button
          onClick={() => setShowBulkInput(!showBulkInput)}
          className="flex items-center gap-1 rounded bg-gray-200 px-2 py-1 text-xs text-gray-700 hover:bg-gray-300 transition-colors"
        >
          <Copy size={12} /> Bulk
        </button>
        {variations.length > 0 && (
          <button
            onClick={() => onChange([])}
            className="rounded bg-red-100 px-2 py-1 text-xs text-red-600 hover:bg-red-200 transition-colors"
          >
            Limpiar
          </button>
        )}
      </div>

      {showBulkInput && (
        <div className="space-y-2">
          <textarea
            value={bulkText}
            onChange={(e) => setBulkText(e.target.value)}
            placeholder="hook | body | cta&#10;hook | body | cta&#10;..."
            rows={3}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-xs font-mono focus:border-blue-500 focus:outline-none"
          />
          <button
            onClick={parseBulkText}
            className="rounded bg-green-500 px-3 py-1 text-xs font-medium text-white hover:bg-green-600 transition-colors"
          >
            Parse & Add
          </button>
        </div>
      )}
    </div>
  );
}
