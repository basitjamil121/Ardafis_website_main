import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ComplianceNote from "@/components/ComplianceNote";

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
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="flex flex-col divide-y divide-line">
          {practices.map((p) => (
            <div key={p.title} className="py-6">
              <h2 className="font-display text-lg font-semibold text-deep-green">{p.title}</h2>
              <p className="mt-2 text-ink/70">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="font-display text-lg font-semibold text-deep-green">
            IRC &sect;7216 consent, handled before any data moves
          </h2>
          <p className="mt-2 text-ink/70">
            US tax rules (IRC &sect;7216) require your client&apos;s consent
            before their tax return information is disclosed to a third-party
            preparer — with an added disclosure requirement when that
            preparer is located outside the US. We&apos;ll help your firm put
            a compliant consent process in place before any client data is
            shared with us, rather than leaving your firm to figure it out
            after the fact.
          </p>
        </div>

        <div className="mt-10">
          <ComplianceNote />
        </div>

        <div className="mt-10 rounded-lg border border-line bg-cream p-6 shadow-sm">
          <h2 className="font-display text-lg font-semibold text-deep-green">
            What we're working toward
          </h2>
          <p className="mt-2 text-sm text-ink/70">
            We do not currently hold formal certifications such as SOC 2 or
            ISO 27001 — as a newly established firm, these are on our
            roadmap as the practice grows. If a formal security review is
            part of your firm's vendor process, tell us and we'll work
            through it directly with you.
          </p>
        </div>
      </section>

      <CTASection
        title="Have specific security requirements?"
        desc="Tell us what your firm's vendor process requires and we'll walk through it before any engagement starts."
      />
    </>
  );
}
