import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const HVAR: DestinationCover = {
  slug: "hvar",
  title: "Hvar",
  highlight: "off-yacht",
  pullQuotePlace: "Hvar",
  tags: ["Beach", "Slow", "Mediterranean"],
  readingTime: { minutes: 9, words: 1860, author: "M. Aldrin", photographer: "L. Bertrand", filed: "May 2026" },
  hero: {
    intro:
      "A four-night Adriatic plan for six to ten that flies into Split, ferries to Hvar, and never sees a club. Two boat days into the Pakleni archipelago, one lavender-field afternoon, two long lunches at konobas you'd return to next year.",
    group: "6–10",
    nights: "4 (Thu→Mon)",
    perHead: "$1,200 – $2,400",
    bestMonths: "late May · June · early Sept",
    img: IMG.hvarHero,
  },
  intro: [
    "Hvar has a reputation we recommend ignoring. The yacht-club Hvar of mid-July is a real thing; it is also a small thing, confined to four streets near the marina, and easy to walk past. The island that surrounds those four streets is one of the quieter places in the Mediterranean — pine forest, lavender, a handful of Roman fishing villages on the south coast that don't show up on a chartered yacht's itinerary.",
    "The plan is built around two boat days into the Pakleni Islands (twenty minutes from the harbour, swimming-clear water, no infrastructure), one inland afternoon to Stari Grad and the lavender fields, and dinners at konobas — Croatian taverns where the catch of the day is whatever was on the boat that morning. We send groups of six to ten in mid-June or the first week of September; never in August.",
  ],
  stay: [
    { no: 1, name: "Maslina Resort", area: "Stari Grad", color: "var(--sage)", img: IMG.hotelRoom, note: "Forty rooms, an olive grove, a real spa. Twenty minutes from Hvar Town by car — far enough for the silence, close enough for dinner.", price: "$$$$" },
    { no: 2, name: "Palace Elisabeth", area: "Hvar Town", color: "var(--rose)", img: IMG.hotelLobby, note: "On the main square, a 13th-century palace with thirty-five rooms. The only Hvar Town hotel we'd choose for a group of six.", price: "$$$$" },
    { no: 3, name: "A rented stone villa, Vrboska", area: "Vrboska", color: "var(--peach)", img: IMG.hotelExterior, note: "Our default for groups of eight or ten. Fishing-village quiet, a private dock, ten minutes by car from town.", price: "$$$" },
  ],
  do: [
    { hour: "Friday 10AM", title: "A private speedboat day across the Pakleni Islands, with two swim stops.", img: IMG.marina, color: "var(--blush)" },
    { hour: "Saturday 11AM", title: "A small-group day-trip to the Blue and Green Caves on Vis.", img: IMG.beachWalk, color: "var(--rose)" },
    { hour: "Saturday 5PM", title: "A wine-and-olive-oil tasting at a small Stari Grad producer.", img: IMG.cocktail, color: "var(--peach)" },
    { hour: "Sunday 10AM", title: "A guided lavender-field walk through the Plain, slowly. Two hours.", img: IMG.street, color: "var(--cream)" },
  ],
  eat: [
    { no: 1, name: "Konoba Menego", area: "Hvar Town", meal: "Thursday dinner", note: "Stone-walled, candle-lit, the Dalmatian classics done patiently. Octopus under a peka, lamb on a slow flame." },
    { no: 2, name: "Gariful", area: "Hvar Riva", meal: "Friday lunch", note: "Yes the celebrity restaurant. Yes the lobster spaghetti. Yes once per trip, on a sunny afternoon, sitting on the harbour." },
    { no: 3, name: "Konoba Humac", area: "Humac", meal: "Friday dinner", note: "A walk-only-by-day stone village in the hills. The peka takes two hours; pre-order. The drive home is the dessert." },
    { no: 4, name: "San Marco", area: "Stari Grad", meal: "Saturday dinner", note: "On the old harbour, away from Hvar Town's noise. White wine, fish on charcoal, the sound of nothing." },
    { no: 5, name: "Fig", area: "Hvar Town", meal: "Sunday breakfast", note: "Eggs, sourdough, espresso, sun. The brunch bar that runs the morning back into Monday." },
  ],
  pullQuote: { lead: "The trick to", emphasis: "Hvar", tail: "is leaving Hvar Town.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Thursday", color: "var(--rose)", items: [["3PM", "Ferry from Split"], ["5PM", "Settle at the villa"], ["8:30PM", "Dinner · Konoba Menego"]] },
    { day: "Friday", color: "var(--blush)", items: [["10AM", "Pakleni speedboat day"], ["1:30PM", "Lunch · Gariful"], ["5PM", "Pool, slow"], ["9PM", "Dinner · Konoba Humac"]] },
    { day: "Saturday", color: "var(--peach)", items: [["11AM", "Vis Blue Cave day-trip"], ["5PM", "Stari Grad wine tasting"], ["8:30PM", "Dinner · San Marco"]] },
    { day: "Sunday", color: "var(--sage)", items: [["10AM", "Lavender Plain walk"], ["1PM", "Lunch · Konoba Bilo Idro"], ["6PM", "Sunset on the dock"], ["9PM", "Quiet dinner at the villa"]] },
    { day: "Monday", color: "var(--cream)", items: [["8AM", "Fig breakfast"], ["10AM", "Ferry to Split"]] },
  ],
  faq: [
    { q: "Fly into Split or Dubrovnik?", a: "Split. The Hvar ferry is fifty-five minutes from Split harbour and three hours from Dubrovnik. Pre-book the catamaran (foot-passenger, fast) rather than the car ferry; you do not need a car on Hvar if you stay near town." },
    { q: "Yacht charter — really worth it?", a: "Skip the full-week charter for a four-night trip. Book a private speedboat for two of the four days; it gets you to the same Pakleni coves, you sleep in a hotel bed, and the budget is half." },
    { q: "Hvar in August?", a: "We don't recommend it. The town is twice as crowded for half the joy, the konoba reservations vanish in July, and the heat is ungenerous. June and September are the answer." },
    { q: "Beach or boat?", a: "Boat. Hvar's beaches are pebble-and-stone, beautiful from the sea, awkward to lie on. A speedboat to a Pakleni cove is the picture, every time." },
    { q: "Croatia for a bachelorette of ten?", a: "Yes — this is the rare destination on the site that still works at ten. The villa stock in Vrboska is generous, the dinner reservations forgive a group, and the boat days scale to two boats with one captain on each." },
  ],
  related: [
    { name: "Mykonos", slug: "mykonos", note: "Hvar Greek, white-washed, half as forested.", img: IMG.hotelExterior, color: "var(--rose)" },
    { name: "Mallorca", slug: "mallorca", note: "Hvar in Spanish, with mountains.", img: IMG.beachWalk, color: "var(--peach)" },
    { name: "Saint-Tropez", slug: "saint-tropez", note: "Hvar's French cousin, in October.", img: IMG.marina, color: "var(--butter)" },
  ],
};
