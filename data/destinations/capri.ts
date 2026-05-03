import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const CAPRI: DestinationCover = {
  slug: "capri",
  title: "Capri",
  highlight: "after the day-trippers leave",
  pullQuotePlace: "Capri",
  tags: ["Luxury", "Beach", "Italy"],
  readingTime: { minutes: 8, words: 1620, author: "M. Aldrin", photographer: "L. Bertrand", filed: "May 2026" },
  hero: {
    intro:
      "A three-night plan for four to six people who'd rather sleep on the island than commute from the Amalfi Coast. Two boat days, one Anacapri lunch, one slow morning at Marina Piccola, and the entire 6:30PM hour after the last ferry has left.",
    group: "4–6",
    nights: "3 (Thu→Sun)",
    perHead: "$2,400 – $4,200",
    bestMonths: "late May · June · early Sept",
    img: IMG.capriHero,
  },
  intro: [
    "The reason to stay on Capri instead of day-tripping from Positano is the 6PM hour. The last ferry pulls out, the day-trippers go with it, the Piazzetta exhales, and the people who slept here get a small Italian town to themselves for sixty minutes. That hour is the entire point. Without it, Capri is a museum.",
    "Group size matters here more than anywhere else on the site. Four, five, or six is the right number — three nights, two boat days, one Anacapri lunch. Above six, you'll hit a wall on hotel availability and the Saturday dinner becomes two seatings. Below four, the boat charter math stops working. The sweet spot is small.",
  ],
  stay: [
    { no: 1, name: "J.K. Place Capri", area: "Marina Grande", color: "var(--rose)", img: "/destinations/capri/hotel-1.jpg", note: "Twenty rooms, a small pool, the only hotel that makes sense if you want to actually swim from the property.", price: "$$$$" },
    { no: 2, name: "Hotel La Minerva", area: "Capri Town", color: "var(--peach)", img: "/destinations/capri/hotel-2.jpg", note: "Family-run, walking distance to the Piazzetta, a terrace looking at the Faraglioni. Half the price of J.K., 80% of the experience.", price: "$$$" },
    { no: 3, name: "Capri Palace", area: "Anacapri", color: "var(--blush-deep)", img: "/destinations/capri/hotel-3.jpg", note: "If you want quieter and more spa. Far enough from Capri Town to feel different, close enough by taxi to come back for dinner.", price: "$$$$" },
  ],
  do: [
    { hour: "Friday 10AM", title: "Private full-day boat tour — Faraglioni, Blue Grotto if calm, limoncello on board.", img: IMG.capri2, color: "var(--blush)" },
    { hour: "Saturday 11AM", title: "Anacapri walk, Villa San Michele, slowly.", img: IMG.capri3, color: "var(--rose)" },
    { hour: "Saturday 4PM", title: "Marina Piccola swim, before aperitivo.", img: IMG.capri4, color: "var(--peach)" },
    { hour: "Sunday 10AM", title: "A private boat day-trip to Positano and Amalfi for the group that has time for it.", img: IMG.capriHero, color: "var(--cream)" },
  ],
  night: [
    { no: 1, name: "Anema e Core", area: "Capri Town", kind: "Music tavern", note: "The institution. Guitar trio, locals dancing on the tables by 1AM, Italian families and Greek shipping heirs sharing the same room. Reserve, dress sharp, tip the band.", when: "Friday & Saturday", link: "https://www.google.com/maps/search/?api=1&query=Anema+e+Core+Capri" },
    { no: 2, name: "Quisi Bar at Grand Hotel Quisisana", area: "Capri Town", kind: "Hotel cocktail bar", note: "Pre-dinner negroni, perfectly tailored bartender, the kind of room where you sit and watch the cast of characters pass through. Walk-in only.", when: "Daily, 7–10PM", link: "https://www.google.com/maps/search/?api=1&query=Quisisana+Capri" },
    { no: 3, name: "Taverna Anema e Core (the late one)", area: "Capri Town", kind: "Late-night spot", note: "Same family, different door, opens after midnight. Smaller, smokier, no tourists. The Capri after-the-restaurants night.", when: "Late Saturday", link: "https://www.google.com/maps/search/?api=1&query=Taverna+Anema+e+Core+Capri" },
    { no: 4, name: "Lido del Faro", area: "Anacapri", kind: "Sunset bar", note: "On the rocks at the lighthouse. Aperitivo at 7PM, swim if it's calm, taxi back to dinner. The trip's most cinematic hour.", when: "Daily, season", link: "https://www.google.com/maps/search/?api=1&query=Lido+del+Faro+Capri" },
  ],
  eat: [
    { no: 1, name: "Le Grottelle", area: "Above the Arco Naturale", meal: "Friday lunch", note: "A walk to get there, scallop ravioli, a view that won't fit in the photo. Reserve, but the table is yours for two hours." },
    { no: 2, name: "Da Paolino", area: "Marina Grande", meal: "Friday dinner", note: "Under the lemon trees. Theatrical, the photo everyone takes, the food still good despite the photo. Ask for table 14 if it's available." },
    { no: 3, name: "Il Riccio", area: "Anacapri", meal: "Saturday lunch", note: "On the cliff, the swim is included, the dessert room is a thing. Linen, please. The crudo and a bottle of Falanghina." },
    { no: 4, name: "Pulalli Wine Bar", area: "Capri Town", meal: "Saturday aperitivo", note: "The terrace above the Piazzetta clock tower. One glass, one platter, one moment. The aperitivo we'd recommend over any beach club." },
    { no: 5, name: "Aurora", area: "Capri Town", meal: "Saturday dinner", note: "The classic. The pizza all'acqua, the linguine ai limoni, the room that hasn't changed since the 60s, on purpose. Reservation: yes, two months out." },
  ],
  pullQuote: { lead: "Capri begins", emphasis: "after", tail: "the last ferry leaves.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Thursday", color: "var(--rose)", items: [["3PM", "Hydrofoil from Sorrento"], ["5PM", "Settle, walk the Piazzetta"], ["8:30PM", "Dinner · Aurora"]] },
    { day: "Friday", color: "var(--blush)", items: [["10AM", "Boat day, Faraglioni"], ["1PM", "Lunch on the boat"], ["5PM", "Spa hour"], ["9PM", "Dinner · Da Paolino"]] },
    { day: "Saturday", color: "var(--blush-deep)", items: [["11AM", "Walk Anacapri"], ["1:30PM", "Lunch · Il Riccio"], ["4PM", "Marina Piccola swim"], ["7PM", "Aperitivo · Pulalli"], ["9PM", "Dinner · L'Olivo"]] },
    { day: "Sunday", color: "var(--peach)", items: [["9AM", "Piazzetta coffee, before the ferry"], ["12PM", "Lunch · Le Grottelle"], ["4PM", "Hydrofoil out"]] },
  ],
  faq: [
    { q: "Stay on Capri or the Amalfi Coast and day-trip?", a: "Stay on Capri. The whole point of the trip is the 6PM hour after the day-trippers leave, and you don't get that from a hotel in Positano. The hydrofoil ride is also a sea-sickness lottery you don't need to play twice." },
    { q: "Three nights, four nights?", a: "Three is correct. The island is small, the experience is concentrated. A fourth night becomes a fourth-dinner problem and the magic is in the threes." },
    { q: "Blue Grotto: skip or not?", a: "Skip if there's swell. Go early (8AM) if it's calm. The line at noon is unnecessarily long and the cave is the same cave. The Faraglioni and the Bagni di Tiberio are better swims regardless." },
    { q: "What does it cost, really?", a: "Capri is the most expensive weekend we book. Hotels start at $1,000/night per couple in season, dinners run $200/person, the boat is $900/day. We don't apologize for it; we just want you to know going in." },
    { q: "Dress code?", a: "Linen, slip dresses, a flat sandal. Aurora wants a closed-toe shoe at dinner. Il Riccio is more relaxed but still a destination — it is not a beach lunch." },
  ],
  related: [
    { name: "Mykonos", slug: "mykonos", note: "Capri in the Cyclades, less Italian.", img: IMG.mykonosHero, color: "var(--rose)" },
    { name: "Saint-Tropez", slug: "saint-tropez", note: "Capri with a French harbor and cypress.", img: IMG.tropezHero, color: "var(--butter)" },
    { name: "Ibiza", slug: "ibiza", note: "Capri's noisier, larger, pinier cousin.", img: IMG.ibizaHero, color: "var(--peach)" },
  ],
};
