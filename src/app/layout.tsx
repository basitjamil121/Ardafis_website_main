import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: {
    default: "Ardafis Partners | Outsourced Bookkeeping for CPA Firms",
    template: "%s | Ardafis Partners",
  },
  description:
    "Ardafis Partners provides outsourced bookkeeping, payroll, and tax-prep support to US CPA firms and solo practitioners. ACCA-qualified, QuickBooks & Xero Certified, built to scale with busy season.",
  keywords: [
    "outsourced bookkeeping for CPA firms",
    "offshore accounting support USA",
    "outsourced tax preparation",
    "outsourced payroll processing",
    "outsourced sales tax preparation",
    "1099 W-2 preparation outsourcing",
    "outsourced controller and CFO services",
    "QuickBooks Xero bookkeeping service",
  ],
  openGraph: {
    title: "Ardafis Partners",
    description:
      "Your outsourced accounts & finance team, built on precision.",
    url: siteUrl,
    siteName: "Ardafis Partners",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ardafis Partners",
    description:
      "Your outsourced accounts & finance team, built on precision.",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ardafis Partners",
  url: siteUrl,
  description:
    "Outsourced bookkeeping, payroll, and tax-prep support for US CPA firms and solo practitioners.",
  areaServed: "United States",
  priceRange: "$$",
  knowsAbout: [
    "Bookkeeping",
    "Payroll Processing",
    "Tax Preparation",
    "Sales and Use Tax Preparation",
    "1099 and W-2 Preparation",
    "Accounts Payable and Receivable",
    "Entity Setup and Software Migration",
    "Outsourced Controller and CFO Advisory",
    "Ecommerce Accounting",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
