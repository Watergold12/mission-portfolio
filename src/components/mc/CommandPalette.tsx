import { Command } from "cmdk";
import { useEffect } from "react";
import { NAV_ITEMS } from "@/lib/portfolio-data";

export function CommandPalette({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const go = (id: string) => {
    setOpen(false);
    requestAnimationFrame(() =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] bg-background/70 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="w-full max-w-xl glass rounded-xl overflow-hidden shadow-elegant"
        style={{ boxShadow: "var(--shadow-elegant)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Command label="Command Menu" className="text-sm">
          <div className="flex items-center gap-2 px-4 border-b border-border">
            <span className="font-mono text-xs text-muted-foreground">›</span>
            <Command.Input
              placeholder="Search commands..."
              autoFocus
              className="h-12 w-full bg-transparent outline-none placeholder:text-muted-foreground"
            />
            <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-border text-muted-foreground">
              ESC
            </kbd>
          </div>
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="px-3 py-6 text-center text-muted-foreground">
              No results.
            </Command.Empty>
            <Command.Group heading="Navigate" className="text-[11px] uppercase tracking-widest text-muted-foreground px-2 pt-2 pb-1">
              {NAV_ITEMS.map((item) => (
                <Command.Item
                  key={item.id}
                  value={item.label}
                  onSelect={() => go(item.id)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer text-foreground data-[selected=true]:bg-muted"
                >
                  <span className="font-mono text-[10px] text-muted-foreground w-6">{item.code}</span>
                  <span>{item.label}</span>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
