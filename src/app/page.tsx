import Logo from "@/components/Logo";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Bookkeeping & Cleanup",
    desc: "Historical books cleanup, monthly bookkeeping, bank & credit card reconciliation, migration to QuickBooks, Xero, Sage, or Odoo.",
  },
  {
    title: "Payables & Receivables",
    desc: "AP/AR management, vendor bill processing, invoicing, and collections follow-up.",
  },
  {
    title: "Payroll",
    desc: "Payroll processing and payslips via Gusto, Zoho Payroll, or your existing platform.",
  },
  {
    title: "Tax Prep Support",
    desc: "Return preparation support for CPA firms during busy season — you file, we handle the workload behind the scenes.",
  },
  {
    title: "Advisory & Reporting",
    desc: "Month-end close, management reports, KPI dashboards, and cash-flow forecasting.",
  },
  {
    title: "Ecommerce Accounting",
    desc: "Multi-channel reconciliation, inventory & COGS tracking, and marketplace settlement matching.",
  },
];

const pricing = [
  {
    name: "Per-Client Bookkeeping",
    price: "$180–$350",
    unit: "/ month",
    desc: "Flat monthly bookkeeping for one of your clients — you keep the relationship, we do the work.",
  },
  {
    name: "Hourly Support",
    price: "$12–$22",
    unit: "/ hour",
    desc: "Flexible hourly bookkeeping ($12–$18) or tax prep & review ($18–$22) for overflow work.",
    highlight: true,
  },
  {
    name: "Per-Return (Tax Season)",
    price: "$35–$220",
    unit: "/ return",
    desc: "Simple individual returns from $35, business returns (1120S/1065) from $120.",
  },
];

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-line bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden gap-8 text-sm font-medium text-ink/80 md:flex">
            <a href="#services" className="hover:text-deep-green">Services</a>
            <a href="#pricing" className="hover:text-deep-green">Pricing</a>
            <a href="#about" className="hover:text-deep-green">About</a>
            <a href="#contact" className="hover:text-deep-green">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-md bg-deep-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-deep-green/90"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
              Outsourced Accounting for CPA Firms
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-deep-green md:text-5xl">
              Your Outsourced Accounts &amp; Finance Team, Built on Precision
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink/75">
              Ardafis Partners gives US CPA firms and solo practitioners a
              reliable offshore team for bookkeeping, payroll, and tax-prep
              support — so you can take on more clients without hiring in-house.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-md bg-deep-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-deep-green/90"
              >
                Start a conversation
              </a>
              <a
                href="#pricing"
                className="rounded-md border border-deep-green px-6 py-3 text-sm font-semibold text-deep-green transition hover:bg-deep-green/5"
              >
                See pricing
              </a>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-b border-line bg-cream">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 text-center text-sm font-medium text-ink/70 md:grid-cols-4">
            <div>ACCA-Qualified Partners</div>
            <div>QuickBooks &amp; Xero Certified</div>
            <div>US Tax Software Fluent</div>
            <div>Data Security First</div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-deep-green">
            Services
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-line bg-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-deep-green">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="border-y border-line bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
              Simple, Transparent Pricing
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-deep-green">
              Pricing
            </h2>
            <p className="mt-3 max-w-2xl text-ink/70">
              No dedicated-staff lock-in required to get started — pay for
              what you need, scale up as the relationship grows.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {pricing.map((p) => (
                <div
                  key={p.name}
                  className={`rounded-lg border p-6 ${
                    p.highlight
                      ? "border-deep-green bg-deep-green text-white"
                      : "border-line bg-cream text-ink"
                  }`}
                >
                  <h3
                    className={`font-display text-lg font-semibold ${
                      p.highlight ? "text-white" : "text-deep-green"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <p className="mt-3 flex items-baseline gap-1">
                    <span className="text-2xl font-bold">{p.price}</span>
                    <span
                      className={`text-sm ${
                        p.highlight ? "text-white/80" : "text-ink/60"
                      }`}
                    >
                      {p.unit}
                    </span>
                  </p>
                  <p
                    className={`mt-3 text-sm ${
                      p.highlight ? "text-white/85" : "text-ink/70"
                    }`}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
            Who We Are
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-deep-green">
            Three ACCA-Qualified Partners
          </h2>
          <p className="mt-4 max-w-3xl text-ink/75">
            Ardafis Partners was founded by three ACCA-qualified accountants
            with hands-on experience across US accounting practice, ecommerce
            bookkeeping, and AI-driven automation. One of our founding
            partners spent five years working directly inside a US accounting
            firm — which means we already speak your software, your workflows,
            and your busy-season pressure points.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-line bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
                Let&apos;s Talk
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-deep-green">
                Get in Touch
              </h2>
              <p className="mt-4 max-w-md text-ink/70">
                Tell us about your firm and where you need support — we&apos;ll
                follow up within one business day.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-ink/60 md:flex-row">
          <Logo className="scale-90" />
          <p>Built on Precision</p>
          <p>&copy; {new Date().getFullYear()} Ardafis Partners</p>
        </div>
      </footer>
    </>
  );
}
