import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const LISBON: DestinationCover = {
  slug: "lisbon",
  title: "Lisbon",
  highlight: "tiled",
  pullQuotePlace: "Lisbon",
  tags: ["City", "Foodie", "Slow"],
  readingTime: { minutes: 10, words: 1980, author: "M. Aldrin", photographer: "L. Bertrand", filed: "Apr 2026" },
  hero: {
    intro:
      "A four-night plan for four to eight, written for people who'd rather walk seven kilometres a day than rent a car. Tile, tinto, terraces. One day-trip to Sintra, optional and beautiful.",
    group: "4–8",
    nights: "4 (Wed→Sun)",
    perHead: "$1,000 – $1,700",
    bestMonths: "May · June · Sept · early Oct",
    img: IMG.lisbonHero,
  },
  intro: [
    "Lisbon is the rare European weekend that's still affordable, still uncrowded in May and September, and still genuinely confused by what a bachelorette is — which, for our purposes, is exactly the right kind of indifference.",
    "The plan is built around two long lunches and two long walks. A Wednesday arrival lets you skip the Friday-night airport scrum and gives you one extra day of being lightly jet-lagged on a terrace, which we have come to consider a feature.",
  ],
  stay: [
    { no: 1, name: "Santiago de Alfama", area: "Alfama", color: "var(--rose)", img: "/destinations/lisbon/hotel-1.jpg", note: "Tile-floored, 19 rooms, the morning sun comes in through the iron windows.", price: "$$$" },
    { no: 2, name: "The Lumiares", area: "Bairro Alto", color: "var(--blush-deep)", img: "/destinations/lisbon/hotel-2.jpg", note: "Apartments more than rooms. The rooftop bar is fine; the kitchenettes are the point.", price: "$$$" },
    { no: 3, name: "A rented house, Príncipe Real", area: "Príncipe Real", color: "var(--sage)", img: IMG.lisbon4, note: "Our default for groups of six or eight. Look for a courtyard and an oven nobody will use.", price: "$$" },
  ],
  do: [
    { hour: "Thursday 10AM", title: "A private guided tuk-tuk through Alfama and Bairro Alto — the city in three hours.", img: IMG.lisbon2, color: "var(--cream)" },
    { hour: "Friday 9AM", title: "A private full-day to Sintra — Pena Palace, Quinta da Regaleira, all tickets sorted.", img: IMG.lisbon3, color: "var(--peach)" },
    { hour: "Saturday 9AM", title: "An inland day-trip — Knights Templar castle, Nazaré, the white village of Óbidos.", img: IMG.lisbon4, color: "var(--rose)" },
    { hour: "Saturday 6PM", title: "Sunset at the Miradouro de Santa Catarina, with one drink.", img: IMG.lisbonHero, color: "var(--blush)" },
  ],
  eat: [
    { no: 1, name: "Cervejaria Ramiro", area: "Anjos", meal: "Wednesday late dinner", note: "Shellfish in a fluorescent dining room, opened in 1956. The prawns are the entrée; the steak sandwich is dessert." },
    { no: 2, name: "Taberna da Rua das Flores", area: "Chiado", meal: "Thursday lunch", note: "Twenty-six seats, no reservations, the menu is on a chalkboard. We arrive at 12:25." },
    { no: 3, name: "Prado", area: "Baixa", meal: "Friday dinner", note: "Vaulted ceilings, natural wine, the room is the half of the experience that Instagram never quite gets." },
    { no: 4, name: "Belcanto", area: "Chiado", meal: "Saturday dinner", note: "Two-Michelin-star, theatrical, the night the trip becomes a 'we should make this a thing' kind of night." },
    { no: 5, name: "Manteigaria", area: "Chiado / Príncipe Real", meal: "Daily, 10AM", note: "The pastel de nata. There is no second answer. Two each, eaten standing up." },
  ],
  pullQuote: { lead: "Lisbon does not", emphasis: "rush", tail: "and neither should you.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Wednesday", color: "var(--rose)", items: [["6PM", "Arrivals · Santiago de Alfama"], ["9PM", "Late dinner · Cervejaria Ramiro"]] },
    { day: "Thursday", color: "var(--blush-deep)", items: [["10AM", "Walk Príncipe Real → Cais"], ["12:30PM", "Taberna lunch"], ["6PM", "Tinto on the terrace"], ["9PM", "Casual dinner · A Cevicheria"]] },
    { day: "Friday", color: "var(--sage)", items: [["10AM", "Train to Sintra"], ["1PM", "Lunch · Tascantiga"], ["7PM", "Return to Lisbon"], ["9PM", "Dinner · Prado"]] },
    { day: "Saturday", color: "var(--blush)", items: [["11AM", "LX Factory walk"], ["1PM", "Long lunch · Time Out Market"], ["4PM", "Sunset miradouro"], ["8:45PM", "Dinner · Belcanto"]] },
    { day: "Sunday", color: "var(--peach)", items: [["10AM", "Manteigaria + coffee"], ["12PM", "Goodbyes"], ["3PM", "Departures"]] },
  ],
  faq: [
    { q: "Is Lisbon hilly?", a: "Yes. Pack one good shoe and accept that the trams are for tourists. The hill from Cais do Sodré up to Bairro Alto is the workout. Sintra is a separate, harder workout." },
    { q: "Belcanto: worth it?", a: "Yes, once. We book it for one Saturday a trip and we don't apologize. The pairing is excellent and the room is small enough that nobody is performing." },
    { q: "Day-trip — Sintra or Cascais?", a: "Sintra for one full day, Cascais skippable. If you have a fifth night, do Comporta instead — but that's a different weekend." },
    { q: "Is October too cold?", a: "Early October is perfect. Late October is grey. We do not recommend Lisbon in November or February." },
    { q: "Cash or card?", a: "Card almost everywhere. Cash for Manteigaria and the small tasca lunches. ATMs are easy, your bank's fee is the only annoyance." },
  ],
  related: [
    { name: "Mexico City", slug: "cdmx", note: "Lisbon noisier, denser, hotter.", img: IMG.cdmxHero, color: "var(--rose)" },
    { name: "Marrakech", slug: "marrakech", note: "Lisbon across the strait, in another language.", img: IMG.marrakechHero, color: "var(--blush-deep)" },
    { name: "Miami", slug: "miami", note: "Lisbon, with a pool and a flight half as long.", img: IMG.miamiHero, color: "var(--blush)" },
  ],
};
