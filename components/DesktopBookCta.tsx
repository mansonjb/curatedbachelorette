"use client";

import { useEffect, useState } from "react";
import { AffiliateLink } from "@/components/AffiliateLink";
import { stay22Url } from "@/lib/affiliates/stay22";

const DISMISS_KEY = "cb-desktop-cta-dismissed";

/**
 * Sticky bottom-right card on desktop, hidden under 720px (where the
 * MobileBookCta takes over the full-width bar). Slides in after a small
 * delay so it doesn't compete with the hero. Dismissable for the rest of
 * the session via sessionStorage.
 */
export function DesktopBookCta({
  city,
  contextSlug,
}: {
  city: string;
  contextSlug: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) === "1") return;
    const t = setTimeout(() => setVisible(true), 1400);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  }

  return (
    <>
      <div
        className="desktop-cta-card"
        style={{
          position: "fixed",
          right: 24,
          bottom: 24,
          zIndex: 70,
          width: 340,
          maxWidth: "calc(100vw - 48px)",
          background: "var(--bg-alt)",
          border: "1.5px solid var(--ink)",
          borderRadius: "var(--radius-lg)",
          padding: "16px 18px 16px 20px",
          boxShadow: "0 12px 32px rgba(61, 19, 32, 0.18)",
          transform: visible ? "translateY(0)" : "translateY(140%)",
          opacity: visible ? 1 : 0,
          transition: "transform 360ms cubic-bezier(0.2, 0.7, 0.2, 1), opacity 280ms",
          display: "none",
        }}
      >
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            width: 22,
            height: 22,
            borderRadius: 999,
            border: 0,
            background: "transparent",
            color: "var(--ink-soft)",
            cursor: "pointer",
            font: "inherit",
            fontSize: 14,
            lineHeight: 1,
          }}
        >
          ✕
        </button>
        <div className="eyebrow" style={{ marginBottom: 4, color: "var(--ink-soft)" }}>
          Bachelorette in {city}
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.25, marginBottom: 12, paddingRight: 18 }}>
          Lock in the hotel before the rest of your group changes their mind.
        </div>
        <AffiliateLink
          network="stay22"
          context={`${contextSlug}-desktop-cta`}
          href={stay22Url({ address: city })}
          className="btn btn-pink btn-sm"
          style={{ width: "100%", justifyContent: "center" }}
        >
          Book your stay →
        </AffiliateLink>
      </div>
      <style>
        {`
          @media (min-width: 721px) {
            .desktop-cta-card { display: block !important; }
          }
        `}
      </style>
    </>
  );
}
