import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const MALLORCA: DestinationCover = {
  slug: "mallorca",
  title: "Mallorca",
  highlight: "off-Magaluf",
  pullQuotePlace: "Mallorca",
  tags: ["Beach", "Foodie", "Mediterranean"],
  readingTime: { minutes: 10, words: 1980, author: "M. Aldrin", photographer: "L. Bertrand", filed: "Apr 2026" },
  hero: {
    intro:
      "A four-night plan for six to ten that ignores Magaluf and Palma's stag weekends and goes straight to the Tramuntana. Two boat days, one mountain village, two long lunches, and a bride who returns home thinking she has discovered something.",
    group: "6–10",
    nights: "4 (Wed→Sun)",
    perHead: "$1,400 – $2,800",
    bestMonths: "May · June · Sept · early Oct",
    img: IMG.mallorcaHero,
  },
  intro: [
    "Mallorca's a big island and most of it is, frankly, not for you. The east coast is the cliché — Magaluf, the strip, a particular kind of British vacation we'd rather pretend doesn't exist. The west — the Serra de Tramuntana — is a different country: stone villages clinging to the sea, olive terraces five centuries old, three of the best restaurants in Spain, and almost no English-speaking party traffic. Stay west; you'll thank yourself.",
    "Base in Sóller or Deià, an hour's drive from Palma airport. Boat once across to Sa Foradada (the rock with the hole) and Sa Calobra (the canyon-cove). Otherwise the bride lives at a 16th-century finca for four days — eating slowly, swimming when it's warm, reading when it isn't, and getting talked out of every plan that involves leaving the property after lunch.",
  ],
  stay: [
    { no: 1, name: "Belmond La Residencia", area: "Deià", color: "var(--rose)", img: "/destinations/mallorca/hotel-1.jpg", note: "Two stone fincas merged, two pools, an art collection that's actually good. The grande-dame answer for groups of six.", price: "$$$$" },
    { no: 2, name: "Son Brull", area: "Pollença", color: "var(--sage)", img: "/destinations/mallorca/hotel-2.jpg", note: "A converted 18th-century monastery on the north of the island. Quieter than Deià, ten minutes from the cleanest north-coast beaches.", price: "$$$$" },
    { no: 3, name: "A rented finca, Sóller", area: "Sóller valley", color: "var(--peach)", img: "/destinations/mallorca/hotel-3.jpg", note: "What we book for groups of eight or ten. Citrus orchard, a long pool, a kitchen nobody will use because lunch is always out.", price: "$$$" },
  ],
  do: [
    { hour: "Thursday 10AM", title: "A private boat day from Port de Sóller — Sa Foradada, Cala Deià for lunch.", img: IMG.mallorca2, color: "var(--blush)" },
    { hour: "Friday 11AM", title: "A small-group walk through the Tramuntana — olive terraces above Deià, two hours, lunch in a stone village.", img: IMG.mallorca3, color: "var(--rose)" },
    { hour: "Saturday 11AM", title: "A wine-and-vermouth tasting at a Binissalem winery, with a tapas lunch.", img: IMG.mallorca4, color: "var(--peach)" },
    { hour: "Sunday 9AM", title: "A morning at Cala Deià, the cove below Belmond — swim, lunch at Ca's Patró March, slowly.", img: IMG.mallorcaHero, color: "var(--cream)" },
  ],
  night: [
    { no: 1, name: "Purobeach Palma", area: "Cala Estancia", kind: "Beach club", note: "The white-on-white beach club that started the genre. Daybeds at 1PM, dinner at 9, DJ to midnight. Skip Magaluf and come here instead.", when: "Daily, May–Oct", link: "https://www.google.com/maps/search/?api=1&query=Purobeach+Palma" },
    { no: 2, name: "Marula Café", area: "Sóller", kind: "Live-music bar", note: "The off-grid Tramuntana favourite. Three musicians, twenty seats, a single negroni you'll remember. Walk-in only, opens at 9.", when: "Wednesday–Saturday", link: "https://www.google.com/maps/search/?api=1&query=Marula+Cafe+Soller" },
    { no: 3, name: "Hotel Cort rooftop", area: "Palma Old Town", kind: "Rooftop cocktail", note: "Quietly the best terrace in Palma. Pre-dinner aperitivo with a view of the cathedral; reserve a table by 8.", when: "Daily, sunset", link: "https://www.google.com/maps/search/?api=1&query=Hotel+Cort+Palma" },
    { no: 4, name: "Tito's Mallorca", area: "Paseo Marítimo", kind: "Megaclub", note: "If the bride wants one big dancefloor night, this is the answer that doesn't involve Magaluf. International DJs, Saturday only.", when: "Saturday in season", link: "https://www.google.com/maps/search/?api=1&query=Tito%27s+Mallorca" },
  ],
  eat: [
    { no: 1, name: "Es Racó d'Es Teix", area: "Deià", meal: "Wednesday dinner", note: "One Michelin star, a small dining room in a stone house, the kind of dinner that anchors the whole trip. Reserve six weeks out.", img: "/destinations/mallorca/eat-1.jpg" },
    { no: 2, name: "Ca's Patró March", area: "Cala Deià", meal: "Thursday lunch", note: "A cliffside fisherman's tavern with no road in. Walk down, eat octopus, walk back up. The lunch in every Mallorca photograph that matters.", img: "/destinations/mallorca/eat-2.jpg" },
    { no: 3, name: "Bens d'Avall", area: "Sóller coast", meal: "Friday dinner", note: "A two-Michelin-star tasting on a terrace at sunset. The wine pairing is the assignment; do not skip it.", img: "/destinations/mallorca/eat-3.jpg" },
    { no: 4, name: "Ca'n Joan de S'Aigo", area: "Palma (old town)", meal: "Saturday lunch", note: "An ensaïmada and a chocolate, in an 18th-century café, between train and tram. The sweet-stop of the trip, on the day in Palma.", img: "/destinations/mallorca/eat-4.jpg" },
    { no: 5, name: "Café Sóller", area: "Sóller plaça", meal: "Sunday breakfast", note: "Plaça-side, an espresso and a bocadillo, the morning train to Palma rumbling past. The right last meal before departures.", img: "/destinations/mallorca/eat-5.jpg" },
  ],
  pullQuote: { lead: "There are two", emphasis: "Mallorcas", tail: "and only one is real.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Wednesday", color: "var(--rose)", items: [["3PM", "Palma airport pickup"], ["5PM", "Settle at the finca"], ["8:30PM", "Dinner · Es Racó d'Es Teix"]] },
    { day: "Thursday", color: "var(--blush)", items: [["10AM", "Boat day · Port de Sóller"], ["1:30PM", "Lunch · Ca's Patró March"], ["6PM", "Pool, slow"], ["9PM", "Casual dinner · Sa Vinya"]] },
    { day: "Friday", color: "var(--peach)", items: [["11AM", "Tramuntana walk"], ["2PM", "Stone-village lunch"], ["5PM", "Spa hour"], ["8:45PM", "Dinner · Bens d'Avall"]] },
    { day: "Saturday", color: "var(--sage)", items: [["10AM", "Train to Palma"], ["1PM", "Lunch · Ca'n Joan de S'Aigo"], ["4PM", "Old-town walk"], ["8:30PM", "Dinner · Marc Fosh, Palma"]] },
    { day: "Sunday", color: "var(--cream)", items: [["9AM", "Café Sóller breakfast"], ["11AM", "Cala Deià swim"], ["3PM", "Departures"]] },
  ],
  faq: [
    { q: "Magaluf — really not?", a: "Really not. Magaluf is on the east coast, it is loud and inexpensive, and it is not what we are doing here. The Tramuntana on the west coast is a different island, an hour by car, and the difference is the entire point." },
    { q: "Fly into Palma or Mahon?", a: "Palma. Mahon is on Menorca (a separate, smaller island, also lovely, also a different trip). Palma airport is fifty minutes from Sóller and an hour from Deià." },
    { q: "Beach club or stick to coves?", a: "Coves. Mallorca's beach clubs are mostly on the south and east coasts and they are not for our brides. The west-coast calas (Cala Deià, Cala Tuent, Sa Calobra) are the photo, every time." },
    { q: "Mallorca for ten?", a: "Yes — this is the European destination on the site that scales most comfortably to ten. The finca stock above Sóller is generous, the dinner reservations forgive a group, and the boat days work as one boat for the whole crew." },
    { q: "Pair with Ibiza or Madrid?", a: "Madrid for one fancy night before, yes. Ibiza after — possible, but the contrast is harsh and the bride often regrets the second flight. We prefer Mallorca on its own, four nights, no detour." },
  ],
  related: [
    { name: "Ibiza", slug: "ibiza", note: "Mallorca's louder, smaller, more island sister.", img: IMG.ibizaHero, color: "var(--peach)" },
    { name: "Hvar", slug: "hvar", note: "Mallorca in Croatian, with lavender.", img: IMG.hvarHero, color: "var(--sage)" },
    { name: "Comporta", slug: "comporta", note: "Mallorca on the Atlantic, twice as horizontal.", img: IMG.comportaHero, color: "var(--rose)" },
  ],
};
