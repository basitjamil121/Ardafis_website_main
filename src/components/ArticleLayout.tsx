import Link from "next/link";
import CTASection from "@/components/CTASection";

type ArticleLayoutProps = {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  children: React.ReactNode;
};

export default function ArticleLayout({ title, date, slug, excerpt, children }: ArticleLayoutProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ardafispartners.com";
  const url = `${siteUrl}/insights/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Organization", name: "Ardafis Partners" },
    publisher: { "@type": "Organization", name: "Ardafis Partners" },
    mainEntityOfPage: url,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${siteUrl}/insights` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-ink/50">
            <Link href="/" className="hover:text-deep-green">Home</Link>
            <span className="mx-1.5">/</span>
            <Link href="/insights" className="hover:text-deep-green">Insights</Link>
          </nav>
          <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink/50">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-deep-green md:text-4xl">
            {title}
          </h1>
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose-article flex flex-col gap-5 text-ink/80 [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-deep-green [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-deep-green">
          {children}
        </div>
      </article>
      <CTASection />
    </>
  );
}
