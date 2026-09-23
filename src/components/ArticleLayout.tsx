import Link from "next/link";
import CTASection from "@/components/CTASection";

type ArticleLayoutProps = {
  title: string;
  date: string;
  children: React.ReactNode;
};

export default function ArticleLayout({ title, date, children }: ArticleLayoutProps) {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <Link href="/insights" className="text-sm font-semibold text-sage hover:text-deep-green">
            &larr; All insights
          </Link>
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
