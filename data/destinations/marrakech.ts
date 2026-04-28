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
    img: IMG.hotelLobby,
  },
  intro: [
    "Marrakech is the destination that gets oversold and under-prepared. The trip we send people on is not a souk-and-tajine cavalcade; it is a slow, sensory week organized around one extraordinary riad and the parts of the city you can reach in twenty minutes. Everything else — the day-trips, the camel, the desert — is for a longer trip.",
    "We have stayed in seven riads, eaten in twenty restaurants, and have come to a small, controversial position: the medina is best in two ninety-minute doses, not in one four-hour overwhelm. Saturday morning and Sunday afternoon. Tuesday and Wednesday: stay home. The riad is the destination.",
  ],
  stay: [
    { no: 1, name: "El Fenn", area: "Bab el Ksour", color: "var(--blush-deep)", img: IMG.hotelLobby, note: "The riad we send people to first. Twenty-eight rooms, three pools, a roof that looks at the Atlas. Ask for a room around the central courtyard.", price: "$$$$" },
    { no: 2, name: "Riad Mena", area: "Mouassine", color: "var(--rose)", img: IMG.hotelRoom, note: "Six rooms, a pool the size of a bathtub, an owner who'll cook a Friday couscous if you ask. The most authentic stay we book.", price: "$$$" },
    { no: 3, name: "Royal Mansour", area: "Hivernage", color: "var(--peach)", img: IMG.hotelExterior, note: "The grand-resort answer, outside the medina. Private riads, a spa that's worth the airfare alone. For groups who want zero medina friction.", price: "$$$$" },
  ],
  do: [
    { hour: "Friday 10AM", title: "Hammam at La Mamounia, two hours.", img: IMG.cafe, color: "var(--peach)" },
    { hour: "Friday 5PM", title: "Agafay desert sunset dinner with a camel ride — 90 minutes from the medina, back by 11PM.", img: IMG.beachWalk, color: "var(--blush-deep)" },
    { hour: "Saturday 9AM", title: "A private day in the Atlas Mountains and the five Berber valleys.", img: IMG.marfa, color: "var(--sage)" },
    { hour: "Sunday 6AM", title: "A hot-air balloon over the Agafay, with a Berber breakfast on landing.", img: IMG.portrait, color: "var(--rose)" },
  ],
  eat: [
    { no: 1, name: "Le Jardin", area: "Sidi Abdelaziz", meal: "Thursday lunch", note: "An emerald-green courtyard in the medina with a tortoise. Lemon-chicken tagine, a salad, mint tea. The lunch we eat the day we arrive." },
    { no: 2, name: "Nomad", area: "Souk Cherifia", meal: "Friday lunch", note: "A rooftop, modern Moroccan, the salads are the assignment. The view is the second-best view in the medina, which is fine." },
    { no: 3, name: "+61", area: "Hivernage", meal: "Friday dinner", note: "Australian, sit-down, the kind of dinner that gives the palate a break in the middle of the trip. Natural wine, a martini menu, a real dessert program." },
    { no: 4, name: "Dar Yacout", area: "Bab Doukkala", meal: "Saturday dinner", note: "The classic Moroccan tasting dinner. Rooftop, pre-set, six courses. Theatrical without being silly. We do this exactly once per trip." },
    { no: 5, name: "Bacha Coffee", area: "Dar el Bacha", meal: "Sunday breakfast", note: "A 1910 palace, sixty kinds of coffee, a slow breakfast that stretches into noon if you let it. Reserve a courtyard table." },
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
    { name: "Lisbon", slug: "lisbon", note: "Marrakech in Portuguese, with tile and a tram.", img: IMG.lisbon, color: "var(--blush-deep)" },
    { name: "Mexico City", slug: "cdmx", note: "Marrakech denser, wetter, equally architectural.", img: IMG.cdmx, color: "var(--rose)" },
    { name: "Saint-Tropez", slug: "saint-tropez", note: "Marrakech if Marrakech were on the sea.", img: IMG.marina, color: "var(--butter)" },
  ],
};
