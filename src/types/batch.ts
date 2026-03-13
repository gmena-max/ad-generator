import { CopyContent, TemplateId } from "@/data/templates";
import type { MfVariant } from "@/components/templates/mf/types";

export type BatchItem = {
  copy: CopyContent;
  templateId?: TemplateId;   // defaults to current selection
  variant?: MfVariant;        // defaults to current selection
  image?: string;             // defaults to current image
};
