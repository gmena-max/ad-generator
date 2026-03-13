"use client";

import { Download, ImageIcon } from "lucide-react";

type Props = {
  onExportCurrent: () => void;
  onExportAll: () => void;
  variationCount: number;
  isExporting: boolean;
};

export function ExportPanel({
  onExportCurrent,
  onExportAll,
  variationCount,
  isExporting,
}: Props) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onExportCurrent}
        disabled={isExporting}
        title="4:5 (1080×1350) + 1:1 (1080×1080)"
        className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
      >
        <Download size={14} />
        {isExporting ? "..." : "Exportar"}
      </button>

      {variationCount > 0 && (
        <button
          onClick={onExportAll}
          disabled={isExporting}
          title="Export all variations (4:5 + 1:1)"
          className="flex items-center gap-1.5 rounded-lg border-2 border-blue-600 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 disabled:opacity-50 transition-colors"
        >
          <ImageIcon size={14} />
          {isExporting ? "..." : `Exportar ${variationCount}`}
        </button>
      )}
    </div>
  );
}
