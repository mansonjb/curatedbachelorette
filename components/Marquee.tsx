import { MARQUEE_ITEMS } from "@/data/manifesto";

export function Marquee() {
  const block = MARQUEE_ITEMS.concat(MARQUEE_ITEMS).concat(MARQUEE_ITEMS).concat(MARQUEE_ITEMS);
  return (
    <section
      style={{
        background: "var(--ink)",
        color: "var(--cream)",
        padding: "16px 0",
        borderTop: "1.5px solid var(--ink)",
        overflow: "hidden",
      }}
    >
      <div className="display" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
        <div className="marquee-track" style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}>
          {block.map((t, i) => (
            <span
              key={i}
              style={{
                color:
                  i % 3 === 0
                    ? "var(--blush)"
                    : i % 3 === 1
                    ? "var(--blush-deep)"
                    : "var(--cream)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
