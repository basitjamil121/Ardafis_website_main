import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CTASection from "@/components/CTASection";
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

  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Link href="/services" className="text-sm font-semibold text-sage hover:text-deep-green">
            &larr; All services
          </Link>
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
        </div>
        <div>
          <div className="rounded-lg border border-line bg-cream p-6">
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
