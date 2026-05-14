import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const CAP_FERRET: DestinationCover = {
  slug: "cap-ferret",
  title: "Cap Ferret",
  highlight: "oysters at the dock",
  pullQuotePlace: "the Bassin",
  tags: ["Beach", "Slow", "Foodie"],
  readingTime: { minutes: 9, words: 1780, author: "M. Aldrin", photographer: "L. Bertrand", filed: "May 2026" },
  hero: {
    intro:
      "A four-night plan for four to eight, written for the second week of September — the moment the French summer crowd has left and the locals reclaim the peninsula. A rented house with pines and an outdoor shower, two oyster lunches at the bay, one boat across to Arcachon, and the kind of weekend that ends at 10PM because nobody's hungry.",
    group: "4–8",
    nights: "4 (Thu→Mon)",
    perHead: "$1,300 – $2,400",
    bestMonths: "late May · June · early Sept · mid-Sept",
    img: IMG.capFerretHero,
  },
  intro: [
    "Cap Ferret is what the French aristocracy escapes to when Saint-Tropez gets too loud. A skinny peninsula on the Atlantic side of the Bassin d'Arcachon, two hours west of Bordeaux, pine forest on one side and oyster beds on the other. The bride who picks Cap Ferret has usually been to Tropez or Ibiza and is over the noise — she wants the same sea, the same long lunches, and none of the tablecloth-trampoline-DJ-set machinery.",
    "We base out of a rented house — a cabane tchanquée on the bay or a pine-forest villa with a kitchen the size of a Parisian apartment. The plan is small: bike everywhere, eat oysters at the cabane where the oyster farmer is also the waiter, take one boat across to Arcachon for a long lunch, end Saturday on a quiet beach watching the sun set on the Atlantic. The bride leaves with the smell of pine and the conviction that France has a better coast than she'd been told.",
  ],
  stay: [
    { no: 1, name: "La Maison du Bassin", area: "Cap Ferret village", color: "var(--sage)", img: "/destinations/cap-ferret/hotel-1.jpg", note: "Eleven rooms in a converted hunting lodge. Family-run, the breakfast is the photo, the bar at 6PM is where the trip's plans take shape.", price: "$$$" },
    { no: 2, name: "Hôtel des Pins", area: "Cap Ferret village", color: "var(--rose)", img: "/destinations/cap-ferret/hotel-2.jpg", note: "Older Cap Ferret hotel, lower-key. Closer to the lighthouse, slightly more 'auberge' than 'boutique.' The right answer for groups of four.", price: "$$$" },
    { no: 3, name: "A rented cabane, Petit Piquey", area: "Petit Piquey", color: "var(--peach)", img: IMG.capFerret4, note: "What we book for groups of six and up. Pine trees, outdoor shower, a five-minute walk to oysters at the dock. The summer is booked by April.", price: "$$$$" },
  ],
  eat: [
    { no: 1, name: "Chez Hortense", area: "Cap Ferret pointe", meal: "Friday lunch", note: "The institution. Mussels with cream, twelve oysters per person, a pichet of Entre-deux-Mers. The lunch the trip rotates around. Reserve from June.", img: "/destinations/cap-ferret/eat-1.jpg" },
    { no: 2, name: "Pinasse Café", area: "Cap Ferret village", meal: "Saturday dinner", note: "The terrace at sunset; the kitchen that took a beach restaurant seriously. Sole meunière, oeufs mimosa, a long wine list with Margaux at the right price.", img: "/destinations/cap-ferret/eat-2.jpg" },
    { no: 3, name: "Le Mascaret", area: "Petit Piquey", meal: "Saturday lunch", note: "The oyster cabane the locals book. Sit at the wooden table outside, eat from the platter, watch the boats. Three hours minimum, four if the wind is right." },
    { no: 4, name: "La Sirène", area: "L'Herbe", meal: "Sunday lunch", note: "A bike ride away — the village with the old colored fishing huts. The dining room is fifteen tables, the kitchen makes one excellent meunière. Bookable, but walk-ups work at 1PM.", img: "/destinations/cap-ferret/eat-4.jpg" },
    { no: 5, name: "Sail Fish", area: "Cap Ferret village", meal: "Daily, espresso", note: "The coffee bar with the right pace. Order a chocolatine and the espresso. Don't hurry the second one.", img: "/destinations/cap-ferret/eat-5.jpg" },
  ],
  pullQuote: { lead: "Cap Ferret is", emphasis: "quietly", tail: "the best coast in France.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Thursday", color: "var(--rose)", items: [["4PM", "Arrivals from Bordeaux (90-min drive)"], ["6PM", "Beach walk, lighthouse path"], ["8:30PM", "Casual dinner · Le Bain de la Marée"]] },
    { day: "Friday", color: "var(--sage)", items: [["10AM", "Bike to Petit Piquey"], ["12:30PM", "Chez Hortense lunch (long)"], ["4PM", "Pool / nap"], ["8PM", "Dinner at the house, candles"]] },
    { day: "Saturday", color: "var(--blush)", items: [["11AM", "Boat to Dune du Pilat"], ["3PM", "Atlantic-side beach walk"], ["6PM", "Sunset at the cabane"], ["9PM", "Dinner · Pinasse Café"]] },
    { day: "Sunday", color: "var(--peach)", items: [["11AM", "Bike to L'Herbe"], ["1PM", "Lunch · La Sirène"], ["5PM", "Spa hour at the hotel"], ["8:30PM", "Quiet final dinner at the house"]] },
    { day: "Monday", color: "var(--cream)", items: [["9AM", "Sail Fish coffee + chocolatine"], ["11AM", "Drive back to Bordeaux"]] },
  ],
  faq: [
    { q: "How do we get there?", a: "Fly into Bordeaux, drive 90 minutes west. The TGV from Paris is three hours to Bordeaux then the same drive — if the group's coming from Paris, the train-plus-car combo is more pleasant than the regional flight." },
    { q: "August really not?", a: "August really not. Cap Ferret is two-thirds Parisians-on-holiday in August; reservations triple, the bike lanes are gridlocked, the oyster cabanes are crowded. June or September is the answer." },
    { q: "Bike or car?", a: "Bike, almost entirely. The peninsula is small, flat, and the bike lanes are excellent. We rent eight bikes from Locabeach for the week; one car at the house for the longer drives." },
    { q: "Can we add Bordeaux?", a: "Yes — one day at the start or end of the trip. The Cité du Vin is a half-day, lunch in town, late afternoon back to the peninsula. Two nights in Bordeaux would dilute the trip; one half-day adds the right amount." },
    { q: "Is the water swimmable?", a: "Bassin side: yes, all summer, warm and flat. Atlantic side: cold (Atlantic) and with currents (always read the flags). The bay is for the swim; the ocean is for the photo." },
  ],
  related: [
    { name: "Saint-Tropez", slug: "saint-tropez", note: "Cap Ferret with a harbor and more tablecloths.", img: IMG.tropezHero, color: "var(--butter)" },
    { name: "Comporta", slug: "comporta", note: "Cap Ferret in Portuguese, with dunes.", img: IMG.comportaHero, color: "var(--peach)" },
    { name: "Tuscany", slug: "tuscany", note: "Cap Ferret inland, with vines instead of pines.", img: IMG.tuscanyHero, color: "var(--sage)" },
  ],
};
