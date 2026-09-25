import Link from "next/link";
import Reveal from "@/components/Reveal";
import { firstThirtyDays } from "@/lib/site-data";

// Process-based proof: what a firm can expect in its first month.
export default function FirstThirtyDays({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-deep-green text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mist">How it works</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            Your first 30 days, mapped out
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/65">
            No long procurement cycle and no dedicated-staff contract. You see
            real work on real files within weeks — and decide from there.
          </p>
        </Reveal>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <span aria-hidden="true" className="absolute left-0 right-0 top-[22px] hidden h-px bg-white/15 md:block" />
          {firstThirtyDays.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="relative">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-deep-green font-display text-lg font-bold text-mist">
                {i + 1}
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-mist">{step.when}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{step.desc}</p>
            </Reveal>
          ))}
        </ol>

        {showLink && (
          <Reveal className="mt-14">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              See the full process <span aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
