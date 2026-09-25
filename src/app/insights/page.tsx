import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { photos } from "@/lib/images";
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
        image={photos.newspaper.src}
        imageAlt={photos.newspaper.alt}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="border-t border-line">
            {insights.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group grid gap-4 border-b border-line px-2 py-10 transition-colors duration-300 hover:bg-cream md:grid-cols-[10rem_1fr_auto] md:items-center md:gap-10 md:px-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <div>
                    <h2 className="font-display text-2xl font-semibold leading-tight text-deep-green md:text-3xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 max-w-2xl leading-relaxed text-ink/65">{post.excerpt}</p>
                  </div>
                  <span className="hidden h-14 w-14 items-center justify-center rounded-full border border-deep-green/20 text-lg text-deep-green transition duration-300 group-hover:border-deep-green group-hover:bg-deep-green group-hover:text-white md:flex">
                    &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
