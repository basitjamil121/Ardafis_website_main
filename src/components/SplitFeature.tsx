import Image, { type StaticImageData } from "next/image";
import Reveal from "@/components/Reveal";

type SplitFeatureProps = {
  image: { src: StaticImageData; alt: string };
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
  tone?: "white" | "cream";
};

// Stash-style split: a full-bleed photo on one half, text on the other.
export default function SplitFeature({
  image,
  eyebrow,
  title,
  children,
  reverse = false,
  tone = "white",
}: SplitFeatureProps) {
  return (
    <section className={`grid md:min-h-[620px] md:grid-cols-2 ${tone === "cream" ? "bg-cream" : "bg-white"}`}>
      <div className={`relative min-h-[320px] overflow-hidden ${reverse ? "md:order-2" : ""}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          placeholder="blur"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex items-center">
        <Reveal className={`w-full max-w-xl px-6 py-20 md:px-14 lg:px-20 ${reverse ? "md:ml-auto" : ""}`}>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">{eyebrow}</p>
          )}
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-deep-green md:text-5xl">
            {title}
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-ink/70">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
