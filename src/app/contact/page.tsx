import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import FlowDiagram from "@/components/FlowDiagram";
import Reveal from "@/components/Reveal";
import { contactFlow } from "@/lib/flows";
import { siteConfig } from "@/lib/site-data";

function LiveStatus() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-deep-green/5 px-3 py-1 text-[11px] font-semibold text-moss">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-moss opacity-50 motion-safe:animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-moss" />
      </span>
      Replies within 1 business day
    </span>
  );
}

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ardafis Partners or request a callback to discuss outsourced bookkeeping, payroll, and tax-prep support for your firm.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's Talk"
        title="Get in touch"
        desc="Tell us about your firm and where you need support — we'll follow up within one business day."
      >
        <p className="text-sm text-white/60">
          Prefer email?{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-white underline-offset-4 hover:underline">
            {siteConfig.email}
          </a>
        </p>
      </PageHero>

      <section className="relative z-10 -mt-12 pb-24 md:-mt-16 md:pb-32">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-2">
          <Reveal id="callback" className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-2xl shadow-black/10 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">Recommended</p>
              <LiveStatus />
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-deep-green">Book a call</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Leave your details and a good time to reach you, and a partner will
              call you directly.
            </p>
            <div className="mt-8">
              <ContactForm variant="callback" />
            </div>
          </Reveal>

          <Reveal delay={100} className="rounded-3xl bg-white p-8 shadow-2xl shadow-black/10 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">Or write to us</p>
              <LiveStatus />
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-deep-green">Send a message</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Tell us about the workload, the software you use, and where
              you&apos;re stretched thinnest.
            </p>
            <div className="mt-8">
              <ContactForm variant="inquiry" />
            </div>
          </Reveal>
        </div>
        <div className="mx-auto mt-6 max-w-6xl px-6">
          <FlowDiagram {...contactFlow} />
        </div>
      </section>
    </>
  );
}
