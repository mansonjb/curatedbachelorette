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

export const DESTINATIONS: DestinationCard[] = [
  {
    no: 1,
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
    no: 2,
    slug: "charleston",
    name: "Charleston",
    region: "South Carolina",
    group: "4–8",
    days: "3 nights",
    tag: "Foodie",
    color: "var(--blush)",
    img: IMG.charleston,
    headline: "Oysters, pastel houses, no rush.",
    price: "$$$",
  },
  {
    no: 3,
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
  {
    no: 4,
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
    no: 5,
    slug: "nashville",
    name: "Nashville",
    region: "Tennessee",
    group: "8–12",
    days: "3 nights",
    tag: "Low-key",
    color: "var(--cream)",
    img: IMG.nashville,
    headline: "One honky-tonk. One quiet Sunday.",
    price: "$$",
  },
  {
    no: 6,
    slug: "ojai",
    name: "Ojai",
    region: "California",
    group: "4–8",
    days: "3 nights",
    tag: "Wellness",
    color: "var(--peach)",
    img: IMG.ojai,
    headline: "Pink light. One bookstore. One pool.",
    price: "$$$",
  },
  {
    no: 7,
    slug: "marfa",
    name: "Marfa",
    region: "Texas",
    group: "4–8",
    days: "3 nights",
    tag: "Outdoors",
    color: "var(--blush-deep)",
    img: IMG.marfa,
    headline: "Quiet, strange, perfectly photographed.",
    price: "$$",
  },
  {
    no: 8,
    slug: "hudson",
    name: "Hudson",
    region: "New York",
    group: "4–6",
    days: "2 nights",
    tag: "Wine country",
    color: "var(--blush)",
    img: IMG.hudson,
    headline: "Friday-train, antiques, dinner in a barn.",
    price: "$$",
  },
];

export const CATEGORIES = [
  "All",
  "Beach",
  "City",
  "Wellness",
  "Luxury",
  "Low-key",
  "Foodie",
  "Outdoors",
  "Wine country",
] as const;

export function findDestination(slug: string): DestinationCard | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}
