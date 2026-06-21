import { ARSENAL } from "@/lib/portfolio-data";
import { SectionHeader } from "./SectionHeader";

export function Arsenal() {
  return (
    <section id="tech-arsenal" className="px-6 md:px-10 lg:px-16 py-20 lg:py-28 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          code="03"
          title="Tech Arsenal."
          description="Equipment loadout — the languages, frameworks, and tools used to build, ship, and operate every mission."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {ARSENAL.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-lg font-semibold">{cat.category}</h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {cat.code}
                </span>
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/60 border border-border text-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
