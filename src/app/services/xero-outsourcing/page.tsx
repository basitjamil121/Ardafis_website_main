import type { Metadata } from "next";
import PlatformPage from "@/components/PlatformPage";

export const metadata: Metadata = {
  title: "Xero Outsourcing",
  description:
    "Xero outsourcing for US CPA firms — bookkeeping, multi-currency support, app-ecosystem reconciliation, and migration from a Xero Certified team.",
  keywords: [
    "Xero outsourcing",
    "Xero bookkeeping service",
    "Xero certified advisor for CPA firms",
  ],
  alternates: { canonical: "/services/xero-outsourcing" },
};

const capabilities = [
  "Bank feed setup and reconciliation inside Xero",
  "Multi-currency accounting for clients with international vendors or customers",
  "App ecosystem support (A2X, Gusto, and other Xero integrations)",
  "QuickBooks to Xero migration and historical data conversion",
  "Custom reporting inside Xero's reporting suite",
];

export default function XeroOutsourcingPage() {
  return (
    <PlatformPage
      platform="Xero"
      icon="xero"
      title="Xero Outsourcing for US CPA Firms"
      intro="Xero's app-ecosystem-heavy clients — especially ecommerce and multi-currency businesses — are where our team spends most of its time. We work inside your existing Xero setup, not around it."
      capabilities={capabilities}
      related={[
        { label: "Ecommerce Accounting", href: "/services/ecommerce-accounting" },
        { label: "Entity Setup & Software Migration", href: "/services/entity-setup-software-migration" },
        { label: "Bookkeeping & Cleanup", href: "/services/bookkeeping" },
      ]}
    />
  );
}
