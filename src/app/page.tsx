import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Aurora from "@/components/Aurora";
import BigStats from "@/components/BigStats";
import CredentialBadges from "@/components/CredentialBadges";
import CostComparison from "@/components/CostComparison";
import CTASection from "@/components/CTASection";
import ComplianceNote from "@/components/ComplianceNote";
import DeliverablesBento from "@/components/DeliverablesBento";
import FirstThirtyDays from "@/components/FirstThirtyDays";
import IndustryFan from "@/components/IndustryFan";
import PlatformLogos from "@/components/PlatformLogos";
import PricingCards from "@/components/PricingCards";
import ExpandingBand from "@/components/ExpandingBand";
import HeroMockups from "@/components/HeroMockups";
import NodeField from "@/components/NodeField";
import Reveal from "@/components/Reveal";
import ServiceGroups from "@/components/ServiceGroups";
import FlowDiagram from "@/components/FlowDiagram";
import SplitFeature from "@/components/SplitFeature";
import { homeFlow } from "@/lib/flows";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-40 text-white md:pb-56">
        <Aurora />
        <NodeField />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 pt-36 md:pt-48 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div>
            <p className="enter inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-mist">
              Outsourced accounting for US CPA firms
            </p>
            <h1
              className="enter mt-7 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl"
              style={{ animationDelay: "80ms" }}
            >
              Your outsourced accounts &amp; finance team, built on precision.
            </h1>
            <p
              className="enter mt-7 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl"
              style={{ animationDelay: "160ms" }}
            >
              Bookkeeping, payroll, and tax-prep support for US CPA firms and
              solo practitioners — so you can take on more clients without
              hiring in-house.
            </p>
            <div className="enter mt-10 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
              <Link
                href="/contact#callback"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-deep-green shadow-lg shadow-black/10 transition hover:bg-cream"
              >
                Book a call <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold transition hover:bg-white/10"
              >
                See pricing
              </Link>
            </div>
            <p className="enter mt-6 text-sm text-white/55" style={{ animationDelay: "300ms" }}>
              Already working with a provider?{" "}
              <Link href="/switch-to-ardafis" className="font-semibold text-white underline-offset-4 hover:underline">
                See how switching works &rarr;
              </Link>
            </p>
            <div className="enter mt-10" style={{ animationDelay: "360ms" }}>
              <CredentialBadges />
            </div>
          </div>

          <HeroMockups />
        </div>
      </section>

      {/* Photo band: grows from a card to full width as it scrolls in */}
      <ExpandingBand image={photos.nycNight}>
        <div className="glass absolute bottom-4 left-4 max-w-xs rounded-2xl p-5 md:bottom-8 md:left-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">Built for US practices</p>
          <p className="mt-2 font-display text-lg font-semibold leading-snug text-deep-green">
            Working to your firm&apos;s calendar, deadlines, and review standards.
          </p>
        </div>
      </ExpandingBand>

      <BigStats />

      {/* Services */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">What we do</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-deep-green md:text-6xl">
                Nine service lines. One accountable team.
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-ink/60">
              Pick a single service or hand off the full workload — every
              engagement runs inside the software your firm already uses.
            </p>
          </Reveal>
          <div className="mt-14">
            <FlowDiagram {...homeFlow} />
          </div>
          <div className="mt-20">
            <ServiceGroups />
          </div>
          <Reveal className="mt-10">
            <ComplianceNote compact />
          </Reveal>
        </div>
      </section>

      <DeliverablesBento />

      {/* Industries */}
      <section className="overflow-hidden bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">Industries we support</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-deep-green md:text-6xl">
              Built for the clients your firm already serves
            </h2>
            <p className="mt-5 text-lg text-ink/60">
              Our partners bring hands-on experience across these client types —
              so the books arrive already speaking the right language.
            </p>
          </Reveal>
          <div className="mt-16">
            <IndustryFan />
          </div>
        </div>
      </section>

      <CostComparison />
      <FirstThirtyDays />
      <PlatformLogos />

      {/* Pricing */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">Engagement models</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-deep-green md:text-6xl">
                Pay for the work, not a headcount
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-ink/60">
              No dedicated-staff lock-in to get started — scale up as the
              relationship proves out.
            </p>
          </Reveal>
          <div className="mt-14">
            <PricingCards />
          </div>
          <Reveal className="mt-8">
            <Link href="/pricing" className="text-sm font-semibold text-deep-green underline-offset-4 hover:underline">
              Full pricing details &amp; FAQ &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      <SplitFeature image={photos.openOffice} eyebrow="Who we are" title="A partner-led team that already speaks your workflow">
        <p>
          Ardafis Partners was founded by ACCA-qualified accountants with
          hands-on experience across US accounting practice, ecommerce
          bookkeeping, and automation. One of our partners has worked directly
          inside a US accounting firm — so we already know your software, your
          workflows, and your busy-season pressure points.
        </p>
        <Link
          href="/about"
          className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-deep-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-moss"
        >
          Meet the partners <span aria-hidden="true">&rarr;</span>
        </Link>
      </SplitFeature>

      {/* Gulf region — glass panel over photo */}
      <section className="relative overflow-hidden">
        <Image
          src={photos.dubai.src}
          alt={photos.dubai.alt}
          fill
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/40" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal className="glass max-w-lg rounded-3xl p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">Now expanding</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-deep-green md:text-4xl">
              Extending our practice to the Gulf region
            </h2>
            <p className="mt-4 leading-relaxed text-ink/70">
              Alongside our work with US CPA firms, we&apos;re bringing outsourced
              accounting to real estate, retail, freelance, and SME clients
              across the Gulf.
            </p>
            <Link
              href="/global-reach"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-deep-green underline-offset-4 hover:underline"
            >
              See Gulf region services &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
