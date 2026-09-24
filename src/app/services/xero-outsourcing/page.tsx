import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import CredentialBadges from "@/components/CredentialBadges";
import BrandMotif from "@/components/BrandMotif";

export const metadata: Metadata = {
  title: "Xero Outsourcing",
  description:
    "Xero outsourcing for US CPA firms — bookkeeping, multi-currency support, app-ecosystem reconciliation, and migration from a Xero Certified team.",
  keywords: [
    "Xero outsourcing",
    "Xero bookkeeping service",
    "Xero certified advisor for CPA firms",
  ],
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
    <>
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-br from-white via-white to-cream">
        <BrandMotif className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] md:-right-12 md:-top-40 md:h-[520px] md:w-[520px]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
            Platform Outsourcing
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-deep-green md:text-4xl">
            Xero Outsourcing for US CPA Firms
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">
            Xero's app-ecosystem-heavy clients — especially ecommerce and
            multi-currency businesses — are where our team spends most of its
            time. We work inside your existing Xero setup, not around it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <CredentialBadges />
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-bold text-deep-green">
            What we handle inside Xero
          </h2>
          <ul className="mt-6 flex flex-col gap-4">
            {capabilities.map((c) => (
              <li key={c} className="flex gap-3 text-ink/75">
                <span className="mt-1 text-sage">&#10003;</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-line bg-cream p-6 shadow-sm">
          <h3 className="font-display text-lg font-semibold text-deep-green">
            Related services
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              <Link href="/services/ecommerce-accounting" className="text-deep-green hover:underline">
                Ecommerce Accounting &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/services/entity-setup-software-migration"
                className="text-deep-green hover:underline"
              >
                Entity Setup &amp; Software Migration &rarr;
              </Link>
            </li>
            <li>
              <Link href="/services/bookkeeping" className="text-deep-green hover:underline">
                Bookkeeping &amp; Cleanup &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <CTASection
        title="Running your clients on Xero?"
        desc="Tell us about the workload and we'll scope it within one business day."
      />
    </>
  );
}
