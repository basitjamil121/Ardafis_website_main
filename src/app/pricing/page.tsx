import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CostComparison from "@/components/CostComparison";
import CTASection from "@/components/CTASection";
import { pricingTiers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent per-client, hourly, and per-return pricing for outsourced bookkeeping, payroll, and tax-prep support — no dedicated-staff contracts required.",
};

const faqs = [
  {
    q: "Do we have to sign a long-term contract?",
    a: "No. Engagements run per client, per hour, or per return — you can start small and scale up as the relationship proves out.",
  },
  {
    q: "How is work billed during tax season vs. the rest of the year?",
    a: "Bookkeeping and payables/receivables work is typically billed per client per month or hourly. Tax-season return prep is billed per return, so your costs scale directly with volume.",
  },
  {
    q: "What software do you need access to?",
    a: "Whatever your firm already uses — QuickBooks, Xero, Sage, Odoo, Drake, UltraTax, Lacerte, or ProSeries. We don't require you to switch platforms.",
  },
  {
    q: "How is our clients' data kept confidential?",
    a: "Every engagement is covered by an NDA, access is scoped per client rather than firm-wide, and credentials are never shared over unsecured channels. See our Security page for details.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Simple, Transparent Pricing"
        title="Pay for the work, not for a headcount"
        desc="No dedicated-staff lock-in required to get started — pay for what you need, scale up as the relationship grows."
      />

      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {pricingTiers.map((p) => (
              <div
                key={p.name}
                className={`rounded-lg border p-6 ${
                  p.highlight
                    ? "border-deep-green bg-deep-green text-white"
                    : "border-line bg-cream text-ink"
                }`}
              >
                <h2
                  className={`font-display text-lg font-semibold ${
                    p.highlight ? "text-white" : "text-deep-green"
                  }`}
                >
                  {p.name}
                </h2>
                <p className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{p.price}</span>
                  <span className={`text-sm ${p.highlight ? "text-white/80" : "text-ink/60"}`}>
                    {p.unit}
                  </span>
                </p>
                <p className={`mt-3 text-sm ${p.highlight ? "text-white/85" : "text-ink/70"}`}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CostComparison />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="font-display text-2xl font-bold text-deep-green">
          Frequently asked questions
        </h2>
        <div className="mt-8 flex flex-col divide-y divide-line">
          {faqs.map((f) => (
            <div key={f.q} className="py-6">
              <h3 className="font-display text-lg font-semibold text-deep-green">{f.q}</h3>
              <p className="mt-2 text-ink/70">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Not sure which pricing model fits?"
        desc="Tell us the workload and we'll recommend a structure — no pressure, no obligation."
      />
    </>
  );
}
