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
    img: IMG.beachWalk,
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
    img: IMG.hotelExterior,
    headline: "September Mykonos. White, blue, half-empty.",
    price: "$$$$",
  },
  {
    no: 3,
    slug: "capri",
    name: "Capri",
    region: "Campania, Italy",
    group: "4–6",
    days: "3 nights",
    tag: "Luxury",
    color: "var(--blush-deep)",
    img: IMG.marina,
    headline: "Two boats, one lemon dessert, no day-trippers.",
    price: "$$$$",
  },
  {
    no: 4,
    slug: "saint-tropez",
    name: "Saint-Tropez",
    region: "Côte d'Azur, France",
    group: "4–8",
    days: "3 nights",
    tag: "Luxury",
    color: "var(--butter)",
    img: IMG.marina,
    headline: "October Tropez. The harbor, with no one in it.",
    price: "$$$$",
  },
  {
    no: 5,
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
    no: 6,
    slug: "marrakech",
    name: "Marrakech",
    region: "Morocco",
    group: "4–8",
    days: "4 nights",
    tag: "City",
    color: "var(--blush-deep)",
    img: IMG.hotelLobby,
    headline: "One riad, one hammam, the medina in small doses.",
    price: "$$$",
  },
  {
    no: 7,
    slug: "miami",
    name: "Miami",
    region: "Florida, USA",
    group: "6–10",
    days: "3 nights",
    tag: "Beach",
    color: "var(--blush-deep)",
    img: IMG.miamiPalms,
    headline: "Pool day. Long dinner. Lie down again.",
    price: "$$$$",
  },
  {
    no: 8,
    slug: "cdmx",
    name: "Mexico City",
    region: "Mexico",
    group: "4–10",
    days: "4 nights",
    tag: "City",
    color: "var(--rose)",
    img: IMG.cdmx,
    headline: "Roma, Condesa, & a dinner you'll cite forever.",
    price: "$$$",
  },
];

export const CATEGORIES = ["All", "Beach", "City", "Luxury", "Foodie"] as const;

export function findDestination(slug: string): DestinationCard | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}
