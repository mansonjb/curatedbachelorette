import { IMG } from "@/lib/images";

export const HOUSE_RULES: [string, string, string][] = [
  ["01", "No sash. No script font.", "We refuse pink-glitter clichés. We choose the hotel you'd send your sister to instead."],
  ["02", "One very good dinner.", "Not four mediocre ones. The single best photo of every weekend is at a table with food still to come."],
  ["03", "We pay for our own rooms.", "We're an affiliate site, but we never accept comped stays. The rooms in our index are rooms we paid for."],
  ["04", "Editorial, not algorithmic.", "Every weekend on this site has been tested by an editor with their own group, in their own time, on their own dime."],
];

export type FieldNote = { tag: string; t: string; b: string; img: string; color: string };

export const FIELD_NOTES: FieldNote[] = [
  { tag: "Field study", t: "Six Miami pools, ranked.", b: "We checked in on a Saturday and lay still for three hours so you don't have to.", img: IMG.cabana, color: "var(--blush-deep)" },
  { tag: "Etiquette", t: "On the bachelorette group text.", b: "The 4 a.m. rule, the unspoken ban on all-caps, and one thing the maid of honor never apologizes for.", img: IMG.portrait, color: "var(--rose)" },
  { tag: "Guide", t: "How to host a long, slow dinner for ten.", b: "A reservation strategy, a gift for the table, and the polite art of leaving before midnight.", img: IMG.dinner, color: "var(--blush)" },
];

export const MARQUEE_ITEMS = [
  "★ Issue № 07",
  "Miami, slowly",
  "★ Charleston, soon",
  "Mexico City open",
  "★ Lisbon (sold out)",
  "Ojai pre-order",
  "★ Marfa long-form",
];
