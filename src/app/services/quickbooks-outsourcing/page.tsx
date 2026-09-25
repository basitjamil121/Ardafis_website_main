import type { Metadata } from "next";
import PlatformPage from "@/components/PlatformPage";

export const metadata: Metadata = {
  title: "QuickBooks Outsourcing",
  description:
    "QuickBooks Online and Desktop outsourcing for US CPA firms — bookkeeping, cleanup, payroll, and migration from a QuickBooks Certified team.",
  keywords: [
    "QuickBooks outsourcing",
    "QuickBooks Online bookkeeping service",
    "QuickBooks certified bookkeeper for CPA firms",
  ],
  alternates: { canonical: "/services/quickbooks-outsourcing" },
};

const capabilities = [
  "Bank feed setup, review, and categorization rules",
  "Class and location tracking for multi-entity or multi-location clients",
  "QuickBooks Desktop to QuickBooks Online migration",
  "App ecosystem support (Bill.com, A2X, Gusto, and other QBO integrations)",
  "Custom report and dashboard building inside QuickBooks Online",
];

export default function QuickBooksOutsourcingPage() {
  return (
    <PlatformPage
      platform="QuickBooks"
      icon="quickbooks"
      title="QuickBooks Outsourcing for US CPA Firms"
      intro="Whether your clients run QuickBooks Online or Desktop, our team works inside the platform you already use — no migration required just to bring us on."
      capabilities={capabilities}
      related={[
        { label: "Bookkeeping & Cleanup", href: "/services/bookkeeping" },
        { label: "Entity Setup & Software Migration", href: "/services/entity-setup-software-migration" },
        { label: "Payables & Receivables", href: "/services/payables-receivables" },
      ]}
    />
  );
}
