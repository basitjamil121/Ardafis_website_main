import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { insights } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical guidance for CPA firms and solo practitioners on outsourcing, pricing, and software decisions.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical guidance for running a leaner practice"
        desc="No fluff — just the things we wish more outsourcing providers explained upfront."
      />
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="flex flex-col divide-y divide-line">
          {insights.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="block py-8 transition hover:opacity-80"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-ink/50">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold text-deep-green">
                {post.title}
              </h2>
              <p className="mt-2 text-ink/70">{post.excerpt}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-sage">
                Read more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
