const platforms = [
  { name: "QuickBooks Online", certified: true },
  { name: "QuickBooks Desktop", certified: true },
  { name: "Xero", certified: true },
  { name: "Sage", certified: false },
  { name: "Odoo", certified: false },
  { name: "Gusto", certified: false },
  { name: "Bill.com", certified: false },
  { name: "Drake Tax", certified: false },
  { name: "UltraTax", certified: false },
  { name: "Shopify / A2X", certified: false },
];

export default function SoftwareBadges() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-sage">
          Platforms We Work In Every Day
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {platforms.map((p) => (
            <span
              key={p.name}
              className="flex items-center gap-1.5 rounded-full border border-line bg-cream px-4 py-2 text-sm font-medium text-ink/75"
            >
              {p.name}
              {p.certified && (
                <span className="rounded-full bg-deep-green/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-deep-green">
                  Certified
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
