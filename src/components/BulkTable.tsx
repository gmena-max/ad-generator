"use client";

import { templates, TemplateId } from "@/data/templates";
import { BatchItem } from "@/types/batch";
import type { MfVariant } from "@/components/templates/mf/types";
import { Trash2 } from "lucide-react";

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
    <div className="overflow-x-auto">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="bg-gray-50 text-gray-500 uppercase tracking-wide">
            <th className="px-2 py-1 text-left font-semibold w-8">#</th>
            <th className="px-2 py-1 text-left font-semibold w-28">Template</th>
            {isMfClient && (
              <th className="px-2 py-1 text-left font-semibold w-16">Var</th>
            )}
            <th className="px-2 py-1 text-left font-semibold w-36">Hook</th>
            <th className="px-2 py-1 text-left font-semibold min-w-[180px]">Body</th>
            <th className="px-2 py-1 text-left font-semibold w-28">CTA</th>
            <th className="px-2 py-1 text-left font-semibold w-20">Stat</th>
            <th className="px-2 py-1 w-8" />
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => {
            const effectiveTemplateId = item.templateId || currentTemplateId;
            const tpl = templates.find((t) => t.id === effectiveTemplateId);
            const showStat = tpl?.fields.includes("stat") ?? false;

            return (
              <tr
                key={i}
                className="border-t border-gray-100 hover:bg-blue-50/30 transition-colors"
              >
                {/* Row number */}
                <td className="px-2 py-1 text-gray-400 font-mono">{i + 1}</td>

                {/* Template dropdown */}
                <td className="px-2 py-1">
                  <select
                    value={item.templateId || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      onUpdate(i, {
                        ...item,
                        templateId: val ? (val as TemplateId) : undefined,
                      });
                    }}
                    className="w-full rounded border border-gray-200 bg-white px-1 py-0.5 text-xs focus:border-blue-400 focus:outline-none"
                  >
                    <option value="">(current)</option>
                    {filteredTemplates.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                </td>

                {/* Variant dropdown (MF only) */}
                {isMfClient && (
                  <td className="px-2 py-1">
                    <select
                      value={item.variant || ""}
                      onChange={(e) => {
                        const val = e.target.value;
                        onUpdate(i, {
                          ...item,
                          variant: val ? (val as MfVariant) : undefined,
                        });
                      }}
                      className="w-full rounded border border-gray-200 bg-white px-1 py-0.5 text-xs focus:border-blue-400 focus:outline-none"
                    >
                      <option value="">(current)</option>
                      <option value="a">A</option>
                      <option value="b">B</option>
                      <option value="c">C</option>
                    </select>
                  </td>
                )}

                {/* Hook */}
                <td className="px-2 py-1">
                  <input
                    type="text"
                    value={item.copy.hook}
                    onChange={(e) =>
                      onUpdate(i, {
                        ...item,
                        copy: { ...item.copy, hook: e.target.value },
                      })
                    }
                    className="w-full rounded border border-gray-200 px-1 py-0.5 text-xs focus:border-blue-400 focus:outline-none"
                    placeholder="Hook"
                  />
                </td>

                {/* Body */}
                <td className="px-2 py-1">
                  <input
                    type="text"
                    value={item.copy.body}
                    onChange={(e) =>
                      onUpdate(i, {
                        ...item,
                        copy: { ...item.copy, body: e.target.value },
                      })
                    }
                    className="w-full rounded border border-gray-200 px-1 py-0.5 text-xs focus:border-blue-400 focus:outline-none"
                    placeholder="Body"
                  />
                </td>

                {/* CTA */}
                <td className="px-2 py-1">
                  <input
                    type="text"
                    value={item.copy.cta}
                    onChange={(e) =>
                      onUpdate(i, {
                        ...item,
                        copy: { ...item.copy, cta: e.target.value },
                      })
                    }
                    className="w-full rounded border border-gray-200 px-1 py-0.5 text-xs focus:border-blue-400 focus:outline-none"
                    placeholder="CTA"
                  />
                </td>

                {/* Stat (conditional) */}
                <td className="px-2 py-1">
                  {showStat ? (
                    <input
                      type="text"
                      value={item.copy.stat || ""}
                      onChange={(e) =>
                        onUpdate(i, {
                          ...item,
                          copy: { ...item.copy, stat: e.target.value },
                        })
                      }
                      className="w-full rounded border border-gray-200 px-1 py-0.5 text-xs focus:border-blue-400 focus:outline-none"
                      placeholder="Stat"
                    />
                  ) : (
                    <span className="text-gray-300">--</span>
                  )}
                </td>

                {/* Delete */}
                <td className="px-2 py-1">
                  <button
                    onClick={() => onDelete(i)}
                    className="rounded p-0.5 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={12} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
