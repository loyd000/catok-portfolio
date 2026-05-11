"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const components = [
  {
    name: "ESP32-S3",
    role: "Main Chip",
    detail: "Runs TinyML inference entirely on-device — no internet or cloud required. Dual-core processor with built-in Wi-Fi and Bluetooth, powerful enough to run a two-stage CNN in real time.",
    photoLabel: "ESP32-S3 microcontroller",
  },
  {
    name: "INMP441 I2S Mic",
    role: "Sound Sensor",
    detail: "Captures the tap sound immediately after the solenoid fires. Outputs a high-quality digital audio signal via I2S directly to the ESP32-S3 for MFE feature extraction.",
    photoLabel: "INMP441 I2S microphone module",
  },
  {
    name: "JF-0826B Solenoid",
    role: "Actuator",
    detail: "Hits the coconut with the exact same force every press — eliminating the human variability of manual tapping. The consistency of the strike is what makes the acoustic fingerprint reliable.",
    photoLabel: "JF-0826B solenoid motor",
  },
  {
    name: "OLED Display",
    role: "User Interface",
    detail: "Shows the device mode, current status, and the classification result after each tap. Gives farmers an immediate, readable output — no phone or computer needed.",
    photoLabel: "OLED display module",
  },
  {
    name: "LED Indicators",
    role: "Status Feedback",
    detail: "Visual indicators that communicate device state at a glance — power on, ready, processing, and result. Useful in bright outdoor conditions where the OLED may be hard to read.",
    photoLabel: "LED indicator lights",
  },
  {
    name: "12V Li-ion Battery",
    role: "Power Source",
    detail: "Portable and rechargeable, designed for full-day field use without access to a power outlet. Powers both the solenoid's high-current draw and the logic circuitry.",
    photoLabel: "12V lithium-ion battery pack",
  },
  {
    name: "MP1584 Buck Converter",
    role: "Power Management",
    detail: "Steps down the 12V battery output to stable 5V and 3.3V rails for the ESP32-S3, OLED, and sensors. Prevents voltage spikes from the solenoid from damaging the logic components.",
    photoLabel: "MP1584 buck converter module",
  },
];

export default function Hardware() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState(0);
  const activeIndex = hovered ?? selected;
  const active = components[activeIndex];

  return (
    <section id="hardware" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-catok-accent text-xs font-medium tracking-[0.2em] uppercase">
            The Build
          </span>
          <h2 className="font-display font-extrabold text-4xl text-white mt-3">
            Hardware Components
          </h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            A fully integrated embedded system powered by Arduino IDE and TensorFlow Lite — housed in a custom FDM/PLA 3D-printed casing designed for field use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Component list — appears FIRST on mobile, SECOND on desktop */}
          <div className="order-1 lg:order-2 space-y-2">
            {components.map((c, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(i)}
                  className={`flex items-center gap-4 rounded-xl p-4 border cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-catok-primary/20 border-catok-accent/50"
                      : "bg-white/5 border-white/10 hover:border-catok-accent/30 hover:bg-white/[0.08]"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-200 ${
                      isActive ? "bg-catok-accent" : "bg-white/20"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`font-semibold text-sm transition-colors duration-200 ${isActive ? "text-white" : "text-white/70"}`}>
                        {c.name}
                      </span>
                      <span className={`font-mono text-xs px-2 py-0.5 rounded-full transition-colors duration-200 ${
                        isActive
                          ? "text-catok-accent bg-catok-primary/30"
                          : "text-white/40 bg-white/5"
                      }`}>
                        {c.role}
                      </span>
                    </div>
                  </div>
                  <svg
                    className={`w-4 h-4 shrink-0 transition-all duration-200 ${isActive ? "text-catok-accent opacity-100" : "text-white/20 opacity-0"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-4 bg-catok-primary/20 border border-catok-accent/20 rounded-xl p-4 text-sm"
            >
              <span className="font-semibold text-white">Software Stack</span>
              <span className="font-mono text-xs ml-2 text-catok-accent">Arduino IDE · Python · TensorFlow Lite</span>
              <span className="text-white/50"> — 3D-printed FDM/PLA casing houses all components in a single handheld unit.</span>
            </motion.div>
          </div>

          {/* Detail panel — appears SECOND on mobile, FIRST (sticky) on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 lg:sticky lg:top-24"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                {/* Component photo placeholder */}
                <div className="w-full h-64 rounded-2xl bg-white/5 border-2 border-dashed border-white/15 flex flex-col items-center justify-center gap-2 mb-6 text-white/25">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-mono text-xs text-center px-4">{active.photoLabel}</span>
                </div>

                {/* Component info */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-display font-extrabold text-2xl text-white">
                    {active.name}
                  </h3>
                  <span className="font-mono text-xs text-catok-accent bg-catok-primary/20 px-3 py-1 rounded-full">
                    {active.role}
                  </span>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  {active.detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
