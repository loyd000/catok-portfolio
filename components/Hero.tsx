"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const DeviceViewer = dynamic(() => import("./DeviceViewer"), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />,
});

const steps = [
  { step: "01", label: "Tap", detail: "Solenoid strikes with consistent force" },
  { step: "02", label: "Analyze", detail: "240 acoustic patterns extracted via MFE" },
  { step: "03", label: "Classify", detail: "Two-stage CNN outputs result in ~1.35s" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* 3D model — desktop only, right side background */}
      <motion.div
        className="hidden md:block absolute top-0 right-0 w-[58%] h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        <DeviceViewer />
      </motion.div>

      {/* Hero text — z-10, sits above the model. pointer-events-none on wrapper so canvas stays interactive */}
      <div className="relative z-10 min-h-screen flex items-center pointer-events-none">
        <div className="max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
          <motion.div
            className="max-w-xl pointer-events-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono inline-block text-catok-accent text-xs font-medium tracking-[0.25em] uppercase mb-5 border border-catok-accent/30 rounded-full px-4 py-1.5">
              BS Computer Engineering · LSPU 2026
            </span>

            <h1 className="font-display font-extrabold text-7xl lg:text-8xl text-white leading-none mb-3 tracking-tight">
              <span className="text-catok-accent">CA</span>TOK
            </h1>

            <p className="text-xl md:text-2xl text-white/70 font-light mb-3">
              Smart Coconut Maturity Classifier
            </p>
            <p className="text-white/40 text-sm max-w-md leading-relaxed mb-6">
              A handheld device that classifies young coconut (buko) maturity by analyzing the
              sound it makes when tapped — replacing manual tapping with on-device AI (TinyML)
              that requires no internet and no expertise.
            </p>

            {/* 3D model — mobile only, sits between description and mini flow */}
            <div className="block md:hidden w-full h-80 mb-8">
              <DeviceViewer />
            </div>

            {/* Mini process flow */}
            <div className="flex items-start gap-0 mb-10">
              {steps.map((s, i) => (
                <div key={s.step} className="flex items-start">
                  <motion.div
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] text-catok-accent/60">{s.step}</span>
                      <span className="font-display font-extrabold text-white text-base">{s.label}</span>
                    </div>
                    <span className="font-mono text-white/35 text-[11px] leading-snug max-w-[120px]">
                      {s.detail}
                    </span>
                  </motion.div>

                  {i < steps.length - 1 && (
                    <motion.div
                      className="flex items-center px-3 pt-1 shrink-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.55 + i * 0.15 }}
                    >
                      <svg className="w-4 h-4 text-catok-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <motion.a
              href="#background"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="font-mono inline-flex items-center gap-2 text-white/50 hover:text-catok-accent transition-colors text-xs tracking-wider"
            >
              Scroll to explore
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
