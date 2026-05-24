"use client";

import { useEffect, useCallback } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Code2,
  User,
  Mail,
  ExternalLink,
  Github,
  FileText,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

interface CommandPaletteProps {
  open:    boolean;
  onClose: () => void;
}

const commands = [
  {
    group: "Navigate",
    items: [
      { icon: Layers, label: "Projects",   action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
      { icon: User,   label: "About",      action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
      { icon: Cpu,    label: "Tech Stack", action: () => document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" }) },
      { icon: Mail,   label: "Contact",    action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
    ],
  },
  {
    group: "Projects",
    items: [
      { icon: Code2, label: "TaaSNet",                  action: () => window.open("https://taasnet.com", "_blank") },
      { icon: Code2, label: "Notification System",       action: () => window.open("https://github.com/Pramod0152", "_blank") },
      { icon: Code2, label: "Distributed Chat System",   action: () => window.open("https://github.com/Pramod0152", "_blank") },
    ],
  },
  {
    group: "Links",
    items: [
      { icon: Github,      label: "GitHub",            action: () => window.open("https://github.com/Pramod0152", "_blank") },
      { icon: FileText,    label: "Download Resume",   action: () => window.open("/resume.pdf", "_blank") },
      { icon: ExternalLink,label: "LinkedIn",          action: () => window.open("https://linkedin.com/in/pramod-ghimire-4659a4279", "_blank") },
    ],
  },
];

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="fixed inset-0 bg-background/70 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.14, ease: "easeOut" }}
            className="fixed top-[18%] left-1/2 -translate-x-1/2 w-full max-w-lg z-[101] px-4"
          >
            <Command className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                <Command.Input
                  placeholder="Search commands…"
                  className="flex-1 bg-transparent text-sm font-mono text-foreground placeholder:text-muted-foreground outline-none"
                />
                <kbd className="hidden sm:inline-flex text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5 font-mono">
                  ESC
                </kbd>
              </div>
              <Command.List className="max-h-72 overflow-y-auto p-2">
                <Command.Empty className="py-8 text-center text-sm text-muted-foreground font-mono">
                  No results.
                </Command.Empty>
                {commands.map((group) => (
                  <Command.Group
                    key={group.group}
                    heading={group.group}
                    className="[&>[cmdk-group-heading]]:px-2 [&>[cmdk-group-heading]]:py-1.5 [&>[cmdk-group-heading]]:text-[10px] [&>[cmdk-group-heading]]:font-mono [&>[cmdk-group-heading]]:uppercase [&>[cmdk-group-heading]]:tracking-widest [&>[cmdk-group-heading]]:text-muted-foreground"
                  >
                    {group.items.map((cmd) => (
                      <Command.Item
                        key={cmd.label}
                        value={cmd.label}
                        onSelect={() => { cmd.action(); onClose(); }}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-foreground/75 hover:text-foreground cursor-pointer data-[selected=true]:bg-muted data-[selected=true]:text-foreground transition-colors"
                      >
                        <cmd.icon className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                        {cmd.label}
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))}
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}