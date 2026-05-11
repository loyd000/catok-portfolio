"use client";

import { motion } from "framer-motion";

const sdgs = [
  { num: "SDG 8", label: "Decent Work & Economic Growth" },
  { num: "SDG 9", label: "Industry, Innovation & Infrastructure" },
];

export default function Footer() {
  return (
    // Solid dark footer to cap the page — uses a slightly opaque bg over the fixed layer
    <footer className="border-t border-white/10 bg-catok-darkest/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display font-extrabold text-2xl text-white mb-3">
              <span className="text-catok-accent">CA</span>TOK
            </h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Smart Coconut Maturity Classifier — AI-powered, handheld, and entirely cloud-free.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-white/50 text-xs font-medium uppercase tracking-widest mb-4">
              Institution
            </h4>
            <p className="text-white/40 text-sm leading-loose">
              Laguna State Polytechnic University
              <br />
              College of Engineering
              <br />
              Santa Cruz, Laguna
            </p>
          </div>

          <div>
            <h4 className="font-mono text-white/50 text-xs font-medium uppercase tracking-widest mb-4">
              SDG Alignment
            </h4>
            <div className="flex flex-col gap-2">
              {sdgs.map((sdg) => (
                <div
                  key={sdg.num}
                  className="flex items-center gap-3 bg-catok-primary/20 border border-catok-accent/20 rounded-xl px-4 py-3"
                >
                  <span className="font-mono text-catok-accent font-medium text-sm">{sdg.num}</span>
                  <span className="text-white/50 text-xs">{sdg.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3"
        >
          <p className="font-mono text-white/25 text-xs">
            © 2026 CATOK Research Team · BS Computer Engineering · LSPU Main Campus
          </p>
          <p className="font-mono text-white/25 text-xs">Santa Cruz, Laguna</p>
        </motion.div>
      </div>
    </footer>
  );
}
