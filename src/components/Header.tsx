"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/site-data";

// Floating pill navigation (BCG-style) — sits over the dark hero, firms up once scrolled.
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 md:px-6 md:pt-5">
      <div
        className={`glass-nav mx-auto flex max-w-6xl items-center justify-between rounded-full py-2.5 pl-5 pr-2.5 transition-shadow duration-300 md:pl-7 ${
          scrolled || open ? "shadow-xl shadow-black/10" : "shadow-lg shadow-black/5"
        }`}
      >
        <Link href="/" onClick={() => setOpen(false)} aria-label="Ardafis Partners home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-medium text-ink/80 lg:flex">
          {navLinks
            .filter((link) => link.href !== "/contact")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 transition hover:bg-deep-green/5 hover:text-deep-green ${
                  isActive(link.href) ? "bg-deep-green/10 text-deep-green" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
        </nav>
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-deep-green px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-moss lg:inline-flex"
        >
          Get in touch
          <span aria-hidden="true">&rarr;</span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-deep-green/5 lg:hidden"
        >
          <span className={`h-0.5 w-5 bg-deep-green transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-deep-green transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-deep-green transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <nav className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-3xl border border-white bg-cream p-3 shadow-2xl shadow-black/20 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-2xl px-4 py-3 text-sm font-medium text-ink/80 hover:bg-white hover:text-deep-green ${
                isActive(link.href) ? "bg-white text-deep-green" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full bg-deep-green px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Get in touch
          </Link>
        </nav>
      )}
    </header>
  );
}
