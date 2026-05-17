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

  const inView = useInView(ref, {
    once: true,
    margin: "-20% 0px",
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#07070A] py-20 md:py-36"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#7332a1]/10 blur-[140px]" />
        <div className="absolute bottom-[-120px] right-[-80px] h-[420px] w-[420px] rounded-full bg-[#0b87b6]/10 blur-[140px]" />
        <div className="absolute left-[-100px] top-[35%] h-[300px] w-[300px] rounded-full bg-[#eaba33]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-3xl md:text-7xl font-semibold leading-[0.95] tracking-[-0.05em] text-white"
        >
          AI Has a Trust Problem
        </motion.h2>

        {/* SUBHEAD */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="mt-5 md:mt-7 max-w-2xl text-m md:text-xl leading-relaxed text-white/55 font-semibold"
        >
          As AI systems become autonomous, verification becomes
          mission-critical.
        </motion.p>

        {/* CARDS */}
        <div className="mt-12 md:mt-20 grid gap-4 md:gap-5 md:grid-cols-2">
          {cards.map((text, i) => {
            const colors = ["#eaba33", "#7332a1", "#0b87b6", "#008f7a"];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-5 md:p-8 backdrop-blur-2xl"
              >
                {/* glow */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at top left, ${colors[i]}18, transparent 65%)`,
                  }}
                />

                {/* top line */}
                <div
                  className="absolute left-0 top-0 h-px w-full"
                  style={{
                    background: `linear-gradient(to right, ${colors[i]}, transparent 60%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col gap-4 md:gap-8">
                  {/* number */}
                  <div className="text-[10px] md:text-sm tracking-[0.22em] text-white/25">
                    0{i + 1}
                  </div>

                  {/* text */}
                  <p className="text-lg md:text-2xl font-semibold leading-snug tracking-tight text-white">
                    {text}
                  </p>

                  {/* bottom line */}
                  <div className="mt-2 md:mt-6 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: "100%" } : {}}
                      transition={{
                        duration: 1,
                        delay: 0.3 + i * 0.1,
                      }}
                      className="h-px"
                      style={{
                        background: `linear-gradient(to right, ${colors[i]}, transparent)`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}