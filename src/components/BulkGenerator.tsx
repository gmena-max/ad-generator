"use client";

import { useState } from "react";
import { CopyContent } from "@/data/templates";
import { Plus, Trash2, Copy } from "lucide-react";

type Props = {
  variations: CopyContent[];
  onChange: (variations: CopyContent[]) => void;
  currentCopy: CopyContent;
};

export function BulkGenerator({ variations, onChange, currentCopy }: Props) {
  const [bulkText, setBulkText] = useState("");
  const [showBulkInput, setShowBulkInput] = useState(false);

  function addCurrentAsVariation() {
    onChange([...variations, { ...currentCopy }]);
  }

  function removeVariation(index: number) {
    onChange(variations.filter((_, i) => i !== index));
  }

  function parseBulkText() {
    const lines = bulkText
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    const newVariations: CopyContent[] = lines.map((line) => {
      const parts = line.split("|").map((p) => p.trim());
      return {
        hook: parts[0] || "",
        body: parts[1] || "",
        cta: parts[2] || currentCopy.cta,
        stat: parts[3] || currentCopy.stat,
      };
    });

    onChange([...variations, ...newVariations]);
    setBulkText("");
    setShowBulkInput(false);
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700">
          Variations ({variations.length})
        </h3>
        <div className="flex gap-1">
          <button
            onClick={addCurrentAsVariation}
            className="flex items-center gap-1 rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600 transition-colors"
          >
            <Plus size={12} /> Add Current
          </button>
          <button
            onClick={() => setShowBulkInput(!showBulkInput)}
            className="flex items-center gap-1 rounded bg-gray-200 px-2 py-1 text-xs text-gray-700 hover:bg-gray-300 transition-colors"
          >
            <Copy size={12} /> Bulk
          </button>
        </div>
      </div>

      {showBulkInput && (
        <div className="space-y-2">
          <textarea
            value={bulkText}
            onChange={(e) => setBulkText(e.target.value)}
            placeholder="hook | body | cta&#10;hook | body | cta&#10;..."
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-xs font-mono focus:border-blue-500 focus:outline-none"
          />
          <button
            onClick={parseBulkText}
            className="w-full rounded bg-green-500 py-1.5 text-xs font-medium text-white hover:bg-green-600 transition-colors"
          >
            Parse & Add
          </button>
        </div>
      )}

      {/* Variation list */}
      <div className="max-h-64 space-y-1 overflow-y-auto">
        {variations.map((v, i) => (
          <div
            key={i}
            className="flex items-start justify-between rounded-lg bg-white border border-gray-200 p-2"
          >
            <div className="min-w-0 flex-1">
              <div className="text-xs font-medium text-gray-700 truncate">
                {v.hook}
              </div>
              <div className="text-xs text-gray-400 truncate">{v.body}</div>
            </div>
            <button
              onClick={() => removeVariation(i)}
              className="ml-2 flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
