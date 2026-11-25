import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tiera: Money, in the right order",
  description:
    "Tiera splits every naira your business earns, cash or transfer, in the order you choose: restock, your salary, family, then growth. Join the Lagos pilot.",
  openGraph: { title: "Tiera", description: "Money, in the right order.", locale: "en_NG", type: "website" },
};

export const viewport: Viewport = { themeColor: "#050A0B", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className={`${inter.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
