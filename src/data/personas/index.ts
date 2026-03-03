export type { Persona } from "./types";
export { oftPersonas } from "./oft";

import { oftPersonas } from "./oft";
import { Persona } from "./types";

const allPersonas: Record<string, Persona[]> = {
  oft: oftPersonas,
};

export function getPersonasForClient(clientId: string): Persona[] {
  return allPersonas[clientId] || [];
}
