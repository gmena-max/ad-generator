import { toPng } from "html-to-image";

const AD_WIDTH = 1080;
const AD_HEIGHT_4_5 = 1350;
const AD_HEIGHT_1_1 = 1080;

export async function exportAdAsPng(
  node: HTMLElement
): Promise<{ url4x5: string; url1x1: string }> {
  // Export full 4:5
  const url4x5 = await toPng(node, {
    width: AD_WIDTH,
    height: AD_HEIGHT_4_5,
    pixelRatio: 1,
    cacheBust: true,
  });

  // Export 1:1 center crop — clip middle 1080x1080 from the 1080x1350
  const cropTop = (AD_HEIGHT_4_5 - AD_HEIGHT_1_1) / 2; // 135px
  const url1x1 = await toPng(node, {
    width: AD_WIDTH,
    height: AD_HEIGHT_1_1,
    pixelRatio: 1,
    cacheBust: true,
    style: {
      marginTop: `-${cropTop}px`,
    },
  });

  return { url4x5, url1x1 };
}

export function downloadPng(dataUrl: string, filename: string) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export async function exportAndDownload(
  node: HTMLElement,
  clientId: string,
  templateId: string,
  variationIndex: number
) {
  const base = `${clientId}-${templateId}-v${variationIndex + 1}`;
  const { url4x5, url1x1 } = await exportAdAsPng(node);

  downloadPng(url4x5, `${base}-4x5.png`);
  // Small delay so browser handles both downloads
  await new Promise((r) => setTimeout(r, 300));
  downloadPng(url1x1, `${base}-1x1.png`);
}

export async function bulkExportAll(
  nodes: HTMLElement[],
  clientId: string,
  templateId: string
) {
  for (let i = 0; i < nodes.length; i++) {
    await exportAndDownload(nodes[i], clientId, templateId, i);
    // Small delay between downloads
    await new Promise((r) => setTimeout(r, 500));
  }
}
