import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { ScopeMockup } from "@/components/ProductMockups";
import CostComparison from "@/components/CostComparison";
import CTASection from "@/components/CTASection";
import FlowDiagram from "@/components/FlowDiagram";
import ComplianceNote from "@/components/ComplianceNote";
import PricingCards from "@/components/PricingCards";
import Reveal from "@/components/Reveal";
import { pricingFlow } from "@/lib/flows";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent per-client, hourly, and per-return pricing for outsourced bookkeeping, payroll, and tax-prep support — no dedicated-staff contracts required.",
  alternates: { canonical: "/pricing" },
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
  {
    q: "Who signs and files the work — you or us?",
    a: "You do. Our partners are ACCA-qualified, not US-licensed CPAs or EAs, so we prepare returns, filings, and workpapers to your standard, and your licensed CPA or EA reviews, signs, and retains full professional responsibility — the same as if the work were done in-house.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="Simple, Transparent Pricing"
        title="Pay for the work, not for a headcount"
        desc="No dedicated-staff lock-in required to get started — pay for what you need, scale up as the relationship grows."
        image={photos.calcLaptop.src}
        imageAlt={photos.calcLaptop.alt}
        visual={<ScopeMockup live delay={900} />}
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <PricingCards />
          <div className="mt-6">
            <FlowDiagram {...pricingFlow} />
          </div>
        </div>
      </section>

      <CostComparison />

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">FAQ</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-deep-green md:text-5xl">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="flex flex-col divide-y divide-line border-y border-line">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60} className="py-7">
                <h3 className="font-display text-xl font-semibold text-deep-green">{f.q}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <Reveal>
            <ComplianceNote />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Not sure which pricing model fits?"
        desc="Tell us the workload and we'll recommend a structure — no pressure, no obligation."
      />
    </>
  );
}
