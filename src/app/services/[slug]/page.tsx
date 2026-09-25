import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import ComplianceNote from "@/components/ComplianceNote";
import ServiceIcon from "@/components/ServiceIcon";
import BrandMotif from "@/components/BrandMotif";
import { services } from "@/lib/site-data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.heroDesc,
    keywords: service.keywords.split(", "),
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ardafispartners.com";
  const url = `${siteUrl}/services/${service.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.heroDesc,
    provider: { "@type": "ProfessionalService", name: "Ardafis Partners" },
    areaServed: "United States",
    category: service.category,
    url,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-br from-white via-white to-cream">
        <BrandMotif className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] md:-right-12 md:-top-40 md:h-[520px] md:w-[520px]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-ink/50">
            <Link href="/" className="hover:text-deep-green">Home</Link>
            <span className="mx-1.5">/</span>
            <Link href="/services" className="hover:text-deep-green">Services</Link>
          </nav>
          <span className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-deep-green/10 text-deep-green">
            <ServiceIcon icon={service.icon} className="h-6 w-6" />
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-deep-green md:text-4xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">{service.heroDesc}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-bold text-deep-green">
            What&apos;s included
          </h2>
          <ul className="mt-6 flex flex-col gap-4">
            {service.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-ink/75">
                <span className="mt-1 text-sage">&#10003;</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {service.tiers && (
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-deep-green">
                Pick the depth your client needs
              </h2>
              <div className="mt-6 flex flex-col gap-4">
                {service.tiers.map((tier, i) => (
                  <div key={tier.name} className="rounded-lg border border-line bg-cream p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-deep-green text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-deep-green">
                        {tier.name}
                      </h3>
                    </div>
                    <ul className="mt-3 flex flex-col gap-2 pl-10">
                      {tier.items.map((item) => (
                        <li key={item} className="list-disc text-sm text-ink/70">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {service.complianceNote && (
            <div className="mt-10">
              <ComplianceNote />
            </div>
          )}
        </div>
        <div>
          <div className="rounded-lg border border-line bg-cream p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-deep-green">
              Platforms we use
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.software.map((sw) => (
                <span
                  key={sw}
                  className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink/70"
                >
                  {sw}
                </span>
              ))}
            </div>
            <Link
              href="/pricing"
              className="mt-6 inline-block text-sm font-semibold text-deep-green hover:underline"
            >
              See pricing for this service &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={`Need help with ${service.title.toLowerCase()}?`}
        desc="Tell us about the workload and we'll scope it within one business day."
      />
    </>
  );
}
