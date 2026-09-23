import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { insights } from "@/lib/site-data";

const post = insights.find((p) => p.slug === "cost-of-outsourced-bookkeeping-for-cpa-firms")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  keywords: [
    "cost of outsourced bookkeeping",
    "outsourced bookkeeping pricing CPA firm",
    "per client bookkeeping pricing",
  ],
};

export default function Article() {
  return (
    <ArticleLayout title={post.title} date={post.date}>
      <p>
        Most CPA firms considering outsourced bookkeeping run into the same
        problem: pricing pages that quote a single flat number, which almost
        never matches what a real engagement ends up costing. The honest
        answer is that outsourced bookkeeping is usually priced one of three
        ways, and which one applies depends on the shape of the work.
      </p>

      <h2>Per-client monthly pricing</h2>
      <p>
        This is the most common model for ongoing bookkeeping — a flat
        monthly fee per client file, typically in the $180–$350 range
        depending on transaction volume and reconciliation complexity. It
        works well when the workload per client is predictable month to
        month.
      </p>

      <h2>Hourly pricing</h2>
      <p>
        For overflow work, cleanup projects, or anything that doesn&apos;t
        recur on a fixed schedule, hourly pricing (typically $12–$22/hour
        depending on the task) is usually a better fit than trying to force
        it into a flat monthly rate.
      </p>

      <h2>Per-return pricing during tax season</h2>
      <p>
        Return preparation support is almost always priced per return rather
        than hourly, since the value delivered scales with return complexity,
        not time spent. Simple individual returns typically start around $35,
        with business returns (1120S, 1065) starting from roughly $120.
      </p>

      <h2>The question to ask before comparing quotes</h2>
      <p>
        <strong>Is the provider pricing the actual workload, or selling a
        package you don&apos;t need?</strong> A firm that only has two
        overflow clients doesn&apos;t need a dedicated full-time staff
        contract — and a firm processing hundreds of returns during tax
        season shouldn&apos;t be paying an hourly rate that doesn&apos;t
        scale with volume. The right pricing model follows the work, not the
        other way around.
      </p>
    </ArticleLayout>
  );
}
