import Link from "next/link";
import StatsBar from "@/components/StatsBar";
import CostComparison from "@/components/CostComparison";
import IndustriesSection from "@/components/IndustriesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SoftwareBadges from "@/components/SoftwareBadges";
import CTASection from "@/components/CTASection";
import { services, pricingTiers } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
            Outsourced Accounting for US CPA Firms
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-deep-green md:text-5xl">
            Your Outsourced Accounts &amp; Finance Team, Built on Precision
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/75">
            Ardafis Partners gives US CPA firms and solo practitioners a
            reliable offshore team for bookkeeping, payroll, and tax-prep
            support — so you can take on more clients without hiring in-house.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-deep-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-deep-green/90"
            >
              Start a conversation
            </Link>
            <Link
              href="/pricing"
              className="rounded-md border border-deep-green px-6 py-3 text-sm font-semibold text-deep-green transition hover:bg-deep-green/5"
            >
              See pricing
            </Link>
          </div>
          <p className="mt-4 text-sm text-ink/55">
            No dedicated-staff contracts required — pay for what you use.
          </p>
        </div>
      </section>

      <StatsBar />

      {/* Services */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-deep-green">
            Services
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-lg border border-line bg-cream p-6 transition hover:border-deep-green"
              >
                <h3 className="font-display text-lg font-semibold text-deep-green">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{s.shortDesc}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-sage">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CostComparison />
      <IndustriesSection />
      <HowItWorksSection compact />
      <SoftwareBadges />

      {/* Pricing teaser */}
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
            Simple, Transparent Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-deep-green">
            Pricing
          </h2>
          <p className="mt-3 max-w-2xl text-ink/70">
            No dedicated-staff lock-in required to get started — pay for
            what you need, scale up as the relationship grows.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((p) => (
              <div
                key={p.name}
                className={`rounded-lg border p-6 ${
                  p.highlight
                    ? "border-deep-green bg-deep-green text-white"
                    : "border-line bg-white text-ink"
                }`}
              >
                <h3
                  className={`font-display text-lg font-semibold ${
                    p.highlight ? "text-white" : "text-deep-green"
                  }`}
                >
                  {p.name}
                </h3>
                <p className="mt-3 flex items-baseline gap-1">
                  <span className="text-2xl font-bold">{p.price}</span>
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
          <Link
            href="/pricing"
            className="mt-8 inline-block text-sm font-semibold text-deep-green hover:underline"
          >
            View full pricing details &rarr;
          </Link>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
            Who We Are
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-deep-green">
            An ACCA-qualified team that already speaks your workflow
          </h2>
          <p className="mt-4 max-w-3xl text-ink/75">
            Ardafis Partners was founded by ACCA-qualified accountants with
            hands-on experience across US accounting practice, ecommerce
            bookkeeping, and AI-driven automation. Our team has worked
            directly inside a US accounting firm — which means we already
            speak your software, your workflows, and your busy-season
            pressure points.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-semibold text-deep-green hover:underline"
          >
            Meet the team &rarr;
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
