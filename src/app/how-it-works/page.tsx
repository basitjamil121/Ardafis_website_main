import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Ardafis Partners onboards US CPA firms: discovery call, scope & pricing, secure onboarding, and ongoing delivery.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A straightforward path from first call to delivered work"
        desc="No long procurement cycle, no dedicated-staff contract to sign before you've even tested the fit."
      />
      <HowItWorksSection />

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="font-display text-2xl font-bold text-deep-green">
            What onboarding actually looks like
          </h2>
          <div className="mt-8 flex flex-col gap-6 text-ink/75">
            <p>
              <strong className="text-deep-green">Access is granted client-by-client</strong> —
              we never ask for blanket access to your entire practice management
              system. Every engagement is covered by an NDA before any data
              changes hands.
            </p>
            <p>
              <strong className="text-deep-green">You stay in control of the client relationship.</strong>{" "}
              We work behind the scenes inside your existing software — your
              clients continue to see your firm, not ours.
            </p>
            <p>
              <strong className="text-deep-green">Pricing is agreed before work starts</strong> —
              per client, per hour, or per return, based on the actual scope,
              not a fixed package that over- or under-charges you.
            </p>
          </div>
          <Link
            href="/switch-to-ardafis"
            className="mt-8 inline-block text-sm font-semibold text-deep-green hover:underline"
          >
            Already have a bookkeeper or provider? See how switching works &rarr;
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
