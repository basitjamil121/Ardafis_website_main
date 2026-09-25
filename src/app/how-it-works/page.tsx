import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import HowItWorksSection from "@/components/HowItWorksSection";
import FirstThirtyDays from "@/components/FirstThirtyDays";
import CTASection from "@/components/CTASection";
import SplitFeature from "@/components/SplitFeature";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Ardafis Partners onboards US CPA firms: discovery call, scope & pricing, secure onboarding, and ongoing delivery.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A straightforward path from first call to delivered work"
        desc="No long procurement cycle, no dedicated-staff contract to sign before you've even tested the fit."
        image={photos.ipadMeeting.src}
        imageAlt={photos.ipadMeeting.alt}
      />
      <HowItWorksSection />
      <FirstThirtyDays showLink={false} />

      <SplitFeature image={photos.notepad} eyebrow="Onboarding" title="What onboarding actually looks like" tone="cream">
        <p>
          <strong className="text-deep-green">Access is granted client-by-client</strong> — we
          never ask for blanket access to your entire practice management
          system. Every engagement is covered by an NDA before any data changes
          hands.
        </p>
        <p>
          <strong className="text-deep-green">You stay in control of the client relationship.</strong>{" "}
          We work behind the scenes inside your existing software — your
          clients continue to see your firm, not ours.
        </p>
        <p>
          <strong className="text-deep-green">Pricing is agreed before work starts</strong> — per
          client, per hour, or per return, based on the actual scope.
        </p>
        <Link
          href="/switch-to-ardafis"
          className="mt-2 text-base font-semibold text-deep-green underline-offset-4 hover:underline"
        >
          Already have a bookkeeper or provider? See how switching works &rarr;
        </Link>
      </SplitFeature>

      <CTASection />
    </>
  );
}
