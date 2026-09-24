import Link from "next/link";
import BrandMotif from "@/components/BrandMotif";

type CTASectionProps = {
  title?: string;
  desc?: string;
};

export default function CTASection({
  title = "Ready to offload the busywork?",
  desc = "Tell us about your firm and where you need support — we'll follow up within one business day.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-line bg-gradient-to-br from-deep-green to-[#132A20]">
      <BrandMotif
        variant="light"
        className="pointer-events-none absolute -right-20 -top-20 h-[380px] w-[380px] md:-right-8 md:-top-24 md:h-[460px] md:w-[460px]"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-white/75">{desc}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-deep-green shadow-sm transition hover:bg-white/90"
          >
            Start a conversation
          </Link>
          <Link
            href="/contact#callback"
            className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Request a call
          </Link>
        </div>
      </div>
    </section>
  );
}
