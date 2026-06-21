import { useState } from "react";
import { Sidebar } from "@/components/mc/Sidebar";
import { Hero } from "@/components/mc/Hero";
import { Missions } from "@/components/mc/Missions";
import { Arsenal } from "@/components/mc/Arsenal";
import { Logs } from "@/components/mc/Logs";
import { Downloads } from "@/components/mc/Downloads";
import { Contact } from "@/components/mc/Contact";
import { LoadingScreen } from "@/components/mc/LoadingScreen";
import { CommandPalette } from "@/components/mc/CommandPalette";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />

      <div className="min-h-dvh bg-background text-foreground">
        <Sidebar onOpenPalette={() => setPaletteOpen(true)} />
        <main className="lg:pl-64">
          <Hero />
          <Missions />
          <Arsenal />
          <Logs />
          <Downloads />
          <Contact />
        </main>
      </div>
    </>
  );
}
