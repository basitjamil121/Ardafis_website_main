import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ardafispartners.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ardafis Partners | Outsourced Bookkeeping & Accounts Services",
  description:
    "Outsourced accounts, bookkeeping & payroll for small businesses and CPA firms. QuickBooks, Xero, Sage & Odoo experts. Built on precision.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ardafis Partners",
    description:
      "Your outsourced accounts & finance team, built on precision.",
    url: siteUrl,
    siteName: "Ardafis Partners",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">{children}</body>
    </html>
  );
}
