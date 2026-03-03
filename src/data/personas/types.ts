import { TemplateId } from "@/data/templates";

export type Persona = {
  id: string;
  clientId: string;
  name: string;
  description: string;
  ageRange: string;
  painPoints: string[];
  hookType: "question" | "pain" | "stat" | "education";
  messageAngle: string;
  recommendedTemplates: TemplateId[];
};
