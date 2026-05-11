"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#background", label: "Background" },
  { href: "#problem", label: "Objectives" },
  { href: "#hardware", label: "Hardware" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#classification", label: "Classification" },
  { href: "#metrics", label: "Results" },
  { href: "#team", label: "Team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleLinkClick = useCallback(() => setOpen(false), []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-catok-darkest/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-extrabold text-xl tracking-wider text-white">
          <span className="text-catok-accent">CA</span>TOK
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a key={link.href} href={link.href}
                className={`relative text-sm transition-colors duration-200 ${isActive ? "text-catok-accent" : "text-white/60 hover:text-catok-accent"}`}
              >
                {link.label}
                {isActive && (
                  <motion.span layoutId="nav-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-catok-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>
        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-catok-darkest/98 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a key={link.href} href={link.href} onClick={handleLinkClick}
                className={`text-sm transition-colors ${isActive ? "text-catok-accent font-medium" : "text-white/70 hover:text-catok-accent"}`}
              >
                {isActive && <span className="inline-block w-1.5 h-1.5 rounded-full bg-catok-accent mr-2 align-middle" />}
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </motion.nav>
  );
}
