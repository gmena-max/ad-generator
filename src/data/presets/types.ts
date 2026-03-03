import { CopyContent } from "@/data/templates";

export type CopyPreset = {
  personaId: string;
  framework: "PAS" | "AIDA" | "direct";
  label: string;
  copies: CopyContent[];
};
