import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const CARTAGENA: DestinationCover = {
  slug: "cartagena",
  title: "Cartagena",
  highlight: "after the rains",
  pullQuotePlace: "Cartagena",
  tags: ["City", "Beach", "Foodie"],
  readingTime: { minutes: 9, words: 1880, author: "M. Aldrin", photographer: "L. Bertrand", filed: "Apr 2026" },
  hero: {
    intro:
      "A four-night plan for six to ten, written for the second half of December — the moment Cartagena's walled city empties of cruise day-trippers and refills with locals on holiday. One Rosario Islands boat day, two long lunches in colonial courtyards, one evening that runs on no plan at all.",
    group: "6–10",
    nights: "4 (Thu→Mon)",
    perHead: "$1,100 – $2,200",
    bestMonths: "early Dec · mid-Jan · early Feb · Mar",
    img: IMG.cartagenaHero,
  },
  intro: [
    "Cartagena is the destination on this site that surprises every group we send. They land expecting a Caribbean stop with a colonial old town attached, and find a city that organizes itself around long meals, courtyard music, and a coast that feels less Cancún than Veracruz. The bride who picks Cartagena tends to be the one who's already done Tulum twice.",
    "We base out of a converted casa inside the walled city — the only sensible answer to where to stay. The beach is for one boat day to the Rosario Islands and a half-day of pool at a north-coast hotel; the rest of the trip is on foot. The bride leaves with a tan, a strong opinion about a small restaurant, and the address of a vintage emerald dealer she's keeping to herself.",
  ],
  stay: [
    { no: 1, name: "Casa San Agustín", area: "Walled city", color: "var(--rose)", img: "/destinations/cartagena/hotel-1.jpg", note: "Three colonial casas knocked together. The pool, the breakfast, the staff — everything is the right size. The trip's spine.", price: "$$$$" },
    { no: 2, name: "Sofitel Santa Clara", area: "San Diego barrio", color: "var(--blush-deep)", img: "/destinations/cartagena/hotel-2.jpg", note: "A 17th-century convent. Bigger, more formal, the better answer for groups of eight or ten. The cloister bar at sundown is the photo.", price: "$$$$" },
    { no: 3, name: "A rented house, Getsemaní", area: "Getsemaní", color: "var(--peach)", img: IMG.cartagena4, note: "The artsy barrio just outside the walls. Loud at night, lively, the rented houses have rooftops with hammocks. Not the calm option.", price: "$$" },
  ],
  do: [
    { hour: "Friday 9AM", title: "Boat to the Rosario Islands. Casa Pestagua's day-pass at Isla Marimar.", img: IMG.cartagena2, color: "var(--blush)" },
    { hour: "Saturday 11AM", title: "Walk the walled city — Centro and San Diego, with a guide for the first hour.", img: IMG.cartagena3, color: "var(--cream)" },
    { hour: "Saturday 5PM", title: "Sunset from the city walls at Café del Mar. One drink, then dinner.", img: IMG.cartagena4, color: "var(--rose)" },
    { hour: "Sunday 11AM", title: "Mercado de Bazurto with a chef-led food tour. Three hours, twelve tastings.", img: IMG.cartagenaHero, color: "var(--peach)" },
  ],
  eat: [
    { no: 1, name: "Carmen", area: "Centro", meal: "Friday dinner", note: "The eight-course tasting menu in a converted patio. Quiet, careful, the kitchen is one of the best in Latin America right now. Reserve four weeks out.", img: "/destinations/cartagena/eat-1.jpg" },
    { no: 2, name: "Celele", area: "Getsemaní", meal: "Saturday lunch", note: "Caribbean-Colombian, ingredient-driven, the room is small and the chefs are visible. The Saturday lunch that becomes the trip's main meal.", img: "/destinations/cartagena/eat-2.jpg" },
    { no: 3, name: "La Cevichería", area: "Centro", meal: "Saturday late lunch", note: "Anthony Bourdain's old recommendation, still good. Ten tables on a corner, three ceviches, a beer in a styrofoam cup. Don't dress up.", img: "/destinations/cartagena/eat-3.jpg" },
    { no: 4, name: "Alma", area: "Casa San Agustín", meal: "Sunday dinner", note: "The hotel restaurant — yes, but it earns its place. The courtyard is candlelit, the menu is short, the wine list reads like the chef's personal collection.", img: "/destinations/cartagena/eat-4.jpg" },
    { no: 5, name: "Café San Alberto", area: "Plaza San Diego", meal: "Daily, anytime", note: "The coffee program in town. The cold brew is the answer for the airport-day morning.", img: "/destinations/cartagena/eat-5.jpg" },
  ],
  pullQuote: { lead: "Cartagena", emphasis: "ends", tail: "at sunset, then begins again.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Thursday", color: "var(--rose)", items: [["3PM", "Arrivals · Casa San Agustín"], ["6PM", "Walk the walls at sunset"], ["8:30PM", "Dinner · Carmen"]] },
    { day: "Friday", color: "var(--blush)", items: [["9AM", "Rosario Islands boat (full day)"], ["6PM", "Pool back at the hotel"], ["9PM", "Casual dinner at the hotel"]] },
    { day: "Saturday", color: "var(--blush-deep)", items: [["11AM", "Walking tour, Centro + San Diego"], ["1:30PM", "Celele lunch"], ["5PM", "Sunset · city walls"], ["8:45PM", "Dinner · Alma"]] },
    { day: "Sunday", color: "var(--peach)", items: [["11AM", "Bazurto food tour"], ["3PM", "Massage at the hotel spa"], ["6PM", "Drinks in Getsemaní (Café Havana)"], ["9PM", "Late dinner · El Boliche"]] },
    { day: "Monday", color: "var(--cream)", items: [["8AM", "Coffee · Café San Alberto"], ["11AM", "Departures"]] },
  ],
  faq: [
    { q: "Is Cartagena safe?", a: "Yes, in the walled city, San Diego, and the Bocagrande peninsula — which is the entire footprint of this trip. Use Uber after dark. The barrios outside the walls (other than Getsemaní during the day) are not a tourist's destination, full stop." },
    { q: "When is the best time to go?", a: "Mid-December to mid-March, dry season. We avoid Easter week (very crowded) and August (rain plus humidity). Early February is the secret-best week." },
    { q: "Boat day — Rosario or Barú?", a: "Rosario, on a private boat with a captain. Barú is the cheap-cruise alternative; Rosario is genuinely beautiful, has the right swim spots, and includes a lunch at one of the day-pass islands. We email the captain for groups of six and up." },
    { q: "Should we hire a guide for the walled city?", a: "Yes, on the first morning, for ninety minutes. The architecture has a story we'd never reconstruct from the audio guide. Email us for the woman we use; she's also the food-tour guide on Sunday." },
    { q: "Bachelorette accessories?", a: "Skip — Cartagena is the place where they look most embarrassing. The walled city's restaurants are formal-ish, the locals dress for dinner, and the bachelorette outfit reads as Spring Break to a city that has, deliberately, nothing to do with that." },
  ],
  related: [
    { name: "Tulum", slug: "tulum", note: "Cartagena with cenotes and no walls.", img: IMG.tulumHero, color: "var(--sage)" },
    { name: "Mexico City", slug: "cdmx", note: "Cartagena bigger, drier, denser.", img: IMG.cdmxHero, color: "var(--rose)" },
    { name: "Lisbon", slug: "lisbon", note: "Cartagena's older European cousin.", img: IMG.lisbonHero, color: "var(--blush-deep)" },
  ],
};
