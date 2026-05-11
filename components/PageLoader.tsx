"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Lock body scroll while loader is active
    document.body.style.overflow = "hidden";

    let minTimerDone = false;
    let pageLoaded = false;

    const dismiss = () => {
      if (minTimerDone && pageLoaded) {
        setVisible(false);
        document.body.style.overflow = "";
      }
    };

    // Minimum display time for branding (1.2s)
    const timer = setTimeout(() => {
      minTimerDone = true;
      dismiss();
    }, 1200);

    // Wait for full page load (images, fonts, etc.)
    const onLoad = () => {
      pageLoaded = true;
      dismiss();
    };

    if (document.readyState === "complete") {
      pageLoaded = true;
      dismiss();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", onLoad);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] bg-[#0f1f14] flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          {/* Grid — same as page background */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #2d6a4f 1px, transparent 1px), linear-gradient(to bottom, #2d6a4f 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-[#2d6a4f]/15 blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-5">
            {/* Logo */}
            <motion.h1
              className="font-display font-extrabold text-6xl text-white tracking-tight leading-none"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[#52b788]">CA</span>TOK
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="font-mono text-[11px] text-white/35 tracking-[0.22em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              Smart Coconut Maturity Classifier
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="w-40 h-px bg-white/10 rounded-full overflow-hidden mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <motion.div
                className="h-full bg-[#52b788] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut", delay: 0.1 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
