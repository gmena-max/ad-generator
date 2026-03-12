"use client";

import { useCallback, useRef, useState } from "react";
import { ImageIcon, X, Upload, Sparkles } from "lucide-react";
import { AiGeneratePanel } from "./AiGeneratePanel";
import { ClientBrand } from "@/data/clients";

type Props = {
  image: string | null;
  onChange: (image: string | null) => void;
  brand: ClientBrand;
};

export function ImageUpload({ image, onChange, brand }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [mode, setMode] = useState<"upload" | "ai">("upload");

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        onChange(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    },
    [onChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  // If image is set, show preview regardless of mode
  if (image) {
    return (
      <div className="relative">
        <img
          src={image}
          alt="Uploaded"
          className="h-32 w-full rounded-lg border border-gray-200 object-cover"
        />
        <button
          onClick={() => onChange(null)}
          className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white shadow-sm hover:bg-red-600"
        >
          <X size={14} />
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {/* Tab toggle */}
      <div className="flex rounded-lg bg-gray-100 p-0.5">
        <button
          onClick={() => setMode("upload")}
          className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
            mode === "upload"
              ? "bg-white text-gray-700 shadow-sm"
              : "text-gray-500 hover:text-gray-600"
          }`}
        >
          <Upload size={12} />
          Upload
        </button>
        <button
          onClick={() => setMode("ai")}
          className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
            mode === "ai"
              ? "bg-white text-gray-700 shadow-sm"
              : "text-gray-500 hover:text-gray-600"
          }`}
        >
          <Sparkles size={12} />
          Generate AI
        </button>
      </div>

      {mode === "upload" ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => inputRef.current?.click()}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors ${
            isDragging
              ? "border-blue-400 bg-blue-50"
              : "border-gray-300 hover:border-gray-400"
          }`}
        >
          <ImageIcon size={24} className="mb-2 text-gray-400" />
          <p className="text-xs text-gray-500">
            Arrastra una foto o haz clic
          </p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
            }}
          />
        </div>
      ) : (
        <AiGeneratePanel brand={brand} onAccept={onChange} />
      )}
    </div>
  );
}
