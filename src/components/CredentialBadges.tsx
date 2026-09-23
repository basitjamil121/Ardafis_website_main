const credentials = [
  { label: "QuickBooks Certified", sub: "ProAdvisor Program" },
  { label: "Xero Certified", sub: "Certified Advisor" },
  { label: "ACCA Qualified", sub: "Chartered Certified Accountants" },
];

function SealIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 12.5l2.5 2.5L16 9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type CredentialBadgesProps = {
  compact?: boolean;
};

export default function CredentialBadges({ compact = false }: CredentialBadgesProps) {
  if (compact) {
    return (
      <div className="flex flex-wrap gap-4">
        {credentials.map((c) => (
          <div key={c.label} className="flex items-center gap-2 text-xs font-medium text-ink/65">
            <span className="text-sage">
              <SealIcon />
            </span>
            {c.label}
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-sage">
          Certified &amp; Qualified
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {credentials.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-4 rounded-lg border border-line bg-cream px-6 py-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-deep-green/10 text-deep-green">
                <SealIcon />
              </span>
              <div>
                <p className="font-display text-base font-semibold text-deep-green">
                  {c.label}
                </p>
                <p className="text-xs text-ink/55">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
