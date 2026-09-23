import Link from "next/link";

type CTASectionProps = {
  title?: string;
  desc?: string;
};

export default function CTASection({
  title = "Ready to offload the busywork?",
  desc = "Tell us about your firm and where you need support — we'll follow up within one business day.",
}: CTASectionProps) {
  return (
    <section className="border-t border-line bg-deep-green">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-white/75">{desc}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-deep-green transition hover:bg-white/90"
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
