import { useEffect, useState } from "react";

const STEPS = [
  "Initializing Mission Control...",
  "Loading Systems...",
  "Establishing Connection...",
  "Access Granted.",
];

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (step >= STEPS.length) {
      const t = setTimeout(() => setHide(true), 350);
      const t2 = setTimeout(onDone, 800);
      return () => {
        clearTimeout(t);
        clearTimeout(t2);
      };
    }
    const t = setTimeout(() => setStep((s) => s + 1), 420);
    return () => clearTimeout(t);
  }, [step, onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-500 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={hide}
    >
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div className="relative w-full max-w-md px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-2.5 w-2.5 rounded-full bg-primary pulse-dot" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            MC-OS // boot sequence
          </span>
        </div>
        <ul className="space-y-3 font-mono text-sm">
          {STEPS.map((s, i) => (
            <li
              key={s}
              className={`flex items-center gap-3 transition-all ${
                i < step ? "text-foreground" : i === step ? "text-foreground" : "text-muted-foreground/40"
              }`}
            >
              <span className="text-primary">{i < step ? "✓" : i === step ? "›" : "·"}</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 h-px w-full bg-border overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(Math.min(step, STEPS.length) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
