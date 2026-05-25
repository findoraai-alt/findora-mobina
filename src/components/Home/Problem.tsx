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
    <div
      ref={cardRef}
      className="group relative flex min-h-[100px] overflow-hidden rounded-[26px] border border-white/[0.07] bg-white/10 p-5 md:min-h-[100px] md:p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1.5"
    >
      <motion.div
        animate={isInView ? { opacity: 0.8 } : { opacity: 0.4 }}
        transition={{ duration: 0.8, delay: index * 0.12 }}
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100"
        style={{
          background: `radial-gradient(circle at top left, ${color}40, transparent 50%)`,
        }}
      />

      <div
        className="absolute left-0 top-0 h-px w-full opacity-100"
        style={{
          background: `linear-gradient(to right, ${color}80, transparent 50%)`,
        }}
      />

      <div className="relative z-10 flex w-full flex-col justify-between gap-3 md:gap-5">
        <p className="text-[1.26rem] pt-2 md:pt-2 font-semibold leading-snug tracking-tight text-white md:text-2xl">
          {text}
        </p>

        <div className="overflow-hidden">
          <div
            className="h-[1.8px] w-full rounded-full opacity-100 transition-opacity duration-300 group-hover:opacity-150 group-active:opacity-150"
            style={{
              background: `linear-gradient(to right, ${color}90, transparent)`,
              boxShadow: `0 0 8px ${color}`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Problem() {
  const ref = useRef(null);

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
        <h2
          className="text-3xl font-semibold tracking-[-0.05em] md:text-6xl"
        >
          <span style={{ color: "#ffffff" }}>AI Has a</span>{" "}
          <span style={{ color: "#0b87b6" }}>Trust</span>{" "}
          <span style={{ color: "#7332a1" }}>Problem</span>
        </h2>

        {/* SUBHEAD */}
        <p
          className="mt-4 max-w-2xl text-[1.3rem] font-medium leading-relaxed text-white/90 md:text-[1.8rem]"
        >
          As AI systems become more autonomous, verification becomes a
          mission-critical infrastructure requirement.
        </p>

        {/* CARDS */}
        <div className="mt-7 grid gap-6 md:grid-cols-2 md:gap-7">
          {cards.map((text, i) => (
            <Card key={i} text={text} color={COLORS[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}