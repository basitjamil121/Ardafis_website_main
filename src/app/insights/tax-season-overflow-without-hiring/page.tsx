import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { insights } from "@/lib/site-data";

const post = insights.find((p) => p.slug === "tax-season-overflow-without-hiring")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  keywords: [
    "tax season staffing CPA firm",
    "seasonal tax preparer alternative",
    "outsourced tax preparation support",
  ],
  alternates: { canonical: "/insights/tax-season-overflow-without-hiring" },
};

export default function Article() {
  return (
    <ArticleLayout title={post.title} date={post.date} slug={post.slug} excerpt={post.excerpt}>
      <p>
        Every CPA firm knows the pattern: workload triples for roughly ten
        weeks a year, and the rest of the year doesn&apos;t justify the
        headcount it would take to cover that spike comfortably. The usual
        fixes — seasonal hires, unpaid overtime, or turning away work — all
        come with real costs that don&apos;t show up on a simple hourly-rate
        comparison.
      </p>

      <h2>The hidden cost of seasonal hiring</h2>
      <p>
        A seasonal preparer takes time to recruit, needs training on your
        firm&apos;s specific workpaper standards and review process, and is
        gone again in ten weeks — taking that training investment with them.
        Repeat this every year and the effective cost per return is often
        higher than firms assume when they only look at the hourly wage.
      </p>

      <h2>What outsourced overflow support changes</h2>
      <p>
        Return preparation support that&apos;s billed per return rather than
        per hour means the cost scales directly with volume — a slow week
        costs less, a heavy week costs more, but there&apos;s no fixed
        seasonal salary sitting on the books regardless of how many returns
        actually come in.
      </p>

      <h2>Where the reviewing CPA still fits in</h2>
      <p>
        Outsourced prep support isn&apos;t a replacement for your review
        process — it&apos;s built around it. Returns and workpapers should
        arrive review-ready, structured the way your firm already expects,
        so the reviewing CPA&apos;s time goes toward final sign-off rather
        than reconstructing incomplete work.
      </p>

      <h2>Planning ahead of the rush</h2>
      <p>
        <strong>
          The firms that get the most value from overflow support are the
          ones who set it up before the volume spike hits
        </strong>
        , not mid-March when the backlog is already unmanageable. A short
        discovery call in the fall or early winter is usually enough to have
        a workflow ready before the busy season starts.
      </p>
    </ArticleLayout>
  );
}
