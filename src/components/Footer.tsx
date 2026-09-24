import Link from "next/link";
import Logo from "@/components/Logo";
import CredentialBadges from "@/components/CredentialBadges";
import { navLinks, siteConfig } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-ink/65">
            Outsourced bookkeeping, payroll, and tax-prep support for US CPA
            firms and solo practitioners.
          </p>
          <div className="mt-5">
            <CredentialBadges compact />
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Navigate
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-ink/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-deep-green">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-ink/70">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-deep-green">
                {siteConfig.email}
              </a>
            </li>
            <li>Response within 1 business day</li>
            <li>
              <Link href="/switch-to-ardafis" className="hover:text-deep-green">
                Switching providers? &rarr;
              </Link>
            </li>
            <li>
              <Link href="/global-reach" className="hover:text-deep-green">
                Gulf region services &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-ink/55 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Built on Precision</p>
        </div>
      </div>
    </footer>
  );
}
