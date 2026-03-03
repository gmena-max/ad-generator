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

export default function Home() {
  const [clientId, setClientId] = useState(defaultClientId);
  const [templateId, setTemplateId] = useState<TemplateId>("symptom-question");
  const [copy, setCopy] = useState<CopyContent>(
    templates.find((t) => t.id === "symptom-question")!.defaultCopy
  );
  const [variations, setVariations] = useState<CopyContent[]>([]);
  const [isExporting, setIsExporting] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [personaId, setPersonaId] = useState<string | null>(null);

  const canvasRef = useRef<HTMLDivElement>(null);
  const bulkCanvasRefs = useRef<Map<number, HTMLDivElement>>(new Map());

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
    setCopy(t.defaultCopy);
  }

  function handleClientChange(id: string) {
    setClientId(id);
    setPersonaId(null);
  }

  const handleExportCurrent = useCallback(async () => {
    if (!canvasRef.current) return;
    setIsExporting(true);
    try {
      await exportAndDownload(canvasRef.current, clientId, templateId, 0);
    } catch (err) {
      console.error("Export failed:", err);
    }
    setIsExporting(false);
  }, [clientId, templateId]);

  const handleExportAll = useCallback(async () => {
    if (variations.length === 0) return;
    setIsExporting(true);
    try {
      const nodes: HTMLElement[] = [];
      for (let i = 0; i < variations.length; i++) {
        const node = bulkCanvasRefs.current.get(i);
        if (node) nodes.push(node);
      }
      await bulkExportAll(nodes, clientId, templateId);
    } catch (err) {
      console.error("Bulk export failed:", err);
    }
    setIsExporting(false);
  }, [variations, clientId, templateId]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <header className="border-b border-gray-200 bg-white px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-bold text-gray-800">
              Lux Media Ad Generator
            </h1>
            <ClientSelector selected={clientId} onChange={handleClientChange} />
          </div>
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
            <span className="ml-2 text-xs text-gray-400">{brand.name}</span>
          </div>
        </div>
      </header>

      {/* Persona bar */}
      {personas.length > 0 && (
        <div className="border-b border-gray-200 bg-white px-6 py-3">
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

      {/* Main content */}
      <div className="flex gap-6 p-6">
        {/* Left panel — Templates + Image + Copy */}
        <div className="w-80 flex-shrink-0 space-y-6">
          <div>
            <h2 className="mb-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Template
            </h2>
            <TemplateSelector
              selected={templateId}
              onChange={handleTemplateChange}
              recommendedIds={recommendedTemplates}
            />
          </div>

          <div>
            <h2 className="mb-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Image
            </h2>
            <ImageUpload image={image} onChange={setImage} />
          </div>

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
            />
          </div>
        </div>

        {/* Center — Live preview */}
        <div className="flex flex-1 flex-col items-center">
          <h2 className="mb-4 text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Preview
          </h2>
          <AdPreview>
            <AdCanvas
              ref={canvasRef}
              brand={brand}
              template={templateId}
              copy={copy}
              image={image ?? undefined}
            />
          </AdPreview>
        </div>

        {/* Right panel — Bulk + Export */}
        <div className="w-72 flex-shrink-0 space-y-6">
          <BulkGenerator
            variations={variations}
            onChange={setVariations}
            currentCopy={copy}
          />
          <ExportPanel
            onExportCurrent={handleExportCurrent}
            onExportAll={handleExportAll}
            variationCount={variations.length}
            isExporting={isExporting}
          />
        </div>
      </div>

      {/* Bulk variations gallery */}
      {variations.length > 0 && (
        <div className="border-t border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Batch Gallery ({variations.length} variations)
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {variations.map((v, i) => (
              <div key={i} className="flex-shrink-0">
                <div
                  className="overflow-hidden rounded-lg border border-gray-200 shadow-sm"
                  style={{ width: 216, height: 270 }}
                >
                  <div
                    style={{
                      transform: "scale(0.2)",
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
                    />
                  </div>
                </div>
                <p className="mt-1 text-center text-xs text-gray-400">
                  v{i + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
