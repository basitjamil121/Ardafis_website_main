// Illustrative UI cards showing the kind of deliverables a firm receives.
// Every card is labelled "Sample" — no real client data.

function SampleTag() {
  return (
    <span className="rounded-full bg-deep-green/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-sage">
      Sample
    </span>
  );
}

function Check({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 16 16" className={`h-4 w-4 shrink-0 text-moss ${className}`} style={style} fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 8.3l2 2 4-4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const reconRows = [
  { date: "09/02", desc: "Stripe payout", amount: "4,218.40" },
  { date: "09/05", desc: "Gusto payroll", amount: "−12,960.00" },
  { date: "09/11", desc: "Office lease", amount: "−3,150.00" },
  { date: "09/18", desc: "Client deposit", amount: "8,400.00" },
];

// live: rows tick in one by one and a scan line sweeps the card (used in the hero).
export function ReconMockup({ live = false, delay = 0 }: { live?: boolean; delay?: number }) {
  const at = (i: number) => (live ? { animationDelay: `${delay + i * 320}ms` } : undefined);
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-5 text-ink shadow-xl shadow-black/10">
      {live && (
        <span
          aria-hidden="true"
          className="scan-sweep pointer-events-none absolute inset-x-0 top-16 h-10 bg-gradient-to-b from-transparent via-mist/35 to-transparent"
        />
      )}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-deep-green">Bank reconciliation</p>
          <p className="mt-0.5 text-[11px] text-ink/50">Operating ••4821 · September</p>
        </div>
        <SampleTag />
      </div>
      <div className="mt-4 divide-y divide-line text-[12px] tabular-nums">
        {reconRows.map((r, i) => (
          <div key={r.desc} className={`flex items-center gap-3 py-2 ${live ? "tick-row" : ""}`} style={at(i)}>
            <span className="w-10 text-ink/45">{r.date}</span>
            <span className="flex-1 text-ink/75">{r.desc}</span>
            <span className="text-ink/80">{r.amount}</span>
            <Check className={live ? "tick-pop" : ""} style={live ? { animationDelay: `${delay + i * 320 + 250}ms` } : undefined} />
          </div>
        ))}
      </div>
      <div
        className={`mt-3 flex items-center justify-between rounded-xl bg-cream px-3 py-2.5 text-[12px] ${live ? "tick-row" : ""}`}
        style={at(reconRows.length)}
      >
        <span className="text-ink/60">Unreconciled difference</span>
        <span className="font-semibold text-moss">$0.00</span>
      </div>
      {live && (
        <p className="tick-row mt-3 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-sage" style={at(reconRows.length + 1)}>
          <span className="node-pulse h-1.5 w-1.5 rounded-full bg-moss" />
          Auto-matched · partner reviewed
        </p>
      )}
    </div>
  );
}

const closeItems = [
  { label: "Bank & card reconciliations", done: true },
  { label: "AP / AR aging reviewed", done: true },
  { label: "Accruals & prepaids posted", done: true },
  { label: "Payroll journal tied out", done: true },
  { label: "Variance notes for CPA review", done: false },
];

