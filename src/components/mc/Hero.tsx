import { STATS } from "@/lib/portfolio-data";
import { Counter } from "./Counter";

export function Hero() {
  return (
    <section
      id="command-center"
      className="relative min-h-[100dvh] flex items-center px-6 md:px-10 lg:px-16 py-20 lg:py-24"
    >
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div
        aria-hidden
        className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none"
      />

      <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-success pulse-dot" />
            <span className="text-muted-foreground">AVAILABLE</span>
            <span className="text-border">|</span>
            <span className="text-muted-foreground">Open to opportunities</span>
          </div>

          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
            Vishal A A.
            <br />
            <span className="text-gradient">Software Developer.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Building intelligent systems, web applications, and practical technology solutions
            from the ground up.
          </p>

          <dl className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 max-w-xl">
            <Meta label="Current Mission" value="Intelligent Systems" />
            <Meta label="Location" value="Earth, EAT" />
            <Meta label="Status" value="Operational" accent />
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#downloads"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow-primary"
            >
              Download Resume
              <Arrow />
            </a>
            <a
              href="https://github.com/Watergold12"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-border bg-card/40 hover:bg-card transition font-medium"
            >
              <GhIcon /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-aa-67a341325"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-border bg-card/40 hover:bg-card transition font-medium"
            >
              <LiIcon /> LinkedIn
            </a>
          </div>
        </div>

        {/* Dashboard card */}
        <div className="relative glass rounded-2xl p-6 lg:p-7" style={{ boxShadow: "var(--shadow-elegant)" }}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success pulse-dot" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Telemetry • Live
              </span>
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">MC-OS</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-card/60 border border-border p-4"
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
                <div className="mt-3 font-display text-3xl font-semibold">
                  {s.isText ? (
                    <span className="text-success text-2xl">{String(s.value)}</span>
                  ) : (
                    <Counter value={s.value as number} suffix={s.suffix} />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
            <span>UPTIME 99.9%</span>
            <span>SIGNAL ▰▰▰▰▱</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <dt className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
        {label}
      </dt>
      <dd className={`mt-1 text-sm font-medium ${accent ? "text-success" : "text-foreground"}`}>
        {value}
      </dd>
    </div>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
function GhIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}
function LiIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V9h3v10zM6.5 7.7a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM19 19h-3v-5c0-1.2-.4-2-1.5-2s-1.5.8-1.5 2v5h-3V9h3v1.3c.5-.8 1.4-1.5 2.8-1.5 2 0 3.2 1.3 3.2 4V19z" />
    </svg>
  );
}
