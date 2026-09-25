import Reveal from "@/components/Reveal";

const rows = [
  {
    label: "Average annual cost",
    inHouse: "$45,000–$55,000 (salary, taxes, benefits)",
    outsourced: "Pay only for hours or clients worked",
  },
  {
    label: "Ramp-up time",
    inHouse: "4–8 weeks to hire and train",
    outsourced: "Days to onboard on your existing software",
  },
  {
    label: "Busy-season flexibility",
    inHouse: "Fixed capacity year-round",
    outsourced: "Scale up for tax season, scale down after",
  },
  {
    label: "Coverage risk",
    inHouse: "Single point of failure if staff leaves",
    outsourced: "Team-backed continuity across engagements",
  },
];

export default function CostComparison() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">Why firms outsource</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-deep-green md:text-6xl">
            In-house hire vs. outsourced support
          </h2>
          <p className="mt-5 text-sm text-ink/55">
            General US market figures for illustration — your actual savings
            depend on workload and current staffing.
          </p>
        </Reveal>
        <Reveal className="mt-14 overflow-hidden rounded-3xl border border-line">
          <div className="hidden grid-cols-[1fr_1.2fr_1.2fr] bg-cream text-xs font-semibold uppercase tracking-[0.15em] md:grid">
            <div className="px-7 py-5 text-ink/50">Factor</div>
            <div className="px-7 py-5 text-ink/50">In-house hire</div>
            <div className="bg-deep-green px-7 py-5 text-white">Ardafis Partners</div>
          </div>
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid border-t border-line first-of-type:border-t-0 md:grid-cols-[1fr_1.2fr_1.2fr] md:items-stretch"
            >
              <div className="px-7 pt-6 font-display text-lg font-semibold leading-snug text-deep-green md:py-7">{row.label}</div>
              <div className="px-7 pt-2 text-ink/55 md:py-7">
                <span className="mr-2 text-xs font-semibold uppercase text-ink/40 md:hidden">In-house:</span>
                {row.inHouse}
              </div>
              <div className="px-7 pb-6 pt-2 font-medium text-ink/85 md:bg-deep-green/[0.04] md:py-7">
                <span className="mr-2 text-xs font-semibold uppercase text-moss md:hidden">Ardafis:</span>
                {row.outsourced}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
