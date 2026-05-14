import { IMG } from "@/lib/images";
import type { DestinationCover } from "./types";

export const MARRAKECH: DestinationCover = {
  slug: "marrakech",
  title: "Marrakech",
  highlight: "in small doses",
  pullQuotePlace: "Marrakech",
  tags: ["City", "Wellness", "Morocco"],
  readingTime: { minutes: 11, words: 2080, author: "M. Aldrin", photographer: "L. Bertrand", filed: "Feb 2026" },
  hero: {
    intro:
      "A four-night plan for four to eight, written for the version of Marrakech we recommend most often: one quiet riad, one hammam, the medina in deliberate ninety-minute trips, and two long lunches in a courtyard. The opposite of a souk crawl.",
    group: "4–8",
    nights: "4 (Thu→Mon)",
    perHead: "$900 – $1,800",
    bestMonths: "Mar · Apr · Oct · Nov",
    img: IMG.marrakechHero,
  },
  intro: [
    "Marrakech is oversold and under-prepared. The version that ends up on Instagram is the souk-and-tajine cavalcade; the version that's actually worth the airfare is something else — a slow, sensory week built around one extraordinary riad and the parts of the city you can reach in twenty minutes on foot. The day-trips, the camel ride, the Sahara — those belong to a longer trip with different friends.",
    "Seven riads in, twenty restaurants deep, here's the controversial line: the medina is best in two ninety-minute doses, not in one four-hour overwhelm. Saturday morning and Sunday afternoon. Tuesday and Wednesday belong to the riad. The riad is the destination — once you accept that, the rest of the week organises itself around mint tea on a roof.",
  ],
  stay: [
    { no: 1, name: "El Fenn", area: "Bab el Ksour", color: "var(--blush-deep)", img: "/destinations/marrakech/hotel-1.jpg", note: "The riad we send people to first. Twenty-eight rooms, three pools, a roof that looks at the Atlas. Ask for a room around the central courtyard.", price: "$$$$" },
    { no: 2, name: "Riad Mena", area: "Mouassine", color: "var(--rose)", img: "/destinations/marrakech/hotel-2.jpg", note: "Six rooms, a pool the size of a bathtub, an owner who'll cook a Friday couscous if you ask. The most authentic stay we book.", price: "$$$" },
    { no: 3, name: "Royal Mansour", area: "Hivernage", color: "var(--peach)", img: "/destinations/marrakech/hotel-3.jpg", note: "The grand-resort answer, outside the medina. Private riads, a spa that's worth the airfare alone. For groups who want zero medina friction.", price: "$$$$" },
  ],
  night: [
    { no: 1, name: "Comptoir Darna", area: "Hivernage", kind: "Dinner-show", note: "The Moroccan-cabaret institution. Belly dancers between courses, a dance floor that fills by midnight, no irony. Reserve the upper level.", when: "Friday & Saturday", link: "https://www.google.com/maps/search/?api=1&query=Comptoir+Darna+Marrakech" },
    { no: 2, name: "Theatro", area: "Hivernage", kind: "Club", note: "Built inside an actual theatre. Not subtle, very Marrakech. One night, one bottle, leave by 3 — the bachelorette package the venue knows by heart.", when: "Friday & Saturday", link: "https://www.google.com/maps/search/?api=1&query=Theatro+Marrakech" },
    { no: 3, name: "Le Salama rooftop", area: "Medina", kind: "Cocktail rooftop", note: "Three floors, the top one is the one. Pre-dinner, fresh-squeezed cocktails, cushions, the call to prayer at sunset. Walk-in.", when: "Daily, sunset", link: "https://www.google.com/maps/search/?api=1&query=Le+Salama+Marrakech" },
    { no: 4, name: "Bacha Coffee at night", area: "Dar el Bacha", kind: "Late tea-room", note: "Coffee bar by day, transformed at night into a candle-lit hideaway. Mint tea, the rare thing in Marrakech that's open past 11 and still elegant.", when: "Daily until 11PM", link: "https://www.google.com/maps/search/?api=1&query=Bacha+Coffee+Marrakech" },
  ],
  eat: [
    { no: 1, name: "Le Jardin", area: "Sidi Abdelaziz", meal: "Thursday lunch", note: "An emerald-green courtyard in the medina with a tortoise. Lemon-chicken tagine, a salad, mint tea. The lunch we eat the day we arrive.", img: "/destinations/marrakech/eat-1.jpg" },
    { no: 2, name: "Nomad", area: "Souk Cherifia", meal: "Friday lunch", note: "A rooftop, modern Moroccan, the salads are the assignment. The view is the second-best view in the medina, which is fine.", img: "/destinations/marrakech/eat-2.jpg" },
    { no: 3, name: "+61", area: "Hivernage", meal: "Friday dinner", note: "Australian, sit-down, the kind of dinner that gives the palate a break in the middle of the trip. Natural wine, a martini menu, a real dessert program.", img: "/destinations/marrakech/eat-3.jpg" },
    { no: 4, name: "Dar Yacout", area: "Bab Doukkala", meal: "Saturday dinner", note: "The classic Moroccan tasting dinner. Rooftop, pre-set, six courses. Theatrical without being silly. We do this exactly once per trip.", img: "/destinations/marrakech/eat-4.jpg" },
    { no: 5, name: "Bacha Coffee", area: "Dar el Bacha", meal: "Sunday breakfast", note: "A 1910 palace, sixty kinds of coffee, a slow breakfast that stretches into noon if you let it. Reserve a courtyard table.", img: "/destinations/marrakech/eat-5.jpg" },
  ],
  pullQuote: { lead: "The medina is", emphasis: "loud", tail: "in small doses.", cite: "— M. Aldrin · From the cover essay" },
  itinerary: [
    { day: "Thursday", color: "var(--rose)", items: [["1PM", "Arrivals · El Fenn"], ["2:30PM", "Lunch · Le Jardin"], ["5PM", "Pool, riad, slowly"], ["9PM", "Casual dinner on the roof"]] },
    { day: "Friday", color: "var(--peach)", items: [["10AM", "Hammam · La Mamounia"], ["1PM", "Lunch · Nomad"], ["5PM", "Tea at the riad"], ["9PM", "Dinner · +61"]] },
    { day: "Saturday", color: "var(--blush-deep)", items: [["9AM", "Medina walk with guide"], ["12PM", "Bacha Coffee mid-morning"], ["3PM", "Pool, again"], ["8:45PM", "Dinner · Dar Yacout"]] },
    { day: "Sunday", color: "var(--sage)", items: [["11AM", "YSL garden + Berber museum"], ["1:30PM", "Lunch · La Maison Arabe"], ["6PM", "Sunset roof"], ["8:30PM", "Quiet dinner at the riad"]] },
    { day: "Monday", color: "var(--cream)", items: [["9AM", "Bacha breakfast"], ["12PM", "Departures"]] },
  ],
  faq: [
    { q: "Is Marrakech right for a bachelorette?", a: "Yes, for a specific kind. It is the wrong call for groups that want a beach or a club, and the right call for groups that want a hammam, a slow lunch in a courtyard, and a candlelit dinner that isn't trying to compete with anyone else's dinner." },
    { q: "How safe is it for a group of women?", a: "Very, in the riads and restaurants we recommend, with cabs ordered through your hotel. The medina is fine in the morning and at lunch; we don't recommend wandering at night without the riad's driver. Dress is your call but covered shoulders save you a dozen stares." },
    { q: "Should we hire a guide for the medina?", a: "Yes, on day one, for ninety minutes only. The guide we use isn't a souk-tour guide; she's a friend with a job. Email us." },
    { q: "Day-trip to the desert / Atlas?", a: "Yes for the Agafay (a small stone desert 45 minutes from the medina) and the Atlas Mountains — both make sense as a single day or evening. Skip the Sahara on a four-night trip; that one needs three days minimum and is a different vacation." },
    { q: "Drinking?", a: "Restaurants we recommend serve wine. The riads we recommend stock champagne in the room on request. Don't expect bars in the medina; we don't go to them. Cocktails happen at +61 or the Royal Mansour." },
  ],
  related: [
    { name: "Lisbon", slug: "lisbon", note: "Marrakech in Portuguese, with tile and a tram.", img: IMG.lisbonHero, color: "var(--blush-deep)" },
    { name: "Mexico City", slug: "cdmx", note: "Marrakech denser, wetter, equally architectural.", img: IMG.cdmxHero, color: "var(--rose)" },
    { name: "Saint-Tropez", slug: "saint-tropez", note: "Marrakech if Marrakech were on the sea.", img: IMG.tropezHero, color: "var(--butter)" },
  ],
};
