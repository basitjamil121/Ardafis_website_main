import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComplianceNote from "@/components/ComplianceNote";
import CTASection from "@/components/CTASection";
import FlowDiagram from "@/components/FlowDiagram";
import Reveal from "@/components/Reveal";
import { switchFlow } from "@/lib/flows";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Switch to Ardafis",
  description:
    "How CPA firms move bookkeeping, payroll, or tax-prep work to Ardafis Partners without disrupting existing client relationships.",
  alternates: { canonical: "/switch-to-ardafis" },
};

const steps = [
  {
    title: "Nothing changes for your clients",
    desc: "We work behind the scenes inside your firm's own software. Your clients continue to see your firm — not ours — before, during, and after the switch.",
  },
  {
    title: "Your current provider isn't involved until you're ready",
    desc: "We scope the work and agree on pricing based on what you're already doing, so you know exactly what's changing before anything moves.",
  },
  {
    title: "Access is granted client-by-client, under NDA",
    desc: "We don't ask for blanket access to your practice management system on day one — access is scoped to the specific clients you hand over, after an NDA is signed.",
  },
  {
    title: "IRC §7216 consent is handled properly",
    desc: "If client tax return information will be shared with us, US rules require your client's consent first, including disclosure that we're located outside the US. We'll help your firm put that consent process in place before any data moves.",
  },
  {
    title: "A phased handover, not a hard cutover",
    desc: "Most firms start with one or two clients or a single busy-season overflow project, confirm the quality bar, and then expand — you control the pace.",
  },
];

export default function SwitchToArdafisPage() {
  return (
    <>
      <PageHero
        eyebrow="Switching Providers"
        title="Moving work to Ardafis, without disrupting what already works"
        desc="Most firms considering outsourced support for the first time have the same question: what actually happens to my current setup? Here's the honest answer."
        image={photos.minMeeting.src}
        imageAlt={photos.minMeeting.alt}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1fr_1.6fr]">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">The switch</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-deep-green md:text-5xl">
              Five things that stay true
            </h2>
            <p className="mt-5 leading-relaxed text-ink/60">
              You control the pace. Nothing moves until you&apos;ve seen the scope,
              the price, and the paperwork.
            </p>
          </Reveal>
          <ol className="border-t border-line">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 60} className="flex gap-6 border-b border-line py-9">
                <span className="w-12 shrink-0 text-4xl font-light leading-none text-mist">{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-deep-green">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/70">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-24 md:pb-32">
          <FlowDiagram {...switchFlow} />
          <Reveal>
            <ComplianceNote />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Considering a switch or your first outsourcing hire?"
        desc="Tell us what you're currently doing and where it's breaking down — we'll map out what switching would actually look like."
      />
    </>
  );
}
