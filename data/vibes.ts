import { COVERS } from "@/data/destinations/covers";
import type { DestinationCover } from "@/data/destinations/types";
import { IMG } from "@/lib/images";

export type VibePrinciple = { title: string; body: string };
export type VibeFaq = { q: string; a: string };

export type Vibe = {
  slug: string;
  name: string;
  /** Tag string used in `cover.tags` to associate destinations to this vibe. */
  tag: string;
  color: string;
  /** One-line summary shown on tiles and the index. */
  note: string;
  /** Hero photo on the vibe page. */
  img: string;
  /** Long-form description rendered under the hero (1 sentence, lede). */
  description: string;
  /** Multi-paragraph editorial expansion. */
  editorial: string[];
  /** Four "what makes this vibe work" rules. */
  principles: VibePrinciple[];
  /** 4-5 vibe-specific FAQ entries (also used to emit FAQPage JSON-LD). */
  faq: VibeFaq[];
  /** Headline for "best for" / "skip if" pair shown on the page. */
  bestFor: string[];
  skipIf: string[];
};

export const VIBES: Vibe[] = [
  {
    slug: "beach",
    name: "Beach",
    tag: "Beach",
    color: "var(--peach)",
    note: "Sun, salt, a cabana, a long lunch.",
    img: IMG.miamiHero,
    description:
      "The bachelorettes built around the swim. Two boat days, one cabana, dinners with sand on the floor of the cab home.",
    editorial: [
      "A beach bachelorette is the easiest weekend to plan and the easiest one to ruin. Easy because the schedule writes itself — wake, swim, lunch, swim, dinner. Easy to ruin because the photo people post about a beach trip almost never matches what was actually fun, which means groups arrive with a Pinterest board and try to recreate it instead of doing what every good beach trip eventually settles into: lying still.",
      "We have planned a beach weekend for groups of four and groups of ten and the answer changes mostly at one point — the boat. Below six, you can rent a captained boat for one day of the trip without it becoming a logistics conversation; above eight, you need two boats or one larger one, and the budget conversation arrives. Either way, plan exactly two boat days. One is too few; three is the kind of weekend everyone's lower back regrets.",
      "Avoid August everywhere on this list. The water is the same temperature in early June and late September, and the room rate is half. The Mediterranean in October is genuinely lovely; the Caribbean in early December is the prettiest light on earth.",
    ],
    principles: [
      {
        title: "Two boat days, max.",
        body:
          "Three is too many; one is the trip you'll wish you'd extended. The second boat day is the one nobody planned to enjoy and that ends up being the photo of the weekend.",
      },
      {
        title: "Cabana, not chair.",
        body:
          "If the bride is the kind of person who'd rather not be photographed in a row of strangers, book the cabana. It's the difference between the trip being relaxing and the trip being polite.",
      },
      {
        title: "Lunch is the meal.",
        body:
          "Dinner gets shorter as the trip wears on and the sun does its work. Plan the long, careful meal at 2PM, not 9PM. Saturday lunch is when everyone is still talking.",
      },
      {
        title: "Skip August.",
        body:
          "Every Mediterranean destination on this site is twice as crowded for half the joy in August. Late May, early June, early September, early October — those are the weeks.",
      },
    ],
    faq: [
      {
        q: "How many beach days are too many?",
        a: "Four. After day four, even the bride is bored of the same beach. The four-night trips on this site (Ibiza, Mykonos, Mallorca, Comporta) all build in one day-trip or boat day so day three doesn't blur into day two.",
      },
      {
        q: "Can we do a beach bachelorette in a group of ten?",
        a: "Yes — Mallorca, Ibiza, Comporta, and Mykonos all work for ten. Below that group size, Capri and Saint-Tropez open up. Hvar starts to feel small above eight.",
      },
      {
        q: "What's the budget difference between Ibiza and, say, Mallorca?",
        a: "Roughly 30 percent. Ibiza dinners cost more, the boat charters cost more, the villas cost more. Mallorca delivers most of the same Mediterranean experience for noticeably less.",
      },
      {
        q: "Is a beach bachelorette a wedding-adjacent trip?",
        a: "It can be — Mykonos, Capri, and Saint-Tropez all see lots of pre-wedding groups. We avoid recommending the bachelorette and the wedding in the same town; the bride wants the weekend to feel different.",
      },
      {
        q: "What's the right move on Saturday night?",
        a: "Dinner, then sleep. Every beach destination on this site has at least one club worth visiting and at least three not worth visiting; the bride who wakes up well-rested for Sunday lunch makes the Sunday lunch the photo of the trip.",
      },
    ],
    bestFor: [
      "Groups of 4–10 who agree the swim is the assignment",
      "Brides who'd rather have one long lunch than four short ones",
      "Anyone planning May–June or September–October",
    ],
    skipIf: [
      "More than two people want a club night",
      "August is the only week that works",
      "The bride would rather walk a city than sit on a float",
    ],
  },
  {
    slug: "luxury",
    name: "Luxury",
    tag: "Luxury",
    color: "var(--blush-deep)",
    note: "The hotel is the destination.",
    img: IMG.capriHero,
    description:
      "When the bride doesn't want to think about logistics. Hotels with their own restaurants, spas worth the airfare, welcome drinks that arrive before you ask.",
    editorial: [
      "A luxury bachelorette is, technically, the easiest one to organize. The hotel does the work. The restaurant is on the property. The spa is on the property. The pool is on the property. The friction the rest of these vibes spend a week eliminating — booking dinners six weeks out, finding the right boat captain, sorting two cars from the airport — vanishes the moment you check in. The trade is that the trip costs roughly twice as much.",
      "What we look for in the hotel: a kitchen we'd send someone to without asterisks (Capri Palace's olive grove tasting menu, Casa Polanco's restaurant in Mexico City, the Royal Mansour in Marrakech), a spa that's worth the airfare alone, and a quiet room. Quiet is doing more work than people credit. The room next to a thirty-person hen group running ice buckets at 1AM is the room nobody enjoys, regardless of thread count.",
      "We do not recommend booking a buyout. Whole-property buyouts of small hotels work for thirty-person weddings, not eight-person bachelorettes; the property feels staffed-for-thirty and the group rattles around. Better to take six rooms in a sixteen-room hotel and have actual hosts in the lobby.",
    ],
    principles: [
      {
        title: "Eat at the hotel.",
        body:
          "At least once — usually opening night. The kitchen is the half of the experience the property pays for, the menu is the welcome, and the maitre d' becomes someone you can ask favors of for the rest of the trip.",
      },
      {
        title: "Spa morning, not spa hour.",
        body:
          "Block three hours, not one. Treatments back-to-back, side-by-side. The waiting room of a great spa is the part of the trip the bride remembers.",
      },
      {
        title: "Decline the buyout.",
        body:
          "Take six rooms in a sixteen-room hotel. The property runs better when there are non-bachelorette guests in the dining room — your group looks better, behaves better, and the staff treats you like guests instead of clients.",
      },
      {
        title: "Tip in cash, on arrival.",
        body:
          "A hundred euros to the head of housekeeping when you check in. Twenty per night in the room. The trip changes shape after that, and the bride doesn't have to ask for anything for the rest of the week.",
      },
    ],
    faq: [
      {
        q: "What's a reasonable per-head budget for a luxury weekend?",
        a: "$2,000–$4,000 for three nights, $2,500–$5,500 for four. Most of that is the room and one Saturday tasting dinner. The rest of the meals at a luxury hotel are surprisingly tame.",
      },
      {
        q: "Is the hotel restaurant always the right Saturday-night dinner?",
        a: "Not always. We tend to use the hotel for Friday and the second-best restaurant in town on Saturday — gives the trip two distinct dinners and gets the group out of the property at least once.",
      },
      {
        q: "Capri Palace, J.K. Place Capri, Belmond Hotel Caruso — what's the difference?",
        a: "Capri Palace for the spa and Anacapri quiet, J.K. Place for the harbor and the smaller-feeling property, Caruso (in Ravello) only if you want to base out of the Amalfi Coast. We stay at Capri Palace most often.",
      },
      {
        q: "How much do we tip in a luxury hotel?",
        a: "Cash, in envelopes, on departure. Concierge: €40–80. Housekeeping: €20–30 per night, in the room. Maitre d' of the restaurant: €100 if you ate there twice. The doorman: €10. Doesn't sound like much; the staff notice when it doesn't appear.",
      },
      {
        q: "Should we hire a private guide for the day-trip?",
        a: "Yes, if the day-trip is in the plan (Atlas Mountains from Marrakech, Pompeii from Capri, Coyoacán from CDMX). The hotel concierge has someone, and the price difference between the hotel's guide and a public tour is mostly worth it.",
      },
    ],
    bestFor: [
      "Groups of 4–6 who want zero logistics",
      "Brides who'd rather stay in than schedule out",
      "Anyone whose Saturday has to be perfect",
    ],
    skipIf: [
      "The group budget is below $1,500/head/night for the room",
      "The bride is bored by hotels",
      "More than eight people are coming",
    ],
  },
  {
    slug: "city",
    name: "City",
    tag: "City",
    color: "#F4C4D8",
    note: "Walking-distance everything.",
    img: IMG.cdmxHero,
    description:
      "Capital-city bachelorettes for groups that prefer a museum to a beach. Two great dinners, one walk, one quietly extraordinary day-trip you'll cite as the best part.",
    editorial: [
      "A city bachelorette is the most underrated weekend on this site. The bride who picks the city over the beach is signaling something — that she'd rather be doing than lying down, that she'd rather come back with one strong opinion about a small restaurant than a tan. The pace is faster, the photos are better, the airfare is often cheaper. The risk is that you over-book the schedule and arrive at Sunday tired.",
      "We plan city weekends backwards from a single dinner reservation. CDMX's is at Contramar, Lisbon's is at Belcanto, Marrakech's is the rooftop dinner at Dar Yacout — book those first, then arrange the rest of the weekend so the bride arrives at the table rested. Everything else (museum, walking tour, market) becomes the half-day shape that delivers the group to the dinner.",
      "Avoid two-night city trips. The flight is too long for the time on the ground. Mexico City and Marrakech are four-night trips; Lisbon is a three- or four-night trip; the only city we'd consider for two nights is somewhere we lived once.",
    ],
    principles: [
      {
        title: "Book the dinner first.",
        body:
          "The Saturday-night reservation is the spine of a city weekend. Lock it before the hotel, before the flights, before anything. Six-to-eight weeks out for the cities on this site.",
      },
      {
        title: "One walking tour. Ninety minutes.",
        body:
          "A private guide for the first morning. Not the four-hour tour, not the audio guide; ninety minutes with a person who knows the city, after which the rest of the trip makes sense.",
      },
      {
        title: "Day-trip on day three.",
        body:
          "Sintra from Lisbon, Teotihuacán from CDMX, Atlas Mountains from Marrakech. Saved for day three, when the energy in the group has dipped and the day-trip provides the second wind.",
      },
      {
        title: "Skip the rooftop bar.",
        body:
          "Every city has one Instagrammed rooftop the bachelorettes are filling, and one quiet rooftop the locals use. The locals' rooftop is the answer. Ask the dinner reservation.",
      },
    ],
    faq: [
      {
        q: "What's the right number of dinners on a four-night city trip?",
        a: "Three. One arrival dinner (casual, near the hotel), one tasting/landmark dinner on Saturday, one quiet last-night. Lunches do the heavy lifting — Sunday lunch in a courtyard is often the best meal of the trip.",
      },
      {
        q: "Should we use a tuk-tuk / Uber / private car?",
        a: "Private car for the first morning's tour, Uber for the rest. The tuk-tuk in Lisbon is genuinely the best way to see the city in ninety minutes; in CDMX and Marrakech, Uber is reliable and cheap.",
      },
      {
        q: "Is a city bachelorette the wrong call if the group wants to drink?",
        a: "Not at all — the cities on this site have better bars than the beach destinations. The trade is that the rhythm is two dinners and a late drink, not a club until 4AM. The bride wakes up rested.",
      },
      {
        q: "Best city for a smaller group?",
        a: "Lisbon for four to six. CDMX for four to ten. Marrakech for four to eight; the riads are small, and a group of ten fills three of them at once.",
      },
      {
        q: "Can a city bachelorette include a beach?",
        a: "Lisbon plus Comporta (90 minutes south) is the answer. Half the trip in town, half on the dunes. We're writing the cover.",
      },
    ],
    bestFor: [
      "Groups who'd rather walk than swim",
      "Brides who like to come home with a strong opinion",
      "Anyone tired of the August beach scene",
    ],
    skipIf: [
      "The group's idea of a vacation is a chair and a book",
      "The flight is more than 8 hours and the trip is 3 nights",
      "The bride is post-injury and walking is hard",
    ],
  },
  {
    slug: "foodie",
    name: "Foodie",
    tag: "Foodie",
    color: "var(--rose)",
    note: "Reservation-first weekends.",
    img: IMG.lisbonHero,
    description:
      "Built backwards from the dinner reservations. Three days, six restaurants, one of which the bride will dream about for a year.",
    editorial: [
      "A foodie bachelorette is the city bachelorette's serious older sister. Same logic — book the dinners first — but more of them, and the trip is structured around them. The walks, the half-days, the spa hour all exist to deliver the group to the next table relaxed and ready.",
      "We plan six restaurant meals across three nights: Friday dinner, Saturday lunch, Saturday dinner, Sunday brunch, Sunday lunch, Sunday dinner. (One of those usually drops to a market visit or a hotel meal once the group sees the schedule.) The structural rule: never two big meals in a row. Saturday lunch is light if Saturday dinner is the tasting menu; Friday dinner is casual if Saturday is two reservations.",
      "Lisbon, Mexico City, and Mallorca are our foodie covers. All three have menus that justify the airfare and dining rooms small enough that you can recognize the chef. We avoid New York and Paris on this site because the bride who wants either of those isn't a bachelorette case — she'd rather take her mother. Tropez is a foodie destination if you ignore the chair-rental beach part.",
    ],
    principles: [
      {
        title: "Six weeks out, no exceptions.",
        body:
          "The dinners on a foodie weekend get booked six to eight weeks out, before the hotel and before the flights. If the dinner can't be booked, the trip changes shape.",
      },
      {
        title: "Never two tasting menus in a row.",
        body:
          "Friday tasting + Saturday tasting is a hospital trip. Always sandwich a casual lunch between two big nights, and always plan a no-reservation Sunday lunch.",
      },
      {
        title: "Sit at the bar, not the banquette.",
        body:
          "If the restaurant has a counter, take it. The chef explains the dish, the pace is faster, the conversation between the group is tighter. The banquette is for civilians.",
      },
      {
        title: "One market morning.",
        body:
          "Mexico City's Mercado de Coyoacán, Lisbon's Time Out Market, Mallorca's Mercat de l'Olivar. Saturday morning, two hours, plus the breakfast on the way home. The trip earns the rest of its meals there.",
      },
    ],
    faq: [
      {
        q: "How many restaurants is too many?",
        a: "Eight in three nights. Above that, the group's palate stops registering nuance and the bride starts asking for a salad. Six is the right number; seven is the maximum.",
      },
      {
        q: "Should we hire a chef for one night?",
        a: "Maybe. In Mallorca and Mexico City, a private chef in the rented house is excellent — usually Friday or Sunday night when nobody wants to dress for dinner. Skip in Lisbon, where the restaurant scene is the point.",
      },
      {
        q: "What's the right dress code for the Saturday tasting menu?",
        a: "The hotel will tell you. As a rule: linen at the beach destinations, a slip dress or a wider trouser at the city restaurants, a closed-toe shoe at the very fancy ones. Nobody on this list requires a jacket.",
      },
      {
        q: "Are tasting menus appropriate for a bachelorette?",
        a: "Yes if the bride is into food; absolutely not if she isn't. The fastest way to make a group resentful is a four-hour tasting that the bride is politely sitting through.",
      },
      {
        q: "Should we pre-order the wine pairing?",
        a: "If the restaurant offers it. The pour size is smaller than guests order on their own, the pace is calibrated to the food, and you don't end up at the third-bottle conversation that ruins Sunday.",
      },
    ],
    bestFor: [
      "Groups whose group chat is mostly recipes",
      "Brides who'd dream about Saturday's dinner for a year",
      "Anyone happy to budget more for food, less for the room",
    ],
    skipIf: [
      "The bride is a picky eater",
      "More than two in the group are vegetarian and the rest aren't",
      "Anyone in the group is on a strict diet during the trip",
    ],
  },
  {
    slug: "wellness",
    name: "Wellness",
    tag: "Wellness",
    color: "var(--sage)",
    note: "Hammam. Hike. Then a bath.",
    img: IMG.marrakechHero,
    description:
      "For groups that have all texted, separately, that they'd rather not party. Hot yoga, a real spa morning, a hike that ends at lunch. Nobody is on a phone after 9PM.",
    editorial: [
      "A wellness bachelorette is the easiest sell to a difficult group. Most of the friction in planning a weekend (clubs vs no-clubs, dinners vs cooking-in, late nights vs early starts) disappears the moment the group agrees to spend two of the three mornings in a spa. The bride who picks wellness is signaling, charitably, that she'd rather come home rested than hungover.",
      "The mistake is to overprogram. A wellness weekend is a few well-chosen experiences with long gaps between them, not a five-class-a-day yoga retreat. We aim for: one hammam (Marrakech is the destination), one hike that ends at lunch, one massage, one cold-plunge or pool morning, and three uninterrupted hours of nothing per day. The bride should leave the trip with a ticket to two days she didn't book.",
      "Marrakech, Mallorca and Lisbon all do this beautifully. Mexico City's spa scene is excellent (the Rosewood and the St. Regis both run real programs). We avoid Capri and Saint-Tropez for this vibe — they have spas but the rest of the destination is built for spectacle, and a wellness weekend asks for quiet.",
    ],
    principles: [
      {
        title: "Two mornings, two spas.",
        body:
          "Day one and day three. Three-hour blocks, side-by-side treatments where possible. The middle day is for the hike or the swim. Don't book three back-to-back — even the spa staff can tell.",
      },
      {
        title: "No phones after 9PM.",
        body:
          "Said once, on the first night. The group enforces it among themselves. This is the rule that does the most work in a wellness weekend; without it, the spa morning never quite recovers from Saturday's group chat.",
      },
      {
        title: "Move once a day.",
        body:
          "A walk, a swim, a class. Not three, not five. The rest of the day is for the after-effect of the one. Wellness isn't bootcamp.",
      },
      {
        title: "One real dinner, the rest light.",
        body:
          "Saturday is the dinner. Friday and Sunday are casual — a salad on the terrace, a lunch that runs into late afternoon. Big dinners every night undermine the morning.",
      },
    ],
    faq: [
      {
        q: "Is Marrakech actually a wellness destination?",
        a: "Yes. The hammam at La Mamounia is one of the great spa experiences in any city we cover. Combine it with the riad pool, two long lunches, and a single Atlas Mountains day-trip and you have a four-night wellness weekend that doesn't feel like one.",
      },
      {
        q: "Can we add a fitness component?",
        a: "Yes — most of our destinations have a serious yoga studio (Yoga Saint Germain in Lisbon, Casa Sodexo in CDMX, Mallorca's coast for SUP and pilates by the sea). Build it as one optional class per day, not the schedule.",
      },
      {
        q: "What about a wellness weekend with no alcohol?",
        a: "Easy in Marrakech, harder in Mediterranean destinations where the wine is part of the food. We don't tell the bride 'no wine' but we plan a soft-drink Saturday lunch and a herbal-tea Sunday breakfast — the body notices.",
      },
      {
        q: "Should we hire a private trainer?",
        a: "Only if the bride is a serious athlete. Otherwise, the hotel's group classes are right-sized for a bachelorette weekend. The trainer becomes a logistics burden in a group of more than four.",
      },
      {
        q: "Hammam protocol — do we go nude?",
        a: "Top off, bottoms on; that's the convention in Morocco. The attendant tells you what to do. Bring a swimsuit you don't mind getting argan-oiled. The bride goes first.",
      },
    ],
    bestFor: [
      "Groups who've all said, separately, 'I'd rather not party'",
      "Brides who want the trip to feel like recovery",
      "Anyone planning the weekend two months before the wedding",
    ],
    skipIf: [
      "The bride wants Saturday night to be a club",
      "More than two in the group treat the spa as boring",
      "The flight is short and the trip is two nights",
    ],
  },
  {
    slug: "slow",
    name: "Slow",
    tag: "Slow",
    color: "var(--cream)",
    note: "House rentals. Long lunches.",
    img: IMG.comportaHero,
    description:
      "The bachelorettes that look like nothing. A rented house with a porch, three lunches that run two hours, the bride returns tan and rested.",
    editorial: [
      "A slow bachelorette is the bachelorette that looks like nothing on the schedule and ends up being the trip everyone in the group cites for years. It's the rented house with the pool, the breakfast that turns into lunch, the afternoon that turns into another swim. There is no dress-up dinner, no boat day, no scheduled photo. The bride wakes up at her own pace, and the group eventually settles into the same.",
      "We plan slow weekends in Comporta, Mallorca's Tramuntana, the Hudson Valley, and the back roads of Provence (a private cover for Saint-Tropez we've considered). The hotel doesn't matter; the rented house is the point. We look for an oven nobody uses, a porch that holds eight people on stools, and a town within twenty minutes that has exactly one good restaurant we can walk to on Saturday night.",
      "The mistake is to fill the slow trip with a small program — one yoga class, one paddle-board lesson, one drive to a town for an ice cream — under the assumption that nothing-to-do is boring. The bride didn't pick this vibe by accident. Defend the empty calendar; the trip becomes the empty calendar.",
    ],
    principles: [
      {
        title: "The house is the destination.",
        body:
          "Pick the house first, the country second. A great house in Comporta wins over a mediocre house in a 'better' destination. Look for a kitchen, a porch, and a pool that gets late-afternoon sun.",
      },
      {
        title: "Three lunches, two dinners.",
        body:
          "Most of the food is at home. The two restaurants are reservations on day two and day three of the weekend. Friday night is whatever someone in the group cooks; Sunday lunch is leftovers.",
      },
      {
        title: "One bottle, one round.",
        body:
          "Buy the wine at the local market. Open one bottle at a time. Stop at one round of cocktails before dinner. The slow trip's pace dies when the bar opens at 5PM.",
      },
      {
        title: "The bride sets the schedule.",
        body:
          "If she sleeps in until ten, breakfast is at ten. Nobody is being polite about it. The slow trip is the only one where the planner steps back and lets the bride steer.",
      },
    ],
    faq: [
      {
        q: "Where do we look for a house rental?",
        a: "Locally, ideally — every destination has a small agency the locals use that beats the global platforms. Email us for the contact in each region. As a fallback, the higher-end options on Plum Guide, Boutique Homes, and Le Collectionist are worth the surcharge.",
      },
      {
        q: "Should we hire a private chef for the house?",
        a: "Yes, once. Saturday night, eight to ten people, four courses, finishes by 10PM. Don't hire for every night — half the point of a slow weekend is using the kitchen.",
      },
      {
        q: "What about cleaning?",
        a: "Pre-arranged daily. Even at €40/day per cleaner, the trip is dramatically more relaxed when the towels are managed.",
      },
      {
        q: "How many bedrooms is the right number?",
        a: "One per couple, or one per person in a group of four to six. In a group of eight, two doubles plus four singles is the formula. Nobody on a slow trip wants to share at midnight.",
      },
      {
        q: "Best slow destinations on this site?",
        a: "Comporta is the platonic slow weekend. Mallorca's interior for groups who want some restaurants nearby. Lisbon plus four nights in a Comporta house is the upgraded version of the Lisbon cover.",
      },
    ],
    bestFor: [
      "Groups who'd rather rent a house than book a hotel",
      "Brides who want the trip to feel like vacation, not project",
      "Anyone whose family has done a beach house weekend that worked",
    ],
    skipIf: [
      "The bride wants the trip to be 'big'",
      "Two or more in the group can't cook even basics",
      "The group is so large the house starts to need 8+ bedrooms",
    ],
  },
];

/**
 * Build the destination → vibes lookup.
 * `cover.tags` is the source of truth — adding a new destination automatically
 * lights it up under every matching vibe page (no hand-maintained list).
 */
export function destinationsForVibe(slug: string): DestinationCover[] {
  const vibe = VIBES.find((v) => v.slug === slug);
  if (!vibe) return [];
  return Object.values(COVERS).filter((c) => c.tags.includes(vibe.tag));
}

export function vibeBySlug(slug: string): Vibe | undefined {
  return VIBES.find((v) => v.slug === slug);
}
