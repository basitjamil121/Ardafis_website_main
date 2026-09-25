import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { insights } from "@/lib/site-data";

const post = insights.find((p) => p.slug === "quickbooks-vs-xero-vs-sage-outsourcing")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  keywords: [
    "QuickBooks vs Xero for CPA firms",
    "outsourced bookkeeping software",
    "Sage vs QuickBooks outsourcing",
  ],
  alternates: { canonical: "/insights/quickbooks-vs-xero-vs-sage-outsourcing" },
};

export default function Article() {
  return (
    <ArticleLayout title={post.title} date={post.date} slug={post.slug} excerpt={post.excerpt}>
      <p>
        When firms ask which accounting platform is &quot;best&quot; before
        outsourcing bookkeeping, it&apos;s usually the wrong question. The
        platform that matters is the one your clients are already on — a
        migration project is a separate decision from an outsourcing
        decision, and conflating the two adds risk and cost to something that
        should be simple.
      </p>

      <h2>QuickBooks (Online and Desktop)</h2>
      <p>
        The default for most US small-business clients, and the platform
        most outsourcing providers are deepest on. QuickBooks Online is
        generally easier to grant scoped, client-specific access to, which
        matters for confidentiality — see our{" "}
        <a href="/security" className="underline">
          security practices
        </a>{" "}
        for why that matters.
      </p>

      <h2>Xero</h2>
      <p>
        Strong for multi-currency and clients with a more modern,
        integration-heavy stack (inventory apps, ecommerce connectors,
        payroll add-ons). If your client base skews toward ecommerce or
        service businesses that already use a lot of connected apps, Xero
        often requires less manual reconciliation work.
      </p>

      <h2>Sage and Odoo</h2>
      <p>
        Less common among small US practices but still widely used,
        particularly by clients with more established, larger-scale
        operations or international ties. An outsourcing partner should be
        comfortable in whichever of these your existing clients already run
        on — asking a client to migrate platforms just to make outsourcing
        easier is rarely worth the disruption.
      </p>

      <h2>The real decision</h2>
      <p>
        <strong>
          Pick an outsourcing partner based on their fluency across the
          platforms your clients already use
        </strong>
        , not the other way around. Platform migration, if it ever makes
        sense, should be a decision you make deliberately with your client —
        not a side effect of choosing a bookkeeping partner.
      </p>
    </ArticleLayout>
  );
}
