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
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-700">Export</h3>

      <button
        onClick={onExportCurrent}
        disabled={isExporting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
      >
        <Download size={16} />
        {isExporting ? "Exporting..." : "Export Current (4:5 + 1:1)"}
      </button>

      {variationCount > 0 && (
        <button
          onClick={onExportAll}
          disabled={isExporting}
          className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-blue-600 px-4 py-2.5 text-sm font-medium text-blue-600 hover:bg-blue-50 disabled:opacity-50 transition-colors"
        >
          <ImageIcon size={16} />
          {isExporting
            ? "Exporting..."
            : `Export All ${variationCount} Variations`}
        </button>
      )}

      <p className="text-xs text-gray-400">
        4:5 (1080x1350) for Instagram + Meta Ads
        <br />
        1:1 (1080x1080) for Facebook
      </p>
    </div>
  );
}
