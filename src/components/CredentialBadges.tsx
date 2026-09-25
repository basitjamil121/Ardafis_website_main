const credentials = [
  { label: "QuickBooks Certified", sub: "ProAdvisor Program" },
  { label: "Xero Certified", sub: "Certified Advisor" },
  { label: "ACCA Qualified", sub: "Chartered Certified Accountants" },
];

function SealIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
  dark?: boolean;
};

// compact: small inline list (footer). Default: glass chips for dark hero backgrounds.
export default function CredentialBadges({ compact = false, dark = false }: CredentialBadgesProps) {
  if (compact) {
    return (
      <div className="flex flex-wrap gap-x-5 gap-y-3">
        {credentials.map((c) => (
          <div
            key={c.label}
            className={`flex items-center gap-2 text-xs font-medium ${dark ? "text-white/65" : "text-ink/65"}`}
          >
            <span className={dark ? "text-mist" : "text-sage"}>
              <SealIcon size={22} />
            </span>
            {c.label}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {credentials.map((c) => (
        <div key={c.label} className="glass-dark flex items-center gap-3 rounded-full py-2 pl-2 pr-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-mist">
            <SealIcon size={20} />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">{c.label}</p>
            <p className="text-[11px] text-white/55">{c.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
