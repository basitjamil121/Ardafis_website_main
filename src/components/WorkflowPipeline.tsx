import Reveal from "@/components/Reveal";

const stages = [
  { label: "Source data", sub: "Bank feeds, bills, payroll exports" },
  { label: "Automated matching", sub: "Rules-based categorization & reconciliation" },
  { label: "Partner review", sub: "Every file checked by a named partner" },
  { label: "Your sign-off", sub: "Review-ready for your CPA or EA" },
];

function StageIcon({ i }: { i: number }) {
  const paths = [
    "M4 6h16M4 12h16M4 18h10", // data rows
    "M12 3v3m0 12v3M3 12h3m12 0h3M6.3 6.3l2.1 2.1m7.2 7.2 2.1 2.1m0-11.4-2.1 2.1m-7.2 7.2-2.1 2.1", // processing spark
    "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 9a7 7 0 0 1 14 0", // person
    "M5 13l4 4L19 7", // check
  ];
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[i]} />
    </svg>
  );
}

// How work moves through an engagement — automation-assisted, human-reviewed.
export default function WorkflowPipeline() {
  return (
    <Reveal className="relative overflow-hidden rounded-3xl bg-forest px-6 py-10 text-white md:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div className="relative flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mist">How work moves</p>
        <p className="text-sm text-white/55">Automation-assisted. Partner-reviewed. Your sign-off.</p>
      </div>
      <div className="relative mt-8">
        {/* connecting line with a travelling pulse (desktop) */}
        <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-6 hidden md:block">
          <svg className="h-px w-full overflow-visible" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="#9aad9c" strokeOpacity="0.45" strokeWidth="1.5" className="flow-dash" />
          </svg>
          <span className="flow-dot absolute -top-[5px] h-2.5 w-2.5 rounded-full bg-mist shadow-[0_0_14px_4px_rgba(154,173,156,0.6)]" />
        </div>
        <ol className="relative grid gap-6 md:grid-cols-4">
          {stages.map((s, i) => (
            <li key={s.label} className="flex items-start gap-4 md:flex-col md:items-center md:text-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-deep-green text-mist">
                <StageIcon i={i} />
              </span>
              <div>
                <p className="font-display text-lg font-semibold">{s.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">{s.sub}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
