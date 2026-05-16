"use client";

import { motion } from "framer-motion";

const cards = [
  "Confident but wrong outputs",
  "Hallucinations across AI systems",
  "No verification layer",
  "Enterprise adoption blocked",
];

export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0F] py-24 md:py-32">
      {/* subtle glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight text-white"
        >
          AI Has a Trust Problem
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl md:text-base text-white/70 font-semibold text-xl"
        >
          As AI systems become autonomous, verification becomes mission-critical.
        </motion.p>

        {/* Cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {cards.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition"
            >
              {/* subtle glow line */}
              <div className="absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              <p className="relative text-white/80 text-sm md:text-base font-medium">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}