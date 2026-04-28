import type { ReactNode } from "react";

type Variant = "yellow" | "pink";

/**
 * Pill-shape badge wrapping a hero word, in the style of:
 *   [ room for ]   [ everyone ]
 * The shape is a heavily rounded rectangle that hugs the text.
 */
export function TicketBadge({
  children,
  variant = "yellow",
  rotate = 0,
}: {
  children: ReactNode;
  variant?: Variant;
  rotate?: number;
}) {
  const bg = variant === "yellow" ? "var(--yellow)" : "var(--pink)";
  return (
    <span
      style={{
        display: "inline-block",
        background: bg,
        color: "var(--ink)",
        padding: "0.04em 0.32em 0.12em",
        borderRadius: "9999px",
        lineHeight: 0.95,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
    >
      {children}
    </span>
  );
}
