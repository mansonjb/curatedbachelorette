import { IMG } from "@/lib/images";

export type Vibe = {
  slug: string;
  name: string;
  count: number;
  color: string;
  note: string;
  img: string;
};

export const VIBES: Vibe[] = [
  { slug: "wellness", name: "Wellness", count: 14, color: "var(--sage)", note: "Hot yoga. Then breakfast.", img: IMG.cafe },
  { slug: "low-key", name: "Low-key", count: 22, color: "var(--cream)", note: "House rentals. Long lunches.", img: IMG.beachWalk },
  { slug: "luxury", name: "Luxury", count: 11, color: "var(--blush-deep)", note: "The hotel is the destination.", img: IMG.hotelRoom },
  { slug: "beach", name: "Beach", count: 18, color: "var(--peach)", note: "Sun, salt, soft sand.", img: IMG.miamiPalms },
  { slug: "foodie", name: "Foodie", count: 26, color: "var(--rose)", note: "Reservation-first weekends.", img: IMG.dinner },
  { slug: "outdoors", name: "Outdoors", count: 9, color: "var(--blush)", note: "Hike. Swim. Then a bath.", img: IMG.marfa },
  { slug: "city", name: "City", count: 17, color: "#F4C4D8", note: "Walking-distance everything.", img: IMG.cdmx },
  { slug: "wine-country", name: "Wine country", count: 12, color: "#E0D2B8", note: "Vineyards. Slow Sundays.", img: IMG.hudson },
];
