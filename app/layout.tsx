import type { Metadata } from "next";
import {
  Archivo,
  Bricolage_Grotesque,
  Caveat,
  Fraunces,
  Space_Mono,
} from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
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
    <html
      lang="en"
      className={`${archivo.variable} ${bricolage.variable} ${fraunces.variable} ${caveat.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
