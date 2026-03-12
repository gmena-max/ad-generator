export type AiPrompt = {
  id: string;
  clientId: string;
  templateId: string;
  variant?: "a" | "b" | "c";
  label: string;
  prompt: string;
  aspectRatio: "4:5" | "1:1" | "16:9";
};
