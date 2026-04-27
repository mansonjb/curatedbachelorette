import type { DestinationCover } from "./types";
import { CAPRI } from "./capri";
import { CDMX } from "./cdmx";
import { CHARLESTON } from "./charleston";
import { IBIZA } from "./ibiza";
import { LISBON } from "./lisbon";
import { MARRAKECH } from "./marrakech";
import { MIAMI } from "./miami";
import { MYKONOS } from "./mykonos";
import { OJAI } from "./ojai";
import { SAINT_TROPEZ } from "./saint-tropez";

/**
 * Registry of destinations with a published long-form cover.
 *
 * Adding a destination = drop a `<slug>.ts` next to this file and add it
 * here. `generateStaticParams` and `sitemap.ts` read from this map, so the
 * route + sitemap entry appear automatically.
 */
export const COVERS: Record<string, DestinationCover> = {
  miami: MIAMI,
  charleston: CHARLESTON,
  cdmx: CDMX,
  lisbon: LISBON,
  ojai: OJAI,
  ibiza: IBIZA,
  mykonos: MYKONOS,
  capri: CAPRI,
  marrakech: MARRAKECH,
  "saint-tropez": SAINT_TROPEZ,
};

export function getCover(slug: string): DestinationCover | undefined {
  return COVERS[slug];
}
