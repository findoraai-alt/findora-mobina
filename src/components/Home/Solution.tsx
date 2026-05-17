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

const bars = [
  {
    mobileLeft: "52%",
    desktopLeft: "70%",
    mobileHeight: "7%",
    desktopHeight: "21%",
    color: "#008f7a",
    duration: 4.2,
  },
  {
    mobileLeft: "60%",
    desktopLeft: "74%",
    mobileHeight: "9%",
    desktopHeight: "27%",
    color: "#eaba33",
    duration: 4.6,
  },
  {
    mobileLeft: "68%",
    desktopLeft: "78%",
    mobileHeight: "6%",
    desktopHeight: "18%",
    color: "#0b87b6",
    duration: 4.1,
  },
  {
    mobileLeft: "76%",
    desktopLeft: "82%",
    mobileHeight: "8%",
    desktopHeight: "24%",
    color: "#7332a1",
    duration: 4.8,
  },
  {
    mobileLeft: "84%",
    desktopLeft: "86%",
    mobileHeight: "7%",
    desktopHeight: "21%",
    color: "#c31069",
    duration: 4.3,
  },
  {
    mobileLeft: "92%",
    desktopLeft: "90%",
    mobileHeight: "9%",
    desktopHeight: "27%",
    color: "#c67f48",
    duration: 4.5,
  },
];

export default function SolutionSection() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-20 md:py-32"
    >
      {/* Bars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{
              height: bar.mobileHeight,
            }}
            transition={{
              duration: bar.duration,
              ease: "easeOut",
            }}
            className="absolute rounded-b-full w-[22px] sm:w-[28px] md:w-[42px]"
            style={{
              top: 0,
              left: bar.mobileLeft,
              backgroundColor: bar.color,
            }}
          >
            {/* Desktop height override */}
            <div
              className="hidden md:block"
              style={{
                height: bar.desktopHeight,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-black">
          Verification Layer for Enterprise AI
        </h2>

        <p className="mt-4 max-w-2xl text-xl md:text-3xl font-semibold text-black/80">
          Findora verifies AI outputs before they reach users or downstream
          systems.
        </p>

        {/* Flow */}
        <div className="mt-14 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-6">
          <Node label="Input" />
          <Arrow />
          <Node label="LLM / VLM / AI Agent" />
          <Arrow />
          <Node highlight label="Findora Layer" />
          <Arrow />
          <Node label="Trusted Output" />
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: f.color }}
              >
                <Icon size={28} style={{ color: f.color }} />

                <p
                  className="text-lg md:text-2xl font-bold tracking-tight leading-snug"
                  style={{ color: f.color }}
                >
                  {f.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Node({ label, highlight }: any) {
  return (
    <div
      className={`rounded-2xl px-6 py-3 text-lg md:text-xl font-semibold ${
        highlight
          ? "bg-black text-white"
          : "bg-black/5 text-black/70 border border-black/10"
      }`}
    >
      {label}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center text-black/40">
      <div className="hidden md:block">
        <ArrowRight size={26} />
      </div>

      <div className="block md:hidden">
        <ArrowDown size={26} />
      </div>
    </div>
  );
}