// live: progress bar fills and items check off in sequence (used in the hero).
export function CloseChecklistMockup({ live = false, delay = 0 }: { live?: boolean; delay?: number }) {
  const done = closeItems.filter((i) => i.done).length;
  const at = (i: number) => (live ? { animationDelay: `${delay + i * 280}ms` } : undefined);
  return (
    <div className="rounded-2xl bg-white p-5 text-ink shadow-xl shadow-black/10">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-deep-green">Month-end close</p>
          <p className="mt-0.5 text-[11px] text-ink/50">
            {done} of {closeItems.length} complete
          </p>
        </div>
        <SampleTag />
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line">
        <div
          className={`h-full rounded-full bg-moss ${live ? "bar-fill" : ""}`}
          style={{ width: `${(done / closeItems.length) * 100}%`, ...(live ? { animationDelay: `${delay}ms` } : {}) }}
        />
      </div>
      <ul className="mt-4 flex flex-col gap-2.5 text-[12px]">
        {closeItems.map((item, i) => (
          <li key={item.label} className={`flex items-center gap-2.5 ${live ? "tick-row" : ""}`} style={at(i)}>
            {item.done ? (
              <Check className={live ? "tick-pop" : ""} style={live ? { animationDelay: `${delay + i * 280 + 200}ms` } : undefined} />
            ) : (
              <span className="h-4 w-4 shrink-0 rounded-full border-[1.5px] border-dashed border-sage" />
            )}
            <span className={item.done ? "text-ink/75" : "text-ink/45"}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const bars = [42, 55, 48, 63, 58, 71];

// live: bars rise in sequence once revealed.
export function PnLMockup({ live = false, delay = 0 }: { live?: boolean; delay?: number }) {
  return (
    <div className="rounded-2xl bg-white p-5 text-ink shadow-xl shadow-black/10">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-deep-green">Management report</p>
          <p className="mt-0.5 text-[11px] text-ink/50">Revenue, trailing six months</p>
        </div>
        <SampleTag />
      </div>
      <div className="mt-5 flex h-24 items-end gap-2" aria-hidden="true">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 origin-bottom rounded-t-md ${i === bars.length - 1 ? "bg-deep-green" : "bg-mist/60"} ${live ? "bar-rise" : ""}`}
            style={{ height: `${h}%`, ...(live ? { animationDelay: `${delay + i * 140}ms` } : {}) }}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] tabular-nums">
        <div>
          <p className="text-ink/45">Gross margin</p>
          <p className="mt-0.5 font-semibold text-ink/85">41.8%</p>
        </div>
        <div>
          <p className="text-ink/45">Net income</p>
          <p className="mt-0.5 font-semibold text-ink/85">+12.4%</p>
        </div>
        <div>
          <p className="text-ink/45">Cash runway</p>
          <p className="mt-0.5 font-semibold text-ink/85">7.5 mo</p>
        </div>
      </div>
    </div>
  );
}

const accessItems = [
  "Mutual NDA signed",
  "§7216 consent on file",
  "Invited through your platform's user roles",
  "Scope: this client only",
];

// Security: an access request that only proceeds once each safeguard is in place.
export function AccessMockup({ live = false, delay = 0 }: { live?: boolean; delay?: number }) {
  const at = (i: number) => (live ? { animationDelay: `${delay + i * 380}ms` } : undefined);
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-5 text-ink shadow-xl shadow-black/10">
      {live && (
        <span
          aria-hidden="true"
          className="scan-sweep pointer-events-none absolute inset-x-0 top-16 h-10 bg-gradient-to-b from-transparent via-mist/35 to-transparent"
        />
      )}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-deep-green">Access request</p>
          <p className="mt-0.5 text-[11px] text-ink/50">Client A · Property management</p>
        </div>
        <SampleTag />
      </div>
      <ul className="mt-4 divide-y divide-line text-[12px]">
        {accessItems.map((item, i) => (
          <li key={item} className={`flex items-center justify-between gap-3 py-2.5 ${live ? "tick-row" : ""}`} style={at(i)}>
            <span className="text-ink/75">{item}</span>
            <Check className={live ? "tick-pop" : ""} style={live ? { animationDelay: `${delay + i * 380 + 250}ms` } : undefined} />
          </li>
        ))}
      </ul>
      <div
        className={`mt-3 flex items-center justify-between rounded-xl bg-deep-green px-3 py-2.5 text-[12px] text-white ${live ? "tick-row" : ""}`}
        style={at(accessItems.length)}
      >
        <span className="flex items-center gap-2">
          <span className="node-pulse h-1.5 w-1.5 rounded-full bg-mist" />
          Access granted
        </span>
        <span className="text-white/60">Shared logins: none</span>
      </div>
    </div>
  );
}
