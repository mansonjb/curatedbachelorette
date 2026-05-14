import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const LAKE_COMO: DestinationCover = {
  slug: "lake-como",
  title: "Lake Como",
  highlight: "by boat, never by car",
  pullQuotePlace: "Lake Como",
  tags: ["Luxury", "Slow", "Foodie"],
  readingTime: { minutes: 9, words: 1860, author: "M. Aldrin", photographer: "L. Bertrand", filed: "May 2026" },
  hero: {
    intro:
      "A four-night plan for four to eight, written for late May or early September — the lake's two best fortnights, before and after the August week the world thinks Como is. One private boat day, one Bellagio lunch, one quiet aperitif at sunset, the rest is windows that look out at a thing too pretty to fully process.",
    group: "4–8",
    nights: "4 (Thu→Mon)",
    perHead: "$2,200 – $4,400",
    bestMonths: "late May · June · early Sept",
    img: IMG.lakeComoHero,
  },
  intro: [
    "Lake Como is the only destination on this site we recommend you arrive at by train. The ride from Milan Centrale to Varenna is sixty minutes through the Lombard countryside, the carriage empties at the lake stations, and you step off into a small village where every garden is full of azaleas in May and a ferry shows up every twenty minutes. The drive is half as long but a tenth as right.",
    "The mistake on Lake Como is to base out of Como Town. Como Town is a city — fine for a coffee, wrong for a four-night trip. We base out of Bellagio (mid-lake, the best ferry connections) or Varenna (east shore, smaller, more restaurants per metre). Cernobbio is for groups who specifically want Villa d'Este. We have stayed at all three; this trip is built around Bellagio.",
  ],
  stay: [
    { no: 1, name: "Hotel Belvedere", area: "Bellagio", color: "var(--sage)", img: "/destinations/lake-como/hotel-1.jpg", note: "A family-run grand hotel that feels like a great-aunt's house with a service team. The terrace breakfast is the photo. Half the price of Villa Serbelloni for 80% of the experience.", price: "$$$$" },
    { no: 2, name: "Grand Hotel Tremezzo", area: "Tremezzo (west shore)", color: "var(--blush-deep)", img: "/destinations/lake-como/hotel-2.jpg", note: "If you want the floating-pool photo and the white-glove service. Across the lake from Bellagio, ten minutes by boat. The full-luxury answer.", price: "$$$$" },
    { no: 3, name: "A rented villa, Tremezzina", area: "West shore villages", color: "var(--peach)", img: IMG.lakeComo4, note: "For groups of eight who want their own boat dock. The villas with private piers above Lenno are the gold standard. Book the year before for May.", price: "$$$$" },
  ],
  eat: [
    { no: 1, name: "Ristorante Silvio", area: "Bellagio (lake-edge)", meal: "Friday dinner", note: "Family-run, the freshwater fish is caught by the owner that morning. Sit on the terrace, order the perch, ask for the lemon-and-butter version.", img: "/destinations/lake-como/eat-1.jpg" },
    { no: 2, name: "La Punta", area: "Bellagio promontory", meal: "Saturday lunch alternative", note: "If you can't get to Varenna. The view is the photo, the kitchen is reliable, the lake breeze does the rest. Lunch only.", img: "/destinations/lake-como/eat-2.jpg" },
    { no: 3, name: "Il Cavatappi", area: "Varenna", meal: "Saturday lunch", note: "Eight tables in a stone-walled room. The agnolotti del plin and a bottle of Valtellina red. Two hours minimum, three if you ask for dessert.", img: "/destinations/lake-como/eat-3.jpg" },
    { no: 4, name: "Materia", area: "Cernobbio", meal: "Sunday dinner", note: "One Michelin star, less stiff than that suggests. The lake-fish raw plate, the tortelli, a list of Sicilian wines you won't see anywhere else this lake.", img: "/destinations/lake-como/eat-4.jpg" },
    { no: 5, name: "Bar Rossi", area: "Bellagio piazza", meal: "Daily, 8AM", note: "The morning espresso and the brioche con crema. The piazza fills slowly while you sit. Don't hurry the second one.", img: "/destinations/lake-como/eat-5.jpg" },
  ],
  pullQuote: { lead: "Lake Como is", emphasis: "smaller", tail: "than the photographs suggest.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Thursday", color: "var(--rose)", items: [["3PM", "Train from Milan to Varenna (60 min)"], ["4PM", "Ferry to Bellagio"], ["8:30PM", "Dinner · Silvio"]] },
    { day: "Friday", color: "var(--blush)", items: [["10AM", "Private boat — Balbianello, Comacina"], ["1:30PM", "Lunch on the boat"], ["6PM", "Pool at the hotel"], ["9PM", "Casual dinner · Bilacus"]] },
    { day: "Saturday", color: "var(--blush-deep)", items: [["11AM", "Walk Bellagio old town"], ["12:30PM", "Ferry to Varenna"], ["1:30PM", "Lunch · Il Cavatappi"], ["6PM", "Aperitif · Hotel du Lac"], ["9PM", "Late dinner · Salice Blu"]] },
    { day: "Sunday", color: "var(--peach)", items: [["10AM", "Villa Carlotta gardens"], ["1PM", "Lunch · Tremezzo terrace"], ["4PM", "Spa hour"], ["8:30PM", "Dinner · Materia"]] },
    { day: "Monday", color: "var(--cream)", items: [["8AM", "Coffee in the piazza"], ["11AM", "Ferry + train to Milan"]] },
  ],
  faq: [
    { q: "Train or car from Milan?", a: "Train, every time. Sixty-minute ride to Varenna, ten-minute walk to the ferry, you're at the hotel before the car would have cleared Milan traffic. Rent a car only if you're staying in a villa west-of-Lenno that requires it." },
    { q: "Is one private boat day enough?", a: "Yes — and that's the right answer. Two boat days on a lake feel repetitive in a way they don't on the sea. Use the second day for the lake on the ferry, which is cheap, on a schedule, and you actually walk through three villages instead of skimming past them." },
    { q: "Bellagio, Varenna, Tremezzo — what's the difference?", a: "Bellagio is the most scheduled (more restaurants, more ferry options, marginally pricier). Varenna is smaller, quieter, has fewer hotels and more day-trippers in afternoon. Tremezzo is the luxury-resort village (Grand Hotel Tremezzo, Villa Carlotta gardens). Pick Bellagio first." },
    { q: "Villa d'Este — worth it?", a: "Once, for a lunch on the floating pool deck. Not worth basing the trip out of Cernobbio for. The hotel is grand, the room rate is grand, the surrounding village is the dullest of the four lake bases." },
    { q: "Day-trip to Milan?", a: "Skip. The Milan day-trip is the bachelorette weekend's most reliable mistake. Half the group ends up shopping the Quadrilatero, the other half sitting in a café, the bride is exhausted by the train ride home. Save Milan for a separate vacation." },
  ],
  related: [
    { name: "Capri", slug: "capri", note: "Como with a sea instead of a lake.", img: IMG.capriHero, color: "var(--blush-deep)" },
    { name: "Saint-Tropez", slug: "saint-tropez", note: "Como if Como had a beach and a harbor.", img: IMG.tropezHero, color: "var(--butter)" },
    { name: "Mallorca", slug: "mallorca", note: "Como's Spanish island cousin.", img: IMG.mallorcaHero, color: "var(--peach)" },
  ],
};
