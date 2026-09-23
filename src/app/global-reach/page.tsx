import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Global Reach — Gulf Region Services",
  description:
    "Ardafis Partners is extending outsourced accounting and bookkeeping support to real estate, retail, freelance, and SME clients across the Gulf region.",
};

const gulfVerticals = [
  {
    title: "Real Estate",
    desc: "Bookkeeping and owner reporting for property management companies, brokerages, and real estate investors — rent-roll reconciliation, service-charge tracking, and portfolio-level reporting.",
  },
  {
    title: "Departmental Stores & Retail",
    desc: "Multi-branch sales reconciliation, inventory and COGS tracking, and point-of-sale reporting for retail and department-store operations.",
  },
  {
    title: "Freelancers & Independent Professionals",
    desc: "Straightforward bookkeeping and invoice tracking for freelancers and independent consultants operating under a freelance permit or trade license.",
  },
  {
    title: "Small Business & SME",
    desc: "Full-cycle bookkeeping, payroll, and management reporting sized for small and mid-sized businesses rather than enterprise accounting departments.",
  },
];

export default function GlobalReachPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Reach"
        title="Now extending our services to the Gulf region"
        desc="Alongside our work supporting US CPA firms, Ardafis Partners is growing a second practice area: direct outsourced accounting support for businesses across the Gulf."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="max-w-3xl text-ink/75">
          Our partners bring hands-on bookkeeping and accounting experience
          across exactly the client types common in the Gulf's small-business
          economy. As this practice area grows, we're focused on four
          verticals to start:
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {gulfVerticals.map((v) => (
            <div key={v.title} className="rounded-lg border border-line bg-white p-6">
              <h2 className="font-display text-lg font-semibold text-deep-green">{v.title}</h2>
              <p className="mt-2 text-sm text-ink/70">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-display text-2xl font-bold text-deep-green">
            A newly launched practice area
          </h2>
          <p className="mt-4 text-ink/75">
            Our primary focus remains outsourced support for US CPA firms —
            that's where most of our current delivery capacity sits. The
            Gulf practice is a deliberate second track we're building
            alongside it, not a side afterthought, and we're onboarding
            early clients directly as we grow it. If you're based in the
            Gulf and want to be among the first clients on this side of the
            practice, we'd rather tell you that upfront than pretend
            otherwise.
          </p>
        </div>
      </section>

      <CTASection
        title="Based in the Gulf and interested in working together?"
        desc="Mention your business type and region when you reach out — we'll follow up within one business day."
      />
    </>
  );
}
