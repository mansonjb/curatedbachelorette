import type { ReactNode } from "react";

type Network =
  | "stay22"
  | "viator"
  | "getyourguide"
  | "discovercars"
  | "amazon"
  | "etsy";

type Props = {
  href: string;
  network: Network;
  /** Free-form tag for analytics (e.g. "miami-stay-1", "ibiza-do-2"). */
  context: string;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
};

/**
 * Single source of truth for outbound affiliate links.
 *
 * - Adds `rel="sponsored noopener nofollow"` for FTC + SEO hygiene.
 * - Opens in a new tab so the user keeps their place on the cover.
 * - Tags clicks with data-attrs so analytics can group by network/context
 *   without us touching every call site if we add tracking later.
 */
export function AffiliateLink({
  href,
  network,
  context,
  className,
  style,
  children,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener nofollow"
      data-affiliate-network={network}
      data-affiliate-context={context}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}
