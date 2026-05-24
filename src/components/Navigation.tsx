"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Command } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work",    href: "#projects" },
  { label: "About",   href: "#about"    },
  { label: "Stack",   href: "#stack"    },
  { label: "Contact", href: "#contact"  },
];

interface NavigationProps {
  onCommandOpen: () => void;
}

export function Navigation({ onCommandOpen }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section tracking via IntersectionObserver */
  useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  /* ⌘K shortcut */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onCommandOpen();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onCommandOpen]);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-14">

        {/* ── Logo / identity ── */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-6 h-6 rounded border border-accent/30 bg-accent/8 flex items-center justify-center group-hover:border-accent/60 transition-colors">
            <Terminal className="w-3 h-3 text-accent" />
          </div>
          <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors tracking-wide">
            pramod<span className="text-accent">.</span>dev
          </span>
          {/* Live dot */}
          {/* <span className="status-live text-[10px] font-mono text-success hidden sm:inline-flex">
            available
          </span> */}
        </a>

        {/* ── Nav links ── */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs font-mono tracking-wide transition-colors duration-150",
                active === item.href
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ── ⌘K button ── */}
        <button
          onClick={onCommandOpen}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-border/60 bg-muted/20 text-muted-foreground hover:text-foreground hover:border-border transition-all text-xs font-mono"
        >
          <Command className="w-3 h-3" />
          <span className="hidden sm:inline">⌘K</span>
        </button>
      </div>
    </motion.header>
  );
}