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
    img: IMG.cdmxHero,
  },
  intro: [
    "Mexico City is the only weekend on this site that earns a fourth night, and the only one where over-planning will actually ruin the trip. CDMX rewards a sleepy Friday morning and a Saturday lunch that runs into late afternoon the way no other capital does. Pack the schedule and the city resents you for it; leave gaps and it fills them itself.",
    "The version of CDMX we recommend is small and walkable: Roma Norte, Condesa, the occasional crossing into Juárez, one Coyoacán afternoon. The rooftop-bar industrial complex you can ignore. Polanco gets exactly one visit, for a single bakery — and that's it. Everything else worth doing happens within a fifteen-minute walk of wherever you're staying.",
  ],
  stay: [
    { no: 1, name: "Casa Polanco", area: "Polanco", color: "var(--blush-deep)", img: "/destinations/cdmx/hotel-1.jpg", note: "If you want the grande-dame experience and a pool. Only recommended for groups under six.", price: "$$$$" },
    { no: 2, name: "Octavia Casa", area: "Roma Norte", color: "var(--rose)", img: "/destinations/cdmx/hotel-2.jpg", note: "Eight rooms, a courtyard, a single record player. The right answer for groups of four to six.", price: "$$$" },
    { no: 3, name: "A rented apartment, Condesa", area: "Condesa", color: "var(--sage)", img: IMG.cdmx4, note: "What we book for eight or more. Look for two-floor places with a roof and a kitchen nobody will use.", price: "$$" },
  ],
  night: [
    { no: 1, name: "Departamento", area: "Juárez", kind: "Club", note: "Two floors, the second one is where the night happens. The DJ booth runs into Sunday morning if you let it. Wear black, smile at the door.", when: "Friday & Saturday", link: "https://www.google.com/maps/search/?api=1&query=Departamento+Mexico+City" },
    { no: 2, name: "Hanky Panky", area: "Juárez", kind: "Speakeasy", note: "Through an unmarked door behind a taco shop. The CDMX cocktail bar that put the city on the World's 50 Best list. Reservation essential.", when: "Daily, until 2AM", link: "https://www.google.com/maps/search/?api=1&query=Hanky+Panky+CDMX" },
    { no: 3, name: "Bósforo", area: "Centro Histórico", kind: "Mezcalería", note: "The mezcal bar people fly here for. Tiny, ten seats, the owner picks the bottle for you based on three questions. Pre-dinner, never after.", when: "Tuesday–Saturday, 6–11PM", link: "https://www.google.com/maps/search/?api=1&query=Bosforo+Mexico+City" },
    { no: 4, name: "Patrick Miller", area: "Roma Norte", kind: "Salsa institution", note: "Friday-only since 1986. The locals who taught their kids to dance here are the ones running the floor. Wildly fun if you commit; awkward if you don't.", when: "Friday only", link: "https://www.google.com/maps/search/?api=1&query=Patrick+Miller+Mexico+City" },
  ],
  eat: [
    { no: 1, name: "Contramar", area: "Roma Norte", meal: "Friday lunch", note: "The reservation that runs the rest of the weekend. 1:30PM, four hours, fish two ways, never rushed.", img: "/destinations/cdmx/eat-1.jpg" },
    { no: 2, name: "Pasillo de Humo", area: "Condesa", meal: "Friday dinner", note: "Oaxacan, second-floor, mole all the way. Start with the memelitas.", img: "/destinations/cdmx/eat-2.jpg" },
    { no: 3, name: "Rosetta", area: "Roma Norte", meal: "Saturday dinner", note: "An Italian-Mexican thesis written in a 1920s house. Order the dessert before you order anything else.", img: "/destinations/cdmx/eat-3.jpg" },
    { no: 4, name: "Lardo", area: "Condesa", meal: "Sunday lunch", note: "Light, bright, the kind of room that fixes a Sunday. The bread basket is non-negotiable.", img: "/destinations/cdmx/eat-4.jpg" },
    { no: 5, name: "Panadería Rosetta", area: "Roma / Juárez", meal: "Daily, 8AM", note: "The guava roll. The almond croissant. Coffee from the next-door Niddo. Repeat every morning.", img: "/destinations/cdmx/eat-5.jpg" },
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
    { name: "Lisbon", slug: "lisbon", note: "CDMX in Portuguese, with tile.", img: IMG.lisbonHero, color: "var(--blush-deep)" },
    { name: "Miami", slug: "miami", note: "CDMX with a beach instead of a museum.", img: IMG.miamiHero, color: "var(--blush)" },
    { name: "Marrakech", slug: "marrakech", note: "CDMX with a riad and a hammam.", img: IMG.marrakechHero, color: "var(--blush-deep)" },
  ],
};
