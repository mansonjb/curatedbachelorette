import { IMG } from "@/lib/images";

export type DestinationCard = {
  no: number;
  slug: string;
  name: string;
  region: string;
  group: string;
  days: string;
  tag: string;
  /** CSS color value applied to color-block cards on the home grid */
  color: string;
  img: string;
  headline: string;
  price: string;
};

/**
 * Europe-led atlas. Order = display order on the home grid + atlas index.
 * Every entry below has a published long-form cover (see data/destinations/*.ts).
 */
export const DESTINATIONS: DestinationCard[] = [
  {
    no: 1,
    slug: "ibiza",
    name: "Ibiza",
    region: "Balearic Islands, Spain",
    group: "6–10",
    days: "4 nights",
    tag: "Beach",
    color: "var(--peach)",
    img: IMG.ibizaHero,
    headline: "The other Ibiza — north, slow, off the boat.",
    price: "$$$$",
  },
  {
    no: 2,
    slug: "mykonos",
    name: "Mykonos",
    region: "Cyclades, Greece",
    group: "4–8",
    days: "4 nights",
    tag: "Beach",
    color: "var(--rose)",
    img: IMG.mykonosHero,
    headline: "September Mykonos. White, blue, half-empty.",
    price: "$$$$",
  },
  {
    no: 3,
    slug: "santorini",
    name: "Santorini",
    region: "Cyclades, Greece",
    group: "4–6",
    days: "4 nights",
    tag: "Luxury",
    color: "var(--sage)",
    img: IMG.santoriniHero,
    headline: "Off-season Santorini, off the cliff edge.",
    price: "$$$$",
  },
  {
    no: 4,
    slug: "capri",
    name: "Capri",
    region: "Campania, Italy",
    group: "4–6",
    days: "3 nights",
    tag: "Luxury",
    color: "var(--blush-deep)",
    img: IMG.capriHero,
    headline: "Two boats, one lemon dessert, no day-trippers.",
    price: "$$$$",
  },
  {
    no: 5,
    slug: "saint-tropez",
    name: "Saint-Tropez",
    region: "Côte d'Azur, France",
    group: "4–8",
    days: "3 nights",
    tag: "Luxury",
    color: "var(--butter)",
    img: IMG.tropezHero,
    headline: "October Tropez. The harbor, with no one in it.",
    price: "$$$$",
  },
  {
    no: 6,
    slug: "hvar",
    name: "Hvar",
    region: "Dalmatia, Croatia",
    group: "6–10",
    days: "4 nights",
    tag: "Beach",
    color: "var(--sage)",
    img: IMG.hvarHero,
    headline: "Adriatic pine and lavender, off-yacht.",
    price: "$$$",
  },
  {
    no: 7,
    slug: "mallorca",
    name: "Mallorca",
    region: "Balearic Islands, Spain",
    group: "6–10",
    days: "4 nights",
    tag: "Foodie",
    color: "var(--peach)",
    img: IMG.mallorcaHero,
    headline: "The Tramuntana, two boat days, off-Magaluf.",
    price: "$$$$",
  },
  {
    no: 8,
    slug: "lisbon",
    name: "Lisbon",
    region: "Portugal",
    group: "4–8",
    days: "4 nights",
    tag: "City",
    color: "var(--sage)",
    img: IMG.lisbon,
    headline: "Tile, tinto, terraces. Repeat.",
    price: "$$$",
  },
  {
    no: 9,
    slug: "comporta",
    name: "Comporta",
    region: "Setúbal, Portugal",
    group: "4–8",
    days: "4 nights",
    tag: "Beach",
    color: "var(--peach)",
    img: IMG.comportaHero,
    headline: "Atlantic pine forest, twelve kilometres of empty beach.",
    price: "$$$",
  },
  {
    no: 10,
    slug: "marrakech",
    name: "Marrakech",
    region: "Morocco",
    group: "4–8",
    days: "4 nights",
    tag: "City",
    color: "var(--blush-deep)",
    img: IMG.marrakechHero,
    headline: "One riad, one hammam, the medina in small doses.",
    price: "$$$",
  },
  {
    no: 11,
    slug: "miami",
    name: "Miami",
    region: "Florida, USA",
    group: "6–10",
    days: "3 nights",
    tag: "Beach",
    color: "var(--blush-deep)",
    img: IMG.miamiHero,
    headline: "Pool day. Long dinner. Lie down again.",
    price: "$$$$",
  },
  {
    no: 12,
    slug: "cdmx",
    name: "Mexico City",
    region: "Mexico",
    group: "4–10",
    days: "4 nights",
    tag: "City",
    color: "var(--rose)",
    img: IMG.cdmxHero,
    headline: "Roma, Condesa, & a dinner you'll cite forever.",
    price: "$$$",
  },
  {
    no: 13,
    slug: "lake-como",
    name: "Lake Como",
    region: "Lombardy, Italy",
    group: "4–8",
    days: "4 nights",
    tag: "Luxury",
    color: "var(--sage)",
    img: IMG.lakeComoHero,
    headline: "Bellagio mid-lake, by boat, never by car.",
    price: "$$$$",
  },
  {
    no: 14,
    slug: "tulum",
    name: "Tulum",
    region: "Riviera Maya, Mexico",
    group: "6–8",
    days: "4 nights",
    tag: "Beach",
    color: "var(--sage)",
    img: IMG.tulumHero,
    headline: "Off the beach road. Cenote at sunrise. One quiet dinner.",
    price: "$$$$",
  },
  {
    no: 15,
    slug: "cartagena",
    name: "Cartagena",
    region: "Caribbean Coast, Colombia",
    group: "6–10",
    days: "4 nights",
    tag: "City",
    color: "var(--rose)",
    img: IMG.cartagenaHero,
    headline: "Walled-city colonial, two lunches in courtyards.",
    price: "$$$",
  },
];

export const CATEGORIES = ["All", "Beach", "City", "Luxury", "Foodie", "Wellness"] as const;

export function findDestination(slug: string): DestinationCard | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}
