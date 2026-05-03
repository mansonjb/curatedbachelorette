export type Stay = {
  no: number;
  name: string;
  area: string;
  color: string;
  img: string;
  note: string;
  price: string;
};

export type DoItem = {
  hour: string;
  title: string;
  img: string;
  color: string;
};

export type Eat = {
  no: number;
  name: string;
  area: string;
  meal: string;
  note: string;
};

export type ItineraryDay = {
  day: string;
  color: string;
  items: [string, string][];
};

export type FaqItem = { q: string; a: string };

export type NightItem = {
  no: number;
  name: string;
  area: string;
  /** "Club" / "Beach club" / "Cocktail bar" / "Boat party" / "Dinner-show" / "Speakeasy" */
  kind: string;
  note: string;
  /** Best night to go, or "Daily" / "Weekends only". */
  when?: string;
  /** Optional outbound link — venue site, Resy, or Google Maps fallback. */
  link?: string;
};

export type RelatedItem = {
  name: string;
  slug: string;
  note: string;
  img: string;
  color: string;
};

export type DestinationCover = {
  slug: string;
  /** Display title, e.g. "Miami" — used in headlines and meta. */
  title: string;
  /** The accent word that gets the orange highlight, e.g. "slowly". */
  highlight: string;
  /** Place noun used in the pull quote ("the point of <place> is, mostly, to lie down."). */
  pullQuotePlace: string;
  tags: string[];
  readingTime: {
    minutes: number;
    words: number;
    author: string;
    photographer: string;
    filed: string;
  };
  hero: {
    intro: string;
    group: string;
    nights: string;
    perHead: string;
    bestMonths: string;
    img: string;
  };
  intro: string[];
  stay: Stay[];
  do: DoItem[];
  night?: NightItem[];
  eat: Eat[];
  pullQuote: { lead: string; emphasis: string; tail: string; cite: string };
  itinerary: ItineraryDay[];
  faq: FaqItem[];
  related: RelatedItem[];
};
