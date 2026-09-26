import CostEstimator from "@/components/CostEstimator";
import Reveal from "@/components/Reveal";

const rows = [
  {
    label: "Cost",
    inHouse: "$45,000–$55,000 a year in salary, taxes, and benefits",
    outsourced: "Pay only for the clients, hours, or returns you hand off",
  },
  {
    label: "Ramp-up",
    inHouse: "4–8 weeks to hire and train",
    outsourced: "Days to onboard on your existing software",
  },
  {
    label: "Busy season",
    inHouse: "Fixed capacity year-round",
    outsourced: "Scale up for tax season, scale down after",
  },
  {
    label: "Coverage",
    inHouse: "Single point of failure if staff leaves",
    outsourced: "Team-backed continuity across engagements",
  },
];

function Mark({ good, delay }: { good: boolean; delay: number }) {
  return (
    <span
      className={`reveal-pop flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
        good ? "bg-mist/30 text-white" : "bg-ink/5 text-ink/40"
      }`}
      style={{ animationDelay: `${delay}ms` }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {good ? <path d="M3.5 8.5l3 3 6-7" /> : <path d="M4.5 4.5l7 7m0-7l-7 7" />}
      </svg>
    </span>
  );
}

export default function CostComparison() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">Why firms outsource</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-deep-green md:text-6xl">
              In-house hire vs. outsourced support
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-ink/60">
            Move the sliders to see what handing off your own client load
            could cost over a year.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <CostEstimator />
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-line p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/45">In-house hire</p>
            <ul className="mt-6 flex flex-col gap-5">
              {rows.map((row, i) => (
                <li key={row.label} className="flex gap-4">
                  <Mark good={false} delay={200 + i * 120} />
                  <div>
                    <p className="text-sm font-semibold text-ink/70">{row.label}</p>
                    <p className="mt-0.5 text-ink/55">{row.inHouse}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="rounded-3xl bg-deep-green p-8 text-white shadow-2xl shadow-deep-green/20 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mist">Ardafis Partners</p>
            <ul className="mt-6 flex flex-col gap-5">
              {rows.map((row, i) => (
                <li key={row.label} className="flex gap-4">
                  <Mark good delay={400 + i * 120} />
                  <div>
                    <p className="text-sm font-semibold text-mist">{row.label}</p>
                    <p className="mt-0.5 text-white/85">{row.outsourced}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <p className="mt-6 text-xs text-ink/45">
          General US market figures for illustration — your actual savings depend on workload and current staffing.
        </p>
      </div>
    </section>
  );
}
