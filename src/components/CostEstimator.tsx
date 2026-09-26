"use client";

import { useState } from "react";
import { estimatorRates } from "@/lib/site-data";

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const range = (lo: number, hi: number) => `${usd.format(lo)}–${usd.format(hi)}`;

function RangeBar({ lo, hi, max, dark }: { lo: number; hi: number; max: number; dark?: boolean }) {
  return (
    <div className="relative h-4 overflow-hidden rounded-full bg-deep-green/[0.06]">
      <div
        className={`absolute inset-y-0 left-0 rounded-full transition-[width] duration-700 ease-out ${dark ? "bg-deep-green" : "bg-ink/25"}`}
        style={{ width: `${(lo / max) * 100}%` }}
      />
      <div
        className={`absolute inset-y-0 rounded-r-full transition-[left,width] duration-700 ease-out ${dark ? "bg-deep-green/35" : "bg-ink/10"}`}
        style={{ left: `${(lo / max) * 100}%`, width: `${((hi - lo) / max) * 100}%` }}
      />
    </div>
  );
}

// Interactive annual-cost comparison: per-client outsourcing vs one in-house hire.
export default function CostEstimator() {
  const [clients, setClients] = useState(8);
  const [months, setMonths] = useState(12);

  const [pcLo, pcHi] = estimatorRates.perClientMonthly;
  const [ihLo, ihHi] = estimatorRates.inHouseAnnual;
  const outLo = clients * pcLo * months;
  const outHi = clients * pcHi * months;
  const max = Math.max(ihHi, outHi) * 1.08;

  // Judge by the midpoint so a wide outsourced range that merely touches the
  // in-house range isn't presented as "comparable".
  const outMid = (outLo + outHi) / 2;
  let verdict: string;
  if (outHi < ihLo) {
    verdict = `An estimated ${range(ihLo - outHi, ihHi - outLo)} less per year than one in-house hire.`;
  } else if (outMid <= ihHi) {
    verdict = "Roughly comparable to one in-house hire — with busy-season flexibility and no hiring risk.";
  } else {
    verdict = "At this volume a dedicated in-house hire may cost less — ask us about a blended setup.";
  }

  return (
    <div className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-2xl shadow-black/5 lg:grid-cols-[1fr_1.4fr]">
      {/* Controls */}
      <div className="bg-cream p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">Your numbers</p>

        <label htmlFor="est-clients" className="mt-8 flex items-baseline justify-between gap-4">
          <span className="font-display text-lg font-semibold text-deep-green">Clients to hand off</span>
          <span className="text-3xl font-light tabular-nums text-deep-green">{clients}</span>
        </label>
        <input
          id="est-clients"
          type="range"
          min={1}
          max={30}
          value={clients}
          onChange={(e) => setClients(Number(e.target.value))}
          className="mt-4 w-full accent-[#1e3a2e]"
        />

        <label htmlFor="est-months" className="mt-10 flex items-baseline justify-between gap-4">
          <span className="font-display text-lg font-semibold text-deep-green">Months of support per year</span>
          <span className="text-3xl font-light tabular-nums text-deep-green">{months}</span>
        </label>
        <input
          id="est-months"
          type="range"
          min={1}
          max={12}
          value={months}
          onChange={(e) => setMonths(Number(e.target.value))}
          className="mt-4 w-full accent-[#1e3a2e]"
        />
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { label: "Year-round", m: 12 },
            { label: "Busy season only", m: 4 },
          ].map((opt) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => setMonths(opt.m)}
              aria-pressed={months === opt.m}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${
                months === opt.m
                  ? "border-deep-green bg-deep-green text-white"
                  : "border-deep-green/20 text-deep-green hover:border-deep-green"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-col justify-between gap-10 p-8 md:p-10" aria-live="polite">
        <div className="flex flex-col gap-9">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-sm font-semibold text-ink/60">One in-house hire, year-round</p>
              <p className="text-2xl font-light tabular-nums text-ink/70">{range(ihLo, ihHi)}</p>
            </div>
            <div className="mt-3">
              <RangeBar lo={ihLo} hi={ihHi} max={max} />
            </div>
            <p className="mt-2 text-xs text-ink/45">Salary, taxes, and benefits — plus 4–8 weeks to hire and train.</p>
          </div>
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-sm font-semibold text-deep-green">Ardafis per-client bookkeeping</p>
              <p className="text-2xl font-semibold tabular-nums text-deep-green">{range(outLo, outHi)}</p>
            </div>
            <div className="mt-3">
              <RangeBar lo={outLo} hi={outHi} max={max} dark />
            </div>
            <p className="mt-2 text-xs text-ink/45">
              {clients} client{clients === 1 ? "" : "s"} × {usd.format(pcLo)}–{usd.format(pcHi)} per month × {months} month
              {months === 1 ? "" : "s"}.
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-deep-green p-6 text-white">
          <p className="font-display text-xl font-semibold leading-snug lining-nums md:text-2xl">{verdict}</p>
          <p className="mt-3 text-xs leading-relaxed text-white/55">
            Illustrative estimate using our published per-client range and general US salary figures — not a
            quote. Your actual cost depends on each client&apos;s volume and complexity.
          </p>
        </div>
      </div>
    </div>
  );
}
