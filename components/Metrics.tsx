"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  target: number;
  decimals?: number;
  suffix: string;
  duration?: number;
}

function AnimatedCounter({ target, decimals = 0, suffix, duration = 1800 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }
    setCount(0);
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const metrics = [
  { value: 86.82, suffix: "%", decimals: 2, label: "Overall Precision Rate", sub: "vs. ~70% manual accuracy" },
  { value: 83.33, suffix: "%", decimals: 2, label: "Consistency Rate", sub: "across repeated field tests" },
  { value: 1.35, suffix: "s", decimals: 2, label: "Per Classification", sub: "per coconut tap" },
  { value: 4.63, suffix: "/5", decimals: 2, label: "Farmer Rating", sub: "Strongly Agree (5-point scale)" },
];

const breakdown = [
  { label: "Mala-uhog (Jelly)", value: 92.96, bar: "bg-emerald-400" },
  { label: "Mala-kanin (Firm)", value: 86.3, bar: "bg-amber-400" },
  { label: "Mala-tenga (Hard)", value: 81.21, bar: "bg-orange-400" },
];

const usabilityItems = [
  { label: "Scan Speed", value: 4.8 },
  { label: "Easy to Hold", value: 4.6 },
  { label: "Simple to Operate", value: 4.55 },
  { label: "Casing Durability", value: 4.75 },
  { label: "Easy to Repair", value: 4.8 },
];

export default function Metrics() {
  return (
    <section id="metrics" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-catok-accent text-xs font-medium tracking-[0.2em] uppercase">
            Performance
          </span>
          <h2 className="font-display font-extrabold text-4xl text-white mt-3">
            Results &amp; Metrics
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm">
            Validated through field testing with actual coconut farmers and vendors in Quezon Province — three trials, real coconuts.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="font-display font-extrabold text-3xl md:text-4xl text-catok-accent mb-1">
                <AnimatedCounter target={m.value} suffix={m.suffix} decimals={m.decimals} />
              </div>
              <div className="text-white text-sm font-medium mb-0.5">{m.label}</div>
              <div className="font-mono text-white/30 text-xs">{m.sub}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-7"
          >
            <h3 className="font-mono text-white/60 font-medium mb-6 text-xs uppercase tracking-wider">
              Precision Rate by Stage
            </h3>
            <div className="space-y-5">
              {breakdown.map((item, i) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">{item.label}</span>
                    <span className="font-display font-extrabold text-white">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full ${item.bar}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-7"
          >
            <h3 className="font-mono text-white/60 font-medium mb-6 text-xs uppercase tracking-wider">
              Farmer Usability (out of 5.00)
            </h3>
            <div className="space-y-5">
              {usabilityItems.map((item, i) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">{item.label}</span>
                    <span className="font-display font-extrabold text-white">
                      {item.value.toFixed(2)}
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.value / 5) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-catok-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
