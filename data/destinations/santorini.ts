import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const SANTORINI: DestinationCover = {
  slug: "santorini",
  title: "Santorini",
  highlight: "off-cliff",
  pullQuotePlace: "Santorini",
  tags: ["Beach", "Luxury", "Greek Islands"],
  readingTime: { minutes: 9, words: 1780, author: "M. Aldrin", photographer: "L. Bertrand", filed: "Apr 2026" },
  hero: {
    intro:
      "A four-night plan for four to six who'd rather sleep on the quieter side of the caldera than fight a thousand cruise passengers for a sunset photo. Two boat days, one wine afternoon, one dinner that justifies the airfare alone.",
    group: "4–6",
    nights: "4 (Wed→Sun)",
    perHead: "$2,000 – $3,800",
    bestMonths: "late May · June · early Oct",
    img: IMG.santoriniHero,
  },
  intro: [
    "Late May or early October is when the photographs come true. Any other week, the island has a cruise problem. Eight visits in, our position hasn't moved an inch: come twice in shoulder season, or come once and accept that the sunset you queued ninety minutes for will appear in 4,000 other Instagram stories the same night.",
    "Smart move for groups of four to six: skip Oia and base in Imerovigli or Pyrgos. Same caldera, half the staircase tax at dinner. Two boat days. Two long lunches on cliff-edge tavernas the cruise crowd never reaches. One afternoon at a Vinsanto producer in Pyrgos that we love beyond reason — ask and we'll point you to the right one.",
  ],
  stay: [
    { no: 1, name: "Vora Villas", area: "Imerovigli", color: "var(--rose)", img: "/destinations/santorini/hotel-1.jpg", note: "Five villas, each with a plunge pool that points at the volcano. Quieter than Oia, ten minutes by foot.", price: "$$$$" },
    { no: 2, name: "Aria Suites", area: "Fira", color: "var(--peach)", img: "/destinations/santorini/hotel-2.jpg", note: "Walking distance to dinner, a real plunge pool, the kind of suite that makes the bride forget the airport.", price: "$$$" },
    { no: 3, name: "Mystique, a Luxury Collection", area: "Oia", color: "var(--blush-deep)", img: "/destinations/santorini/hotel-3.jpg", note: "If you must do Oia, do it from a cave suite that opens onto a stone terrace at the cliff edge.", price: "$$$$" },
  ],
  do: [
    { hour: "Thursday 10AM", title: "A private catamaran day around the caldera, with a swim at the hot springs.", img: IMG.santorini2, color: "var(--blush)" },
    { hour: "Friday 5PM", title: "A wine-tasting afternoon at a Vinsanto producer in Pyrgos.", img: IMG.santorini3, color: "var(--rose)" },
    { hour: "Saturday 9AM", title: "A small-group hike from Fira to Oia along the caldera, three hours, easy.", img: IMG.santorini4, color: "var(--peach)" },
    { hour: "Sunday 8PM", title: "Sunset at Imerovigli — the view Oia takes credit for, without the queue.", img: IMG.santoriniHero, color: "var(--cream)" },
  ],
  night: [
    { no: 1, name: "MoMix Bar", area: "Fira", kind: "Cocktail bar", note: "The molecular-cocktail bar Santorini doesn't get enough credit for. Ask for the Smoke Show; the rest of the menu writes itself.", when: "Daily", link: "https://www.google.com/maps/search/?api=1&query=MoMix+Bar+Fira" },
    { no: 2, name: "Tango Cocktail Bar", area: "Fira", kind: "Lounge", note: "The cliff-edge lounge where you nurse a glass through sunset and the slow shift to blue hour. Quiet enough to hear yourself.", when: "Daily, sunset", link: "https://www.google.com/maps/search/?api=1&query=Tango+Bar+Fira" },
    { no: 3, name: "Casablanca Soul", area: "Fira", kind: "Live-music bar", note: "Live jazz and soul, four-piece band, locals dancing by 1AM. The closest the island gets to a night out.", when: "Friday & Saturday", link: "https://www.google.com/maps/search/?api=1&query=Casablanca+Soul+Bar" },
    { no: 4, name: "Franco's Cafe", area: "Fira", kind: "Sunset cocktail", note: "The classic Santorini ritual. Classical music on the speakers, one negroni each, sunset at 8:24. Then dinner. That's the night.", when: "Daily", link: "https://www.google.com/maps/search/?api=1&query=Franco%27s+Cafe+Fira" },
  ],
  eat: [
    { no: 1, name: "Selene", area: "Pyrgos", meal: "Wednesday dinner", note: "The first serious restaurant on the island and still the best. Seven-course tasting with the local-vintage pairing.", img: "/destinations/santorini/eat-1.jpg" },
    { no: 2, name: "To Psaraki", area: "Vlychada", meal: "Thursday lunch", note: "Harbour-side, white-washed, the catch of the day grilled whole. Eat with your hands.", img: "/destinations/santorini/eat-2.jpg" },
    { no: 3, name: "Metaxi Mas", area: "Exo Gonia", meal: "Friday dinner", note: "Inland, away from the cliff, the locals' choice. Reserve four weeks out for a table on the terrace.", img: "/destinations/santorini/eat-3.jpg" },
    { no: 4, name: "Idol", area: "Imerovigli", meal: "Saturday dinner", note: "Mediterranean tasting on a long terrace. We do this on the second-to-last night, in a slip dress.", img: "/destinations/santorini/eat-4.jpg" },
    { no: 5, name: "Galini Cafe", area: "Firostefani", meal: "Sunday breakfast", note: "Coffee, yoghurt with thyme honey, the caldera before the day-trippers arrive. The right last meal.", img: "/destinations/santorini/eat-5.jpg" },
  ],
  pullQuote: { lead: "The point of", emphasis: "off-season", tail: "is the silence.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Wednesday", color: "var(--rose)", items: [["6PM", "Arrivals · Vora Villas"], ["9PM", "Dinner · Selene"]] },
    { day: "Thursday", color: "var(--blush)", items: [["10AM", "Catamaran day"], ["3PM", "Hot-springs swim"], ["7PM", "Sunset on the terrace"], ["9:30PM", "Casual dinner · Pelican Kipos"]] },
    { day: "Friday", color: "var(--peach)", items: [["11AM", "Slow morning, plunge pool"], ["2PM", "Lunch · To Psaraki"], ["5PM", "Vinsanto tasting · Pyrgos"], ["9PM", "Dinner · Metaxi Mas"]] },
    { day: "Saturday", color: "var(--blush-deep)", items: [["9AM", "Hike Fira→Oia"], ["1PM", "Lunch · Roka"], ["5PM", "Spa hour at the villa"], ["8:45PM", "Dinner · Idol"]] },
    { day: "Sunday", color: "var(--cream)", items: [["10AM", "Galini breakfast"], ["12PM", "Departures"]] },
  ],
  faq: [
    { q: "Oia or Imerovigli?", a: "Imerovigli for sleeping, Oia for one walk-through with a coffee. The same caldera view costs half from Imerovigli, and you don't have to climb 200 steps after dinner. We do not stay in Oia anymore." },
    { q: "Cruise ships — really that bad?", a: "Yes, in July and August. The narrow streets of Fira and Oia become impassable from 11AM to 5PM. May, June, and October are entirely different islands." },
    { q: "Beach club or stick to the cliff?", a: "Skip beach clubs in Santorini. The black-sand beaches are dramatic in photos and uncomfortable in person. Spend the beach budget on a catamaran day instead." },
    { q: "Helicopter to Mykonos?", a: "Tempting, no. The ferry is two hours, scenic, half the cost, and lands you in Mykonos as a person rather than a cargo. Combine the two as one ten-day trip if you have it in you." },
    { q: "Santorini for a bachelorette of ten?", a: "We do not recommend it. Above six the dinner reservations split and the cliff-side hotels start charging by the staircase. Try Mallorca or Mykonos instead." },
  ],
  related: [
    { name: "Mykonos", slug: "mykonos", note: "Santorini's louder, larger, less vertical sister.", img: IMG.mykonosHero, color: "var(--rose)" },
    { name: "Capri", slug: "capri", note: "Santorini in Italy, with a lemon dessert.", img: IMG.capriHero, color: "var(--blush-deep)" },
    { name: "Hvar", slug: "hvar", note: "Santorini Adriatic — pine instead of pumice.", img: IMG.hvarHero, color: "var(--sage)" },
  ],
};
