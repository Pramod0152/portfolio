"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { CommandPalette } from "@/components/CommandPalette";
import { Hero } from "@/components/Hero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onCommandOpen={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />

      <main>
        <Hero />
        <ProjectGallery />
        <About />
        <TechStack />
        <Contact />
      </main>
    </div>
  );
}