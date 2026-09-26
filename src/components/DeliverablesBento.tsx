import Image, { type StaticImageData } from "next/image";
import Reveal from "@/components/Reveal";
import { CloseChecklistMockup, PnLMockup, ReconMockup } from "@/components/ProductMockups";
import { photos } from "@/lib/images";

type PhotoTileProps = {
  image: { src: StaticImageData; alt: string };
  badge?: string;
  badgeLabel?: string;
  title: string;
  desc: string;
  className?: string;
  sizes: string;
};

// Photo with a frosted-glass caption panel and optional stat badge (BCG-style).
function PhotoTile({ image, badge, badgeLabel, title, desc, className = "", sizes }: PhotoTileProps) {
  return (
    <div className={`group relative min-h-[340px] overflow-hidden rounded-3xl ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        placeholder="blur"
        sizes={sizes}
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent" />
      {badge && (
        <div className="glass absolute left-5 top-5 rounded-2xl px-4 py-3 text-center">
          <p className="text-2xl font-light leading-none text-deep-green">{badge}</p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-ink/60">{badgeLabel}</p>
        </div>
      )}
      <div className="glass absolute inset-x-4 bottom-4 rounded-2xl p-5 md:inset-x-5 md:bottom-5">
        <h3 className="font-display text-xl font-semibold text-deep-green">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{desc}</p>
      </div>
    </div>
  );
}

function MockupTile({ children, title, desc }: { children: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-500 hover:-translate-y-1 hover:bg-white/10 md:p-7">
      <div className="transition duration-500">{children}</div>
      <div>
        <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-white/65">{desc}</p>
      </div>
    </div>
  );
}

// "What lands in your inbox" — mixed-size grid of photo tiles and deliverable mockups.
export default function DeliverablesBento() {
  return (
    <section className="bg-forest text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mist">What you receive</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
              Review-ready work, not raw data entry
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-white/65">
            Every engagement ends in something your CPA can review and sign
            off quickly — reconciled books, a documented close, and reports
            your clients can actually read.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-6">
          <Reveal className="md:col-span-4">
            <PhotoTile
              image={photos.statsLaptop}
              title="Monthly close pack"
              desc="P&L, balance sheet, cash-flow, and variance notes — delivered on a fixed calendar you agree with us."
              className="h-full min-h-[380px] md:min-h-[440px]"
              sizes="(min-width: 768px) 720px, 100vw"
            />
          </Reveal>
          <Reveal className="md:col-span-2" delay={100}>
            <MockupTile
              title="Reconciled to the penny"
              desc="Bank, card, and merchant accounts matched line by line, with exceptions flagged for you."
            >
              <ReconMockup live delay={400} />
            </MockupTile>
          </Reveal>
          <Reveal className="md:col-span-2" delay={0}>
            <MockupTile
              title="A documented close"
              desc="A checklist built around your firm's standards, so review is fast and nothing is skipped."
            >
              <CloseChecklistMockup live delay={400} />
            </MockupTile>
          </Reveal>
          <Reveal className="md:col-span-2" delay={100}>
            <PhotoTile
              image={photos.warmBuilding}
              badge="1 day"
              badgeLabel="Response time"
              title="A named partner"
              desc="Every engagement is owned by one partner — not a rotating offshore queue."
              className="h-full"
              sizes="(min-width: 768px) 360px, 100vw"
            />
          </Reveal>
          <Reveal className="md:col-span-2" delay={200}>
            <MockupTile
              title="Reports clients understand"
              desc="Management reporting and KPIs for advisory-tier clients, ready to send under your firm's name."
            >
              <PnLMockup live delay={500} />
            </MockupTile>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
