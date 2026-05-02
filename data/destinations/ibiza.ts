import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const IBIZA: DestinationCover = {
  slug: "ibiza",
  title: "Ibiza",
  highlight: "northwards",
  pullQuotePlace: "Ibiza",
  tags: ["Beach", "Slow", "Mediterranean"],
  readingTime: { minutes: 10, words: 1980, author: "M. Aldrin", photographer: "L. Bertrand", filed: "Apr 2026" },
  hero: {
    intro:
      "A four-night plan for six to ten people who'd rather rent a villa in the north of the island than queue for a club in the south. Two boat days, one tasting menu, one sunset at Es Vedrà, and the unspoken agreement that nobody is going to Pacha.",
    group: "6–10",
    nights: "4 (Wed→Sun)",
    perHead: "$1,800 – $3,200",
    bestMonths: "May · June · early Sept",
    img: IMG.ibizaHero,
  },
  intro: [
    "There are two Ibizas, and only one of them is on this page. The other one — Bora Bora at noon, a club at three, a hangover at four — runs perfectly well without our help. Yours is the one with the dog under the lunch table at Es Boldadó, the boat that turns around when the captain says the swell is wrong, the villa in San Juan where someone keeps making coffee until the sun goes down.",
    "Six people, eight, ten — the plan is the same. A house in the north. A captain for two of the four days. Four restaurants and not a fifth. Eight hours of sleep, every night, no exceptions. Brides who follow this version come home tan, rested, and slightly smug. The other version comes home with a story it won't tell its mother.",
  ],
  stay: [
    { no: 1, name: "A finca, San Juan", area: "North Ibiza", color: "var(--sage)", img: IMG.ibiza2, note: "Eight bedrooms, an outdoor kitchen, a pool that faces a hill of pines. We have rented this house three years running.", price: "$$$$" },
    { no: 2, name: "Six Senses Ibiza", area: "Cala Xarraca", color: "var(--rose)", img: "/destinations/ibiza/hotel-2.jpg", note: "If you don't want to manage a villa. North-facing, a real spa, a beach club that closes by ten.", price: "$$$$" },
    { no: 3, name: "Hacienda Na Xamena", area: "San Miguel", color: "var(--peach)", img: "/destinations/ibiza/hotel-3.jpg", note: "The classic cliffside hotel. The infinity pool is the photo, the silence at 7AM is the reason.", price: "$$$$" },
  ],
  do: [
    { hour: "Thursday 11AM", title: "Private four-hour Mediterranean boat charter, with snorkelling.", img: IMG.ibiza2, color: "var(--blush)" },
    { hour: "Friday 6PM", title: "Es Vedrà sunset by sail — book the small boat, not the party catamaran.", img: IMG.ibiza3, color: "var(--blush-deep)" },
    { hour: "Saturday 9AM", title: "A Formentera day-escape. Two hours each way, beach in between.", img: IMG.ibiza4, color: "var(--peach)" },
    { hour: "Sunday 10AM", title: "A guided hike to a hidden cove with a local. Two hours, no rush.", img: IMG.ibizaHero, color: "var(--rose)" },
  ],
  eat: [
    { no: 1, name: "La Paloma", area: "San Lorenzo", meal: "Wednesday dinner", note: "An old farmhouse, candles, a long table outside. Vegetable-forward, family-style. The Saturday-night Ibiza you didn't know existed." },
    { no: 2, name: "Es Boldadó", area: "Cala d'Hort", meal: "Friday lunch", note: "Cliffside, looking at Es Vedrà, the fish arrives whole. Reserve, even in May. Sit outside no matter the wind." },
    { no: 3, name: "Sa Capella", area: "San Antonio", meal: "Saturday dinner", note: "A 17th-century chapel turned restaurant. Theatrical without being a show. Pre-order the suckling pig if it's on." },
    { no: 4, name: "El Chiringuito", area: "Es Cavallet", meal: "Saturday lunch", note: "Beach club without the club. Long tables, paella, people-watching that's actually pleasant." },
    { no: 5, name: "Wild Beets", area: "Santa Gertrudis", meal: "Sunday breakfast", note: "Vegan, sunny, the espresso is the best on the island. The pre-flight breakfast that doesn't ruin Monday." },
  ],
  pullQuote: { lead: "Ibiza is", emphasis: "north", tail: "of where you think.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Wednesday", color: "var(--rose)", items: [["3PM", "Arrivals · the finca"], ["5PM", "Pool, slowly"], ["8:30PM", "Casual dinner · La Paloma"]] },
    { day: "Thursday", color: "var(--blush)", items: [["11AM", "Boat day, Cala Salada"], ["3PM", "Lunch on the boat"], ["6:30PM", "Return, golden hour"], ["9PM", "Quiet dinner · Aubergine"]] },
    { day: "Friday", color: "var(--blush-deep)", items: [["10AM", "Slow morning at the house"], ["1PM", "Lunch · Es Boldadó"], ["6PM", "Es Vedrà sunset"], ["9PM", "Dinner at the house, candles"]] },
    { day: "Saturday", color: "var(--peach)", items: [["10AM", "Yoga in the garden"], ["1PM", "El Chiringuito lunch"], ["5PM", "Pool, again"], ["8:45PM", "Dinner · Sa Capella"]] },
    { day: "Sunday", color: "var(--sage)", items: [["10AM", "Las Dalias market"], ["12PM", "Wild Beets breakfast"], ["3PM", "Departures"]] },
  ],
  faq: [
    { q: "But isn't Ibiza all clubs?", a: "South Ibiza is. North Ibiza is the island Italians and Germans have been coming to since the 70s, and the one that empties at dinner. We have never recommended a club on this site and we are not starting now." },
    { q: "Best week?", a: "Late May, the first week of June, or the second week of September. Avoid August at any cost. The island is twice as crowded for half the joy, and the boat charters cost double." },
    { q: "Boat — captain or rent?", a: "Captain, always. Rent a 12-meter boat with a captain for two of your four days; the captain knows the calas you want and the ones you don't. Email us for the captain we like." },
    { q: "Is a finca with eight bedrooms hard to book?", a: "Yes — we book ours in November for the following May. If you're starting in March for May, look at the Six Senses; if you're starting in March for September, you have time." },
    { q: "Do we need a car?", a: "Two cars. Roads are narrow, parking at restaurants is small, and you'll want to split the group occasionally. Pre-book at the airport." },
  ],
  related: [
    { name: "Mykonos", slug: "mykonos", note: "Ibiza in the Cyclades, half as loud.", img: IMG.mykonosHero, color: "var(--rose)" },
    { name: "Saint-Tropez", slug: "saint-tropez", note: "Ibiza with cypress trees and a harbor.", img: IMG.tropezHero, color: "var(--butter)" },
    { name: "Capri", slug: "capri", note: "Ibiza on a smaller island, fewer beaches.", img: IMG.capriHero, color: "var(--blush-deep)" },
  ],
};
