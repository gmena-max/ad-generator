export type { Persona } from "./types";
export { oftPersonas } from "./oft";
export { mfPersonas } from "./mf";

import { oftPersonas } from "./oft";
import { mfPersonas } from "./mf";
import { Persona } from "./types";

const allPersonas: Record<string, Persona[]> = {
  oft: oftPersonas,
  mf: mfPersonas,
};

export function getPersonasForClient(clientId: string): Persona[] {
  return allPersonas[clientId] || [];
}
