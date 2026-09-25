import Link from "next/link";
import Reveal from "@/components/Reveal";
import { platformIconPaths } from "@/lib/platform-logos";

type Platform = { name: string; icon?: keyof typeof platformIconPaths; href?: string };

const platforms: Platform[] = [
  { name: "QuickBooks Online", icon: "quickbooks", href: "/services/quickbooks-outsourcing" },
  { name: "QuickBooks Desktop", icon: "quickbooks", href: "/services/quickbooks-outsourcing" },
  { name: "Xero", icon: "xero", href: "/services/xero-outsourcing" },
  { name: "Sage", icon: "sage" },
  { name: "Odoo", icon: "odoo" },
  { name: "Gusto", icon: "gusto" },
  { name: "Shopify / A2X", icon: "shopify" },
  { name: "Bill.com" },
  { name: "Drake Tax" },
  { name: "UltraTax" },
];

function Mark({ platform }: { platform: Platform }) {
  if (platform.icon) {
    return (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor" aria-hidden="true">
        <path d={platformIconPaths[platform.icon]} />
      </svg>
    );
  }
  // No public brand mark available — use a neutral monogram.
  return (
    <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-current text-sm font-bold">
      {platform.name.charAt(0)}
    </span>
  );
}

export default function PlatformLogos() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">Platforms</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-deep-green md:text-5xl">
              We work inside your stack
            </h2>
          </div>
          <p className="max-w-sm text-ink/60">
            No migration needed to bring us on — we log in to the software your
            firm and your clients already run.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-5">
          {platforms.map((p, i) => {
            const inner = (
              <>
                <span className="text-deep-green/45 transition duration-300 group-hover:text-deep-green">
                  <Mark platform={p} />
                </span>
                <span className="text-sm font-semibold text-ink/70 transition group-hover:text-deep-green">
                  {p.name}
                </span>
              </>
            );
            const cls =
              "group flex h-36 flex-col items-center justify-center gap-3 bg-white px-4 text-center transition duration-300 hover:bg-cream";
            return (
              <Reveal key={p.name} delay={(i % 5) * 60} className="bg-white">
                {p.href ? (
                  <Link href={p.href} className={cls}>
                    {inner}
                  </Link>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
