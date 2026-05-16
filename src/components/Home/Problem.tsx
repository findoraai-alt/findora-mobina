"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  "Confident but wrong outputs",
  "Hallucinations across AI systems",
  "No verification layer",
  "Enterprise adoption blocked",
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0B0B0F] py-24 md:py-32"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight text-white"
        >
          AI Has a Trust Problem
        </motion.h2>

        {/* SUBHEAD */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl md:text-base text-white/70 font-semibold text-xl"
        >
          As AI systems become autonomous, verification becomes mission-critical.
        </motion.p>

        {/* CARDS */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {cards.map((text, i) => {
            const fromLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: fromLeft ? -40 : 40,
                  scale: 0.98,
                }}
                animate={
                  inView
                    ? { opacity: 1, x: 0, scale: 1 }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              >
                <p className="text-white/80 text-xl md:text-lg font-semibold">
                  {text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}