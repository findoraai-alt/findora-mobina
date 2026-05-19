"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  BarChart3,
  SearchCheck,
  ShieldCheck,
  Activity,
  Layers,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

const features = [
  { text: "Hallucination Detection", icon: AlertTriangle, color: "#008f7a" },
  { text: "Reliability Scoring", icon: BarChart3, color: "#eaba33" },
  { text: "Static filtering", icon: SearchCheck, color: "#0b87b6" },
  { text: "Policy Enforcement", icon: ShieldCheck, color: "#7332a1" },
  { text: "Post-generation verification", icon: Activity, color: "#c31069" },
  { text: "Model-Agnostic Architecture", icon: Layers, color: "#c67f48" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SolutionSection() {
  const ref = useRef(null);

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#111828] py-10 md:py-16">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black/5 dark:bg-white/5 blur-[140px]" />
        <div className="absolute bottom-[-140px] right-[-100px] h-[420px] w-[420px] rounded-full bg-[#0b87b6]/10 blur-[160px]" />
        <div className="absolute left-[-140px] top-[35%] h-[380px] w-[380px] rounded-full bg-[#7332a1]/10 blur-[160px]" />
      </div>

      {/* GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* HEADER */}
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-black dark:text-white">
            <span className="bg-gradient-to-r from-[#c31069] via-[#0b87b6] to-[#7332a1] bg-clip-text text-transparent">
              Verification
            </span>{" "}
            Layer for Enterprise AI
          </h2>

          <p className="mt-6 text-[1.4rem] md:text-[1.8rem] font-semibold text-black/80 dark:text-white/70 leading-relaxed">
            Findora validates AI outputs before they reach users or downstream systems.
          </p>
        </div>

        {/* FLOW */}
        <div className="mt-10 flex flex-col items-center md:flex-row md:justify-center md:gap-12">
          <Step label="Input" />
          <FlowArrow />
          <Step label="LLM / VLM / AI Agent" />
          <FlowArrow />

          <div className="relative flex justify-center">
            <GlowCore>
              <Step label="Findora Layer" highlight />
            </GlowCore>
          </div>

          <FlowArrow />
          <Step label="Trusted Output" />
        </div>

        {/* FEATURES */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  boxShadow: `0 0 25px ${f.color}22`,
                }}
                className="
                  relative overflow-hidden rounded-xl border
                  border-black/10 dark:border-white/10
                  bg-white dark:bg-[#0f172a]/70
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-1 hover:shadow-lg
                  h-full flex
                "
              >
                {/* glow */}
                <div
                  className="absolute -inset-10 opacity-50 blur-3xl"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${f.color}18, transparent 60%)`,
                  }}
                />

                {/* top line */}
                <div
                  className="absolute left-0 top-0 h-[3px] w-full opacity-80"
                  style={{
                    background: `linear-gradient(to right, ${f.color}, transparent)`,
                  }}
                />

                {/* content */}
                <div className="relative flex w-full items-center gap-4 p-5">

                  {/* ICON FIX */}
                  <div
                    className="
                      flex aspect-square h-10 w-10
                      items-center justify-center
                      rounded-md
                      flex-shrink-0
                    "
                    style={{ background: `${f.color}20` }}
                  >
                    <Icon size={20} strokeWidth={1.6} style={{ color: f.color }} />
                  </div>

                  <p className="
                    text-[1.3rem] md:text-[1.35rem]
                    font-semibold text-black/80 dark:text-white/80
                    leading-snug
                  ">
                    {f.text}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- STEP ---------------- */

function Step({ label, highlight }: any) {
  return (
    <div
      className={`
        relative max-w-[240px] rounded-xl px-8 py-4 text-center 
        font-medium transition-all
        ${
          highlight
            ? "bg-black text-white dark:bg-white dark:text-black shadow-lg"
            : "bg-black/1.5 text-black/70 dark:bg-white/1.5 dark:text-white/80 border border-black/40 dark:border-white/40"
        }
      `}
      style={{
        fontSize: "1.4rem",
        lineHeight: "1.5rem",
      }}
    >
      {label}
    </div>
  );
}

/* ---------------- FLOW ARROW ---------------- */

function FlowArrow() {
  return (
    <div className="flex items-center justify-center py-4 md:py-0 px-3">
      <div className="hidden md:block text-black dark:text-white">
        <ArrowRight size={28} strokeWidth={3} />
      </div>
      <div className="block md:hidden text-black dark:text-white">
        <ArrowDown size={22} strokeWidth={3} />
      </div>
    </div>
  );
}

/* ---------------- GLOW CORE ---------------- */

function GlowCore({ children }: any) {
  return (
    <div className="relative">
      <div className="absolute inset-0 scale-150 rounded-3xl bg-gradient-to-r from-[#008f7a]/10 via-[#eaba33]/10 to-[#7332a1]/10 blur-2xl opacity-60 animate-pulse" />
      {children}
    </div>
  );
}