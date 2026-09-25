import BrandMotif from "@/components/BrandMotif";

// Dark animated-gradient backdrop for heroes and the closing CTA.
export default function Aurora({ motif = true }: { motif?: boolean }) {
  return (
    <div aria-hidden="true" className="aurora">
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      {motif && (
        <BrandMotif
          variant="light"
          className="absolute -right-16 top-10 z-10 h-[520px] w-[520px] opacity-70 md:right-0 md:h-[680px] md:w-[680px]"
        />
      )}
    </div>
  );
}
