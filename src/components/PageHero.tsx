type PageHeroProps = {
  eyebrow: string;
  title: string;
  desc?: string;
};

export default function PageHero({ eyebrow, title, desc }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-deep-green md:text-4xl">
          {title}
        </h1>
        {desc && <p className="mt-5 max-w-2xl text-lg text-ink/75">{desc}</p>}
      </div>
    </section>
  );
}
