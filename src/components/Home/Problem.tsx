"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  "Confident but unreliable outputs",
  "Hallucinations across AI systems",
  "No verification layer",
  "Enterprise deployment risk",
];

const COLORS = ["#eaba33", "#7332a1", "#0b87b6", "#008f7a"];

export default function Problem() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-20% 0px",
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#07070A] py-28 md:py-44"
    >
      {/* BACKGROUND GLOW (subtle + premium) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-240px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#7332a1]/10 blur-[160px]" />
        <div className="absolute bottom-[-160px] right-[-120px] h-[520px] w-[520px] rounded-full bg-[#0b87b6]/10 blur-[160px]" />
        <div className="absolute left-[-120px] top-[40%] h-[360px] w-[360px] rounded-full bg-[#eaba33]/8 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="max-w-4xl text-3xl font-semibold tracking-[-0.05em] text-white md:text-6xl"
        >
          AI Has a Trust Problem
        </motion.h2>

        {/* SUBHEAD */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-2xl text-[1.3rem] font-medium leading-relaxed text-white/45 md:text-[1.8rem]"
        >
          As AI systems become more autonomous, verification becomes a
          mission-critical infrastructure requirement.
        </motion.p>

        {/* CARDS */}
        <div className="mt-10 md:mt-28 grid gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[26px]
                border
                border-white/[0.06]
                bg-white/[0.02]
                p-6
                md:p-9
                backdrop-blur-2xl
                transition-all
                duration-500
              "
            >
              {/* ultra subtle glass gradient */}
              <div
                className="
                  absolute inset-0 opacity-0 transition-opacity duration-500
                  group-hover:opacity-100
                "
                style={{
                  background: `radial-gradient(circle at top left, ${COLORS[i]}12, transparent 70%)`,
                }}
              />

              {/* soft top line */}
              <div
                className="absolute left-0 top-0 h-px w-full opacity-40"
                style={{
                  background: `linear-gradient(to right, ${COLORS[i]}80, transparent 70%)`,
                }}
              />

              <div className="relative z-10 flex flex-col gap-4 md:gap-7">
                {/* index */}
                <div className="text-[10px] tracking-[0.28em] text-white/25 md:text-xs">
                  
                </div>

                {/* text */}
                <p className="text-lg font-semibold leading-snug tracking-tight text-white/90 md:text-2xl">
                  {text}
                </p>

                {/* bottom micro line */}
                <div className="mt-2 overflow-hidden md:mt-6">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: "100%" } : {}}
                    transition={{
                      duration: 1,
                      delay: 0.25 + i * 0.12,
                    }}
                    className="h-px opacity-60"
                    style={{
                      background: `linear-gradient(to right, ${COLORS[i]}90, transparent)`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}