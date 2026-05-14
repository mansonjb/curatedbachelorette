import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const SEVILLA: DestinationCover = {
  slug: "sevilla",
  title: "Sevilla",
  highlight: "in the shoulder months",
  pullQuotePlace: "Sevilla",
  tags: ["City", "Foodie", "Andalucía"],
  readingTime: { minutes: 9, words: 1820, author: "M. Aldrin", photographer: "L. Bertrand", filed: "Mar 2026" },
  hero: {
    intro:
      "A four-night plan for four to eight, written for March or late October — Sevilla's two quiet windows, before the heat and after the tourist autumn. One flamenco evening that isn't a show, two long courtyard lunches, a day trip to Jerez for sherry.",
    group: "4–8",
    nights: "4 (Wed→Sun)",
    perHead: "$900 – $1,800",
    bestMonths: "Mar · Apr · late Oct · Nov",
    img: IMG.sevillaHero,
  },
  intro: [
    "Sevilla is the city Andalucía's other towns are imitating. Smaller than you'd expect, denser than the map suggests, organized around two seasons of avoidance (July, August) and a religious calendar that turns the streets into a procession three weeks a year. The bride who picks Sevilla wants the food, the light, the kind of weekend that runs on long lunches and a 5PM siesta nobody is too proud to take.",
    "We base out of a converted casa-palacio in the Santa Cruz quarter — the only sensible footprint, walking distance to everything we recommend and twenty minutes from the train station. The single day-trip is to Jerez de la Frontera, an hour south by train, for the sherry bodegas and one long lunch. The bride leaves with a folding fan, a strong opinion about a specific tapas bar, and a fado-flamenco distinction she didn't have on arrival.",
  ],
  stay: [
    { no: 1, name: "Hotel Alfonso XIII", area: "El Arenal", color: "var(--blush-deep)", img: "/destinations/sevilla/hotel-1.jpg", note: "The grand-old answer. Moorish-revival, the courtyard for breakfast, the kind of property that justifies one Saturday night dressed for dinner.", price: "$$$$" },
    { no: 2, name: "Hospes Las Casas del Rey de Baeza", area: "Santa Cruz", color: "var(--rose)", img: "/destinations/sevilla/hotel-2.jpg", note: "A 17th-century courtyard converted, forty rooms, a rooftop pool that catches the cathedral bell. Our default for groups of six.", price: "$$$" },
    { no: 3, name: "Corral del Rey", area: "Santa Cruz, deeper in", color: "var(--peach)", img: "/destinations/sevilla/hotel-3.jpg", note: "Thirteen rooms, family-run, the boutique answer for groups under six. Quiet, slightly hidden, the perfect light at 4PM on the roof.", price: "$$$" },
  ],
  eat: [
    { no: 1, name: "Casa Morales", area: "Santa Cruz", meal: "Wednesday tapas", note: "An 1850 bodega. Eight tapas, two cañas, stand at the barrel out front. The first meal that establishes the rhythm of the week.", img: "/destinations/sevilla/eat-1.jpg" },
    { no: 2, name: "Eslava", area: "San Lorenzo", meal: "Thursday lunch", note: "The tapas bar everyone wants a table at. Walk-up at 1PM, list your name, accept the wait. Honey-glazed pork ribs and a glass of fino.", img: "/destinations/sevilla/eat-2.jpg" },
    { no: 3, name: "Cañabota", area: "Centro", meal: "Friday dinner", note: "One Michelin star, fish-only, omakase-style at the counter. The Saturday dinner that justifies the trip's airfare.", img: "/destinations/sevilla/eat-3.jpg" },
    { no: 4, name: "Bar Alfalfa", area: "Plaza de la Alfalfa", meal: "Saturday late lunch", note: "Italian-Sevillano fusion, two-meter bar, a cold soup that the locals queue for at 2PM. Sit at the corner if you can.", img: "/destinations/sevilla/eat-4.jpg" },
    { no: 5, name: "Filo", area: "Heliópolis", meal: "Sunday lunch", note: "A neighborhood ten minutes outside the centre — the lunch the Andaluz families actually book. Garlic shrimp, oxtail croquetas, a long shared table.", img: "/destinations/sevilla/eat-5.jpg" },
  ],
  pullQuote: { lead: "Sevilla is", emphasis: "small", tail: "and incurably theatrical.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Wednesday", color: "var(--rose)", items: [["3PM", "Arrivals · Casa palacio"], ["6PM", "Walk Plaza de España at golden hour"], ["8:30PM", "Tapas crawl · Casa Morales + Vinería San Telmo"]] },
    { day: "Thursday", color: "var(--blush-deep)", items: [["11AM", "Real Alcázar"], ["2PM", "Eslava lunch"], ["6PM", "Pool / siesta"], ["9PM", "Dinner · Mama Bistró"]] },
    { day: "Friday", color: "var(--peach)", items: [["9AM", "Train to Jerez"], ["12PM", "Lustau bodega tour + lunch"], ["7PM", "Return to Sevilla"], ["9PM", "Late dinner · Cañabota"]] },
    { day: "Saturday", color: "var(--blush)", items: [["11AM", "Cathedral + Giralda climb"], ["1:30PM", "Lunch · Bar Alfalfa"], ["6PM", "Flamenco · La Carbonería"], ["10PM", "Sherry-bar nightcap"]] },
    { day: "Sunday", color: "var(--cream)", items: [["10AM", "Triana walk"], ["1PM", "Lunch · Filo"], ["4PM", "Train or flight out"]] },
  ],
  faq: [
    { q: "Is March really cold?", a: "Mornings are crisp, afternoons are 20°C and sun. Pack a denim jacket for the evening and a linen shirt for lunch. The pool at the Hospes is technically usable from late April, not before." },
    { q: "Holy Week?", a: "Skip. Easter (Semana Santa) in Sevilla is one of the great religious processions in the world, but it's not a bachelorette occasion. Hotels triple, restaurants close, the streets are full. Go the week after Easter instead." },
    { q: "Flamenco — tablao or tabanco?", a: "Tabanco / peña. A tablao is a dinner-theatre flamenco performance for tourists; a peña is a back-room club where the dancer is sweating and the audience is local. La Carbonería is the easy entry; Casa Anselma is the deeper-cut option, if it's open." },
    { q: "Can we add Granada or Córdoba?", a: "Córdoba as a day-trip works — fifty-minute train, half a day for the Mezquita, back for dinner. Granada is too far for a day-trip; if you want the Alhambra, plan a fifth night, not a sixth-stop add-on." },
    { q: "Bachelorette accessories?", a: "Skip. Sevilla's an old city; the locals dress for dinner. A sash reads as Spring Break in a town that takes itself, gently, seriously. Pack a slip dress and a cardigan." },
  ],
  related: [
    { name: "Lisbon", slug: "lisbon", note: "Sevilla in Portuguese, with a river instead of a square.", img: IMG.lisbonHero, color: "var(--blush-deep)" },
    { name: "Mallorca", slug: "mallorca", note: "Sevilla's Mediterranean cousin, with a coast.", img: IMG.mallorcaHero, color: "var(--peach)" },
    { name: "Marrakech", slug: "marrakech", note: "Sevilla across the strait, in another language.", img: IMG.marrakechHero, color: "var(--blush-deep)" },
  ],
};
