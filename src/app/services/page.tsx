import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ComplianceNote from "@/components/ComplianceNote";
import PlatformLogos from "@/components/PlatformLogos";
import Reveal from "@/components/Reveal";
import ServiceGroups from "@/components/ServiceGroups";
import WorkflowPipeline from "@/components/WorkflowPipeline";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Outsourced bookkeeping, payables & receivables, payroll, tax prep, sales tax, 1099/W-2, entity setup, advisory/CFO, and ecommerce accounting for US CPA firms.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Outsourced accounting services built for US CPA firms"
        desc="Pick a single service or hand off the full workload — every engagement runs inside the software your firm already uses."
        image={photos.meetingRoom.src}
        imageAlt={photos.meetingRoom.alt}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <Reveal className="mb-14">
            <ComplianceNote />
          </Reveal>
          <ServiceGroups />
          <div className="mt-24">
            <WorkflowPipeline />
          </div>
        </div>
      </section>
      <PlatformLogos />
      <CTASection />
    </>
  );
}
