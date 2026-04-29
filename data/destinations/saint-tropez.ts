import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const SAINT_TROPEZ: DestinationCover = {
  slug: "saint-tropez",
  title: "Saint-Tropez",
  highlight: "in October",
  pullQuotePlace: "Saint-Tropez",
  tags: ["Luxury", "Beach", "Côte d'Azur"],
  readingTime: { minutes: 8, words: 1640, author: "M. Aldrin", photographer: "L. Bertrand", filed: "Apr 2026" },
  hero: {
    intro:
      "A three-night plan for four to eight, written for the second week of October — the moment the harbor empties, the rosé becomes a red, and the village remembers it is a fishing town. One boat day, one Pampelonne lunch, one quiet Sunday in Ramatuelle.",
    group: "4–8",
    nights: "3 (Thu→Sun)",
    perHead: "$1,800 – $3,400",
    bestMonths: "early June · early Oct",
    img: IMG.tropezHero,
  },
  intro: [
    "We do not recommend Saint-Tropez in August. The harbor is a parking lot, the dinners are seatings, the village belongs to a tour bus from Antibes. We recommend Saint-Tropez two weeks of the year: the first week of June, before it begins, and the second week of October, after it ends. Both are extraordinary.",
    "This plan is the October version. The harbor has space. La Ponche has tables. Senequier still has a coffee. The light is exactly the light Bonnard painted, and that is not a sentimental observation; it is the entire reason we keep coming back.",
  ],
  stay: [
    { no: 1, name: "Hôtel La Ponche", area: "La Ponche", color: "var(--rose)", img: IMG.hotelRoom, note: "The original. A village hotel, twenty rooms, walking distance to the port. The right answer for groups under six.", price: "$$$$" },
    { no: 2, name: "Lily of the Valley", area: "La Croix-Valmer", color: "var(--sage)", img: IMG.hotelLobby, note: "Twenty minutes from the village, a real spa, a hill of vines. We send people who want a longer breakfast and shorter dinners.", price: "$$$$" },
    { no: 3, name: "A rented house, Ramatuelle", area: "Ramatuelle hills", color: "var(--peach)", img: IMG.hotelExterior, note: "Our default for groups of six or eight. Cypress, a pool, twenty minutes to the village, fifteen to the beach.", price: "$$$" },
  ],
  do: [
    { hour: "Thursday 6PM", title: "Aperitif at Senequier, port-side, slowly.", img: IMG.cocktail, color: "var(--blush)" },
    { hour: "Friday 10AM", title: "A private boat charter in the Bay of Saint-Tropez, Cap Camarat to Pampelonne.", img: IMG.marina, color: "var(--rose)" },
    { hour: "Saturday 11AM", title: "Walk Ramatuelle. Café in the square.", img: IMG.street, color: "var(--cream)" },
    { hour: "Sunday 9AM", title: "A private day-trip down the coast — Èze village, Monte Carlo, and home by aperitivo.", img: IMG.cafe, color: "var(--peach)" },
  ],
  eat: [
    { no: 1, name: "La Ponche", area: "La Ponche", meal: "Thursday dinner", note: "The hotel restaurant, but an institution in its own right. A small dining room, the bouillabaisse, the kind of first dinner that sets the trip up." },
    { no: 2, name: "Loulou Ramatuelle", area: "Pampelonne", meal: "Friday lunch", note: "On the beach, a long lunch, the photograph of the trip will be from this table. Reservations required, even in October. Linen, please." },
    { no: 3, name: "La Vague d'Or", area: "Pampelonne", meal: "Saturday dinner", note: "Three Michelin stars, the pre-marriage dinner of the trip, no children allowed which is a relief. Pace the wine pairing or you'll lose Sunday." },
    { no: 4, name: "Le Bistrot des Lices", area: "Place des Lices", meal: "Sunday lunch", note: "Village bistro, sit outside, let lunch run two hours. The kind of meal that makes the airport feel rude." },
    { no: 5, name: "Senequier", area: "Vieux Port", meal: "Daily, 10AM", note: "Coffee, a tarte tropézienne, the harbor. Not for dinner. The tarte is the thing — three each between the table." },
  ],
  pullQuote: { lead: "Saint-Tropez is", emphasis: "small", tail: "in October.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Thursday", color: "var(--rose)", items: [["3PM", "Arrivals · La Ponche"], ["6PM", "Aperitif · Senequier"], ["8:30PM", "Dinner · La Ponche"]] },
    { day: "Friday", color: "var(--blush)", items: [["10AM", "Boat day, Pampelonne"], ["1:30PM", "Loulou lunch (long)"], ["7PM", "Pool/spa hour"], ["9PM", "Casual dinner · Le Sporting"]] },
    { day: "Saturday", color: "var(--blush-deep)", items: [["11AM", "Walk Ramatuelle"], ["1PM", "Lunch · La Vieille Auberge"], ["4PM", "Pool, again"], ["8:30PM", "Dinner · La Vague d'Or"]] },
    { day: "Sunday", color: "var(--peach)", items: [["9AM", "Place des Lices market"], ["1PM", "Lunch · Le Bistrot des Lices"], ["4PM", "Departures"]] },
  ],
  faq: [
    { q: "August really not?", a: "Really not. The 30-minute drive from the highway becomes two hours, the boat charters cost three times as much, and the harbor is full of yachts that are not interesting up close. The Saint-Tropez worth photographing is empty by 8PM." },
    { q: "Fly into Nice or fly direct?", a: "Nice. There are seasonal flights to La Môle but they're unreliable. Train to Saint-Raphaël then a thirty-minute taxi is the back-up. Rent two cars at the airport, drive in convoy, do not arrive after dark on a Friday in season." },
    { q: "Boat — half-day or full?", a: "Full. The whole point of the boat is the leisurely lunch in a calanque, and a half-day kills that. The boat we book is a 12-meter Riva-style with a captain. Email us." },
    { q: "Is October too cold to swim?", a: "The first two weeks: no. The water is sometimes warmer than the air. By the last week of October the swim is for the bold. June is the safer-warmer answer." },
    { q: "Dress code?", a: "Pampelonne is linen and a swim. La Vague d'Or is the dressy night — a slip, a heel, the only night you'll bring one. Senequier and the village are casual. The look is 'recently woken up but careful about it.'" },
  ],
  related: [
    { name: "Capri", slug: "capri", note: "Tropez on a smaller, taller Italian island.", img: IMG.marina, color: "var(--blush-deep)" },
    { name: "Ibiza", slug: "ibiza", note: "Tropez with pines and a different language.", img: IMG.beachWalk, color: "var(--peach)" },
    { name: "Mykonos", slug: "mykonos", note: "Tropez in the Cyclades.", img: IMG.hotelExterior, color: "var(--rose)" },
  ],
};
