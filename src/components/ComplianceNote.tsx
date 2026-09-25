type ComplianceNoteProps = {
  compact?: boolean;
};

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6L12 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M8.8 12.2l2.2 2.2 4.3-4.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ComplianceNote({ compact = false }: ComplianceNoteProps) {
  if (compact) {
    return (
      <div className="flex items-start gap-4 rounded-3xl bg-cream px-6 py-5 text-sm text-ink/70 md:items-center">
        <span className="shrink-0 text-moss">
          <ShieldIcon />
        </span>
        <p>
          <strong className="text-deep-green">You stay the licensed professional of record.</strong>{" "}
          We prepare — your licensed CPA or EA reviews, signs, and retains full
          professional responsibility and the client relationship.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 rounded-3xl bg-cream p-7 md:flex-row md:p-9">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-deep-green text-white">
        <ShieldIcon />
      </span>
      <div>
        <h3 className="font-display text-xl font-semibold text-deep-green md:text-2xl">
          You stay the licensed professional of record
        </h3>
        <p className="mt-3 leading-relaxed text-ink/70">
          Our partners are ACCA-qualified, not US-licensed CPAs or EAs — so we
          never sign, file, or represent a client before the IRS or a state
          agency. We prepare returns, filings, and workpapers to your firm&apos;s
          standard; your licensed CPA or EA reviews, signs, and retains full
          professional responsibility and the client relationship, exactly as
          if the work were done in-house.
        </p>
      </div>
    </div>
  );
}
