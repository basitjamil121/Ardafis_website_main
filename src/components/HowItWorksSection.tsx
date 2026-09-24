import { processSteps } from "@/lib/site-data";

type HowItWorksSectionProps = {
  compact?: boolean;
};

export default function HowItWorksSection({ compact = false }: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className={compact ? "border-b border-line bg-white" : ""}>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
          How It Works
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-deep-green">
          From first call to ongoing delivery
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s) => (
            <div key={s.step} className="rounded-lg border border-line bg-cream p-6 shadow-sm">
              <p className="font-display text-3xl font-bold text-sage">{s.step}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-deep-green">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
