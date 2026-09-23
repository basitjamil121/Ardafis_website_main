import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ardafis Partners or request a callback to discuss outsourced bookkeeping, payroll, and tax-prep support for your firm.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's Talk"
        title="Get in touch"
        desc="Tell us about your firm and where you need support — we'll follow up within one business day."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold text-deep-green">Send a message</h2>
          <p className="mt-2 text-sm text-ink/60">
            Or email us directly at{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-deep-green hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
          <div className="mt-6">
            <ContactForm variant="inquiry" />
          </div>
        </div>

        <div id="callback" className="scroll-mt-24">
          <h2 className="font-display text-2xl font-bold text-deep-green">Request a call</h2>
          <p className="mt-2 text-sm text-ink/60">
            Prefer to talk it through? Leave your details and a good time to
            reach you, and a partner will call you directly.
          </p>
          <div className="mt-6">
            <ContactForm variant="callback" />
          </div>
        </div>
      </section>
    </>
  );
}
