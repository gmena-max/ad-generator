"use client";

import { useState, useRef, useCallback, useMemo } from "react";
import { clients, defaultClientId } from "@/data/clients";
import { templates, CopyContent, TemplateId } from "@/data/templates";
import { AdCanvas } from "@/components/AdCanvas";
import { AdPreview } from "@/components/AdPreview";
import { ClientSelector } from "@/components/ClientSelector";
import { TemplateSelector } from "@/components/TemplateSelector";
import { CopyEditor } from "@/components/CopyEditor";
import { BulkGenerator } from "@/components/BulkGenerator";
import { ExportPanel } from "@/components/ExportPanel";
import { ImageUpload } from "@/components/ImageUpload";
import { PersonaSelector } from "@/components/PersonaSelector";
import { getPresetsForClient } from "@/data/presets";
import { getPersonasForClient } from "@/data/personas";
import { exportAndDownload, bulkExportAll } from "@/lib/export";
import { exportAllAsZip, downloadBlob } from "@/lib/zip-export";
import type { ExportProgress } from "@/lib/zip-export";
import { Trash2 } from "lucide-react";

export default function Home() {
  const [clientId, setClientId] = useState(defaultClientId);
  const [templateId, setTemplateId] = useState<TemplateId>("symptom-question");
  const [copy, setCopy] = useState<CopyContent>(
    templates.find((t) => t.id === "symptom-question")!.defaultCopy
  );
  const [variations, setVariations] = useState<CopyContent[]>([]);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState<ExportProgress | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [personaId, setPersonaId] = useState<string | null>(null);
  const [variant, setVariant] = useState<"a" | "b" | "c">("a");
  const [activeTab, setActiveTab] = useState<"setup" | "copy">("setup");

  const canvasRef = useRef<HTMLDivElement>(null);
  const canvasRef1x1 = useRef<HTMLDivElement>(null);
  const bulkCanvasRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const bulkCanvasRefs1x1 = useRef<Map<number, HTMLDivElement>>(new Map());

  const brand = clients[clientId];
  const presets = getPresetsForClient(clientId);
  const personas = getPersonasForClient(clientId);

  const selectedPersona = useMemo(
    () => personas.find((p) => p.id === personaId) || null,
    [personas, personaId]
  );

  const recommendedTemplates = useMemo(
    () => selectedPersona?.recommendedTemplates || [],
    [selectedPersona]
  );

  function handleTemplateChange(id: TemplateId) {
    setTemplateId(id);
    const t = templates.find((t) => t.id === id)!;
    // Preserve user's text — only fill in empty fields from new template defaults
    setCopy((prev) => ({
      ...t.defaultCopy,
      ...Object.fromEntries(
        Object.entries(prev).filter(([, v]) => v !== undefined && v !== "")
      ),
    }));
  }

  function handleClientChange(id: string) {
    setClientId(id);
    setPersonaId(null);
    const defaultId = id === "mf" ? "mf-coach-hero" : "symptom-question";
    setTemplateId(defaultId as TemplateId);
    const t = templates.find((t) => t.id === defaultId)!;
    setCopy(t.defaultCopy);
  }

  function collectBulkNodes() {
    const nodes4x5: HTMLElement[] = [];
    const nodes1x1: HTMLElement[] = [];
    for (let i = 0; i < variations.length; i++) {
      const node4x5 = bulkCanvasRefs.current.get(i);
      const node1x1 = bulkCanvasRefs1x1.current.get(i);
      if (node4x5 && node1x1) {
        nodes4x5.push(node4x5);
        nodes1x1.push(node1x1);
      }
    }
    return { nodes4x5, nodes1x1 };
  }

  const handleExportCurrent = useCallback(async () => {
    if (!canvasRef.current || !canvasRef1x1.current) return;
    setIsExporting(true);
    try {
      await exportAndDownload(canvasRef.current, canvasRef1x1.current, clientId, templateId, 0);
    } catch (err) {
      console.error("Export failed:", err);
    }
    setIsExporting(false);
  }, [clientId, templateId]);

  const handleExportAll = useCallback(async () => {
    if (variations.length === 0) return;
    setIsExporting(true);
    setExportProgress(null);
    try {
      const { nodes4x5, nodes1x1 } = collectBulkNodes();
      await bulkExportAll(nodes4x5, nodes1x1, clientId, templateId, setExportProgress);
    } catch (err) {
      console.error("Bulk export failed:", err);
    }
    setExportProgress(null);
    setIsExporting(false);
  }, [variations, clientId, templateId]);

  const handleExportZip = useCallback(async () => {
    if (variations.length === 0) return;
    setIsExporting(true);
    setExportProgress(null);
    try {
      const { nodes4x5, nodes1x1 } = collectBulkNodes();
      const templateIds = variations.map(() => templateId);
      const blob = await exportAllAsZip(nodes4x5, nodes1x1, clientId, templateIds, setExportProgress);
      downloadBlob(blob, `${clientId}-batch-${new Date().toISOString().slice(0, 10)}.zip`);
    } catch (err) {
      console.error("ZIP export failed:", err);
    }
    setExportProgress(null);
    setIsExporting(false);
  }, [variations, clientId, templateId]);

  function removeVariation(index: number) {
    setVariations(variations.filter((_, i) => i !== index));
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white px-6 py-2.5 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-bold text-gray-800">
              Lux Media Ad Generator
            </h1>
            <ClientSelector selected={clientId} onChange={handleClientChange} />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className="h-4 w-4 rounded"
                style={{ backgroundColor: brand.colors.primary }}
                title="Primary"
              />
              <div
                className="h-4 w-4 rounded"
                style={{ backgroundColor: brand.colors.accent }}
                title="Accent"
              />
              <div
                className="h-4 w-4 rounded"
                style={{ backgroundColor: brand.colors.cta }}
                title="CTA"
              />
              <span className="ml-1 text-xs text-gray-400">{brand.name}</span>
            </div>
            <div className="h-5 w-px bg-gray-200" />
            <ExportPanel
              onExportCurrent={handleExportCurrent}
              onExportAll={handleExportAll}
              onExportZip={handleExportZip}
              variationCount={variations.length}
              isExporting={isExporting}
              progress={exportProgress}
            />
          </div>
        </div>
      </header>

      {/* Persona bar */}
      {personas.length > 0 && (
        <div className="border-b border-gray-200 bg-white px-6 py-2.5 flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Persona
            </span>
            <PersonaSelector
              personas={personas}
              selected={personaId}
              onChange={setPersonaId}
            />
          </div>
        </div>
      )}

      {/* Main 2-panel layout */}
      <div className="flex flex-1 min-h-0">
        {/* Left panel — Tabbed Setup/Copy */}
        <div className="w-[420px] flex-shrink-0 border-r border-gray-200 bg-white flex flex-col">
          {/* Tab bar */}
          <div className="flex border-b border-gray-200 flex-shrink-0">
            <button
              onClick={() => setActiveTab("setup")}
              className={`flex-1 px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === "setup"
                  ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              Diseño
            </button>
            <button
              onClick={() => setActiveTab("copy")}
              className={`flex-1 px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === "copy"
                  ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              Texto
            </button>
          </div>

          {/* Scrollable tab content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5">
            {activeTab === "setup" ? (
              <>
                <div>
                  <h2 className="mb-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Template
                  </h2>
                  <TemplateSelector
                    selected={templateId}
                    onChange={handleTemplateChange}
                    recommendedIds={recommendedTemplates}
                    clientId={clientId}
                  />
                </div>

                {templateId.startsWith("mf-") && (
                  <div>
                    <h2 className="mb-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Layout Variant
                    </h2>
                    <div className="flex gap-2">
                      {(["a", "b", "c"] as const).map((v) => (
                        <button
                          key={v}
                          onClick={() => setVariant(v)}
                          className={`flex-1 rounded-lg border-2 px-4 py-2 text-sm font-bold uppercase transition-all ${
                            variant === v
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h2 className="mb-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Image
                  </h2>
                  <ImageUpload image={image} onChange={setImage} brand={brand} />
                </div>
              </>
            ) : (
              <div>
                <h2 className="mb-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Copy
                </h2>
                <CopyEditor
                  templateId={templateId}
                  copy={copy}
                  onChange={setCopy}
                  presets={presets}
                  personaId={personaId}
                  clientId={clientId}
                />
              </div>
            )}
          </div>
        </div>

        {/* Center panel — Preview + Batch gallery */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Preview area */}
          <div className="flex-1 flex items-center justify-center p-6 min-h-0">
            <AdPreview>
              <AdCanvas
                ref={canvasRef}
                brand={brand}
                template={templateId}
                copy={copy}
                image={image ?? undefined}
                variant={variant}
              />
            </AdPreview>
            {/* Hidden 1:1 canvas for export */}
            <div style={{ position: "fixed", left: -9999, top: 0, pointerEvents: "none" }}>
              <AdCanvas
                ref={canvasRef1x1}
                brand={brand}
                template={templateId}
                copy={copy}
                image={image ?? undefined}
                variant={variant}
                aspectRatio="1:1"
              />
            </div>
          </div>

          {/* Batch gallery strip */}
          <div className="flex-shrink-0 border-t border-gray-200 bg-white px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Batch ({variations.length})
              </h3>
              <BulkGenerator
                variations={variations}
                onChange={setVariations}
                currentCopy={copy}
              />
            </div>

            {variations.length > 0 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {variations.map((v, i) => (
                  <div key={i} className="flex-shrink-0 group relative">
                    <div
                      className="overflow-hidden rounded-lg border border-gray-200 shadow-sm"
                      style={{ width: 144, height: 180 }}
                    >
                      <div
                        style={{
                          transform: "scale(0.1333)",
                          transformOrigin: "top left",
                          width: 1080,
                          height: 1350,
                        }}
                      >
                        <AdCanvas
                          ref={(el) => {
                            if (el) bulkCanvasRefs.current.set(i, el);
                            else bulkCanvasRefs.current.delete(i);
                          }}
                          brand={brand}
                          template={templateId}
                          copy={v}
                          image={image ?? undefined}
                          variant={variant}
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => removeVariation(i)}
                      className="absolute -top-1.5 -right-1.5 hidden group-hover:flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white shadow-sm hover:bg-red-600 transition-colors"
                    >
                      <Trash2 size={10} />
                    </button>
                    <p className="mt-0.5 text-center text-[10px] text-gray-400">
                      v{i + 1}
                    </p>
                  </div>
                ))}
                {/* Hidden 1:1 canvases for bulk export */}
                <div style={{ position: "fixed", left: -9999, top: 0, pointerEvents: "none" }}>
                  {variations.map((v, i) => (
                    <AdCanvas
                      key={`1x1-${i}`}
                      ref={(el) => {
                        if (el) bulkCanvasRefs1x1.current.set(i, el);
                        else bulkCanvasRefs1x1.current.delete(i);
                      }}
                      brand={brand}
                      template={templateId}
                      copy={v}
                      image={image ?? undefined}
                      variant={variant}
                      aspectRatio="1:1"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
