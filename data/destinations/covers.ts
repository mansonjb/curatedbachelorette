import type { DestinationCover } from "./types";
import { CAP_FERRET } from "./cap-ferret";
import { CAPRI } from "./capri";
import { CARTAGENA } from "./cartagena";
import { CDMX } from "./cdmx";
import { COMPORTA } from "./comporta";
import { HVAR } from "./hvar";
import { IBIZA } from "./ibiza";
import { LAKE_COMO } from "./lake-como";
import { LISBON } from "./lisbon";
import { MALLORCA } from "./mallorca";
import { MARRAKECH } from "./marrakech";
import { MIAMI } from "./miami";
import { MYKONOS } from "./mykonos";
import { SAINT_TROPEZ } from "./saint-tropez";
import { SANTORINI } from "./santorini";
import { SEVILLA } from "./sevilla";
import { TULUM } from "./tulum";
import { TUSCANY } from "./tuscany";

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
  santorini: SANTORINI,
  capri: CAPRI,
  "saint-tropez": SAINT_TROPEZ,
  "lake-como": LAKE_COMO,
  tuscany: TUSCANY,
  hvar: HVAR,
  mallorca: MALLORCA,
  sevilla: SEVILLA,
  "cap-ferret": CAP_FERRET,
  lisbon: LISBON,
  comporta: COMPORTA,
  marrakech: MARRAKECH,
  miami: MIAMI,
  cdmx: CDMX,
  tulum: TULUM,
  cartagena: CARTAGENA,
};

export function getCover(slug: string): DestinationCover | undefined {
  return COVERS[slug];
}
