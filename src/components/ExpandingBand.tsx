"use client";

import { useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";

type ExpandingBandProps = {
  image: { src: StaticImageData; alt: string };
  children?: React.ReactNode;
};

// Photo that starts as a rounded card overlapping the hero and grows to full
// width as it scrolls into view (Pax/BCG-style). Progress is written to a CSS
// variable, so there are no React re-renders while scrolling.
export default function ExpandingBand({ image, children }: ExpandingBandProps) {
  const outer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = outer.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const top = el.getBoundingClientRect().top;
      const p = Math.min(Math.max(1 - (top - vh * 0.12) / (vh * 0.55), 0), 1);
      el.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={outer} className="relative z-10 -mt-28 md:-mt-40" style={{ "--p": 0 } as React.CSSProperties}>
      <div
        className="enter relative mx-auto aspect-[16/9] overflow-hidden shadow-2xl shadow-black/25 md:aspect-[21/9]"
        style={{
          animationDelay: "400ms",
          // container width (max 1104px with 24px gutters) → full viewport width
          width: "calc(min(1104px, 100% - 48px) + (100% - min(1104px, 100% - 48px)) * var(--p))",
          borderRadius: "calc(24px * (1 - var(--p)))",
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
          style={{ transform: "scale(calc(1.12 - 0.12 * var(--p)))" }}
        />
        {children}
      </div>
    </div>
  );
}
