"use client";

import { motion } from "framer-motion";

const sdgs = [
  {
    num: "SDG 8",
    label: "Decent Work & Economic Growth",
    detail:
      "Reduces post-harvest losses and gives 3.5M+ coconut farmers access to objective, skill-free maturity grading.",
  },
  {
    num: "SDG 9",
    label: "Industry, Innovation & Infrastructure",
    detail:
      "Cloud-free embedded AI for agriculture — precision classification with no internet, no lab, no expertise required.",
  },
];

export default function Introduction() {
  return (
    <section id="background" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left — contextual text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-catok-accent text-xs font-medium tracking-[0.2em] uppercase mb-6 inline-block">
              The Philippine Coconut Industry
            </span>

            <div className="space-y-4 text-white/60 text-sm leading-relaxed">
              <p>
                Young coconuts (<em className="text-white/80 not-italic font-medium">buko</em>) are one
                of the Philippines' most important agricultural products, classified into three maturity
                stages — each with different uses in food and beverages.
              </p>
              <p>
                The Philippines supports over{" "}
                <strong className="text-white font-semibold">3.5 million coconut farmers</strong> and
                ranks as the{" "}
                <strong className="text-white font-semibold">2nd largest coconut producer in ASEAN</strong>.
                Quezon Province alone produces{" "}
                <strong className="text-white font-semibold">35,744 MT/year</strong> of young coconuts.
              </p>
              <p>
                Farmers traditionally determine maturity by tapping the coconut with a bolo and
                listening to the sound — a skill that takes years to master and varies greatly between
                individuals.
              </p>
            </div>

            <motion.blockquote
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-8 border-l-2 border-catok-accent/50 pl-5"
            >
              <p className="text-white/50 text-sm italic leading-relaxed">
                "Experienced tappers are correct only ~70% of the time, while CATOK achieves 86.82%."
              </p>
              <footer className="font-mono text-catok-accent/60 text-xs mt-2">
                — Sattar {"&"} Farook, 2024
              </footer>
            </motion.blockquote>
          </motion.div>

          {/* Right — SDG alignment + field photo */}
          <div className="flex flex-col gap-5">
            {/* Photo placeholder — replace with a photo of coconut farmers or the plantation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full h-52 rounded-2xl bg-white/5 border-2 border-dashed border-white/15 flex flex-col items-center justify-center gap-2 text-white/25"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-mono text-xs">Coconut farmers / plantation photo</span>
            </motion.div>

            {sdgs.map((sdg, i) => (
              <motion.div
                key={sdg.num}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="bg-catok-primary/20 border border-catok-accent/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-catok-accent font-bold text-sm bg-catok-accent/10 px-3 py-1 rounded-full">
                    {sdg.num}
                  </span>
                  <span className="text-white font-semibold text-sm">{sdg.label}</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{sdg.detail}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
