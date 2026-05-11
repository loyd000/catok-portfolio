"use client";

import { motion } from "framer-motion";

const stages = [
  {
    name: "Mala-uhog",
    tagalog: "Jelly-like meat",
    months: "6–7 months old",
    precision: 92.96,
    description:
      "The coconut meat has a soft, jelly-like texture. Preferred for coconut water, fresh consumption, and desserts.",
    cardBg: "bg-emerald-950/60",
    border: "border-emerald-700/50 hover:border-emerald-500",
    badge: "bg-emerald-900/80 text-emerald-400",
    accent: "text-emerald-400",
    bar: "bg-emerald-400",
  },
  {
    name: "Mala-kanin",
    tagalog: "Firm white meat",
    months: "7–8 months old",
    precision: 86.30,
    description:
      "The meat has firmed into a white, rice-like consistency. Ideal for cooking, gata (coconut milk), and kinilaw.",
    cardBg: "bg-amber-950/60",
    border: "border-amber-700/50 hover:border-amber-500",
    badge: "bg-amber-900/80 text-amber-400",
    accent: "text-amber-400",
    bar: "bg-amber-400",
  },
  {
    name: "Mala-tenga",
    tagalog: "Thick hard meat",
    months: "8–9 months old",
    precision: 81.21,
    description:
      "The meat is thick and hardened. Best suited for copra production, desiccated coconut, and coconut oil.",
    cardBg: "bg-orange-950/60",
    border: "border-orange-700/50 hover:border-orange-500",
    badge: "bg-orange-900/80 text-orange-400",
    accent: "text-orange-400",
    bar: "bg-orange-400",
  },
];

export default function Classification() {
  return (
    <section id="classification" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-catok-accent text-xs font-medium tracking-[0.2em] uppercase">
            3 Maturity Stages
          </span>
          <h2 className="font-display font-extrabold text-4xl text-white mt-3">
            What CATOK Detects
          </h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Young coconuts (<em>buko</em>) fall into three maturity stages — only 1–2 months apart — each with distinct acoustic signatures and different culinary or commercial uses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl border-2 p-7 ${stage.cardBg} ${stage.border} transition-all duration-200`}
            >
              {/* Photo placeholder */}
              <div className="w-full h-36 rounded-xl bg-white/5 border-2 border-dashed border-white/15 flex flex-col items-center justify-center gap-1.5 mb-5 text-white/25">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-mono text-xs">{stage.name} coconut photo</span>
              </div>

              <div className="mb-5">
                <span className={`font-mono text-xs font-medium px-3 py-1 rounded-full ${stage.badge}`}>
                  {stage.months}
                </span>
              </div>

              <h3 className={`font-display font-extrabold text-2xl ${stage.accent} mb-0.5`}>
                {stage.name}
              </h3>
              <p className="font-mono text-xs font-medium mb-4 uppercase tracking-wider text-white/40">
                {stage.tagalog}
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">{stage.description}</p>

              <div className="border-t border-white/10 pt-5">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-mono text-xs text-white/40 uppercase tracking-wider font-medium">
                    AI Precision
                  </p>
                  <p className={`font-display font-extrabold text-lg ${stage.accent}`}>
                    {stage.precision}%
                  </p>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stage.precision}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: "easeOut" }}
                    className={`h-full rounded-full ${stage.bar}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
