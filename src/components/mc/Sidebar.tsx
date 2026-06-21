import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/portfolio-data";
import { ThemeToggle } from "./ThemeToggle";

export function Sidebar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [active, setActive] = useState<string>("command-center");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(item.id),
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      {/* Mobile top bar */}
      <header className="lg:hidden sticky top-0 z-40 glass">
        <div className="flex items-center justify-between px-4 h-14">
          <button
            onClick={() => handleNav("command-center")}
            className="flex items-center gap-2 font-display font-semibold tracking-tight"
          >
            <Logo />
            <span>Mission Control</span>
          </button>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle navigation"
              aria-expanded={open}
              className="h-9 w-9 grid place-items-center rounded-md border border-border hover:bg-muted"
            >
              <span className="sr-only">Menu</span>
              <div className="space-y-1.5">
                <span className="block h-px w-4 bg-foreground" />
                <span className="block h-px w-4 bg-foreground" />
              </div>
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-border px-2 py-2 grid">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-left px-3 py-2.5 rounded-md text-sm font-medium ${
                  active === item.id ? "bg-muted text-foreground" : "text-muted-foreground"
                }`}
              >
                <span className="font-mono text-xs text-muted-foreground mr-3">{item.code}</span>
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 z-40 w-64 flex-col border-r border-border bg-surface/60 backdrop-blur-xl">
        <div className="px-6 pt-8 pb-6 flex items-center gap-3">
          <Logo />
          <div>
            <div className="font-display text-lg font-semibold leading-none">Mission Control</div>
            <div className="text-[11px] text-muted-foreground mt-1 font-mono uppercase tracking-widest">
              v1.0 • Online
            </div>
          </div>
        </div>

        <nav className="px-3 flex-1 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-card text-foreground border border-border-strong"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                }`}
              >
                <span className="font-mono text-[10px] text-muted-foreground/70 w-6">
                  {item.code}
                </span>
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <span
                    aria-hidden
                    className="ml-auto h-1.5 w-1.5 rounded-full bg-primary pulse-dot"
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-3 space-y-2">
          <button
            onClick={onOpenPalette}
            className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg border border-border bg-card/40 hover:bg-card transition text-sm text-muted-foreground"
          >
            <span>Quick command</span>
            <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-border bg-background">
              ⌘K
            </kbd>
          </button>
          <div className="flex items-center justify-between px-1">
            <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">
              Theme
            </div>
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}

function Logo() {
  return (
    <div className="h-9 w-9 grid place-items-center rounded-lg bg-primary/10 border border-primary/30 text-primary">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    </div>
  );
}
