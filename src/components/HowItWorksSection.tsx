import FlowDiagram from "@/components/FlowDiagram";
import Reveal from "@/components/Reveal";
import { engagementFlow } from "@/lib/flows";

// The four engagement steps as a flow diagram.
export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">The engagement</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-deep-green md:text-6xl">
              From first call to ongoing delivery
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-ink/60">
            Four clear steps — you decide when to move to the next one.
          </p>
        </Reveal>
        <div className="mt-14">
          <FlowDiagram {...engagementFlow} />
        </div>
      </div>
    </section>
  );
}
