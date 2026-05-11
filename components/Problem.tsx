"use client";

import { motion } from "framer-motion";

const objectives = [
  {
    number: "01",
    title: "Design & Develop",
    description:
      "Design and develop a Young Coconut Maturity Detection Device using Acoustic Signal Analysis with signal processing and machine learning algorithms.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Test Performance",
    description:
      "Test the performance of the device in terms of (a) reliability based on precision rate and output consistency, and (b) processing speed.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Assess & Evaluate",
    description:
      "Assess and evaluate the device's performance in terms of usability and maintainability.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-catok-accent text-xs font-medium tracking-[0.2em] uppercase">
            Research Goals
          </span>
          <h2 className="font-display font-extrabold text-4xl text-white mt-3 mb-4">
            Study Objectives
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-lg mx-auto">
            This study aims to address the limitations of manual coconut maturity assessment through
            three core objectives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {objectives.map((obj, i) => (
            <motion.div
              key={obj.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-catok-accent/30 hover:bg-white/[0.08] transition-all duration-200 group"
            >
              {/* Step connector arrows */}
              {i < objectives.length - 1 && (
                <div className="hidden md:flex absolute top-12 -right-3 z-10 items-center justify-center w-6">
                  <svg className="w-4 h-4 text-catok-accent/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              <div className="mb-6 flex items-center gap-4">
                <span className="font-display font-extrabold text-5xl text-white/10 leading-none select-none">
                  {obj.number}
                </span>
                <div className="text-catok-accent/60 group-hover:text-catok-accent transition-colors">
                  {obj.icon}
                </div>
              </div>

              <h3 className="font-display font-extrabold text-xl text-white mb-3">
                {obj.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{obj.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
        >
          <p className="font-mono text-xs font-medium tracking-widest uppercase text-catok-accent/60 mb-4">
            Research Question
          </p>
          <p className="text-white/80 text-lg italic leading-relaxed max-w-2xl mx-auto">
            &ldquo;How can young coconut maturity be classified more accurately and consistently?&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
