// Curated image library — keyed for reuse across the site.
// Replace with project-owned/CDN-hosted assets as content grows.

const U = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  // -------- Generic editorial moodboard --------
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

  // -------- IBIZA --------
  ibizaHero: U("photo-1571406761758-9a3eed5338ef"), // white village + mediterranean
  ibizaCove: U("photo-1530841344095-ff16ac917b0e"), // cala beach
  ibizaSunset: U("photo-1602866601937-50c0aa7d6d05"), // cliff + sunset
  ibizaBoat: U("photo-1547893547-1c4be5e5c0a3"), // mediterranean boat

  // -------- MYKONOS --------
  mykonosHero: U("photo-1601581875309-fafbf2d3ed3a"), // little venice
  mykonosWindmills: U("photo-1601581873582-cdce6d6d8b5d"),
  mykonosVillage: U("photo-1597211833712-5e41faa202ea"),
  mykonosCove: U("photo-1601581875039-e899893d520c"),

  // -------- SANTORINI --------
  santoriniHero: U("photo-1469796466635-455ede028aca"), // blue dome
  santoriniCaldera: U("photo-1565711056219-5c69b69cd05f"),
  santoriniSunset: U("photo-1570077188672-e3a9446d5fe1"),
  santoriniWine: U("photo-1510812431401-41d2bd2722f3"),

  // -------- CAPRI --------
  capriHero: U("photo-1530538987395-032d1800fdd4"), // faraglioni
  capriHarbor: U("photo-1605650177846-7f5fd5dac3b1"),
  capriPiazzetta: U("photo-1602401692876-d8d51b4dee82"),
  capriLemon: U("photo-1568050511127-0c8f4cb7d2a9"),

  // -------- SAINT-TROPEZ --------
  tropezHero: U("photo-1502602898657-3e91760cbb34"), // côte d'azur
  tropezHarbor: U("photo-1543395136-298a4a76d4ed"),
  tropezTable: U("photo-1530062845289-9109b2c9c868"),
  tropezVillage: U("photo-1499678329028-101435549a4e"),

  // -------- HVAR (Croatia) --------
  hvarHero: U("photo-1555990538-32d4d2eb5ad3"), // adriatic
  hvarHarbor: U("photo-1591619173628-ec1525c45c33"),
  hvarOldTown: U("photo-1612698093158-e07ac200d44e"),
  hvarBoat: U("photo-1601928928000-29db35ddf24e"),

  // -------- MALLORCA --------
  mallorcaHero: U("photo-1571867424488-4565932edb41"), // tramuntana
  mallorcaCove: U("photo-1583039516293-e74330d6c5dd"),
  mallorcaVillage: U("photo-1572883454114-1cf0031ede2a"),
  mallorcaBoat: U("photo-1568849676085-51415703900f"),

  // -------- LISBON --------
  lisbonHero: U("photo-1555881400-74d7acaacd8b", 1200),
  lisbonTram: U("photo-1592158146069-eaa9c3a3e85b"),
  lisbonTile: U("photo-1556511179-ce80e9a5a3b4"),
  lisbonRooftop: U("photo-1601986861293-7f33f5c3c0d4"),

  // -------- COMPORTA --------
  comportaHero: U("photo-1602002418082-a4443e081dd1"), // pine + dunes (reused, fits Comporta perfectly)
  comportaBeach: U("photo-1507525428034-b723cf961d3e"),
  comportaHouse: U("photo-1564501049412-61c2a3083791"),
  comportaPath: U("photo-1505881502353-a1986add3762", 1200),

  // -------- MARRAKECH --------
  marrakechHero: U("photo-1597211833712-5e41faa202ea"), // medina rooftop
  marrakechRiad: U("photo-1539020140153-e479b8c5c3c1"),
  marrakechMedina: U("photo-1531230689912-8a32c4f9f99b"),
  marrakechHammam: U("photo-1554118811-1e0d58224f24", 1200),

  // -------- MIAMI --------
  miamiHero: U("photo-1535498730771-e735b998cd64"),
  miamiPalms: U("photo-1535498730771-e735b998cd64"),
  miamiArtDeco: U("photo-1503614472-8c93d56e92ce", 1200),
  miamiBay: U("photo-1516550893923-42d28e5677af"),

  // -------- CDMX --------
  cdmxHero: U("photo-1518105779142-d975f22f1b0a", 1200),
  cdmxStreet: U("photo-1547149503-e0e60a55a8a6"),
  cdmxMarket: U("photo-1568554135968-1f3df40e1a44"),
  cdmxTeotihuacan: U("photo-1518105779142-d975f22f1b0a", 1200),

  // -------- Other US destinations (kept for legacy refs) --------
  charleston: U("photo-1592861956120-e524fc739696", 1200),
  ojai: U("photo-1505881502353-a1986add3762", 1200),
  marfa: U("photo-1517232115160-ff93364542dd", 1200),
  hudson: U("photo-1500964757637-c85e8a162699", 1200),
  nashville: U("photo-1545419913-775e3e82c7db", 1200),
  cdmx: U("photo-1518105779142-d975f22f1b0a", 1200),
  lisbon: U("photo-1555881400-74d7acaacd8b", 1200),
} as const;

export type ImgKey = keyof typeof IMG;
