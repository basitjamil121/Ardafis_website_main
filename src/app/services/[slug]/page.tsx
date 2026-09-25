import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import ComplianceNote from "@/components/ComplianceNote";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
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
      <PageHero
        eyebrow={service.category}
        title={service.title}
        desc={service.heroDesc}
        breadcrumb={
          <nav aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-1.5">/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
          </nav>
        }
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-mist">
          <ServiceIcon icon={service.icon} className="h-6 w-6" />
        </span>
      </PageHero>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:py-28 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">Scope</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-deep-green md:text-5xl">
                What&apos;s included
              </h2>
            </Reveal>
            <ul className="mt-10 border-t border-line">
              {service.bullets.map((b, i) => (
                <Reveal as="li" key={b} delay={i * 50} className="flex items-baseline gap-6 border-b border-line py-6">
                  <span className="w-8 shrink-0 text-2xl font-light text-mist">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg leading-relaxed text-ink/80">{b}</span>
                </Reveal>
              ))}
            </ul>

            {service.tiers && (
              <div className="mt-20">
                <Reveal>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-deep-green md:text-4xl">
                    Pick the depth your client needs
                  </h2>
                </Reveal>
                <div className="mt-8 grid gap-4">
                  {service.tiers.map((tier, i) => (
                    <Reveal
                      key={tier.name}
                      delay={i * 80}
                      className={`rounded-3xl p-7 ${i === service.tiers!.length - 1 ? "bg-deep-green text-white" : "bg-cream"}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-3xl font-light opacity-50">{i + 1}</span>
                        <h3 className={`font-display text-xl font-semibold ${i === service.tiers!.length - 1 ? "" : "text-deep-green"}`}>
                          {tier.name}
                        </h3>
                      </div>
                      <ul className="mt-4 flex flex-col gap-2 pl-10">
                        {tier.items.map((item) => (
                          <li key={item} className="list-disc text-sm opacity-75">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

            {service.complianceNote && (
              <Reveal className="mt-16">
                <ComplianceNote />
              </Reveal>
            )}
          </div>
          <div>
            <Reveal className="rounded-3xl bg-forest p-8 text-white lg:sticky lg:top-32">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mist">Platforms we use</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.software.map((sw) => (
                  <span key={sw} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80">
                    {sw}
                  </span>
                ))}
              </div>
              <div className="mt-8 border-t border-white/10 pt-8">
                <p className="font-display text-xl font-semibold">Scope this for a client</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">We reply within one business day.</p>
                <Link
                  href="/contact#callback"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-deep-green transition hover:bg-cream"
                >
                  Book a call <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link href="/pricing" className="mt-4 block text-sm font-semibold text-white/75 underline-offset-4 hover:text-white hover:underline">
                  See pricing &rarr;
                </Link>
              </div>
            </Reveal>
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
