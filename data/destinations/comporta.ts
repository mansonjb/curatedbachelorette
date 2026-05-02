import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const COMPORTA: DestinationCover = {
  slug: "comporta",
  title: "Comporta",
  highlight: "barefoot",
  pullQuotePlace: "Comporta",
  tags: ["Beach", "Slow", "Wellness"],
  readingTime: { minutes: 8, words: 1620, author: "M. Aldrin", photographer: "L. Bertrand", filed: "Apr 2026" },
  hero: {
    intro:
      "A four-night Atlantic plan for four to eight, an hour south of Lisbon by car. Pine forest, twelve kilometres of empty beach, three rice fields, and the unspoken agreement that nobody is wearing makeup before 7PM.",
    group: "4–8",
    nights: "4 (Thu→Mon)",
    perHead: "$1,200 – $2,400",
    bestMonths: "late May · June · Sept",
    img: IMG.comportaHero,
  },
  intro: [
    "Comporta is where you go when somebody in the group chat has typed, in all caps, NO CITIES. It's a strip of pine and sand on the Setúbal peninsula, an hour south of Lisbon by car, with no traffic, no chain hotels, and almost no signage. Quietly fashionable for fifteen years, somehow still not on the radar of the people who'd ruin it.",
    "Fly into Lisbon. Hire a car (one per four guests; the parking lots are sand). Drive south. The drive in is the decompression — by the time you reach the rice fields, the group chat has gone quiet and the bride has stopped checking her phone. After that, half-days only. One trip into Carvalhal for the bakery, one to Comporta village for the linen-shop browse, one boat across to Tróia. Otherwise, the beach.",
  ],
  stay: [
    { no: 1, name: "Quinta da Comporta", area: "Carvalhal", color: "var(--sage)", img: "/destinations/comporta/hotel-1.jpg", note: "A wellness-leaning quinta with seventy rooms, a real spa, and a pool that points at the rice fields. Easiest sell to a difficult group.", price: "$$$$" },
    { no: 2, name: "Sublime Comporta", area: "Muda", color: "var(--peach)", img: "/destinations/comporta/hotel-2.jpg", note: "Twenty-two villas tucked into the cork forest, each with a plunge pool and a hammock. The right answer for groups of six.", price: "$$$$" },
    { no: 3, name: "A rented stilted casa", area: "Pego", color: "var(--rose)", img: IMG.comporta4, note: "What we book for groups of eight. Wood, white linen, a path through the dunes that ends at the ocean.", price: "$$$" },
  ],
  do: [
    { hour: "Thursday 5PM", title: "A walk down the dune path to the ocean. The whole trip resets.", img: IMG.comporta2, color: "var(--rose)" },
    { hour: "Friday 10AM", title: "A horseback ride along Pego beach at low tide, two hours.", img: IMG.comporta3, color: "var(--peach)" },
    { hour: "Saturday 11AM", title: "A private day-trip across the river to Setúbal — Arrábida cliffs, a fish lunch, dolphin spotting.", img: IMG.comporta4, color: "var(--blush)" },
    { hour: "Sunday 4PM", title: "A wine-and-cheese tasting at a small producer in the hills above Comporta.", img: IMG.comportaHero, color: "var(--cream)" },
  ],
  eat: [
    { no: 1, name: "Cavalariça", area: "Comporta village", meal: "Thursday dinner", note: "A converted horse stable, white-washed, the chef's tasting on a small handwritten menu. Pre-order the suckling pig if it's on the day's list." },
    { no: 2, name: "Sal", area: "Pego beach", meal: "Friday lunch", note: "Beachside, feet in the sand, fresh fish and a long lunch. Reserve a week out, a 1PM table, no rush." },
    { no: 3, name: "Sublime Beach Club", area: "Carvalhal", meal: "Saturday lunch", note: "The hotel's beach club — open to outside guests, one of the best fish soups on the peninsula. Linen, please." },
    { no: 4, name: "Dona Bia", area: "Carrasqueira", meal: "Saturday dinner", note: "An old fisherman's tavern in a stilt-house village. No-frills, the catch of the day, the kind of room nobody photographs." },
    { no: 5, name: "JNcQUOI Deli", area: "Comporta village", meal: "Sunday breakfast", note: "Pastries, a strong espresso, the Sunday papers. The right last morning before the drive back." },
  ],
  pullQuote: { lead: "Comporta is", emphasis: "horizontal", tail: "for four straight days.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Thursday", color: "var(--rose)", items: [["3PM", "Lisbon airport pickup"], ["5PM", "Arrive at the casa"], ["6PM", "Walk to the dunes"], ["8:30PM", "Dinner · Cavalariça"]] },
    { day: "Friday", color: "var(--peach)", items: [["10AM", "Horseback on Pego"], ["1:30PM", "Lunch · Sal"], ["5PM", "Pool, slow"], ["9PM", "Dinner · Comporta Café"]] },
    { day: "Saturday", color: "var(--blush)", items: [["11AM", "Setúbal day-trip"], ["3PM", "Sublime Beach Club lunch"], ["7PM", "Sunset, dunes"], ["9PM", "Dinner · Dona Bia"]] },
    { day: "Sunday", color: "var(--sage)", items: [["10AM", "Yoga at the quinta"], ["1PM", "Lunch · Comporta Café"], ["4PM", "Wine tasting · the hills"], ["8:30PM", "Quiet dinner at home"]] },
    { day: "Monday", color: "var(--cream)", items: [["9AM", "JNcQUOI breakfast"], ["11AM", "Drive to Lisbon"]] },
  ],
  faq: [
    { q: "Lisbon for two nights, then Comporta?", a: "Yes — it's the favourite combination of brides we send. Wednesday/Thursday in Lisbon, Friday through Monday in Comporta. The drive between them is an hour, the contrast is the point." },
    { q: "Do we need a car?", a: "Yes, two cars for groups of four to eight. There are no taxis in Comporta and the restaurants we recommend are spread across thirty kilometres of pine forest. Pre-book at the airport, automatic transmission only." },
    { q: "Beach or pool?", a: "Beach in the morning (low tide, before 11AM, before the sun is brutal), pool in the afternoon (after lunch, with a book, until aperitif). Repeat for four days." },
    { q: "Dress code?", a: "Linen. Slip dresses at dinner. The look is 'I have just walked back from the beach,' on purpose. There is no occasion in Comporta that calls for a heel." },
    { q: "Comporta in August?", a: "It's the one Portuguese destination we'd say is fine in August — the population doubles but it's still empty by Mediterranean standards. The downside is heat; we still prefer June." },
  ],
  related: [
    { name: "Lisbon", slug: "lisbon", note: "Comporta's city pair, an hour north.", img: IMG.lisbonHero, color: "var(--blush-deep)" },
    { name: "Mallorca", slug: "mallorca", note: "Comporta in Spanish, with mountains.", img: IMG.mallorcaHero, color: "var(--peach)" },
    { name: "Hvar", slug: "hvar", note: "Comporta in Croatian, with pines.", img: IMG.hvarHero, color: "var(--sage)" },
  ],
};
