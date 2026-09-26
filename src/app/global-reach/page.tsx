import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FlowDiagram from "@/components/FlowDiagram";
import Reveal from "@/components/Reveal";
import SplitFeature from "@/components/SplitFeature";
import { gulfFlow } from "@/lib/flows";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Global Reach — Gulf Region Services",
  description:
    "Ardafis Partners is extending outsourced accounting and bookkeeping support to real estate, retail, freelance, and SME clients across the Gulf region.",
  alternates: { canonical: "/global-reach" },
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
        image={photos.dubai.src}
        imageAlt={photos.dubai.alt}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal className="grid gap-6 md:grid-cols-[1.3fr_1fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">Where we start</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-deep-green md:text-6xl">
                Four verticals to begin with
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-ink/60">
              Our partners bring hands-on bookkeeping experience across exactly
              the client types common in the Gulf&apos;s small-business economy.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {gulfVerticals.map((v, i) => (
              <Reveal
                key={v.title}
                delay={(i % 2) * 100}
                className={`rounded-3xl p-8 transition duration-300 hover:-translate-y-1 md:p-10 ${
                  i === 0 || i === 3 ? "bg-deep-green text-white" : "bg-cream text-ink"
                }`}
              >
                <span className="text-4xl font-light opacity-40">0{i + 1}</span>
                <h3 className={`mt-8 font-display text-3xl font-semibold ${i === 0 || i === 3 ? "" : "text-deep-green"}`}>
                  {v.title}
                </h3>
                <p className="mt-3 leading-relaxed opacity-75">{v.desc}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-6">
            <FlowDiagram {...gulfFlow} />
          </div>
        </div>
      </section>

      <SplitFeature image={photos.openOffice} eyebrow="Honest status" title="A newly launched practice area" tone="cream" reverse>
        <p>
          Our primary focus remains outsourced support for US CPA firms —
          that&apos;s where most of our current delivery capacity sits. The Gulf
          practice is a deliberate second track we&apos;re building alongside it,
          not an afterthought.
        </p>
        <p>
          We&apos;re onboarding early clients directly as we grow it. If you&apos;re
          based in the Gulf and want to be among the first, we&apos;d rather tell
          you that upfront than pretend otherwise.
        </p>
      </SplitFeature>

      <CTASection
        title="Based in the Gulf and interested in working together?"
        desc="Mention your business type and region when you reach out — we'll follow up within one business day."
      />
    </>
  );
}
