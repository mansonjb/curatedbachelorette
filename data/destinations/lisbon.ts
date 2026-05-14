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
    "Lisbon is the rare European weekend that's still affordable, still uncrowded in May and September, and still — bless it — genuinely puzzled by what a bachelorette is. Which, for the kind of trip we're planning, is exactly the right amount of indifference. Nobody is going to upsell you a sash.",
    "Two long lunches, two long walks, three nights, four if you have the holiday. Land on Wednesday, not Friday — you skip the airport scrum and earn yourself an extra afternoon of being lightly jet-lagged on a terrace with a tinto. That's not a bug; that's the trip. The Sintra day-trip is on Friday, the tasting on Saturday, the slow Sunday around Príncipe Real and the bakery you'll cite in the group chat for months.",
  ],
  stay: [
    { no: 1, name: "Santiago de Alfama", area: "Alfama", color: "var(--rose)", img: "/destinations/lisbon/hotel-1.jpg", note: "Tile-floored, 19 rooms, the morning sun comes in through the iron windows.", price: "$$$" },
    { no: 2, name: "The Lumiares", area: "Bairro Alto", color: "var(--blush-deep)", img: "/destinations/lisbon/hotel-2.jpg", note: "Apartments more than rooms. The rooftop bar is fine; the kitchenettes are the point.", price: "$$$" },
    { no: 3, name: "A rented house, Príncipe Real", area: "Príncipe Real", color: "var(--sage)", img: IMG.lisbon4, note: "Our default for groups of six or eight. Look for a courtyard and an oven nobody will use.", price: "$$" },
  ],
  night: [
    { no: 1, name: "Lux Frágil", area: "Santa Apolónia", kind: "Club", note: "The Lisbon club. Three floors, riverfront terrace, owner has impeccable taste in DJs. Worth the late arrival; nothing happens before 1AM.", when: "Friday & Saturday", link: "https://www.google.com/maps/search/?api=1&query=Lux+Fragil+Lisbon" },
    { no: 2, name: "Pensão Amor", area: "Cais do Sodré", kind: "Cabaret-bar", note: "Pink-velvet, mirrored, slightly louche. Cocktails on the upper floor, burlesque on the lower. Pre-dinner or post-dinner, both work.", when: "Daily", link: "https://www.google.com/maps/search/?api=1&query=Pensao+Amor+Lisbon" },
    { no: 3, name: "Park Bar", area: "Bairro Alto", kind: "Rooftop", note: "Hidden on top of a six-storey car park; you wouldn't find it without the tip. Sunset drinks, no reservations, leave by 9 if you want a table.", when: "Daily, until 11PM", link: "https://www.google.com/maps/search/?api=1&query=Park+Bar+Lisbon" },
    { no: 4, name: "A Tabacaria", area: "Cais do Sodré", kind: "Speakeasy", note: "Tiny, ten-seat, the bartender is the show. One round of whatever they suggest, then on to dinner.", when: "Daily, until midnight", link: "https://www.google.com/maps/search/?api=1&query=A+Tabacaria+Lisbon" },
  ],
  eat: [
    { no: 1, name: "Cervejaria Ramiro", area: "Anjos", meal: "Wednesday late dinner", note: "Shellfish in a fluorescent dining room, opened in 1956. The prawns are the entrée; the steak sandwich is dessert.", img: "/destinations/lisbon/eat-1.jpg" },
    { no: 2, name: "Taberna da Rua das Flores", area: "Chiado", meal: "Thursday lunch", note: "Twenty-six seats, no reservations, the menu is on a chalkboard. We arrive at 12:25.", img: "/destinations/lisbon/eat-2.jpg" },
    { no: 3, name: "Prado", area: "Baixa", meal: "Friday dinner", note: "Vaulted ceilings, natural wine, the room is the half of the experience that Instagram never quite gets.", img: "/destinations/lisbon/eat-3.jpg" },
    { no: 4, name: "Belcanto", area: "Chiado", meal: "Saturday dinner", note: "Two-Michelin-star, theatrical, the night the trip becomes a 'we should make this a thing' kind of night.", img: "/destinations/lisbon/eat-4.jpg" },
    { no: 5, name: "Manteigaria", area: "Chiado / Príncipe Real", meal: "Daily, 10AM", note: "The pastel de nata. There is no second answer. Two each, eaten standing up.", img: "/destinations/lisbon/eat-5.jpg" },
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
