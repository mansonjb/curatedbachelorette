// Curated image library — keyed for reuse across the site.
//
// Per-destination photos live under public/destinations/<slug>/ and are
// fetched from Google Places API at content time via:
//   npm run sync-places-photos
// Each destination gets hero.jpg + photo-2.jpg + photo-3.jpg + photo-4.jpg.
//
// Generic moodboard photos (cabana, dinner, hotelLobby, etc.) come from
// images.unsplash.com with HEAD-verified IDs.

const U = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Local Places-sourced photo path for a destination. */
const D = (slug: string, n = 1) =>
  n === 1 ? `/destinations/${slug}/hero.jpg` : `/destinations/${slug}/photo-${n}.jpg`;

export const IMG = {
  // -------- Generic editorial moodboard (Unsplash, 200 verified) --------
  poolGirls: U("photo-1530541930197-ff16ac917b0e"),
  cabana: U("photo-1602002418082-a4443e081dd1", 1200),
  beachWalk: U("photo-1507525428034-b723cf961d3e"),
  dinner: U("photo-1414235077428-338989a2e8c0"),
  cocktail: U("photo-1551024709-8f23befc6f87", 900),
  cafe: U("photo-1554118811-1e0d58224f24", 1200),
  hotelRoom: U("photo-1551776235-dde6d482980b", 1200),
  hotelLobby: U("photo-1564501049412-61c2a3083791", 1200),
  hotelExterior: U("photo-1566073771259-6a8506099945", 1200),
  marina: U("photo-1516550893923-42d28e5677af"),
  street: U("photo-1503614472-8c93d56e92ce", 1200),
  portrait: U("photo-1488426862026-3ee34a7d66df", 1200),
  table: U("photo-1467003909585-2f8a72700288", 1200),
  vineyard: U("photo-1510812431401-41d2bd2722f3"),

  // -------- Per-destination heroes (Places API, local) --------
  ibizaHero: D("ibiza"),
  mykonosHero: D("mykonos"),
  santoriniHero: D("santorini"),
  capriHero: D("capri"),
  tropezHero: D("saint-tropez"),
  hvarHero: D("hvar"),
  mallorcaHero: D("mallorca"),
  lisbonHero: D("lisbon"),
  comportaHero: D("comporta"),
  marrakechHero: D("marrakech"),
  miamiHero: D("miami"),
  cdmxHero: D("cdmx"),

  // -------- Per-destination secondary shots (Places API, local) --------
  ibiza2: D("ibiza", 2), ibiza3: D("ibiza", 3), ibiza4: D("ibiza", 4),
  mykonos2: D("mykonos", 2), mykonos3: D("mykonos", 3), mykonos4: D("mykonos", 4),
  santorini2: D("santorini", 2), santorini3: D("santorini", 3), santorini4: D("santorini", 4),
  capri2: D("capri", 2), capri3: D("capri", 3), capri4: D("capri", 4),
  tropez2: D("saint-tropez", 2), tropez3: D("saint-tropez", 3), tropez4: D("saint-tropez", 4),
  hvar2: D("hvar", 2), hvar3: D("hvar", 3), hvar4: D("hvar", 4),
  mallorca2: D("mallorca", 2), mallorca3: D("mallorca", 3), mallorca4: D("mallorca", 4),
  lisbon2: D("lisbon", 2), lisbon3: D("lisbon", 3), lisbon4: D("lisbon", 4),
  comporta2: D("comporta", 2), comporta3: D("comporta", 3), comporta4: D("comporta", 4),
  marrakech2: D("marrakech", 2), marrakech3: D("marrakech", 3), marrakech4: D("marrakech", 4),
  miami2: D("miami", 2), miami3: D("miami", 3), miami4: D("miami", 4),
  cdmx2: D("cdmx", 2), cdmx3: D("cdmx", 3), cdmx4: D("cdmx", 4),

  // -------- Legacy keys still referenced in some old data files --------
  miamiPalms: D("miami"),
  charleston: U("photo-1592861956120-e524fc739696", 1200),
  ojai: U("photo-1505881502353-a1986add3762", 1200),
  marfa: U("photo-1517232115160-ff93364542dd", 1200),
  hudson: U("photo-1500964757637-c85e8a162699", 1200),
  nashville: U("photo-1545419913-775e3e82c7db", 1200),
  cdmx: D("cdmx"),
  lisbon: D("lisbon"),
} as const;

export type ImgKey = keyof typeof IMG;
