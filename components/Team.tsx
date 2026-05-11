"use client";

import { motion } from "framer-motion";

const members = [
  {
    name: "John Lloyd M. De Guzman",
    initials: "JD",
    role: "Lead Developer",
    description: "Software architecture, TinyML model training, and firmware development.",
  },
  {
    name: "Jin Lowell C. Miranda",
    initials: "JM",
    role: "Hardware Engineer",
    description: "Circuit design, component integration, and solenoid mechanism.",
  },
  {
    name: "Emilio J C. Valdellon",
    initials: "EV",
    role: "Systems Engineer",
    description: "3D casing design, system testing, and field evaluation.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-catok-accent text-xs font-medium tracking-[0.2em] uppercase">
            The Researchers
          </span>
          <h2 className="font-display font-extrabold text-4xl text-white mt-3">
            Meet the Team
          </h2>
          <p className="text-white/50 mt-4 text-sm">
            BS Computer Engineering · Laguna State Polytechnic University · 2026
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-4xl mx-auto">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-catok-accent/30 hover:bg-white/[0.08] transition-all duration-200"
            >
              {/* Photo placeholder — replace with team member headshot */}
              <div className="w-28 h-28 rounded-full bg-white/5 border-2 border-dashed border-white/15 flex flex-col items-center justify-center gap-1 mx-auto mb-5 text-white/25">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-mono text-[10px]">Photo</span>
              </div>
              <h3 className="font-semibold text-white text-base">{member.name}</h3>
              <p className="font-mono text-catok-accent text-xs font-medium uppercase tracking-wider mt-1 mb-3">
                {member.role}
              </p>
              <p className="text-white/50 text-sm leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="font-mono inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-xs text-white/40">
            <span className="w-2 h-2 rounded-full bg-catok-accent inline-block" />
            College of Engineering · Santa Cruz, Laguna
          </div>
        </motion.div>
      </div>
    </section>
  );
}
