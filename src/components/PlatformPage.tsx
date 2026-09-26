import Link from "next/link";
import CredentialBadges from "@/components/CredentialBadges";
import CTASection from "@/components/CTASection";
import FlowDiagram from "@/components/FlowDiagram";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { platformFlows } from "@/lib/flows";
import { platformIconPaths } from "@/lib/platform-logos";

type PlatformPageProps = {
  platform: string;
  icon: keyof typeof platformIconPaths;
  title: string;
  intro: string;
  capabilities: string[];
  related: { label: string; href: string }[];
};

// Shared layout for the QuickBooks / Xero outsourcing landing pages.
export default function PlatformPage({ platform, icon, title, intro, capabilities, related }: PlatformPageProps) {
  return (
    <>
      <PageHero
        eyebrow="Platform Outsourcing"
        title={title}
        desc={intro}
        breadcrumb={
          <nav aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-1.5">/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
          </nav>
        }
      >
        <CredentialBadges />
      </PageHero>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:py-28 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Reveal className="flex items-center gap-5">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cream text-deep-green">
                <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor" aria-hidden="true">
                  <path d={platformIconPaths[icon]} />
                </svg>
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-deep-green md:text-5xl">
                What we handle inside {platform}
              </h2>
            </Reveal>
            <ul className="mt-10 border-t border-line">
              {capabilities.map((c, i) => (
                <Reveal as="li" key={c} delay={i * 50} className="flex items-baseline gap-6 border-b border-line py-6">
                  <span className="w-8 shrink-0 text-2xl font-light text-mist">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg leading-relaxed text-ink/80">{c}</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal className="self-start rounded-3xl bg-forest p-8 text-white lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mist">Related services</p>
            <ul className="mt-5 flex flex-col divide-y divide-white/10">
              {related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="flex items-center justify-between py-4 font-display text-lg transition hover:text-mist">
                    {r.label} <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-24 md:pb-28">
          <FlowDiagram {...platformFlows[icon as "quickbooks" | "xero"]} />
        </div>
      </section>

      <CTASection
        title={`Running your clients on ${platform}?`}
        desc="Tell us about the workload and we'll scope it within one business day."
      />
    </>
  );
}
