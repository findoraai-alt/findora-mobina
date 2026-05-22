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

// کامپوننت داخلی برای مدیریت اسکرول نوبتی هر کارت
function Card({ text, color, index }: { text: string; color: string; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[26px] border border-white/[0.07] bg-white/10 p-6 md:p-9 backdrop-blur-2xl transition-all duration-500"
    >
      <div
        className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-80 group-active:opacity-80"
        style={{
          background: `radial-gradient(circle at top left, ${color}40, transparent 70%)`,
        }}
      />

      <div
        className="absolute left-0 top-0 h-px w-full opacity-100"
        style={{
          background: `linear-gradient(to right, ${color}80, transparent 50%)`,
        }}
      />

      <div className="relative z-10 flex flex-col gap-4 md:gap-7">
        <p className="text-[1.26rem] font-semibold leading-snug tracking-tight text-white/90 md:text-2xl">
          {text}
        </p>

        <div className="mt-2 overflow-hidden md:mt-6">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{
              duration: 1,
              delay: 0.25 + index * 0.12,
            }}
            className="h-[1.8px] rounded-full transition-opacity duration-300 group-hover:opacity-150 group-active:opacity-150"
            style={{
              background: `linear-gradient(to right, ${color}90, transparent)`,
              boxShadow: `0 0 8px ${color}`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#07070A] py-16 md:py-20"
    >
      {/* BACKGROUND GLOW */}
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
          className="text-3xl font-semibold tracking-[-0.05em] md:text-6xl"
        >
          <span style={{ color: "#ffffff" }}>AI Has a</span>{" "}
          <span style={{ color: "#0b87b6" }}>Trust</span>{" "}
          <span style={{ color: "#7332a1" }}>Problem</span>
        </motion.h2>

        {/* SUBHEAD */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-2xl text-[1.3rem] font-medium leading-relaxed text-white/80 md:text-[1.8rem]"
        >
          As AI systems become more autonomous, verification becomes a
          mission-critical infrastructure requirement.
        </motion.p>

        {/* CARDS */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((text, i) => (
            <Card key={i} text={text} color={COLORS[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
