import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";
import CredentialBadges from "@/components/CredentialBadges";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the ACCA-qualified team behind Ardafis Partners — outsourced accounting built on US practice experience, ecommerce bookkeeping, and automation.",
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

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="An ACCA-qualified team built around US CPA workflows"
        desc="Ardafis Partners was founded by accountants who have worked the exact kind of accounts your firm hands off — US practice experience, ecommerce bookkeeping, and automation, under one roof."
      />

      <StatsBar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-2xl font-bold text-deep-green">Leadership</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-deep-green">
                {member.name}, ACCA
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-sage">
                {member.role}
              </p>
              <p className="mt-3 text-sm text-ink/70">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <CredentialBadges />

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="font-display text-2xl font-bold text-deep-green">Why Ardafis Partners</h2>
          <p className="mt-4 text-ink/75">
            Most outsourcing providers hand your firm a rotating pool of
            junior staff. We work differently: engagements are led by the
            partner best suited to the work — US practice experience for tax
            and compliance, ecommerce and automation expertise for
            multi-channel retail clients — so you always know who is doing
            the work and why they're qualified to do it.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
