import { DOWNLOADS } from "@/lib/portfolio-data";
import { SectionHeader } from "./SectionHeader";

export function Downloads() {
  return (
    <section id="downloads" className="px-6 md:px-10 lg:px-16 py-20 lg:py-28 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          code="05"
          title="Document Control."
          description="Cleared documents available for download — résumé, credentials, achievements, and technical reports."
        />

        <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {DOWNLOADS.map((doc) => (
            <article
              key={doc.title}
              className={`relative rounded-2xl border p-6 flex flex-col gap-5 transition ${
                doc.featured
                  ? "border-primary/40 bg-card glow-primary"
                  : "border-border bg-card hover:border-border-strong"
              }`}
            >
              {doc.featured && (
                <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-primary px-2 py-0.5 rounded-full border border-primary/30 bg-primary/10">
                  Priority
                </span>
              )}

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center text-primary">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6M9 13h6M9 17h6" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl font-semibold">{doc.title}</h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">
                    {doc.type}
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="rounded-lg bg-muted/60 border border-border px-3 py-2">
                  <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">Updated</dt>
                  <dd className="mt-1 text-foreground">{doc.updated}</dd>
                </div>
                <div className="rounded-lg bg-muted/60 border border-border px-3 py-2">
                  <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">Format</dt>
                  <dd className="mt-1 text-foreground">{doc.format}</dd>
                </div>
              </dl>

              <div className="flex gap-2">
                {/* <a href="/resume.pdf" target="_blank" className="flex-1 h-10 rounded-lg border border-border bg-card hover:bg-muted text-sm font-medium transition">
                  Preview
                </a>
                <a href="/resume.pdf" download
                  className={`flex-1 h-10 rounded-lg text-sm font-medium transition ${
                    doc.featured
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "bg-foreground text-background hover:opacity-90"
                  }`}
                >
                  Download
                </a> */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="flex flex-1 items-center justify-center h-10 rounded-lg border border-border bg-card hover:bg-muted text-sm font-medium transition"
                >
                  Preview
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className={`flex flex-1 items-center justify-center h-10 rounded-lg text-sm font-medium transition ${
                    doc.featured
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "bg-foreground text-background hover:opacity-90"
                  }`}
                >
                  Download
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
