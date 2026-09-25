import Link from "next/link";
import Reveal from "@/components/Reveal";
import { pricingTiers } from "@/lib/site-data";

// Per-client bookkeeping leads (larger, dark); per-return and hourly sit beside it.
export default function PricingCards() {
  const [featured, ...others] = pricingTiers;
  return (
    <div className="grid gap-5 lg:grid-cols-[1.25fr_1fr]">
      <Reveal className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-deep-green p-8 text-white shadow-2xl shadow-deep-green/20 md:p-10">
        <div>
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-mist">
            Most firms start here
          </span>
          <h3 className="mt-6 font-display text-3xl font-semibold">{featured.name}</h3>
          <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
            <span className="text-[2.75rem] font-light leading-tight tracking-tight md:text-6xl">{featured.price}</span>
            <span className="text-white/65">{featured.unit}</span>
          </p>
          <p className="mt-5 max-w-md leading-relaxed text-white/75">{featured.desc}</p>
        </div>
        <Link
          href="/contact#callback"
          className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-deep-green transition hover:bg-cream"
        >
          Scope a client <span aria-hidden="true">&rarr;</span>
        </Link>
      </Reveal>
      <div className="grid gap-5">
        {others.map((p, i) => (
          <Reveal
            key={p.name}
            delay={(i + 1) * 100}
            className="rounded-3xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
          >
            <h3 className="font-display text-xl font-semibold text-deep-green">{p.name}</h3>
            <p className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-light tracking-tight text-ink">{p.price}</span>
              <span className="text-sm text-ink/55">{p.unit}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">{p.desc}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
