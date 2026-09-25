import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/site-data";

// Four engagement steps as oversized numbered columns.
export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">The engagement</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-deep-green md:text-6xl">
            From first call to ongoing delivery
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 100} className="group bg-white p-8 transition duration-300 hover:bg-cream">
              <p className="text-6xl font-light leading-none text-mist transition group-hover:text-deep-green">
                {s.step}
              </p>
              <h3 className="mt-10 font-display text-2xl font-semibold text-deep-green">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
