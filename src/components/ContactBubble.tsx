"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Round "Contact" button pinned bottom-right once the visitor starts scrolling (Pax-style).
export default function ContactBubble() {
  const pathname = usePathname();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <Link
      href="/contact"
      aria-label="Contact Ardafis Partners"
      tabIndex={shown ? 0 : -1}
      className={`fixed bottom-5 right-5 z-30 flex h-16 w-16 items-center justify-center rounded-full bg-deep-green text-xs font-semibold text-white shadow-xl shadow-deep-green/30 ring-4 ring-white/60 transition duration-500 hover:scale-105 hover:bg-moss md:bottom-8 md:right-8 md:h-20 md:w-20 md:text-sm ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      Contact
    </Link>
  );
}
