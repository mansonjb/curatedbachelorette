import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const MIAMI: DestinationCover = {
  slug: "miami",
  title: "Miami",
  highlight: "slowly",
  pullQuotePlace: "South Beach",
  tags: ["Beach", "Luxury", "Foodie"],
  readingTime: { minutes: 9, words: 1840, author: "M. Aldrin", photographer: "L. Bertrand", filed: "Mar 2026" },
  hero: {
    intro:
      "A three-night weekend for six to ten who'd rather have one very good dinner than four mediocre ones — and who understand that the point of South Beach is, mostly, to lie down.",
    group: "6–10",
    nights: "3 (Thu→Sun)",
    perHead: "$1,200 – $2,400",
    bestMonths: "Mar · Apr · Oct · Nov",
    img: IMG.miamiPalms,
  },
  intro: [
    "The first thing to know about a Miami bachelorette is that it is not, in fact, a Miami bachelorette. It is a Miami weekend that happens to involve a bride. The distinction matters, because the city does not need any help being more itself, and the bride does not need to be told, repeatedly, that she is the bride.",
    "What follows is a three-night plan for a group of six to ten — the size at which a single dinner reservation still feels civilized and the pool float arrangement is not yet a logistics problem. We have stayed in each of the hotels we recommend, eaten the full menu at each of the restaurants, and lain by every pool listed for at least one uninterrupted Saturday afternoon.",
  ],
  stay: [
    { no: 1, name: "The Standard, Spa Wing", area: "Belle Isle", color: "var(--sage)", img: IMG.hotelRoom, note: "For the group that wants the spa robe more than the rooftop bar.", price: "$$$" },
    { no: 2, name: "Casa Faena", area: "Mid-Beach", color: "var(--blush-deep)", img: IMG.hotelLobby, note: "Old grande dame, gilded edges, the pool that used to be a chapel.", price: "$$$$" },
    { no: 3, name: "Esme Hotel", area: "Española Way", color: "var(--rose)", img: IMG.hotelExterior, note: "Walking-distance everything. Tile, more tile, a record player.", price: "$$$" },
  ],
  do: [
    { hour: "Friday 4PM", title: "An afternoon at the pool, undisturbed.", img: IMG.cabana, color: "var(--blush)" },
    { hour: "Saturday 10AM", title: "An award-winning Art Deco walking tour of South Beach, ninety minutes.", img: IMG.street, color: "var(--cream)" },
    { hour: "Saturday 4PM", title: "A sailboat in Biscayne Bay. Two hours. No costume.", img: IMG.marina, color: "var(--rose)" },
    { hour: "Sunday 11AM", title: "A small-group cigar factory tour in Little Havana, then a long lunch.", img: IMG.portrait, color: "var(--peach)" },
  ],
  eat: [
    { no: 1, name: "Boia De", area: "Buena Vista", meal: "Friday dinner", note: "Cacio e pepe, small kitchen, smaller dining room. Reserve five weeks out, ask for the back banquette." },
    { no: 2, name: "Walrus Rodeo", area: "Little River", meal: "Saturday lunch", note: "Wood-fired everything. Chicken for the table. Don't skip the bread." },
    { no: 3, name: "Mandolin", area: "Buena Vista", meal: "Saturday late lunch", note: "Outdoor courtyard, white walls, a bottle of rosé that lasts two hours." },
    { no: 4, name: "Sunny's Steakhouse", area: "Little River", meal: "Saturday dinner", note: "A backyard, a steak, a martini. Closest thing Miami has to a club for grown-ups." },
    { no: 5, name: "OTL", area: "Buena Vista", meal: "Sunday breakfast", note: "Pastries, eggs, sun on a sidewalk. A quiet place to find your sunglasses again." },
  ],
  pullQuote: { lead: "The point of", emphasis: "mostly", tail: "to lie down.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Thursday", color: "var(--rose)", items: [["6PM", "Arrivals · The Standard"], ["8:30PM", "Casual dinner · Lido"], ["11PM", "Bay-side fire pit"]] },
    { day: "Friday", color: "var(--blush-deep)", items: [["10AM", "Breakfast in robes"], ["12:30PM", "Cabana, Surf Club"], ["6PM", "Golden hour photos"], ["8:30PM", "Dinner — Boia De"]] },
    { day: "Saturday", color: "var(--blush)", items: [["10:30AM", "Walrus Rodeo lunch"], ["1PM", "Sailboat"], ["5PM", "Pool, again"], ["8:45PM", "Sunny's Steakhouse"]] },
    { day: "Sunday", color: "var(--peach)", items: [["9AM", "Yoga, Soundscape"], ["10:30AM", "OTL breakfast"], ["1PM", "Departures"]] },
  ],
  faq: [
    { q: "When should we book?", a: "For March–April, lock the hotel by November and the Saturday dinner by December. Miami restaurants drop reservations at 30 days, 10AM Eastern." },
    { q: "Is six people enough?", a: "Six is the magic number for Miami: one cab, one table, one cabana. Above ten, the city begins to charge you for being a group." },
    { q: "Private chef?", a: "Skip it. The restaurants here do the heavy lifting; a private chef is a Charleston move." },
    { q: "Beach or pool?", a: "Pool. Beach is for the photo on the way back from lunch." },
    { q: "Dress code?", a: "Linen, slip dresses, a strap. Boia De casual, Sunny's dressy. A flat shoe." },
  ],
  related: [
    { name: "Ibiza", slug: "ibiza", note: "Miami across the Atlantic, with cala beaches.", img: IMG.beachWalk, color: "var(--peach)" },
    { name: "Mexico City", slug: "cdmx", note: "Miami denser, farther from home.", img: IMG.cdmx, color: "var(--rose)" },
    { name: "Lisbon", slug: "lisbon", note: "Miami in another language.", img: IMG.lisbon, color: "var(--blush-deep)" },
  ],
};
