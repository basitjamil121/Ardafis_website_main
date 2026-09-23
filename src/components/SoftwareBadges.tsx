const platforms = [
  "QuickBooks Online",
  "QuickBooks Desktop",
  "Xero",
  "Sage",
  "Odoo",
  "Gusto",
  "Bill.com",
  "Drake Tax",
  "UltraTax",
  "Shopify / A2X",
];

export default function SoftwareBadges() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-sage">
          Platforms We Work In Every Day
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {platforms.map((name) => (
            <span
              key={name}
              className="rounded-full border border-line bg-cream px-4 py-2 text-sm font-medium text-ink/75"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
