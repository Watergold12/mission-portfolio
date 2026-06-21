import { MISSIONS } from "@/lib/portfolio-data";
import { SectionHeader } from "./SectionHeader";

export function Missions() {
  return (
    <section id="active-missions" className="px-6 md:px-10 lg:px-16 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          code="02"
          title="Active Missions."
          description="A selection of completed and ongoing missions. Each one explores a different layer of the stack — from hardware to intelligent agents."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {MISSIONS.map((m) => (
            <article
              key={m.id}
              className="group relative rounded-2xl border border-border bg-card p-6 flex flex-col transition hover:border-border-strong hover:bg-card/80"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {m.id}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-widest border border-success/30 bg-success/10 text-success">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  {m.status}
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold leading-tight">{m.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {m.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {m.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a href={m.link} target="_blank" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                View Details
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
