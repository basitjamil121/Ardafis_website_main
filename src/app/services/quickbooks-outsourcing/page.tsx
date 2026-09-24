import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import CredentialBadges from "@/components/CredentialBadges";
import BrandMotif from "@/components/BrandMotif";

export const metadata: Metadata = {
  title: "QuickBooks Outsourcing",
  description:
    "QuickBooks Online and Desktop outsourcing for US CPA firms — bookkeeping, cleanup, payroll, and migration from a QuickBooks Certified team.",
  keywords: [
    "QuickBooks outsourcing",
    "QuickBooks Online bookkeeping service",
    "QuickBooks certified bookkeeper for CPA firms",
  ],
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
    <>
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-br from-white via-white to-cream">
        <BrandMotif className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] md:-right-12 md:-top-40 md:h-[520px] md:w-[520px]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
            Platform Outsourcing
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-deep-green md:text-4xl">
            QuickBooks Outsourcing for US CPA Firms
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">
            Whether your clients run QuickBooks Online or Desktop, our team
            works inside the platform you already use — no migration required
            just to bring us on.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <CredentialBadges />
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-bold text-deep-green">
            What we handle inside QuickBooks
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
              <Link href="/services/bookkeeping" className="text-deep-green hover:underline">
                Bookkeeping &amp; Cleanup &rarr;
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
              <Link href="/services/payables-receivables" className="text-deep-green hover:underline">
                Payables &amp; Receivables &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <CTASection
        title="Running your clients on QuickBooks?"
        desc="Tell us about the workload and we'll scope it within one business day."
      />
    </>
  );
}
