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
    img: IMG.miamiHero,
  },
  intro: [
    "Here's the trick: don't plan a Miami bachelorette. Plan a Miami weekend that happens to involve a bride. The distinction matters, because the city is loud enough on its own, and the bride doesn't need to be reminded forty times a day that she's the bride. The weekend works when she's a guest at her own party, not the topic.",
    "Three nights, six to ten people. That's the size where a single Saturday-night dinner still feels civilised and the pool float arrangement isn't yet a Slack thread. Every hotel below is one we paid for. Every restaurant is one we ate the full menu at. Every pool is one we lay by for an uninterrupted Saturday afternoon, which is more research than most travel sites will admit to.",
  ],
  stay: [
    { no: 1, name: "The Standard, Spa Wing", area: "Belle Isle", color: "var(--sage)", img: "/destinations/miami/hotel-1.jpg", note: "For the group that wants the spa robe more than the rooftop bar.", price: "$$$" },
    { no: 2, name: "Casa Faena", area: "Mid-Beach", color: "var(--blush-deep)", img: "/destinations/miami/hotel-2.jpg", note: "Old grande dame, gilded edges, the pool that used to be a chapel.", price: "$$$$" },
    { no: 3, name: "Esme Hotel", area: "Española Way", color: "var(--rose)", img: "/destinations/miami/hotel-3.jpg", note: "Walking-distance everything. Tile, more tile, a record player.", price: "$$$" },
  ],
  night: [
    { no: 1, name: "LIV at Fontainebleau", area: "Mid-Beach", kind: "Megaclub", note: "The Miami megaclub. Sunday is the night, bottle service is the move, get your name on the list before you fly.", when: "Sunday", link: "https://www.google.com/maps/search/?api=1&query=LIV+Miami+Fontainebleau" },
    { no: 2, name: "E11even", area: "Park West", kind: "24-hour club", note: "Open all night, every night, gravity-defying performers. Genuinely chaotic in the best possible way; one visit will tell you if you want a second.", when: "Daily, peak Saturday", link: "https://www.google.com/maps/search/?api=1&query=E11even+Miami" },
    { no: 3, name: "Sweet Liberty", area: "Mid-Beach", kind: "Cocktail bar", note: "If the bride wants the night to end at 12 instead of 4. The bartenders know what they're doing; the room is a real room, not a club.", when: "Daily, until 5AM", link: "https://www.google.com/maps/search/?api=1&query=Sweet+Liberty+Miami" },
    { no: 4, name: "Mac's Club Deuce", area: "South Beach", kind: "Dive bar", note: "The 1933 dive bar where the locals go to escape the locals. Cash only, no cover, no door, no dress code. The 3AM corrective.", when: "Daily, until 5AM", link: "https://www.google.com/maps/search/?api=1&query=Mac%27s+Club+Deuce+Miami" },
  ],
  eat: [
    { no: 1, name: "Boia De", area: "Buena Vista", meal: "Friday dinner", note: "Cacio e pepe, small kitchen, smaller dining room. Reserve five weeks out, ask for the back banquette.", img: "/destinations/miami/eat-1.jpg" },
    { no: 2, name: "Walrus Rodeo", area: "Little River", meal: "Saturday lunch", note: "Wood-fired everything. Chicken for the table. Don't skip the bread.", img: "/destinations/miami/eat-2.jpg" },
    { no: 3, name: "Mandolin", area: "Buena Vista", meal: "Saturday late lunch", note: "Outdoor courtyard, white walls, a bottle of rosé that lasts two hours.", img: "/destinations/miami/eat-3.jpg" },
    { no: 4, name: "Sunny's Steakhouse", area: "Little River", meal: "Saturday dinner", note: "A backyard, a steak, a martini. Closest thing Miami has to a club for grown-ups.", img: "/destinations/miami/eat-4.jpg" },
    { no: 5, name: "OTL", area: "Buena Vista", meal: "Sunday breakfast", note: "Pastries, eggs, sun on a sidewalk. A quiet place to find your sunglasses again.", img: "/destinations/miami/eat-5.jpg" },
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
    { name: "Ibiza", slug: "ibiza", note: "Miami across the Atlantic, with cala beaches.", img: IMG.ibizaHero, color: "var(--peach)" },
    { name: "Mexico City", slug: "cdmx", note: "Miami denser, farther from home.", img: IMG.cdmxHero, color: "var(--rose)" },
    { name: "Lisbon", slug: "lisbon", note: "Miami in another language.", img: IMG.lisbonHero, color: "var(--blush-deep)" },
  ],
};
