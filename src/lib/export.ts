import { toPng } from "html-to-image";
import { AD_WIDTH, AD_HEIGHT_4_5, AD_HEIGHT_1_1, downloadBlob } from "./zip-export";
import type { ExportProgress } from "./zip-export";

export async function exportAdAsPng(
  node4x5: HTMLElement,
  node1x1: HTMLElement
): Promise<{ url4x5: string; url1x1: string }> {
  const url4x5 = await toPng(node4x5, {
    width: AD_WIDTH,
    height: AD_HEIGHT_4_5,
    pixelRatio: 1,
    cacheBust: true,
  });

  const url1x1 = await toPng(node1x1, {
    width: AD_WIDTH,
    height: AD_HEIGHT_1_1,
    pixelRatio: 1,
    cacheBust: true,
  });

  return { url4x5, url1x1 };
}

function downloadDataUrl(dataUrl: string, filename: string) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export async function exportAndDownload(
  node4x5: HTMLElement,
  node1x1: HTMLElement,
  clientId: string,
  templateId: string,
  variationIndex: number
) {
  const base = `${clientId}-${templateId}-v${variationIndex + 1}`;
  const { url4x5, url1x1 } = await exportAdAsPng(node4x5, node1x1);

  downloadDataUrl(url4x5, `${base}-4x5.png`);
  // Small delay so browser handles both downloads
  await new Promise((r) => setTimeout(r, 300));
  downloadDataUrl(url1x1, `${base}-1x1.png`);
}

export async function bulkExportAll(
  nodes4x5: HTMLElement[],
  nodes1x1: HTMLElement[],
  clientId: string,
  templateId: string,
  onProgress?: (progress: ExportProgress) => void
) {
  const total = nodes4x5.length;
  for (let i = 0; i < nodes4x5.length; i++) {
    if (nodes4x5[i] && nodes1x1[i]) {
      onProgress?.({ current: i + 1, total, label: `v${i + 1}` });
      await exportAndDownload(nodes4x5[i], nodes1x1[i], clientId, templateId, i);
      // Small delay between downloads
      await new Promise((r) => setTimeout(r, 500));
    }
  }
}

export { downloadBlob } from "./zip-export";
