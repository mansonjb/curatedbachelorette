import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const CHARLESTON: DestinationCover = {
  slug: "charleston",
  title: "Charleston",
  highlight: "softly",
  pullQuotePlace: "Charleston",
  tags: ["Foodie", "Low-key", "Wedding-adjacent"],
  readingTime: { minutes: 8, words: 1620, author: "M. Aldrin", photographer: "L. Bertrand", filed: "Apr 2026" },
  hero: {
    intro:
      "A three-night plan for four to eight, built around one long oyster lunch, one rented house with a porch, and a Sunday so quiet the loudest sound is a paddle fan. The opposite of a destination wedding, on purpose.",
    group: "4–8",
    nights: "3 (Thu→Sun)",
    perHead: "$900 – $1,800",
    bestMonths: "Mar · Apr · Oct · early Nov",
    img: IMG.charleston,
  },
  intro: [
    "There is a temptation to treat Charleston as a smaller Savannah, or as a kinder Nashville, and both are wrong. Charleston is a city that has decided, with some seriousness, that the most important meal of the day is a leisurely Sunday lunch. We have planned the rest of the weekend around that decision.",
    "This is a low-key weekend with a tall pour. Everyone gets their own bedroom, the pre-dinner drink happens on a porch, and the only group photo of the weekend is candid, taken across a table strewn with shells.",
  ],
  stay: [
    { no: 1, name: "86 Cannon", area: "Cannonborough", color: "var(--rose)", img: IMG.hotelRoom, note: "A six-suite house. The kind of place that only feels like a hotel when you ask for a recommendation.", price: "$$$$" },
    { no: 2, name: "The Pinch", area: "Wraggborough", color: "var(--sage)", img: IMG.hotelLobby, note: "Two attached townhouses, fifteen rooms total, one extremely loud rooster across the street.", price: "$$$" },
    { no: 3, name: "A rented house, South of Broad", area: "Battery", color: "var(--cream)", img: IMG.hotelExterior, note: "What we usually book for groups of seven or eight. Look for porches, plural.", price: "$$$" },
  ],
  do: [
    { hour: "Friday 5PM", title: "Drinks at The Ordinary, before the room fills.", img: IMG.cocktail, color: "var(--blush)" },
    { hour: "Saturday 11AM", title: "Walk South of Broad. Pastel houses. No agenda.", img: IMG.street, color: "var(--rose)" },
    { hour: "Saturday 3PM", title: "Sailboat in the harbor, sunset return.", img: IMG.marina, color: "var(--peach)" },
    { hour: "Sunday 10AM", title: "A long, careful breakfast. Then the train.", img: IMG.cafe, color: "var(--cream)" },
  ],
  eat: [
    { no: 1, name: "Bertha's Kitchen", area: "North Charleston", meal: "Friday lunch", note: "Lima beans, fried chicken, mac. The drive matters. Cash on the way out." },
    { no: 2, name: "Chubby Fish", area: "Cannonborough", meal: "Friday dinner", note: "Tiny, walk-in only, the menu changes daily. Get there at 5:00, not 7:00." },
    { no: 3, name: "The Ordinary", area: "Upper King", meal: "Saturday late lunch", note: "An oyster bar in a former bank. Order the fancy tower, eat slowly, leave full." },
    { no: 4, name: "Sorelle", area: "Charleston", meal: "Saturday dinner", note: "Three floors, three moods. We sit on the rooftop in spring and the trattoria in November." },
    { no: 5, name: "Babas on Cannon", area: "Cannonborough", meal: "Sunday breakfast", note: "An espresso bar with one perfect spinach quiche. Lingering encouraged." },
  ],
  pullQuote: { lead: "Charleston is", emphasis: "loud", tail: "only on the porch.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Thursday", color: "var(--rose)", items: [["6PM", "Arrivals · 86 Cannon"], ["8PM", "Drinks on the porch"], ["9:30PM", "Casual dinner · Le Farfalle"]] },
    { day: "Friday", color: "var(--sage)", items: [["10AM", "Bertha's, with the car"], ["1PM", "Walk Rainbow Row"], ["5PM", "Drinks · The Ordinary"], ["8PM", "Dinner · Chubby Fish"]] },
    { day: "Saturday", color: "var(--blush)", items: [["10:30AM", "Slow morning, porch coffee"], ["12:30PM", "Oyster lunch · The Ordinary"], ["3PM", "Harbor sailboat"], ["8PM", "Dinner · Sorelle"]] },
    { day: "Sunday", color: "var(--peach)", items: [["10AM", "Babas breakfast"], ["12PM", "Goodbyes, slowly"], ["2PM", "Departures"]] },
  ],
  faq: [
    { q: "Is Charleston still good in summer?", a: "Yes — but plan for a 4PM rain shower and a swim, not a beach. June and July are full of small festivals and almost no tourists; September is humid in a way that flatters nobody's photos." },
    { q: "Should we rent a car?", a: "Not really. Most of what's worth eating is in a square mile. We rent one car for the airport run and the Bertha's pilgrimage, and that's it." },
    { q: "Is this a destination-wedding city?", a: "It is, which is exactly why our weekends here are pointedly *not* destination-wedding-shaped. No itinerary card, no welcome bag, no group T-shirt. Bring linen and a flat sandal." },
    { q: "Six people, eight people, ten?", a: "Charleston dining rooms are small. Six is comfortable, eight is the max for one table, ten requires splitting and that's a Miami move." },
    { q: "Private chef in the rented house?", a: "Yes, occasionally. We've had Saturday dinner cooked at home twice, both times in winter when the porch was useless. Email us for the chef we like." },
  ],
  related: [
    { name: "Miami", slug: "miami", note: "Charleston louder, with a pool day.", img: IMG.miamiPalms, color: "var(--blush)" },
    { name: "Hudson", slug: "hudson", note: "Charleston, but the river runs the other way.", img: IMG.hudson, color: "var(--peach)" },
    { name: "Ojai", slug: "ojai", note: "Charleston quieter, citrus instead of porch.", img: IMG.ojai, color: "var(--sage)" },
  ],
};
