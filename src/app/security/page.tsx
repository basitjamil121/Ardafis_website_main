import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ComplianceNote from "@/components/ComplianceNote";
import FlowDiagram from "@/components/FlowDiagram";
import { AccessMockup } from "@/components/ProductMockups";
import Reveal from "@/components/Reveal";
import SplitFeature from "@/components/SplitFeature";
import { securityFlow } from "@/lib/flows";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Security & Confidentiality",
  description:
    "How Ardafis Partners protects client financial data: NDA-backed engagements, scoped access, IRS-compliant disclosure consent, and secure workflow practices.",
  alternates: { canonical: "/security" },
};

const practices = [
  {
    title: "NDA on every engagement",
    desc: "No client data is accessed until a mutual non-disclosure agreement is signed — before onboarding begins, not after.",
  },
  {
    title: "Scoped, client-by-client access",
    desc: "We request access to the specific client files we're working on, not blanket access to your entire practice management system.",
  },
  {
    title: "No credential sharing over unsecured channels",
    desc: "Access is granted through your platform's own user-invite and permission system wherever it's supported, rather than shared logins over email or chat.",
  },
  {
    title: "Your data stays your data",
    desc: "We do not resell, repurpose, or retain client financial data beyond what's needed to deliver the agreed work.",
  },
  {
    title: "Direct partner accountability",
    desc: "Every engagement has a named partner responsible for it — not an anonymous offshore queue.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust & Confidentiality"
        title="How we protect your clients' financial data"
        desc="As a new firm, we'd rather tell you exactly what we do and don't have in place than overstate it. Here's the honest picture."
        image={photos.darkDesk.src}
        imageAlt={photos.darkDesk.alt}
        visual={<AccessMockup live delay={900} />}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1fr_1.35fr]">
          <div>
            <Reveal className="lg:sticky lg:top-32">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">Our practices</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-deep-green md:text-5xl">
                Five commitments, in writing
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed text-ink/60">
                Every one of these is in place before we touch a single client file.
              </p>
            </Reveal>
          </div>
          <ol className="border-t border-line">
            {practices.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={i * 60}
                className="grid gap-3 border-b border-line py-9 md:grid-cols-[4.5rem_1fr] md:gap-6"
              >
                <span className="text-4xl font-light text-mist">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-deep-green">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
          <FlowDiagram {...securityFlow} />
        </div>
      </section>

      <SplitFeature image={photos.handsKb} eyebrow="Tax data" title="IRC §7216 consent, handled before any data moves" tone="cream">
        <p>
          US tax rules (IRC &sect;7216) require your client&apos;s consent before
          their tax return information is disclosed to a third-party preparer —
          with an added disclosure requirement when that preparer is located
          outside the US.
        </p>
        <p>
          We&apos;ll help your firm put a compliant consent process in place before
          any client data is shared with us, rather than leaving your firm to
          figure it out after the fact.
        </p>
      </SplitFeature>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-24 md:py-28 lg:grid-cols-2">
          <Reveal>
            <ComplianceNote />
          </Reveal>
          <Reveal delay={100} className="rounded-3xl border border-line p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">Roadmap</p>
            <h2 className="mt-3 font-display text-xl font-semibold text-deep-green md:text-2xl">
              What we&apos;re working toward
            </h2>
            <p className="mt-3 leading-relaxed text-ink/70">
              We do not currently hold formal certifications such as SOC 2 or
              ISO 27001 — as a newly established firm, these are on our roadmap
              as the practice grows. If a formal security review is part of your
              firm&apos;s vendor process, tell us and we&apos;ll work through it
              directly with you.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Have specific security requirements?"
        desc="Tell us what your firm's vendor process requires and we'll walk through it before any engagement starts."
      />
    </>
  );
}
