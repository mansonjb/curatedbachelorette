import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const MYKONOS: DestinationCover = {
  slug: "mykonos",
  title: "Mykonos",
  highlight: "in September",
  pullQuotePlace: "Mykonos",
  tags: ["Beach", "Luxury", "Greek Islands"],
  readingTime: { minutes: 9, words: 1820, author: "M. Aldrin", photographer: "L. Bertrand", filed: "Mar 2026" },
  hero: {
    intro:
      "A four-night plan for four to eight, written for the second week of September — the moment Mykonos remembers it is a small Greek island and not a marketing campaign. Two beach days, two long dinners, one boat to Delos for the people who'll go.",
    group: "4–8",
    nights: "4 (Thu→Mon)",
    perHead: "$1,800 – $3,400",
    bestMonths: "early June · mid-Sept · early Oct",
    img: IMG.mykonosHero,
  },
  intro: [
    "Skip August. There — that's the whole post if you're in a hurry. The Mykonos that earns its airfare is the one that exists in the first three weeks of June, and from the second week of September onward: a small Greek island with seventy beaches, two windmills, and a town that smells faintly of jasmine once the dinner crowds settle. The other Mykonos is a press release.",
    "Fly into Athens. Catch the morning ferry — three hours, slow, with the right amount of wind. The plan is to sleep in Chora, leave it for the beaches by 11AM, and come back for the kind of dinner that happens to remember it's Greek. The boat to Delos is optional and worth the boat. Anything else with a hull, you can take or leave.",
  ],
  stay: [
    { no: 1, name: "Belvedere Hotel", area: "Chora", color: "var(--rose)", img: "/destinations/mykonos/hotel-1.jpg", note: "In town, walking distance to dinner, a real pool. The right answer for groups under six who want to stay in Mykonos Town.", price: "$$$$" },
    { no: 2, name: "Cavo Tagoo", area: "North coast", color: "var(--blush-deep)", img: "/destinations/mykonos/hotel-2.jpg", note: "If you want the resort experience and the photo. Ten-minute taxi to town. The infinity pool is the assignment.", price: "$$$$" },
    { no: 3, name: "A rented house, Agios Lazaros", area: "Above Psarou", color: "var(--peach)", img: IMG.mykonos4, note: "Our default for groups of six or eight. Look for a flat roof and a cypress at the gate.", price: "$$$" },
  ],
  do: [
    { hour: "Friday 11AM", title: "Private catamaran day, with lunch on board and one quiet anchorage.", img: IMG.mykonos2, color: "var(--blush)" },
    { hour: "Saturday 10:30AM", title: "A private island tour with a local guide — Chora before the cruise ships.", img: IMG.mykonos3, color: "var(--cream)" },
    { hour: "Saturday 6PM", title: "Sunset at Little Venice, with one drink.", img: IMG.mykonos4, color: "var(--rose)" },
    { hour: "Sunday 11AM", title: "A Greek home-cooking class with Angelina — three hours, four dishes.", img: IMG.mykonosHero, color: "var(--sage)" },
  ],
  eat: [
    { no: 1, name: "Kiki's Tavern", area: "Agios Sostis", meal: "Friday lunch", note: "No reservations, no electricity, grilled fish on a cliff. Arrive at 12:30, put your name down, swim while you wait." },
    { no: 2, name: "Niko's Taverna", area: "Chora", meal: "Friday dinner", note: "The classic. Mom's stuffed tomatoes, the calamari, a carafe of wine. Open since 1968 and we hope forever." },
    { no: 3, name: "Hippie Fish", area: "Agios Ioannis", meal: "Saturday lunch", note: "Beachside, sunset-facing, a little louder than we'd usually pick — but the fish is the best on the island." },
    { no: 4, name: "Spilia", area: "Agia Anna", meal: "Saturday dinner", note: "A literal cave by the sea. Theatrical, slightly silly, perfect for one of the four nights. The lobster spaghetti is non-negotiable." },
    { no: 5, name: "M-eating", area: "Chora", meal: "Sunday dinner", note: "The quiet last-night dinner. Greek-modern, candles, a small list of natural wines." },
  ],
  pullQuote: { lead: "Mykonos is", emphasis: "small", tail: "in September.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Thursday", color: "var(--rose)", items: [["3PM", "Ferry from Athens"], ["6PM", "Settle at the house"], ["9PM", "Casual dinner · Niko's"]] },
    { day: "Friday", color: "var(--blush)", items: [["12:30PM", "Kiki's lunch"], ["4PM", "Beach, slowly"], ["8PM", "Drinks · Galleraki"], ["10PM", "Late dinner · Pasaji"]] },
    { day: "Saturday", color: "var(--blush-deep)", items: [["10:30AM", "Walk Chora"], ["1:30PM", "Lunch · Hippie Fish"], ["5PM", "Pool, again"], ["6PM", "Little Venice sunset"], ["9PM", "Dinner · Spilia"]] },
    { day: "Sunday", color: "var(--sage)", items: [["11AM", "Delos boat"], ["3PM", "Late lunch on the way back"], ["8:30PM", "Dinner · M-eating"]] },
    { day: "Monday", color: "var(--peach)", items: [["8AM", "Coffee at home"], ["10AM", "Ferry to Athens"]] },
  ],
  faq: [
    { q: "August? Really not?", a: "Really not. Restaurants run double seatings, taxis disappear, the sea is loud with boats. The Mykonos people fall in love with is not the August one." },
    { q: "Helicopter from Athens vs ferry?", a: "Ferry, every time. The seats are real, the views are the trip, and you arrive on island-time, which the helicopter sabotages. Book the morning ferry, not the hydrofoil." },
    { q: "Is two windmills really the photo?", a: "Yes. They are. Walk there at 6:30PM, stay fifteen minutes, leave before the crowd. The photo is better at the angle nobody takes." },
    { q: "Beaches — south or north?", a: "Both. South for the scene (Psarou, Paraga), north for the swim (Fokos, Agios Sostis, Agios Stefanos). We do one south morning, one north afternoon." },
    { q: "How do we get around?", a: "Taxi (call ahead), private driver for two of the four days, or rent two ATVs if your group is into that — but only if the bride is the kind of bride who likes that." },
  ],
  related: [
    { name: "Ibiza", slug: "ibiza", note: "Mykonos with pines and a Spanish dinner.", img: IMG.ibizaHero, color: "var(--peach)" },
    { name: "Capri", slug: "capri", note: "Mykonos on a smaller, taller island.", img: IMG.capriHero, color: "var(--blush-deep)" },
    { name: "Saint-Tropez", slug: "saint-tropez", note: "Mykonos with a French harbor.", img: IMG.tropezHero, color: "var(--butter)" },
  ],
};
