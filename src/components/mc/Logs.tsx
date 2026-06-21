import { LOGS } from "@/lib/portfolio-data";
import { SectionHeader } from "./SectionHeader";

export function Logs() {
  return (
    <section id="mission-logs" className="px-6 md:px-10 lg:px-16 py-20 lg:py-28">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          code="04"
          title="Mission Logs."
          description="Recorded progression — a chronological log of growth, learning, and shipped milestones."
        />

        <ol className="relative border-l border-border ml-2 space-y-8">
          {LOGS.map((log, i) => (
            <li key={log.year} className="pl-8 relative">
              <span
                aria-hidden
                className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-background border-2 border-primary"
              />
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  LOG / {log.year}
                </span>
                {i === LOGS.length - 1 && (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-success">
                    • CURRENT
                  </span>
                )}
              </div>
              <h3 className="font-display text-2xl font-semibold">{log.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{log.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
