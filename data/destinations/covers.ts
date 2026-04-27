import type { DestinationCover } from "./types";
import { CHARLESTON } from "./charleston";
import { CDMX } from "./cdmx";
import { LISBON } from "./lisbon";
import { MIAMI } from "./miami";
import { OJAI } from "./ojai";

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
};

export function getCover(slug: string): DestinationCover | undefined {
  return COVERS[slug];
}
