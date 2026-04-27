import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const OJAI: DestinationCover = {
  slug: "ojai",
  title: "Ojai",
  highlight: "quietly",
  pullQuotePlace: "Ojai",
  tags: ["Wellness", "Low-key", "California"],
  readingTime: { minutes: 7, words: 1480, author: "M. Aldrin", photographer: "L. Bertrand", filed: "Mar 2026" },
  hero: {
    intro:
      "Three nights for four to eight, written for groups who'd rather take a single yoga class together than coordinate seven dinners. The pink moment, one bookstore, one pool, and the unspoken agreement that nobody is being on a phone after 9PM.",
    group: "4–8",
    nights: "3 (Fri→Mon)",
    perHead: "$1,100 – $2,200",
    bestMonths: "Apr · May · Sept · Oct",
    img: IMG.ojai,
  },
  intro: [
    "Ojai is the weekend you book when someone in the group has explicitly said 'no clubs, please' and someone else has muttered 'I just want to read.' It is the quietest weekend on this site, and it is also the easiest sell to a difficult group, which is why it shows up on more of our shortlists than its size would suggest.",
    "The plan is built around two pools — the one at the inn and a private one, optional — and two long lunches. Rent two cars at LAX, drive ninety minutes north, do not look at your phone again until Sunday.",
  ],
  stay: [
    { no: 1, name: "Ojai Valley Inn, the cottages", area: "Ojai Valley", color: "var(--peach)", img: IMG.hotelExterior, note: "The whole-trip option. Spa, citrus, two pools, the kind of place where the bride forgets she's the bride.", price: "$$$$" },
    { no: 2, name: "Caravan Outpost", area: "East End", color: "var(--sage)", img: IMG.hotelLobby, note: "Eleven Airstreams in a circle. Surprisingly chic. Bring a sweater for the firepit.", price: "$$" },
    { no: 3, name: "A rented house, Meiners Oaks", area: "Meiners Oaks", color: "var(--rose)", img: IMG.hotelRoom, note: "What we book for groups of six or eight. Citrus trees in the yard are non-negotiable.", price: "$$$" },
  ],
  do: [
    { hour: "Friday 6PM", title: "The pink moment, from anywhere with a view.", img: IMG.beachWalk, color: "var(--blush)" },
    { hour: "Saturday 10AM", title: "Yoga at the Ojai Yoga Center, then coffee.", img: IMG.cafe, color: "var(--cream)" },
    { hour: "Saturday 4PM", title: "Bart's Books. One hour. Buy one thing each.", img: IMG.portrait, color: "var(--peach)" },
    { hour: "Sunday 11AM", title: "Hike the Pratt Trail, slowly. Optional.", img: IMG.marfa, color: "var(--sage)" },
  ],
  eat: [
    { no: 1, name: "Olivella", area: "Ojai Valley Inn", meal: "Friday dinner", note: "Italian, candles, the kind of dinner the trip's quiet group will request three times before Sunday." },
    { no: 2, name: "The Nest at Topa Mountain Winery", area: "Upper Ojai", meal: "Saturday lunch", note: "Patio, citrus, three tasting flights split four ways. The cheese plate is the entrée." },
    { no: 3, name: "Rory's Place", area: "Downtown", meal: "Saturday dinner", note: "Wood-fire, natural wine, the kind of room you'd find in Berkeley if Berkeley had moved to a smaller town." },
    { no: 4, name: "The Dutchess", area: "Ojai Avenue", meal: "Sunday breakfast", note: "Sourdough toast, a soft egg, sun. The bakery counter for the road home." },
    { no: 5, name: "Knead Baking Company", area: "Meiners Oaks", meal: "Daily, anytime", note: "The cinnamon roll. The croissant. Pull off the road on the way to the trailhead." },
  ],
  pullQuote: { lead: "Ojai is", emphasis: "louder", tail: "than you think.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Friday", color: "var(--rose)", items: [["4PM", "Arrivals from LAX"], ["6PM", "Pink moment, from the porch"], ["8PM", "Dinner · Olivella"]] },
    { day: "Saturday", color: "var(--peach)", items: [["10AM", "Yoga + Knead breakfast"], ["1PM", "Topa Mountain lunch"], ["4PM", "Bart's Books"], ["8PM", "Dinner · Rory's Place"]] },
    { day: "Sunday", color: "var(--sage)", items: [["11AM", "Pratt Trail hike (optional)"], ["1PM", "Pool · the inn"], ["6PM", "Drinks on the porch"], ["8:30PM", "Quiet dinner · Boccali's"]] },
    { day: "Monday", color: "var(--cream)", items: [["9AM", "The Dutchess breakfast"], ["11AM", "Drive back to LAX"]] },
  ],
  faq: [
    { q: "Fly into LAX or Burbank?", a: "Burbank is closer (75 min) and quieter, but the flights are limited. LAX is the safer answer if you have a group flying from different coasts. Rent two cars regardless." },
    { q: "Is the inn worth the price?", a: "For a group of four to six who plan to never leave the property, yes. For a group of eight, rent a house and visit the inn for the spa." },
    { q: "Spa?", a: "Yes — Ojai's spa is the closest thing this site has to a 'definitely book it.' Two-hour appointments, side-by-side. The waiting lounge has citrus water and that is, somehow, the right move." },
    { q: "Drinking?", a: "Less than you think. The wineries are pleasant but the wine isn't the point. We typically have one cocktail and one bottle each evening, no shots, no third bottle." },
    { q: "Wedding-adjacent?", a: "Sometimes. Several brides we know have done their bachelorette here and gotten married a year later in the same valley. We don't recommend repeating the same itinerary, obviously." },
  ],
  related: [
    { name: "Charleston", slug: "charleston", note: "Ojai with humidity, oysters, no hike.", img: IMG.charleston, color: "var(--sage)" },
    { name: "Lisbon", slug: "lisbon", note: "Ojai if Ojai had a pastel and a tram.", img: IMG.lisbon, color: "var(--blush-deep)" },
    { name: "Hudson", slug: "hudson", note: "Ojai's East-Coast cousin, on the river.", img: IMG.hudson, color: "var(--rose)" },
  ],
};
