type ComplianceNoteProps = {
  compact?: boolean;
};

export default function ComplianceNote({ compact = false }: ComplianceNoteProps) {
  if (compact) {
    return (
      <p className="rounded-md border border-line bg-cream px-4 py-3 text-sm text-ink/70">
        <strong className="text-deep-green">You stay the licensed professional of record.</strong>{" "}
        We prepare — your licensed CPA or EA reviews, signs, and retains full
        professional responsibility and the client relationship.
      </p>
    );
  }

  return (
    <div className="rounded-lg border border-deep-green/20 bg-deep-green/5 p-6">
      <h3 className="font-display text-lg font-semibold text-deep-green">
        You stay the licensed professional of record
      </h3>
      <p className="mt-2 text-sm text-ink/70">
        Our partners are ACCA-qualified, not US-licensed CPAs or EAs — so we
        never sign, file, or represent a client before the IRS or a state
        agency. We prepare returns, filings, and workpapers to your firm&apos;s
        standard; your licensed CPA or EA reviews, signs, and retains full
        professional responsibility and the client relationship, exactly as
        if the work were done in-house.
      </p>
    </div>
  );
}
