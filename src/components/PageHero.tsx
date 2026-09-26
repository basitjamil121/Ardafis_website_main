import Image, { type StaticImageData } from "next/image";
import Aurora from "@/components/Aurora";
import NodeField from "@/components/NodeField";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  desc?: string;
  image?: StaticImageData;
  imageAlt?: string;
  visual?: React.ReactNode;
  breadcrumb?: React.ReactNode;
  children?: React.ReactNode;
};

// Dark animated-gradient hero with oversized serif type. An optional photo is
// blended into the hero (green-toned via luminosity blend, faded at its edges)
// and an optional visual (e.g. a live sample card) floats on the right.
export default function PageHero({
  eyebrow,
  title,
  desc,
  image,
  imageAlt = "",
  visual,
  breadcrumb,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <Aurora motif={!image} />
      {image && (
        <div className="hero-photo pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[62%]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            preload
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="object-cover opacity-30 mix-blend-luminosity brightness-[0.8] lg:opacity-55"
          />
        </div>
      )}
      <NodeField />
      <div
        className={`relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-36 md:pb-24 md:pt-48 ${
          visual ? "grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-center" : ""
        }`}
      >
        <div>
          {breadcrumb && <div className="enter mb-6 text-xs text-white/60">{breadcrumb}</div>}
          <p className="enter text-xs font-semibold uppercase tracking-[0.3em] text-mist">{eyebrow}</p>
          <h1
            className="enter mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            {title}
          </h1>
          {desc && (
            <p
              className="enter mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
              style={{ animationDelay: "160ms" }}
            >
              {desc}
            </p>
          )}
          {children && (
            <div className="enter mt-9" style={{ animationDelay: "240ms" }}>
              {children}
            </div>
          )}
        </div>
        {visual && (
          <div className="enter hidden lg:block" style={{ animationDelay: "350ms" }} aria-hidden="true">
            <div className="ml-auto max-w-[340px] rotate-2">{visual}</div>
          </div>
        )}
      </div>
    </section>
  );
}
