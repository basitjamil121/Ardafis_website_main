import { industries } from "@/lib/site-data";

export default function IndustriesSection() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
          Industries We Support
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-deep-green">
          Built for the clients your firm already serves
        </h2>
        <p className="mt-3 max-w-2xl text-ink/70">
          Our partners bring hands-on experience across these client types —
          so the books arrive already speaking the right language.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <div key={ind.title} className="rounded-lg border border-line bg-cream p-6">
              <h3 className="font-display text-lg font-semibold text-deep-green">
                {ind.title}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
