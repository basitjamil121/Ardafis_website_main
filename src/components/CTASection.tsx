import Link from "next/link";
import Aurora from "@/components/Aurora";
import Reveal from "@/components/Reveal";

type CTASectionProps = {
  title?: string;
  desc?: string;
};

export default function CTASection({
  title = "Ready to offload the busywork?",
  desc = "Tell us about your firm and where you need support — we'll follow up within one business day.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden text-white">
      <Aurora />
      <Reveal className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-mist">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-mist opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mist" />
          </span>
          Partners reply within one business day
        </p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
          {title}
        </h2>
        <p className="mt-6 max-w-xl text-lg text-white/75">{desc}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/contact#callback"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-deep-green shadow-lg shadow-black/10 transition hover:bg-cream"
          >
            Book a call <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Send a message
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
