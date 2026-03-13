"use client";

import { useRef, useState } from "react";
import { CopyContent, TemplateId } from "@/data/templates";
import { BatchItem } from "@/types/batch";
import type { MfVariant } from "@/components/templates/mf/types";
import { Plus, FileUp, ClipboardPaste, X } from "lucide-react";

type Props = {
  variations: BatchItem[];
  onChange: (variations: BatchItem[]) => void;
  onUpdate: (index: number, item: BatchItem) => void;
  currentCopy: CopyContent;
  currentTemplateId: TemplateId;
  currentVariant: MfVariant;
  clientId: string;
};

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;
  for (const char of line) {
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

function parseCsv(text: string, currentCopy: CopyContent): BatchItem[] {
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l);
  if (lines.length < 2) return [];

  const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());

  return lines.slice(1).map((line) => {
    const values = parseCSVLine(line);
    const row: Record<string, string> = {};
    headers.forEach((h, i) => {
      row[h] = values[i]?.trim() || "";
    });

    return {
      copy: {
        hook: row.hook || "",
        body: row.body || "",
        cta: row.cta || currentCopy.cta,
        stat: row.stat || currentCopy.stat,
      },
      templateId: (row.template as TemplateId) || undefined,
      variant: (row.variant as MfVariant) || undefined,
    };
  });
}

export function BulkGenerator({
  variations,
  onChange,
  onUpdate: _onUpdate,
  currentCopy,
  currentTemplateId: _currentTemplateId,
  currentVariant: _currentVariant,
  clientId: _clientId,
}: Props) {
  const [showPasteInput, setShowPasteInput] = useState(false);
  const [bulkText, setBulkText] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function addCurrentAsVariation() {
    onChange([...variations, { copy: { ...currentCopy } }]);
  }

  function handleCsvImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      if (!text) return;
      const newItems = parseCsv(text, currentCopy);
      if (newItems.length > 0) {
        onChange([...variations, ...newItems]);
      }
    };
    reader.readAsText(file);

    // Reset so the same file can be re-imported
    e.target.value = "";
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
    setShowPasteInput(false);
  }

  return (
    <div className="space-y-2">
      {/* Action bar */}
      <div className="flex items-center gap-2">
        <button
          onClick={addCurrentAsVariation}
          className="flex items-center gap-1 rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600 transition-colors"
        >
          <Plus size={12} /> Agregar actual
        </button>

        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-1 rounded bg-gray-200 px-2 py-1 text-xs text-gray-700 hover:bg-gray-300 transition-colors"
        >
          <FileUp size={12} /> Importar CSV
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.txt"
          onChange={handleCsvImport}
          className="hidden"
        />

        <button
          onClick={() => setShowPasteInput(!showPasteInput)}
          className={`flex items-center gap-1 rounded px-2 py-1 text-xs transition-colors ${
            showPasteInput
              ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <ClipboardPaste size={12} /> Pegar
        </button>

        {variations.length > 0 && (
          <button
            onClick={() => onChange([])}
            className="flex items-center gap-1 rounded bg-red-100 px-2 py-1 text-xs text-red-600 hover:bg-red-200 transition-colors"
          >
            <X size={12} /> Limpiar
          </button>
        )}
      </div>

      {/* Pipe-delimited textarea (toggle) */}
      {showPasteInput && (
        <div className="space-y-2">
          <textarea
            value={bulkText}
            onChange={(e) => setBulkText(e.target.value)}
            placeholder="hook | body | cta | stat&#10;hook | body | cta&#10;..."
            rows={3}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-xs font-mono focus:border-blue-500 focus:outline-none"
          />
          <button
            onClick={parseBulkText}
            disabled={!bulkText.trim()}
            className="rounded bg-green-500 px-3 py-1 text-xs font-medium text-white hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Parse & Add
          </button>
        </div>
      )}
    </div>
  );
}
