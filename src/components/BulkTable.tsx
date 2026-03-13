"use client";

import { useRef } from "react";
import { templates, TemplateId } from "@/data/templates";
import { BatchItem } from "@/types/batch";
import type { MfVariant } from "@/components/templates/mf/types";
import { Trash2, ImageIcon, X } from "lucide-react";

type Props = {
  items: BatchItem[];
  onUpdate: (index: number, item: BatchItem) => void;
  onDelete: (index: number) => void;
  currentTemplateId: TemplateId;
  currentVariant: MfVariant;
  clientId: string;
};

export function BulkTable({
  items,
  onUpdate,
  onDelete,
  currentTemplateId,
  currentVariant,
  clientId,
}: Props) {
  const isMfClient = clientId === "mf";

  const filteredTemplates = templates.filter((t) => {
    const isMf = t.id.startsWith("mf-");
    return isMfClient ? isMf : !isMf;
  });

  if (items.length === 0) {
    return (
      <p className="text-xs text-gray-400 text-center py-6">
        No hay items en el batch. Usa &quot;Agregar actual&quot; o &quot;Importar CSV&quot; para empezar.
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {items.map((item, i) => {
        const effectiveTemplateId = item.templateId || currentTemplateId;
        const tpl = templates.find((t) => t.id === effectiveTemplateId);
        const showStat = tpl?.fields.includes("stat") ?? false;

        return (
          <BulkTableRow
            key={i}
            index={i}
            item={item}
            onUpdate={onUpdate}
            onDelete={onDelete}
            filteredTemplates={filteredTemplates}
            isMfClient={isMfClient}
            showStat={showStat}
          />
        );
      })}
    </div>
  );
}

function BulkTableRow({
  index,
  item,
  onUpdate,
  onDelete,
  filteredTemplates,
  isMfClient,
  showStat,
}: {
  index: number;
  item: BatchItem;
  onUpdate: (index: number, item: BatchItem) => void;
  onDelete: (index: number) => void;
  filteredTemplates: { id: TemplateId; name: string }[];
  isMfClient: boolean;
  showStat: boolean;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleImageFile(file: File) {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      onUpdate(index, { ...item, image: e.target?.result as string });
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
      {/* Row header */}
      <div className="flex items-center gap-2 px-2.5 py-1.5 bg-gray-50 border-b border-gray-100">
        <span className="text-[10px] font-bold text-gray-400 w-5">
          {index + 1}
        </span>

        {/* Template dropdown */}
        <select
          value={item.templateId || ""}
          onChange={(e) => {
            const val = e.target.value;
            onUpdate(index, {
              ...item,
              templateId: val ? (val as TemplateId) : undefined,
            });
          }}
          className="rounded border border-gray-200 bg-white px-1.5 py-0.5 text-xs focus:border-blue-400 focus:outline-none flex-1"
        >
          <option value="">(current)</option>
          {filteredTemplates.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>

        {/* Variant dropdown (MF only) */}
        {isMfClient && (
          <select
            value={item.variant || ""}
            onChange={(e) => {
              const val = e.target.value;
              onUpdate(index, {
                ...item,
                variant: val ? (val as MfVariant) : undefined,
              });
            }}
            className="rounded border border-gray-200 bg-white px-1.5 py-0.5 text-xs w-16 focus:border-blue-400 focus:outline-none"
          >
            <option value="">(cur)</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
          </select>
        )}

        {/* Image button */}
        <button
          onClick={() =>
            item.image !== undefined
              ? onUpdate(index, { ...item, image: undefined })
              : fileInputRef.current?.click()
          }
          title={item.image !== undefined ? "Quitar imagen" : "Asignar imagen"}
          className={`flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[10px] font-medium transition-colors ${
            item.image !== undefined
              ? "bg-green-100 text-green-700 hover:bg-red-100 hover:text-red-600"
              : "bg-gray-100 text-gray-500 hover:bg-blue-100 hover:text-blue-600"
          }`}
        >
          {item.image !== undefined ? (
            <>
              <X size={10} />
              Img
            </>
          ) : (
            <>
              <ImageIcon size={10} />
              Img
            </>
          )}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleImageFile(file);
            e.target.value = "";
          }}
        />

        {/* Delete */}
        <button
          onClick={() => onDelete(index)}
          className="rounded p-0.5 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors"
        >
          <Trash2 size={12} />
        </button>
      </div>

      {/* Image preview (if has per-row image) */}
      {item.image !== undefined && (
        <div className="px-2.5 py-1.5 border-b border-gray-100 bg-gray-50/50">
          <img
            src={item.image}
            alt={`Row ${index + 1}`}
            className="h-12 w-full rounded object-cover"
          />
        </div>
      )}

      {/* Copy fields */}
      <div className="px-2.5 py-1.5 space-y-1">
        <input
          type="text"
          value={item.copy.hook}
          onChange={(e) =>
            onUpdate(index, {
              ...item,
              copy: { ...item.copy, hook: e.target.value },
            })
          }
          className="w-full rounded border border-gray-200 px-2 py-1 text-xs focus:border-blue-400 focus:outline-none"
          placeholder="Hook"
        />
        <input
          type="text"
          value={item.copy.body}
          onChange={(e) =>
            onUpdate(index, {
              ...item,
              copy: { ...item.copy, body: e.target.value },
            })
          }
          className="w-full rounded border border-gray-200 px-2 py-1 text-xs focus:border-blue-400 focus:outline-none"
          placeholder="Body"
        />
        <div className="flex gap-1">
          <input
            type="text"
            value={item.copy.cta}
            onChange={(e) =>
              onUpdate(index, {
                ...item,
                copy: { ...item.copy, cta: e.target.value },
              })
            }
            className="flex-1 rounded border border-gray-200 px-2 py-1 text-xs focus:border-blue-400 focus:outline-none"
            placeholder="CTA"
          />
          {showStat && (
            <input
              type="text"
              value={item.copy.stat || ""}
              onChange={(e) =>
                onUpdate(index, {
                  ...item,
                  copy: { ...item.copy, stat: e.target.value },
                })
              }
              className="w-20 rounded border border-gray-200 px-2 py-1 text-xs focus:border-blue-400 focus:outline-none"
              placeholder="Stat"
            />
          )}
        </div>
      </div>
    </div>
  );
}
