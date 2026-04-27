import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://curatedbachelorette.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Curated Bachelorette — bachelorette weekends, curated.",
    template: "%s · Curated Bachelorette",
  },
  description:
    "An editor-vetted index of bachelorette weekends — cities, vibes, and three-night plans for groups who'd rather have one very good dinner than four mediocre ones.",
  openGraph: {
    type: "website",
    siteName: "Curated Bachelorette",
    locale: "en_US",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
