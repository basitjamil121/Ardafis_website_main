import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComplianceNote from "@/components/ComplianceNote";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Switch to Ardafis",
  description:
    "How CPA firms move bookkeeping, payroll, or tax-prep work to Ardafis Partners without disrupting existing client relationships.",
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
        title="Moving work to Ardafis Partners, without disrupting what already works"
        desc="Most firms considering outsourced support for the first time have the same question: what actually happens to my current setup? Here's the honest answer."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="flex flex-col divide-y divide-line">
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-5 py-6">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-deep-green text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold text-deep-green">{s.title}</h2>
                <p className="mt-2 text-ink/70">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <ComplianceNote />
        </div>
      </section>

      <CTASection
        title="Considering a switch or your first outsourcing hire?"
        desc="Tell us what you're currently doing and where it's breaking down — we'll map out what switching would actually look like."
      />
    </>
  );
}
