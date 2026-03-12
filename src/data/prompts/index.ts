import { AiPrompt } from "./types";
import { mfPrompts } from "./mf";
import { blogPrompts } from "./blog";

const allPrompts: AiPrompt[] = [...mfPrompts, ...blogPrompts];

export function getPromptsForClient(clientId: string): AiPrompt[] {
  return allPrompts.filter((p) => p.clientId === clientId);
}

export function getBlogPrompts(): AiPrompt[] {
  return blogPrompts;
}

export function getPromptById(id: string): AiPrompt | undefined {
  return allPrompts.find((p) => p.id === id);
}

export type { AiPrompt } from "./types";
