import { pageMetadata } from "@/lib/metadata";
import PageHero from "@/components/PageHero";
import { ReconMockup } from "@/components/ProductMockups";
import CTASection from "@/components/CTASection";
import ComplianceNote from "@/components/ComplianceNote";
import PlatformLogos from "@/components/PlatformLogos";
import Reveal from "@/components/Reveal";
import ServiceGroups from "@/components/ServiceGroups";
import FlowDiagram from "@/components/FlowDiagram";
import { homeFlow } from "@/lib/flows";
import { photos } from "@/lib/images";
import { services } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Outsourced bookkeeping, payables & receivables, payroll, tax prep, sales tax, 1099/W-2, entity setup, advisory/CFO, and ecommerce accounting for US CPA firms.",
  path: "/services",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ardafispartners.com";

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.heroDesc,
      url: `${siteUrl}/services/${service.slug}`,
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <PageHero
        eyebrow="What We Do"
        title="Outsourced accounting services built for US CPA firms"
        desc="Pick a single service or hand off the full workload — every engagement runs inside the software your firm already uses."
        image={photos.meetingRoom.src}
        imageAlt={photos.meetingRoom.alt}
        visual={<ReconMockup live delay={900} />}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <Reveal className="mb-14">
            <ComplianceNote />
          </Reveal>
          <ServiceGroups />
          <div className="mt-24">
            <FlowDiagram {...homeFlow} />
          </div>
        </div>
      </section>
      <PlatformLogos />
      <CTASection />
    </>
  );
}
