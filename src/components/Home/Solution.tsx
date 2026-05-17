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
  { text: "Fact Verification", icon: SearchCheck, color: "#0b87b6" },
  { text: "Policy Enforcement", icon: ShieldCheck, color: "#7332a1" },
  { text: "Post-Inference Verification", icon: Activity, color: "#c31069" },
  { text: "Model-Agnostic Architecture", icon: Layers, color: "#c67f48" },
];

export default function SolutionSection() {
  const ref = useRef(null);

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-36">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-black/[0.03] blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-80px] h-[420px] w-[420px] rounded-full bg-[#0b87b6]/10 blur-[140px]" />
        <div className="absolute left-[-120px] top-[30%] h-[380px] w-[380px] rounded-full bg-[#7332a1]/10 blur-[140px]" />
      </div>

      {/* GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* HEADER */}
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-black">
            Verification Layer for Enterprise AI
          </h2>

          <p className="mt-5 text-lg md:text-2xl font-medium text-black/70 leading-relaxed">
            Findora validates AI outputs before they reach users or downstream systems.
          </p>
        </div>

        {/* FLOW */}
        <div className="mt-16 flex flex-col items-stretch md:flex-row md:items-center md:justify-center md:gap-10">
          <Step label="Input" />

          <FlowArrow />

          <Step label="LLM / VLM / AI Agent" />

          <FlowArrow />

          {/* PREMIUM VERIFICATION CORE */}
          <div className="relative flex justify-center">
            {/* glow field */}
            <div className="absolute inset-0 scale-150 rounded-3xl bg-gradient-to-r from-black/5 via-black/10 to-black/5 blur-2xl" />

            {/* processing ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-14 w-14 rounded-2xl border border-black/10 animate-pulse" />
            </div>

            {/* core */}
            <div className="relative">
              <Step label="Findora Layer" highlight />

              {/* scan line */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              </div>
            </div>
          </div>

          <FlowArrow />

          <Step label="Trusted Output" />
        </div>

        {/* FEATURES */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-black/20 hover:shadow-md"
              >
                <div
                  className="absolute left-0 top-0 h-[2px] w-full opacity-70"
                  style={{
                    background: `linear-gradient(to right, ${f.color}, transparent)`,
                  }}
                />

                <div className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: `${f.color}10` }}
                  >
                    <Icon size={20} style={{ color: f.color }} />
                  </div>

                  <p className="text-lg md:text-xl font-semibold tracking-tight text-black">
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
      className={`relative w-full md:w-auto rounded-2xl px-5 py-3 text-base md:text-lg font-semibold text-center transition-all ${
        highlight
          ? "bg-black text-white shadow-lg"
          : "bg-black/5 text-black/70 border border-black/10"
      }`}
    >
      {label}
    </div>
  );
}

/* ---------------- ARROW ---------------- */

function FlowArrow() {
  return (
    <div className="flex items-center justify-center py-2 md:py-0 text-black/30">
      <div className="hidden md:block">
        <ArrowRight size={22} />
      </div>

      <div className="block md:hidden">
        <ArrowDown size={20} />
      </div>
    </div>
  );
}