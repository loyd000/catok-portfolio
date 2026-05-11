"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Sound Map",
    subtitle: "MFE Feature Extraction",
    description:
      "The tap sound is broken into 240 measurable acoustic patterns using Mel-Frequency Energy (MFE) — like a fingerprint of the coconut's interior.",
  },
  {
    number: "02",
    title: "AI Classifier",
    subtitle: "Two-Step Neural Network (CNN)",
    description:
      "A two-stage CNN trained on hundreds of sound samples — including computer-generated augmentations — recognizes ripeness from the acoustic fingerprint. Runs on-chip with no cloud needed.",
  },
  {
    number: "03",
    title: "Answer",
    subtitle: "TinyML on ESP32-S3",
    description:
      "Stage 1 checks for Mala-tenga. Stage 2 separates Mala-uhog from Mala-kanin. The result appears on the OLED display in ~1.35 seconds — no internet, no expertise required.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-catok-accent text-xs font-medium tracking-[0.2em] uppercase">
            The Process
          </span>
          <h2 className="font-display font-extrabold text-4xl text-white mt-3">
            How CATOK Works
          </h2>
          <p className="text-white/50 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            The solenoid fires with the exact same force every press. Then on-device AI classifies the coconut — no internet, no lab, no expertise needed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-catok-accent/30 hover:bg-white/[0.08] transition-all duration-200"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-12 -right-3 z-10 items-center justify-center w-6">
                  <svg className="w-4 h-4 text-catok-accent/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              <div className="mb-6">
                <span className="font-display font-extrabold text-5xl text-white/10 leading-none select-none">
                  {step.number}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl text-white mb-1">
                {step.title}
              </h3>
              <p className="font-mono text-catok-accent text-xs font-medium uppercase tracking-wider mb-3">
                {step.subtitle}
              </p>
              <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="font-mono inline-flex items-center gap-3 bg-catok-primary/20 border border-catok-accent/30 rounded-full px-6 py-3 text-xs text-catok-light">
            <span className="w-2 h-2 rounded-full bg-catok-accent inline-block shrink-0" />
            Button Press → Solenoid Fires → Read Sound → AI Check 1 → AI Check 2 → Show Result
          </div>
        </motion.div>
      </div>
    </section>
  );
}
