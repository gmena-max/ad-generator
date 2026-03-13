"use client";

import { Download, ImageIcon, Archive } from "lucide-react";
import type { ExportProgress } from "@/lib/zip-export";

type Props = {
  onExportCurrent: () => void;
  onExportAll: () => void;
  onExportZip: () => void;
  variationCount: number;
  isExporting: boolean;
  progress: ExportProgress | null;
};

export function ExportPanel({
  onExportCurrent,
  onExportAll,
  onExportZip,
  variationCount,
  isExporting,
  progress,
}: Props) {
  return (
    <div className="flex flex-col gap-1.5">
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
          <>
            <button
              onClick={onExportAll}
              disabled={isExporting}
              title="Export all variations (4:5 + 1:1)"
              className="flex items-center gap-1.5 rounded-lg border-2 border-blue-600 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 disabled:opacity-50 transition-colors"
            >
              <ImageIcon size={14} />
              {isExporting ? "..." : `Exportar ${variationCount}`}
            </button>

            <button
              onClick={onExportZip}
              disabled={isExporting}
              title="Download all as ZIP (4:5 + 1:1)"
              className="flex items-center gap-1.5 rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50 transition-colors"
            >
              <Archive size={14} />
              {isExporting ? "..." : "ZIP"}
            </button>
          </>
        )}
      </div>

      {progress && (
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-200"
              style={{ width: `${(progress.current / progress.total) * 100}%` }}
            />
          </div>
          <span className="text-[10px] text-gray-500 whitespace-nowrap">
            {progress.current}/{progress.total} {progress.label}
          </span>
        </div>
      )}
    </div>
  );
}
