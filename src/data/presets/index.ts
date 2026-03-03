export type { CopyPreset } from "./types";
export { oftPresets } from "./oft";
export { dojPresets } from "./doj";

import { oftPresets } from "./oft";
import { dojPresets } from "./doj";
import { CopyPreset } from "./types";

const allPresets: Record<string, CopyPreset[]> = {
  oft: oftPresets,
  doj: dojPresets,
};

export function getPresetsForClient(clientId: string): CopyPreset[] {
  return allPresets[clientId] || [];
}
