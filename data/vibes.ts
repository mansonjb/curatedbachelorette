import { COVERS } from "@/data/destinations/covers";
import type { DestinationCover } from "@/data/destinations/types";
import { IMG } from "@/lib/images";

export type Vibe = {
  slug: string;
  name: string;
  /** Tag string used in `cover.tags` to associate destinations to this vibe. */
  tag: string;
  color: string;
  note: string;
  /** One-paragraph editorial description shown on the vibe page. */
  description: string;
  img: string;
};

export const VIBES: Vibe[] = [
  {
    slug: "beach",
    name: "Beach",
    tag: "Beach",
    color: "var(--peach)",
    note: "Sun, salt, a cabana, a long lunch.",
    description:
      "The bachelorettes that revolve around the swim. Two boat days, one cabana booking, dinners that end with sand on the floor of the cab home. We never recommend a beach destination in August.",
    img: IMG.miamiPalms,
  },
  {
    slug: "luxury",
    name: "Luxury",
    tag: "Luxury",
    color: "var(--blush-deep)",
    note: "The hotel is the destination.",
    description:
      "When the bride doesn't want to think about logistics. Hotels with their own restaurants, spas worth the airfare, the kind of weekend where the welcome drink lands before you ask for it.",
    img: IMG.hotelRoom,
  },
  {
    slug: "city",
    name: "City",
    tag: "City",
    color: "#F4C4D8",
    note: "Walking-distance everything.",
    description:
      "Capital-city bachelorettes for groups that prefer a museum to a beach. Two great dinners, one walk, one quietly extraordinary day-trip you'll cite as the best part of the trip.",
    img: IMG.cdmx,
  },
  {
    slug: "foodie",
    name: "Foodie",
    tag: "Foodie",
    color: "var(--rose)",
    note: "Reservation-first weekends.",
    description:
      "Built backwards from the dinner reservations. We book the table first; the hotel and the half-day plans negotiate around it. Three days, six restaurants, one of which the bride will dream about for a year.",
    img: IMG.dinner,
  },
  {
    slug: "wellness",
    name: "Wellness",
    tag: "Wellness",
    color: "var(--sage)",
    note: "Hammam. Hike. Then a bath.",
    description:
      "For groups that have all texted, separately, that they'd rather not party. Hot yoga, a real spa morning, a hike that ends at lunch. Nobody is on a phone after 9PM.",
    img: IMG.cafe,
  },
  {
    slug: "slow",
    name: "Slow",
    tag: "Slow",
    color: "var(--cream)",
    note: "House rentals. Long lunches.",
    description:
      "The bachelorettes that look like nothing. A rented house with a porch, a pool, an oven nobody will use. Three lunches that run two hours each. The bride returns tan and rested, with one strong opinion about a small village restaurant.",
    img: IMG.beachWalk,
  },
];

/**
 * Build the destination → vibes lookup once per render.
 * `cover.tags` is the source of truth — adding a new destination automatically
 * lights it up under every matching vibe page (no hand-maintained list).
 */
export function destinationsForVibe(slug: string): DestinationCover[] {
  const vibe = VIBES.find((v) => v.slug === slug);
  if (!vibe) return [];
  return Object.values(COVERS).filter((c) => c.tags.includes(vibe.tag));
}

export function vibeBySlug(slug: string): Vibe | undefined {
  return VIBES.find((v) => v.slug === slug);
}
