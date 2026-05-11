"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Command } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

interface NavigationProps {
  onCommandOpen: () => void;
}

export function Navigation({ onCommandOpen }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onCommandOpen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onCommandOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Terminal className="w-3.5 h-3.5 text-accent" />
            </div>
            <span className="font-mono text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
              Pramod Ghimire
              <span className="text-accent">.</span>
              dev
            </span>
          </a>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-md transition-all duration-150",
                  "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  activeSection === item.href && "text-foreground bg-muted/50"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Command palette button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCommandOpen}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-md border border-border/60",
                "text-sm text-muted-foreground bg-muted/30",
                "hover:border-border hover:text-foreground hover:bg-muted/60",
                "transition-all duration-150"
              )}
            >
              <Command className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-xs">⌘K</span>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}