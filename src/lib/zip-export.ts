import JSZip from "jszip";
import { toPng } from "html-to-image";

export const AD_WIDTH = 1080;
export const AD_HEIGHT_4_5 = 1350;
export const AD_HEIGHT_1_1 = 1080;

export type ExportProgress = {
  current: number;
  total: number;
  label: string;
};

type OnProgress = (progress: ExportProgress) => void;

async function nodeToBlob(
  node: HTMLElement,
  width: number,
  height: number
): Promise<Blob> {
  const dataUrl = await toPng(node, {
    width,
    height,
    pixelRatio: 1,
    cacheBust: true,
  });
  const res = await fetch(dataUrl);
  return res.blob();
}

export async function exportAllAsZip(
  nodes4x5: HTMLElement[],
  nodes1x1: HTMLElement[],
  clientId: string,
  templateIds: string[],
  onProgress?: OnProgress
): Promise<Blob> {
  const zip = new JSZip();
  let total = 0;
  for (let i = 0; i < nodes4x5.length; i++) {
    if (nodes4x5[i]) total++;
    if (nodes1x1[i]) total++;
  }
  let current = 0;

  for (let i = 0; i < nodes4x5.length; i++) {
    const tplId = templateIds[i] || "ad";
    const base = `${clientId}-${tplId}-v${i + 1}`;

    if (nodes4x5[i]) {
      onProgress?.({ current: ++current, total, label: `${base} (4:5)` });
      const blob = await nodeToBlob(nodes4x5[i], AD_WIDTH, AD_HEIGHT_4_5);
      zip.file(`${base}-4x5.png`, blob);
    }

    if (nodes1x1[i]) {
      onProgress?.({ current: ++current, total, label: `${base} (1:1)` });
      const blob = await nodeToBlob(nodes1x1[i], AD_WIDTH, AD_HEIGHT_1_1);
      zip.file(`${base}-1x1.png`, blob);
    }
  }

  return zip.generateAsync({ type: "blob" });
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = filename;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
