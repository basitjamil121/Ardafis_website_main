import Link from "next/link";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { serviceCategoryOrder, services, type ServiceCategory } from "@/lib/site-data";

const categoryIntro: Record<ServiceCategory, string> = {
  "Bookkeeping & Operations": "The monthly engine — books, payables, payroll, and platform setup.",
  "Tax & Compliance": "Busy-season capacity, prepared to your standards for your sign-off.",
  "Advisory & Specialty": "Deeper work for clients who need more than clean books.",
};

// Services grouped by category: the category label stays pinned on the left while
// its services scroll past; hovering (or focusing) a row reveals what's included.
export default function ServiceGroups() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {serviceCategoryOrder.map((category, ci) => {
        const group = services.filter((s) => s.category === category);
        return (
          <div key={category} className="grid gap-8 md:grid-cols-[0.85fr_2fr] md:gap-14">
            <div>
              <Reveal className="md:sticky md:top-32">
                <p className="text-6xl font-light leading-none text-mist">0{ci + 1}</p>
                <h3 className="mt-5 font-display text-2xl font-bold text-deep-green md:text-3xl">{category}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{categoryIntro[category]}</p>
              </Reveal>
            </div>
            <div className="border-t border-line">
              {group.map((s, i) => (
                <Reveal key={s.slug} delay={i * 70}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group block border-b border-line px-2 py-6 transition-colors duration-300 hover:bg-cream focus-visible:bg-cream md:px-5"
                  >
                    <div className="flex items-center gap-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-deep-green/5 text-deep-green transition duration-300 group-hover:bg-deep-green group-hover:text-white">
                        <ServiceIcon icon={s.icon} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-display text-xl font-semibold leading-tight text-deep-green md:text-2xl">
                          {s.title}
                        </h4>
                        <p className="mt-1 text-sm text-ink/55">{s.shortDesc}</p>
                      </div>
                      <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-deep-green/20 text-deep-green transition duration-300 group-hover:rotate-[-45deg] group-hover:border-deep-green group-hover:bg-deep-green group-hover:text-white sm:flex">
                        &rarr;
                      </span>
                    </div>
                    {/* Preview: expands on hover / keyboard focus */}
                    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <ul className="flex flex-wrap gap-2 pl-16 pt-4">
                          {s.bullets.slice(0, 3).map((b) => (
                            <li key={b} className="rounded-full border border-deep-green/15 bg-white px-3 py-1.5 text-xs text-ink/70">
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
