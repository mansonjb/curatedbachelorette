import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const TULUM: DestinationCover = {
  slug: "tulum",
  title: "Tulum",
  highlight: "off the beach road",
  pullQuotePlace: "Tulum",
  tags: ["Beach", "Slow", "Wellness"],
  readingTime: { minutes: 9, words: 1820, author: "M. Aldrin", photographer: "L. Bertrand", filed: "Mar 2026" },
  hero: {
    intro:
      "A four-night plan for six to eight, written for the Tulum nobody Instagrams — the jungle side of the road, the cenote at 8AM before the buses, the cabaña that still has a candle for a lamp. The photo at the Mayan ruins is not the trip.",
    group: "6–8",
    nights: "4 (Thu→Mon)",
    perHead: "$1,400 – $2,800",
    bestMonths: "late Nov · Dec · Mar · early May",
    img: IMG.tulumHero,
  },
  intro: [
    "We've been planning Tulum trips for six years and the pattern is always the same: the group who lands expecting a Bali-on-the-Yucatán beach club ends up changing plans by Saturday morning. The beach road is overbuilt, the dinner reservations are an hour late, the same DJ plays at four hotels in a row. The good news is the rest of Tulum — the part nobody flies in for — is still extraordinary.",
    "This plan keeps you off the beach road two of the four days. We base out of a small cabaña hotel north of town, drive thirty minutes to a cenote at sunrise, eat one beach-club lunch on the south end where the music is quieter, and spend Sunday at a private chef dinner inside the jungle. The bride leaves with a tan, two recipes, and one good Mayan ruin photo.",
  ],
  stay: [
    { no: 1, name: "Habitas Tulum", area: "Jungle side, north", color: "var(--sage)", img: "/destinations/tulum/hotel-1.jpg", note: "Tents on platforms, candles for lamps, the breakfast that justifies the rest. Skip the beach-side hotels; they're loud.", price: "$$$$" },
    { no: 2, name: "Be Tulum", area: "Beach road, south end", color: "var(--blush-deep)", img: "/destinations/tulum/hotel-2.jpg", note: "If the group wants beach-club proximity. South end is calmer. The pool is the photo, the suites are the reason.", price: "$$$$" },
    { no: 3, name: "A rented casa, Aldea Zama", area: "Aldea Zama", color: "var(--peach)", img: IMG.tulum4, note: "Our default for groups of eight. Twenty minutes inland, gated, a real kitchen, ten minutes to the beach by car.", price: "$$$" },
  ],
  do: [
    { hour: "Friday 7AM", title: "Cenote at sunrise — Gran Cenote, before the tour buses arrive.", img: IMG.tulum2, color: "var(--sage)" },
    { hour: "Saturday 11AM", title: "Mayan ruins of Tulum, the early entry, ninety minutes.", img: IMG.tulum3, color: "var(--peach)" },
    { hour: "Saturday 4PM", title: "Beach-club lunch at the quieter south end. Linen, not glitter.", img: IMG.tulum4, color: "var(--blush)" },
    { hour: "Sunday 9AM", title: "Yoga in a private palapa, then breakfast at the hotel.", img: IMG.tulumHero, color: "var(--rose)" },
  ],
  eat: [
    { no: 1, name: "Hartwood", area: "Beach road, north", meal: "Friday dinner", note: "The classic Tulum room. Live fire, no electricity after sundown, walk-ups only at 5:30PM. Show up at 5:15." },
    { no: 2, name: "Arca", area: "Beach road", meal: "Saturday lunch", note: "Lighter, shorter list, vegetable-forward. The cabana under the parota tree is the table to ask for." },
    { no: 3, name: "Casa Jaguar", area: "Beach road, north", meal: "Saturday dinner", note: "Live music two nights a week, a kitchen that takes itself less seriously than Hartwood. The mezcal list is the long one." },
    { no: 4, name: "Posada Margherita", area: "Beach road, north", meal: "Sunday lunch", note: "Italian, beachside, the pasta is genuinely Italian-grandmother-good. The Sunday lunch that fixes Saturday night." },
    { no: 5, name: "Burrito Amor", area: "Tulum town", meal: "Monday breakfast", note: "Pre-flight breakfast in town. The agave-cured bacon burrito is the only acceptable answer." },
  ],
  pullQuote: { lead: "The good Tulum is", emphasis: "off", tail: "the beach road.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Thursday", color: "var(--rose)", items: [["3PM", "Arrivals from Cancún (90-min drive)"], ["6PM", "Pool, slowly"], ["8:30PM", "Casual dinner · Casa Banana"]] },
    { day: "Friday", color: "var(--sage)", items: [["7AM", "Gran Cenote (sunrise entry)"], ["11AM", "Late breakfast at the hotel"], ["3PM", "Beach, low key"], ["6PM", "Cocktails at Habitas"], ["8PM", "Hartwood, walk-up at 5:30PM"]] },
    { day: "Saturday", color: "var(--blush)", items: [["10AM", "Mayan ruins, early entry"], ["1PM", "Lunch at Arca"], ["4PM", "Beach-club afternoon"], ["8:45PM", "Casa Jaguar dinner"]] },
    { day: "Sunday", color: "var(--blush-deep)", items: [["9AM", "Palapa yoga"], ["12PM", "Posada Margherita lunch"], ["6PM", "Sunset on the rooftop"], ["8:30PM", "Private chef dinner at the casa"]] },
    { day: "Monday", color: "var(--peach)", items: [["8AM", "Burrito Amor breakfast"], ["10AM", "Drive to Cancún"]] },
  ],
  faq: [
    { q: "Beach road or jungle side?", a: "Jungle side, full stop. The beach road has the photographs and most of the noise. The jungle hotels north of town are quieter, the breakfasts are better, and the ten-minute taxi to the beach is the right amount of friction to keep the trip from becoming all-beach-all-the-time." },
    { q: "Tulum vs. Cancún airport?", a: "Tulum's airport opened in 2023 — flights are limited but worth it if you can find them. Otherwise Cancún, ninety-minute private transfer, $200 for the group. Don't take the colectivo." },
    { q: "Is the bride going to want beach clubs?", a: "Maybe. We allow exactly one — the south-end clubs are calmer than the north-road ones. Vagalume is the answer if she insists. But beach clubs eat full afternoons and the trip works better with a cenote morning instead." },
    { q: "Do we need a car?", a: "One car for four days, plus the airport transfer. Renting a second car for the group is overkill — the hotel arranges drivers and most of the destinations are on the same beach road." },
    { q: "Cenotes — which one?", a: "Gran Cenote at 8AM, Cenote Calavera as a backup. Skip the ones with floats and ziplines; you came for the swim, not the tour." },
  ],
  related: [
    { name: "Mexico City", slug: "cdmx", note: "Tulum denser, with museums.", img: IMG.cdmxHero, color: "var(--rose)" },
    { name: "Cartagena", slug: "cartagena", note: "Tulum with a colonial old town.", img: IMG.cartagenaHero, color: "var(--peach)" },
    { name: "Miami", slug: "miami", note: "Tulum with a runway, a pool, and a steakhouse.", img: IMG.miamiHero, color: "var(--blush)" },
  ],
};
