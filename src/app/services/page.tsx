import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ComplianceNote from "@/components/ComplianceNote";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Outsourced bookkeeping, payables & receivables, payroll, tax prep, sales tax, 1099/W-2, entity setup, advisory/CFO, and ecommerce accounting for US CPA firms.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Outsourced accounting services built for US CPA firms"
        desc="Pick a single service or hand off the full workload — every engagement runs inside the software your firm already uses."
      />
      <section className="mx-auto max-w-6xl px-6 pt-10">
        <ComplianceNote />
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-lg border border-line bg-white p-6 transition hover:border-deep-green"
            >
              <h2 className="font-display text-lg font-semibold text-deep-green">
                {s.title}
              </h2>
              <p className="mt-2 text-sm text-ink/70">{s.shortDesc}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-sage">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
