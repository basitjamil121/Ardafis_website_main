"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/site-data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-ink/80 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-deep-green">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-md bg-deep-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-deep-green/90 md:inline-block"
        >
          Get in touch
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-deep-green transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-deep-green transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-deep-green transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-cream px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm font-medium text-ink/80 hover:bg-white hover:text-deep-green"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-md bg-deep-green px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            Get in touch
          </Link>
        </nav>
      )}
    </header>
  );
}
