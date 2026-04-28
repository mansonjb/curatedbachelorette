import type { DestinationCover } from "./types";
import { CAPRI } from "./capri";
import { CDMX } from "./cdmx";
import { IBIZA } from "./ibiza";
import { LISBON } from "./lisbon";
import { MARRAKECH } from "./marrakech";
import { MIAMI } from "./miami";
import { MYKONOS } from "./mykonos";
import { SAINT_TROPEZ } from "./saint-tropez";

/**
 * Registry of destinations with a published long-form cover.
 *
 * Adding a destination = drop a `<slug>.ts` next to this file and add it
 * here. `generateStaticParams` and `sitemap.ts` read from this map, so the
 * route + sitemap entry appear automatically.
 *
 * Order = display order on the home grid + atlas. Europe leads.
 */
export const COVERS: Record<string, DestinationCover> = {
  ibiza: IBIZA,
  mykonos: MYKONOS,
  capri: CAPRI,
  "saint-tropez": SAINT_TROPEZ,
  lisbon: LISBON,
  marrakech: MARRAKECH,
  miami: MIAMI,
  cdmx: CDMX,
};

export function getCover(slug: string): DestinationCover | undefined {
  return COVERS[slug];
}
