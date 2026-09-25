import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

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
      <PageHero
        eyebrow={new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        title={title}
        desc={excerpt}
        breadcrumb={
          <nav aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-1.5">/</span>
            <Link href="/insights" className="hover:text-white">Insights</Link>
          </nav>
        }
      />
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-ink/80 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-deep-green [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-deep-green [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2">
            {children}
          </div>
        </div>
      </article>
      <CTASection />
    </>
  );
}
