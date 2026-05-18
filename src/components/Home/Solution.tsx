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

export default function SolutionSection() {
  const ref = useRef(null);

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black/[0.02] blur-[140px]" />
        <div className="absolute bottom-[-140px] right-[-100px] h-[420px] w-[420px] rounded-full bg-[#0b87b6]/5 blur-[160px]" />
        <div className="absolute left-[-140px] top-[35%] h-[380px] w-[380px] rounded-full bg-[#7332a1]/5 blur-[160px]" />
      </div>

      {/* GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* HEADER */}
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
            Verification Layer for Enterprise AI
          </h2>

          <p className="mt-6 text-lg md:text-2xl font-medium text-black/60 leading-relaxed">
            Findora validates AI outputs before they reach users or downstream systems.
          </p>
        </div>

        {/* FLOW */}
        <div className="mt-20 flex flex-col items-center md:flex-row md:items-center md:justify-center md:gap-12">
          <Step label="Input" />

          <FlowArrow />

          <Step label="LLM / VLM / AI Agent" />

          <FlowArrow />

          {/* FINDORA CORE (FIXED - NO MOBILE ARTIFACTS) */}
          <div className="relative flex justify-center overflow-hidden">
            {/* glow only desktop */}
            <div className="hidden md:block absolute inset-0 scale-150 rounded-3xl bg-gradient-to-r from-black/5 via-black/10 to-black/5 blur-3xl opacity-70" />

            <div className="relative">
              <Step label="Findora Layer" highlight />

              {/* scan line safe */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              </div>
            </div>
          </div>

          <FlowArrow />

          <Step label="Trusted Output" />
        </div>

        {/* FEATURES */}
        <div className="mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-xl border border-black/10 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-black/20 hover:shadow-sm"
              >
                <div
                  className="absolute left-0 top-0 h-[1px] w-full opacity-60"
                  style={{
                    background: `linear-gradient(to right, ${f.color}, transparent)`,
                  }}
                />

                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{ background: `${f.color}12` }}
                  >
                    <Icon size={18} strokeWidth={1.5} style={{ color: f.color }} />
                  </div>

                  <p className="text-base md:text-lg font-medium text-black/80">
                    {f.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STEP ---------------- */

function Step({ label, highlight }: any) {
  return (
    <div
      className={`relative w-auto max-w-[240px] rounded-xl px-4 py-2 text-sm md:text-base font-medium text-center transition-all duration-300 ${
        highlight
          ? "bg-black text-white shadow-md"
          : "bg-black/5 text-black/60 border border-black/10"
      }`}
    >
      {label}
    </div>
  );
}

/* ---------------- ARROW ---------------- */

function FlowArrow() {
  return (
    <div className="flex items-center justify-center py-3 md:py-0 text-black/25">
      <div className="hidden md:block">
        <ArrowRight size={20} strokeWidth={1.5} />
      </div>

      <div className="block md:hidden">
        <ArrowDown size={18} strokeWidth={1.5} />
      </div>
    </div>
  );
}