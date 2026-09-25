"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { industries } from "@/lib/site-data";

const cardStyles = [
  "bg-deep-green text-white",
  "bg-white text-ink border border-line",
  "bg-mist text-forest",
  "bg-forest text-white",
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// Industry cards that start stacked and fan out as the section scrolls into view (The3Key-style).
export default function IndustryFan() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [spread, setSpread] = useState(262);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      // fit the fanned deck inside the container (cards are 240px wide, rotated corners need ~40px)
      setSpread(Math.min(262, (el.clientWidth - 280) / (industries.length - 1)));
      if (reduced) {
        setProgress(1);
        return;
      }
      const vh = window.innerHeight;
      const top = el.getBoundingClientRect().top;
      const t = (vh * 0.85 - top) / (vh * 0.55);
      setProgress(Math.min(Math.max(t, 0), 1));
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

  const eased = 1 - Math.pow(1 - progress, 3);
  const mid = (industries.length - 1) / 2;

  return (
    <>
      {/* Desktop: fanned deck */}
      <div ref={ref} className="relative mx-auto hidden h-[480px] max-w-5xl lg:block" aria-label="Client types we support">
        {industries.map((ind, i) => {
          const o = i - mid;
          const x = lerp(o * 14, o * spread, eased);
          const y = lerp(0, Math.abs(o) * 26, eased);
          const rot = lerp(o * 2.5, o * 6, eased);
          return (
            <article
              key={ind.title}
              className={`absolute left-1/2 top-4 flex h-[380px] w-[240px] flex-col justify-between rounded-3xl p-7 shadow-2xl shadow-black/15 ${cardStyles[i % cardStyles.length]}`}
              style={{
                transform: `translateX(calc(-50% + ${x}px)) translateY(${y}px) rotate(${rot}deg)`,
                zIndex: i,
              }}
            >
              <span className="font-display text-5xl font-bold opacity-30">0{i + 1}</span>
              <div>
                <h3 className="font-display text-3xl font-bold leading-tight">{ind.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-75">{ind.desc}</p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Phones & tablets: simple stack */}
      <div className="grid gap-4 md:grid-cols-2 lg:hidden">
        {industries.map((ind, i) => (
          <Reveal key={ind.title} delay={i * 80}>
            <article
              className={`rounded-3xl p-7 shadow-lg shadow-black/10 ${cardStyles[i % cardStyles.length]} ${
                i % 2 ? "rotate-1" : "-rotate-1"
              }`}
            >
              <span className="font-display text-4xl font-bold opacity-30">0{i + 1}</span>
              <h3 className="mt-6 font-display text-2xl font-bold leading-tight">{ind.title}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-75">{ind.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
