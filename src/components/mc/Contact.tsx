import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const formRef = useRef<HTMLFormElement>(null);

  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = async (
    e: React.SyntheticEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setStatus("sending");

      await emailjs.sendForm(
        service_id,
        template_id,
        formRef.current,
        public_key
      );

      setStatus("sent");
      formRef.current.reset();

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
  };
  return (
    <section id="contact" className="px-6 md:px-10 lg:px-16 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          code="06"
          title="Communication Terminal."
          description="Open a secure channel. Transmit a message and I'll respond from base."
        />

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="glass rounded-2xl p-6 lg:p-8 space-y-5"
          >
            <div className="flex items-center gap-2 pb-4 border-b border-border">
              <span className="h-2 w-2 rounded-full bg-success pulse-dot" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Channel open • encrypted
              </span>
            </div>

            <Field label="Name" id="name">
              <input
                name="name"
                id="name"
                required
                className="w-full h-11 bg-card/60 border border-border rounded-lg px-3 outline-none focus:border-primary transition"
                placeholder="Commander..."
              />
            </Field>
            <Field label="Email" id="email">
              <input
                name="email"
                id="email"
                type="email"
                required
                className="w-full h-11 bg-card/60 border border-border rounded-lg px-3 outline-none focus:border-primary transition"
                placeholder="you@station.io"
              />
            </Field>
            <Field label="Message" id="message">
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                className="w-full bg-card/60 border border-border rounded-lg px-3 py-2.5 outline-none focus:border-primary transition resize-none"
                placeholder="Briefing..."
              />
            </Field>

            <button
              type="submit"
              className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow-primary"
            >
              {
                status === "sending"
                  ? "Transmitting..."
                  : status === "sent"
                  ? "✓ Transmission Received"
                  : status === "error"
                  ? "Transmission Failed"
                  : "Transmit Message"
              }
            </button>
          </form>

          <aside className="space-y-3">
            <ContactLink
              label="GitHub"
              value="@WaterGold12"
              href="https://github.com/Watergold12"
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
                </svg>
              }
            />
            <ContactLink
              label="LinkedIn"
              value="/in/VishalAA"
              href="https://www.linkedin.com/in/vishal-aa-67a341325"
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V9h3v10zM6.5 7.7a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM19 19h-3v-5c0-1.2-.4-2-1.5-2s-1.5.8-1.5 2v5h-3V9h3v1.3c.5-.8 1.4-1.5 2.8-1.5 2 0 3.2 1.3 3.2 4V19z" />
                </svg>
              }
            />
            <ContactLink
              label="Email"
              value="vishal.aa9c30@gmail.com"
              href="mailto:vishal.aa9c30@gmail.com"
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              }
            />

            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Response time
              </div>
              <div className="mt-2 font-display text-2xl font-semibold">~ 24 hours</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Mission Control is monitored daily. Expect a reply within one operational cycle.
              </p>
            </div>
          </aside>
        </div>

        <footer className="mt-20 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
          <span>{new Date().getFullYear()} Mission Control</span>
          <span>BUILT WITH PRECISION • v1.0</span>
        </footer>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactLink({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:border-border-strong hover:bg-card/80 transition"
    >
      <div className="h-10 w-10 grid place-items-center rounded-lg bg-muted text-foreground">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
      <span className="text-muted-foreground group-hover:text-foreground transition" aria-hidden>
        ↗
      </span>
    </a>
  );
}
