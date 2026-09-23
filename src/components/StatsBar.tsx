import { trustStats } from "@/lib/site-data";

export default function StatsBar() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {trustStats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-bold text-deep-green md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink/60">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
