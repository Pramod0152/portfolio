import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pramod Ghimire — Senior Full-Stack Engineer",
  description:
    "Senior Full-Stack Engineer specializing in MERN, NestJS Microservices, and AI-integrated systems. Building scalable, production-grade software.",
  keywords: ["Full-Stack Engineer", "NestJS", "React", "Microservices", "MERN", "TypeScript"],
  authors: [{ name: "Pramod Ghimire" }],
  openGraph: {
    title: "Pramod Ghimire — Senior Full-Stack Engineer",
    description: "Building scalable systems with NestJS microservices and AI integrations.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}