import Reveal from "@/components/Reveal";

export type FlowIcon =
  | "data"
  | "spark"
  | "person"
  | "check"
  | "doc"
  | "lock"
  | "shield"
  | "chat"
  | "calendar"
  | "scale"
  | "flag"
  | "link"
  | "cart"
  | "chart"
  | "refresh";

export type FlowStage = { label: string; sub: string; icon: FlowIcon };

const iconPaths: Record<FlowIcon, string> = {
  data: "M4 6h16M4 12h16M4 18h10",
  spark: "M12 3v3m0 12v3M3 12h3m12 0h3M6.3 6.3l2.1 2.1m7.2 7.2 2.1 2.1m0-11.4-2.1 2.1m-7.2 7.2-2.1 2.1",
  person: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 9a7 7 0 0 1 14 0",
  check: "M5 13l4 4L19 7",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6",
  lock: "M6 11h12v10H6zM8.5 11V7.5a3.5 3.5 0 0 1 7 0V11",
  shield: "M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6L12 3z",
  chat: "M4 5h16v11H9l-5 4z",
  calendar: "M4 6h16v14H4zM4 10h16M8 3v5m8-5v5",
  scale: "M12 4v16M5 8h14M5 8l-2.5 6a3 3 0 0 0 5 0zm14 0-2.5 6a3 3 0 0 0 5 0z",
  flag: "M5 21V4m0 0h11l-2 4 2 4H5",
  link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
  cart: "M3 4h2l2.4 11h11l2-8H6.5M9 20h.01M18 20h.01",
  chart: "M4 20V10m6 10V4m6 16v-7m4 7H3",
  refresh: "M20 11a8 8 0 0 0-14.9-3M4 5v3h3m-3 5a8 8 0 0 0 14.9 3M20 19v-3h-3",
};

type FlowDiagramProps = {
  eyebrow: string;
  tagline?: string;
  stages: FlowStage[];
};

// Dark dotted panel showing how work moves through a process, with a
// travelling pulse along the connecting line. Reused across the site.
export default function FlowDiagram({ eyebrow, tagline, stages }: FlowDiagramProps) {
  const inset = `${50 / stages.length}%`;
  return (
    <Reveal className="relative overflow-hidden rounded-3xl bg-forest px-6 py-10 text-white md:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div className="relative flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mist">{eyebrow}</p>
        {tagline && <p className="text-sm text-white/55">{tagline}</p>}
      </div>
      <div className="relative mt-8">
        <div aria-hidden="true" className="absolute top-6 hidden md:block" style={{ left: inset, right: inset }}>
          <svg className="h-px w-full overflow-visible" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="#9aad9c" strokeOpacity="0.45" strokeWidth="1.5" className="flow-dash" />
          </svg>
          <span className="flow-dot absolute -top-[5px] h-2.5 w-2.5 rounded-full bg-mist shadow-[0_0_14px_4px_rgba(154,173,156,0.6)]" />
        </div>
        {/* vertical connector on mobile */}
        <span aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-px bg-mist/25 md:hidden" />
        <ol
          className="relative grid gap-6 md:[grid-template-columns:var(--cols)]"
          style={{ "--cols": `repeat(${stages.length}, minmax(0, 1fr))` } as React.CSSProperties}
        >
          {stages.map((s, i) => (
            <li key={s.label} className="flex items-start gap-4 md:flex-col md:items-center md:text-center">
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-deep-green text-mist">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={iconPaths[s.icon]} />
                </svg>
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-mist text-[10px] font-bold text-forest">
                  {i + 1}
                </span>
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
