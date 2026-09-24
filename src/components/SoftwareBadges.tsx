import Link from "next/link";

const platforms = [
  { name: "QuickBooks Online", href: "/services/quickbooks-outsourcing" },
  { name: "QuickBooks Desktop", href: "/services/quickbooks-outsourcing" },
  { name: "Xero", href: "/services/xero-outsourcing" },
  { name: "Sage", href: null },
  { name: "Odoo", href: null },
  { name: "Gusto", href: null },
  { name: "Bill.com", href: null },
  { name: "Drake Tax", href: null },
  { name: "UltraTax", href: null },
  { name: "Shopify / A2X", href: null },
];

export default function SoftwareBadges() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-sage">
          Platforms We Work In Every Day
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {platforms.map((p) =>
            p.href ? (
              <Link
                key={p.name}
                href={p.href}
                className="rounded-full border border-line bg-cream px-4 py-2 text-sm font-medium text-ink/75 transition hover:border-deep-green hover:text-deep-green"
              >
                {p.name}
              </Link>
            ) : (
              <span
                key={p.name}
                className="rounded-full border border-line bg-cream px-4 py-2 text-sm font-medium text-ink/75"
              >
                {p.name}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
