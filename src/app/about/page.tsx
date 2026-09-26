import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BigStats from "@/components/BigStats";
import CredentialBadges from "@/components/CredentialBadges";
import CTASection from "@/components/CTASection";
import FlowDiagram from "@/components/FlowDiagram";
import Reveal from "@/components/Reveal";
import SplitFeature from "@/components/SplitFeature";
import { staffingFlow } from "@/lib/flows";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the ACCA-qualified team behind Ardafis Partners — outsourced accounting built on US practice experience, ecommerce bookkeeping, and automation.",
  alternates: { canonical: "/about" },
};

const team = [
  {
    name: "Basit Jamil",
    role: "Operations & Delivery Lead",
    bio: "ACCA-qualified with several years of hands-on bookkeeping experience. Leads day-to-day delivery and client onboarding, making sure every engagement runs on the software and workflow your firm already uses.",
  },
  {
    name: "Muhammad Faizan",
    role: "US-Market & Business Development Lead",
    bio: "ACCA-qualified with five years of experience working directly inside a US accounting firm. Brings first-hand familiarity with US compliance workflows, busy-season pressure points, and the software CPA firms rely on.",
  },
  {
    name: "Hasnat Rana",
    role: "Service Delivery Lead — Ecommerce & Automation",
    bio: "ACCA-qualified with several years of experience on US ecommerce accounts. Leads ecommerce bookkeeping delivery and builds the automation tooling that keeps multi-channel reconciliation accurate and fast.",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="An ACCA-qualified team built around US CPA workflows"
        desc="Ardafis Partners was founded by accountants who have worked the exact kind of accounts your firm hands off — US practice experience, ecommerce bookkeeping, and automation, under one roof."
        image={photos.strategy.src}
        imageAlt={photos.strategy.alt}
      />

      <BigStats showLink={false} />

      {/* Leadership */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">Leadership</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-deep-green md:text-6xl">
              Three partners. Every engagement owned by one of us.
            </h2>
          </Reveal>
          <div className="mt-14 border-t border-line">
            {team.map((member, i) => (
              <Reveal
                key={member.name}
                delay={i * 80}
                className="grid gap-6 border-b border-line py-10 md:grid-cols-[auto_1.1fr_1.4fr] md:items-start md:gap-10 md:py-12"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-deep-green font-display text-xl font-bold text-mist">
                  {initials(member.name)}
                </span>
                <div>
                  <h3 className="font-display text-3xl font-semibold text-deep-green md:text-4xl">
                    {member.name}
                    <span className="ml-2 align-middle text-base font-sans font-semibold text-sage">ACCA</span>
                  </h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-sage">{member.role}</p>
                </div>
                <p className="leading-relaxed text-ink/70">{member.bio}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-16">
            <FlowDiagram {...staffingFlow} />
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-forest text-white">
        <Reveal className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mist">Certified &amp; qualified</p>
            <p className="mt-3 max-w-md font-display text-2xl font-semibold leading-snug">
              Credentials your reviewers can verify.
            </p>
          </div>
          <CredentialBadges />
        </Reveal>
      </section>

      <SplitFeature image={photos.desksOffice} eyebrow="Our approach" title="Why Ardafis Partners" reverse tone="cream">
        <p>
          Most outsourcing providers hand your firm a rotating pool of junior
          staff. We work differently: engagements are led by the partner best
          suited to the work — US practice experience for tax and compliance,
          ecommerce and automation expertise for multi-channel retail clients.
        </p>
        <p>You always know who is doing the work, and why they&apos;re qualified to do it.</p>
      </SplitFeature>

      <CTASection />
    </>
  );
}
