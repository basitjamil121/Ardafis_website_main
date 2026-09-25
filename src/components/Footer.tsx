import Link from "next/link";
import Logo from "@/components/Logo";
import CredentialBadges from "@/components/CredentialBadges";
import { navLinks, siteConfig } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Outsourced bookkeeping, payroll, and tax-prep support for US CPA
            firms and solo practitioners.
          </p>
          <div className="mt-6">
            <CredentialBadges compact dark />
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-mist">Navigate</p>
          <ul className="mt-5 flex flex-col gap-2.5 text-sm text-white/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-mist">Contact</p>
          <ul className="mt-5 flex flex-col gap-2.5 text-sm text-white/70">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>Response within 1 business day</li>
            <li>
              <Link href="/switch-to-ardafis" className="transition hover:text-white">
                Switching providers? &rarr;
              </Link>
            </li>
            <li>
              <Link href="/global-reach" className="transition hover:text-white">
                Gulf region services &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/45 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>ACCA-qualified partners &middot; You remain the professional of record</p>
        </div>
      </div>
    </footer>
  );
}
