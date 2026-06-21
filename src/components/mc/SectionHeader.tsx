export function SectionHeader({
  code,
  title,
  description,
}: {
  code: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 lg:mb-14">
      <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
        <span className="h-px w-8 bg-border-strong" />
        <span>SECTION {code}</span>
      </div>
      <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
