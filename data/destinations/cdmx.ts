import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const CDMX: DestinationCover = {
  slug: "cdmx",
  title: "Mexico City",
  highlight: "densely",
  pullQuotePlace: "Mexico City",
  tags: ["City", "Foodie", "Long-weekend"],
  readingTime: { minutes: 11, words: 2140, author: "M. Aldrin", photographer: "L. Bertrand", filed: "Feb 2026" },
  hero: {
    intro:
      "A four-night trip for a group that wants the most concentrated weekend of the year. Roma and Condesa, two great dinners, one museum, one mezcal bar, and the unspoken agreement that nobody is checking email.",
    group: "4–10",
    nights: "4 (Thu→Mon)",
    perHead: "$1,000 – $1,900",
    bestMonths: "Mar · Apr · Oct · Nov",
    img: IMG.cdmx,
  },
  intro: [
    "Mexico City is the only weekend on this site we recommend extending to four nights, and the only one we recommend not over-planning. The city rewards a sleepy Friday morning and a long Saturday lunch the way no other capital does. It punishes a packed schedule.",
    "The version of CDMX we send brides to is small and walkable: Roma Norte, Condesa, a few crossings into Juárez and Coyoacán. We avoid the rooftop-bar industrial complex and we never recommend Polanco for anything except one specific bakery.",
  ],
  stay: [
    { no: 1, name: "Casa Polanco", area: "Polanco", color: "var(--blush-deep)", img: IMG.hotelRoom, note: "If you want the grande-dame experience and a pool. Only recommended for groups under six.", price: "$$$$" },
    { no: 2, name: "Octavia Casa", area: "Roma Norte", color: "var(--rose)", img: IMG.hotelLobby, note: "Eight rooms, a courtyard, a single record player. The right answer for groups of four to six.", price: "$$$" },
    { no: 3, name: "A rented apartment, Condesa", area: "Condesa", color: "var(--sage)", img: IMG.hotelExterior, note: "What we book for eight or more. Look for two-floor places with a roof and a kitchen nobody will use.", price: "$$" },
  ],
  do: [
    { hour: "Friday 11AM", title: "Casa Luis Barragán, by appointment.", img: IMG.street, color: "var(--rose)" },
    { hour: "Friday 5PM", title: "Mezcal at Bósforo, before the line.", img: IMG.cocktail, color: "var(--blush)" },
    { hour: "Saturday 10AM", title: "Walk Parque México. Coffee. People-watch.", img: IMG.cafe, color: "var(--peach)" },
    { hour: "Sunday 11AM", title: "Frida Kahlo's house, then a cab to Coyoacán market.", img: IMG.portrait, color: "var(--cream)" },
  ],
  eat: [
    { no: 1, name: "Contramar", area: "Roma Norte", meal: "Friday lunch", note: "The reservation that runs the rest of the weekend. 1:30PM, four hours, fish two ways, never rushed." },
    { no: 2, name: "Pasillo de Humo", area: "Condesa", meal: "Friday dinner", note: "Oaxacan, second-floor, mole all the way. Start with the memelitas." },
    { no: 3, name: "Rosetta", area: "Roma Norte", meal: "Saturday dinner", note: "An Italian-Mexican thesis written in a 1920s house. Order the dessert before you order anything else." },
    { no: 4, name: "Lardo", area: "Condesa", meal: "Sunday lunch", note: "Light, bright, the kind of room that fixes a Sunday. The bread basket is non-negotiable." },
    { no: 5, name: "Panadería Rosetta", area: "Roma / Juárez", meal: "Daily, 8AM", note: "The guava roll. The almond croissant. Coffee from the next-door Niddo. Repeat every morning." },
  ],
  pullQuote: { lead: "Four nights in", emphasis: "barely", tail: "enough.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Thursday", color: "var(--rose)", items: [["7PM", "Arrivals · Octavia Casa"], ["9PM", "Casual dinner · Lardo"]] },
    { day: "Friday", color: "var(--blush-deep)", items: [["11AM", "Barragán house"], ["1:30PM", "Contramar (slow)"], ["6PM", "Bósforo mezcal"], ["9PM", "Pasillo de Humo"]] },
    { day: "Saturday", color: "var(--blush)", items: [["10AM", "Parque México walk"], ["12PM", "Tacos · El Califa de León"], ["4PM", "Massage · The Standard spa"], ["8:30PM", "Dinner · Rosetta"]] },
    { day: "Sunday", color: "var(--sage)", items: [["10AM", "Coyoacán + Frida"], ["1PM", "Lardo lunch"], ["6PM", "Sunset on the roof"], ["8:30PM", "Quiet dinner · Loup Bar"]] },
    { day: "Monday", color: "var(--peach)", items: [["8AM", "Panadería Rosetta one last time"], ["11AM", "Departures"]] },
  ],
  faq: [
    { q: "Is CDMX safe for a group of women?", a: "Yes, in the neighborhoods we recommend. Roma, Condesa, Juárez, Polanco, Coyoacán — these are walking-around cities. Use Uber after 11PM. Avoid the historic centro at night, like locals do." },
    { q: "Altitude?", a: "Real. Drink water, skip the second mezcal on night one, and don't run on day one. By Saturday it's a non-issue." },
    { q: "Spanish?", a: "Helpful but not required at the places we send people. Contramar, Rosetta, Pasillo all run in English when needed. Learn 'la cuenta, por favor.'" },
    { q: "Best month?", a: "March, April, October, early November. Avoid May (smoky) and the rainy summer months unless you're staying inside, which is a kind of weekend we don't plan." },
    { q: "Bachelorette accessories?", a: "No. Mexico City is the place this site stops being subtle: anything sash-shaped will be sad in a Rosetta photo." },
  ],
  related: [
    { name: "Lisbon", slug: "lisbon", note: "CDMX in Portuguese, with tile.", img: IMG.lisbon, color: "var(--blush-deep)" },
    { name: "Miami", slug: "miami", note: "CDMX with a beach instead of a museum.", img: IMG.miamiPalms, color: "var(--blush)" },
    { name: "Marrakech", slug: "marrakech", note: "CDMX with a riad and a hammam.", img: IMG.hotelLobby, color: "var(--blush-deep)" },
  ],
};
