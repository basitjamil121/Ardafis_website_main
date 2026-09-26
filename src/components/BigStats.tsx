import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import { photos } from "@/lib/images";
import { trustStats } from "@/lib/site-data";

// Pax-style oversized numerals beside a tall photograph.
export default function BigStats({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl items-stretch gap-12 px-6 py-24 md:grid-cols-[0.8fr_2fr] md:py-32">
        <Reveal className="relative aspect-[16/10] overflow-hidden rounded-3xl md:aspect-auto md:min-h-[440px]">
          <Image
            src={photos.womanLaptop.src}
            alt={photos.womanLaptop.alt}
            fill
            placeholder="blur"
            sizes="(min-width: 768px) 340px, 100vw"
            style={{ objectPosition: "50% 30%" }}
            className="object-cover"
          />
        </Reveal>
        <div>
          <Reveal className="mb-14 grid gap-6 md:mb-20 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">The firm</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-deep-green md:text-5xl">
                Small by design. Senior on every file.
              </h2>
            </div>
            <div>
              <p className="leading-relaxed text-ink/65">
                Every engagement is run by one of three ACCA-qualified partners —
                not handed down to a junior pool.
              </p>
              {showLink && (
                <Link
                  href="/about"
                  className="group mt-5 inline-flex items-center gap-4 text-sm font-semibold text-deep-green"
                >
                  <span className="border-b border-deep-green pb-0.5">About the partners</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-deep-green/20 transition group-hover:bg-deep-green group-hover:text-white">
                    &rarr;
                  </span>
                </Link>
              )}
            </div>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-0">
            {trustStats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 120}
                className={`sm:px-8 ${i > 0 ? "sm:border-l sm:border-deep-green/15" : "sm:pl-0"}`}
              >
                <p className="text-7xl font-light leading-none tracking-tight text-deep-green lg:text-8xl">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-4 max-w-[12rem] text-sm font-medium text-ink/70">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
