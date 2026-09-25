import Link from "next/link";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { servicesByCategory } from "@/lib/site-data";

// Pax-style full-width service list: big title, short description, circular arrow.
export default function ServiceRows() {
  return (
    <div className="border-t border-line">
      {servicesByCategory.map((s, i) => (
        <Reveal key={s.slug} delay={(i % 3) * 60}>
          <Link
            href={`/services/${s.slug}`}
            className="group grid items-center gap-4 border-b border-line px-2 py-7 transition-colors duration-300 hover:bg-cream md:grid-cols-[1.6fr_1fr_auto] md:gap-10 md:px-6 md:py-8"
          >
            <div className="flex items-start gap-5">
              <span className="mt-1 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-deep-green/5 text-deep-green transition group-hover:bg-deep-green group-hover:text-white md:flex">
                <ServiceIcon icon={s.icon} />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">
                  {s.category}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-deep-green md:text-[2rem]">
                  {s.title}
                </h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-ink/60 md:text-base">{s.shortDesc}</p>
            <span className="hidden h-14 w-14 items-center justify-center rounded-full border border-deep-green/20 text-lg text-deep-green transition duration-300 group-hover:border-deep-green group-hover:bg-deep-green group-hover:text-white md:flex">
              &rarr;
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
