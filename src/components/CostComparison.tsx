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
    <section className="border-b border-line bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
          Why Firms Outsource
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-deep-green">
          In-house hire vs. outsourced support
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-ink/60">
          General US market figures for illustration — your actual savings
          depend on workload and current staffing.
        </p>
        <div className="mt-10 overflow-hidden rounded-lg border border-line bg-white shadow-sm">
          <div className="grid grid-cols-3 border-b border-line bg-deep-green text-white">
            <div className="px-5 py-3 text-sm font-semibold">Factor</div>
            <div className="px-5 py-3 text-sm font-semibold">In-House Hire</div>
            <div className="px-5 py-3 text-sm font-semibold">Ardafis Partners</div>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 ${i !== rows.length - 1 ? "border-b border-line" : ""}`}
            >
              <div className="px-5 py-4 text-sm font-medium text-deep-green">{row.label}</div>
              <div className="px-5 py-4 text-sm text-ink/65">{row.inHouse}</div>
              <div className="px-5 py-4 text-sm text-ink/80">{row.outsourced}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
