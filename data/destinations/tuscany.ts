import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const TUSCANY: DestinationCover = {
  slug: "tuscany",
  title: "Tuscany",
  highlight: "in late September",
  pullQuotePlace: "Chianti",
  tags: ["Luxury", "Slow", "Foodie"],
  readingTime: { minutes: 10, words: 1940, author: "M. Aldrin", photographer: "L. Bertrand", filed: "Apr 2026" },
  hero: {
    intro:
      "A four-night plan for four to eight, written for late September — the week the grape harvest finishes, the wineries are still open, and the hill towns have stopped being tourist destinations and started being places people live again. A rented villa with a pool, three long lunches at vineyards, one Florence day, and a Sunday at the local market.",
    group: "4–8",
    nights: "4 (Thu→Mon)",
    perHead: "$1,800 – $3,400",
    bestMonths: "late May · June · mid-Sept · early Oct",
    img: IMG.tuscanyHero,
  },
  intro: [
    "Tuscany is the bachelorette weekend that looks like a wedding. The rented villa, the long pool, the kitchen that turns out a pasta course every night, the dressed-up Saturday dinner at a vineyard — these are also the elements of the actual wedding the bride is preparing for. We plan Tuscany trips that lean into the rehearsal: it's the weekend of a wedding without the wedding.",
    "The mistake on Tuscany is to over-program the day-trips. Three towns in a day, the half-day at the wine festival, the cooking class in the morning and the truffle hunt in the afternoon — the bride will be exhausted by Saturday. We do one Florence day, one vineyard lunch, one cooking class with the villa's resident chef, and the rest of the trip happens at the villa. The pool is the photo, the kitchen is the reason.",
  ],
  stay: [
    { no: 1, name: "Castello di Casole", area: "Casole d'Elsa", color: "var(--blush-deep)", img: "/destinations/tuscany/hotel-1.jpg", note: "A Belmond property; medieval castle, working farm, the pool overlooks the valley. For groups of six who want hotel service over villa logistics.", price: "$$$$" },
    { no: 2, name: "A rented villa, Chianti", area: "Greve / Radda area", color: "var(--sage)", img: IMG.tuscany3, note: "Our default for eight. Eight bedrooms, a chef on call, a vineyard ten minutes' drive in any direction. Book the year before for September.", price: "$$$$" },
    { no: 3, name: "Borgo Santo Pietro", area: "Chiusdino, southern Chianti", color: "var(--rose)", img: "/destinations/tuscany/hotel-3.jpg", note: "Twenty rooms, two Michelin-starred restaurant on site, a kitchen garden you can walk through before dinner. The full-luxury answer.", price: "$$$$" },
  ],
  do: [
    { hour: "Friday 10AM", title: "Vineyard tour + lunch at Castello di Ama — Chianti Classico, four hours.", img: IMG.tuscany2, color: "var(--blush)" },
    { hour: "Saturday 9AM", title: "Day in Florence — Uffizi reserved entry, lunch at Trattoria Sabatino, train back.", img: IMG.tuscany3, color: "var(--rose)" },
    { hour: "Sunday 10AM", title: "Cooking class at the villa, two hours, the pasta you'll eat at lunch.", img: IMG.tuscany4, color: "var(--peach)" },
    { hour: "Monday 9AM", title: "Greve market, Saturday-only, the cheese stall and the prosciutto man.", img: IMG.tuscanyHero, color: "var(--cream)" },
  ],
  eat: [
    { no: 1, name: "Osteria di Passignano", area: "Tavarnelle Val di Pesa", meal: "Friday dinner", note: "Antinori-family restaurant, attached to the Badia winery. Reserve the back terrace, ask for the wine pairing. The Saturday-dinner the trip ends up calling 'the dinner.'", img: "/destinations/tuscany/eat-1.jpg" },
    { no: 2, name: "La Bottega del 30", area: "Villa a Sesta", meal: "Saturday lunch alternative", note: "One Michelin star, a 1976 dining room that hasn't changed. The signora cooks; the husband pours. Lunch is six courses and you'll need a nap.", img: "/destinations/tuscany/eat-2.jpg" },
    { no: 3, name: "All'Antico Vinaio", area: "Florence", meal: "Saturday lunch", note: "The schiacciata sandwich on a queue. Order at the second window, eat standing up on Via dei Neri. Twenty minutes total.", img: "/destinations/tuscany/eat-3.jpg" },
    { no: 4, name: "Trattoria Sabatino", area: "San Frediano, Florence", meal: "Sunday lunch", note: "Communal tables, no reservations, paper menus refreshed daily. The Florentine lunch the locals queue for. Two-hour minimum.", img: "/destinations/tuscany/eat-4.jpg" },
    { no: 5, name: "The villa kitchen", area: "Wherever you're staying", meal: "Daily breakfast + Sunday dinner", note: "The reason for the villa rental. The chef makes a four-course Sunday dinner with that day's market haul. The bride asks for the recipe; she'll never make it.", img: "/destinations/tuscany/eat-5.jpg" },
  ],
  pullQuote: { lead: "Tuscany is", emphasis: "neither", tail: "a vacation nor a wedding, exactly.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Thursday", color: "var(--rose)", items: [["3PM", "Arrivals · drive from Florence (1hr)"], ["6PM", "Villa tour, pool"], ["8:30PM", "Welcome dinner cooked by the villa chef"]] },
    { day: "Friday", color: "var(--blush)", items: [["10AM", "Castello di Ama vineyard"], ["1:30PM", "Long lunch on the property"], ["6PM", "Pool / spa hour"], ["9PM", "Dinner · Osteria di Passignano"]] },
    { day: "Saturday", color: "var(--blush-deep)", items: [["8:30AM", "Train to Florence"], ["10AM", "Uffizi reserved entry"], ["1PM", "Lunch · Sabatino"], ["6PM", "Train home"], ["9PM", "Late dinner at the villa"]] },
    { day: "Sunday", color: "var(--sage)", items: [["10AM", "Cooking class at the villa"], ["1PM", "Lunch from the class"], ["4PM", "Pool, slowly"], ["8PM", "Final dinner · Borgo Santo Pietro"]] },
    { day: "Monday", color: "var(--peach)", items: [["9AM", "Greve market run"], ["12PM", "Final espresso, departures"]] },
  ],
  faq: [
    { q: "Villa or hotel?", a: "Villa for groups of six or eight; hotel for four or five. The economics flip around six guests — under that, the villa cost-per-head is brutal; over it, the villa wins and the privacy is the trip's main feature." },
    { q: "What's the right airport?", a: "Florence (FLR) if you can fly direct; Pisa otherwise, then a 90-minute drive. Rome and Milan are both more than three hours by car and not worth it. Rent two cars at the airport, drive in convoy." },
    { q: "Can we do Florence as a day-trip?", a: "Yes, and that's the right way. One full day, train in by 10AM, Uffizi or Accademia (book six weeks out), one long lunch, train back by 6PM. Don't try to stay overnight; Florence in summer is too hot and too crowded for a bachelorette base." },
    { q: "What about wine?", a: "Chianti Classico is the answer. The mistake is to plan five vineyards in three days — one is enough, the others happen at dinner. Castello di Ama, Antinori (the architecture), or Brancaia for the more modern bottle." },
    { q: "Is October too late?", a: "First two weeks of October are perfect — fewer tourists, the air is cool, the truffle season is starting. After mid-October, the rains arrive and the pool is over. Late May, early June, and mid-September are the alternatives." },
  ],
  related: [
    { name: "Lake Como", slug: "lake-como", note: "Tuscany north, with a lake instead of vines.", img: IMG.lakeComoHero, color: "var(--sage)" },
    { name: "Mallorca", slug: "mallorca", note: "Tuscany on a Spanish island.", img: IMG.mallorcaHero, color: "var(--peach)" },
    { name: "Saint-Tropez", slug: "saint-tropez", note: "Tuscany at the beach.", img: IMG.tropezHero, color: "var(--butter)" },
  ],
};
