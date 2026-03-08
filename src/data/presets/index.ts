export type { CopyPreset } from "./types";
export { oftPresets } from "./oft";
export { dojPresets } from "./doj";
export { mfPresets } from "./mf";

import { oftPresets } from "./oft";
import { dojPresets } from "./doj";
import { mfPresets } from "./mf";
import { CopyPreset } from "./types";

const allPresets: Record<string, CopyPreset[]> = {
  oft: oftPresets,
  doj: dojPresets,
  mf: mfPresets,
};

export function getPresetsForClient(clientId: string): CopyPreset[] {
  return allPresets[clientId] || [];
}
