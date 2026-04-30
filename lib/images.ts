// Curated image library — keyed for reuse across the site.
// Every URL below has been HEAD-verified against images.unsplash.com.
// Replace with project-owned/CDN-hosted assets as content grows.

const U = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  // -------- Generic editorial moodboard (200 verified) --------
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

  // -------- Per-destination heroes (200 verified) --------
  ibizaHero: U("photo-1571406761758-9a3eed5338ef"),
  mykonosHero: U("photo-1601581875309-fafbf2d3ed3a"),
  santoriniHero: U("photo-1469796466635-455ede028aca"),
  capriHero: U("photo-1530538987395-032d1800fdd4"),
  tropezHero: U("photo-1502602898657-3e91760cbb34"),
  hvarHero: U("photo-1612698093158-e07ac200d44e"),
  mallorcaHero: U("photo-1571867424488-4565932edb41"),
  lisbonHero: U("photo-1555881400-74d7acaacd8b", 1200),
  comportaHero: U("photo-1602002418082-a4443e081dd1"),
  marrakechHero: U("photo-1597211833712-5e41faa202ea"),
  miamiHero: U("photo-1535498730771-e735b998cd64"),
  cdmxHero: U("photo-1518105779142-d975f22f1b0a", 1200),

  // -------- Extra contextual photos (200 verified) --------
  // Reused as boat/restaurant/cove imagery in cover sections that need them.
  mallorcaCove: U("photo-1568849676085-51415703900f"),
  mallorcaVillage: U("photo-1572883454114-1cf0031ede2a"),
  mykonosVillage: U("photo-1597211833712-5e41faa202ea"),
  mykonosCove: U("photo-1601581875039-e899893d520c"),
  capriBoat: U("photo-1499678329028-101435549a4e"),
  capriCharter: U("photo-1530062845289-9109b2c9c868"),

  // -------- Legacy keys still referenced in some old data files --------
  miamiPalms: U("photo-1535498730771-e735b998cd64"),
  charleston: U("photo-1592861956120-e524fc739696", 1200),
  ojai: U("photo-1505881502353-a1986add3762", 1200),
  marfa: U("photo-1517232115160-ff93364542dd", 1200),
  hudson: U("photo-1500964757637-c85e8a162699", 1200),
  nashville: U("photo-1545419913-775e3e82c7db", 1200),
  cdmx: U("photo-1518105779142-d975f22f1b0a", 1200),
  lisbon: U("photo-1555881400-74d7acaacd8b", 1200),
} as const;

export type ImgKey = keyof typeof IMG;
