import Script from "next/script";

const LMA_ID = process.env.NEXT_PUBLIC_STAY22_LMA_ID || "";

/**
 * Stay22 LetMeAllez — auto-rewrites every hotel/booking link on the page
 * (Booking, Airbnb, Expedia, Hotels.com, Vrbo, Agoda, Kayak, GetYourGuide,
 * TripAdvisor) into trackable affiliate deeplinks. Drop-in once at the
 * root layout; no per-link changes needed.
 *
 * Loads after the page is interactive so it doesn't block first paint
 * but is ready before most users click a link.
 *
 * Set NEXT_PUBLIC_STAY22_LMA_ID locally and on Vercel. If unset, this
 * component renders nothing (no broken script tag, no console error).
 */
export function Stay22LetMeAllez() {
  if (!LMA_ID) return null;

  return (
    <Script
      id="stay22-lma"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          (function (s, t, a, y, twenty, two) {
            s.Stay22 = s.Stay22 || {};
            s.Stay22.params = { lmaID: '${LMA_ID}' };
            twenty = t.createElement(a);
            two = t.getElementsByTagName(a)[0];
            twenty.async = 1;
            twenty.src = y;
            two.parentNode.insertBefore(twenty, two);
          })(window, document, 'script', 'https://scripts.stay22.com/letmeallez.js');
        `,
      }}
    />
  );
}
