import Image, { type StaticImageData } from "next/image";
import Aurora from "@/components/Aurora";
import NodeField from "@/components/NodeField";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  desc?: string;
  image?: StaticImageData;
  imageAlt?: string;
  breadcrumb?: React.ReactNode;
  children?: React.ReactNode;
};

// Dark animated-gradient hero with oversized serif type; an optional photo band
// overlaps its bottom edge (Pax-style).
export default function PageHero({
  eyebrow,
  title,
  desc,
  image,
  imageAlt = "",
  breadcrumb,
  children,
}: PageHeroProps) {
  return (
    <>
      <section className={`relative overflow-hidden text-white ${image ? "pb-32 md:pb-44" : ""}`}>
        <Aurora />
        <NodeField />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-36 md:pb-24 md:pt-48">
          {breadcrumb && <div className="enter mb-6 text-xs text-white/60">{breadcrumb}</div>}
          <p className="enter text-xs font-semibold uppercase tracking-[0.3em] text-mist">
            {eyebrow}
          </p>
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
      </section>
      {image && (
        <div className="relative z-10 mx-auto -mt-28 max-w-6xl px-6 md:-mt-40">
          <div className="enter relative aspect-[16/7] overflow-hidden rounded-3xl shadow-2xl shadow-black/20" style={{ animationDelay: "300ms" }}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1152px) 1104px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}
