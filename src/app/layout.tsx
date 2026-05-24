import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pramod Ghimire — Backend Engineer",
  description:
    "Backend Engineer specializing in NestJS, TypeScript, and Node.js. Building real-time systems, AI-powered workflows with LangGraph, and production-grade APIs.",
  keywords: [
    "Backend Engineer",
    "NestJS",
    "TypeScript",
    "Node.js",
    "LangGraph",
    "WebSockets",
    "Real-Time Systems",
  ],
  authors: [{ name: "Pramod Ghimire" }],
  openGraph: {
    title: "Pramod Ghimire — Backend Engineer",
    description:
      "Building real-time systems and AI-powered workflows with NestJS and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}