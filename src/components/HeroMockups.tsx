"use client";

import { useEffect, useRef } from "react";
import { CloseChecklistMockup, ReconMockup } from "@/components/ProductMockups";

// Hero sample cards: tilt toward the pointer and drift apart slightly on scroll.
// Transforms are written straight to the DOM (no re-renders) and skipped for reduced motion.
export default function HeroMockups() {
  const wrap = useRef<HTMLDivElement>(null);
  const back = useRef<HTMLDivElement>(null);
  const front = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let tiltX = 0;
    let tiltY = 0;
    let frame = 0;

    const apply = () => {
      frame = 0;
      const drift = Math.min(window.scrollY, 600);
      if (back.current) {
        back.current.style.transform = `perspective(900px) rotateX(${tiltY * -6}deg) rotateY(${tiltX * 8}deg) translateY(${drift * -0.08}px) rotate(2deg)`;
      }
      if (front.current) {
        front.current.style.transform = `perspective(900px) rotateX(${tiltY * -9}deg) rotateY(${tiltX * 12}deg) translateY(${drift * 0.12}px) rotate(-3deg)`;
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onPointer = (e: PointerEvent) => {
      const el = wrap.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      tiltX = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width * 1.5)));
      tiltY = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height * 1.5)));
      schedule();
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={wrap} className="relative hidden h-[560px] lg:block" aria-hidden="true">
      <div className="enter absolute right-0 top-0 w-[330px]" style={{ animationDelay: "300ms" }}>
        <div ref={back} className="transition-transform duration-300 ease-out will-change-transform" style={{ transform: "rotate(2deg)" }}>
          <ReconMockup live delay={900} />
        </div>
      </div>
      <div className="enter absolute bottom-0 left-0 w-[300px]" style={{ animationDelay: "450ms" }}>
        <div ref={front} className="transition-transform duration-300 ease-out will-change-transform" style={{ transform: "rotate(-3deg)" }}>
          <CloseChecklistMockup live delay={1500} />
        </div>
      </div>
    </div>
  );
}
