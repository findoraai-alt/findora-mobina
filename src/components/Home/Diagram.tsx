"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  MotionValue,
} from "framer-motion";
import { useEffect } from "react";

/* ================= TYPES ================= */

type Step = {
  trigger: number;
  label: string;
  content: string;
  warning?: boolean;
  success?: boolean;
  color: string;
};

type StepCardProps = Step & {
  progress: MotionValue<number>;
};

/* ================= SIGNAL GRADIENT ================= */

const SIGNAL_GRADIENT =
  "linear-gradient(to right, #008f7a 30%, #eaba33 30%, #eaba33 20%, #8a3bd1 100%)";

const SIGNAL_GRADIENT_MOBILE =
  "linear-gradient(to bottom, #008f7a 30%, #eaba33 30%, #eaba33 20%, #8a3bd1 100%)";

/* ================= DATA ================= */

const STEPS: Step[] = [
  {
    trigger: 0.08,
    label: "AI System Output",
    content: "Response generated for enterprise workflow.",
    color: "#c31069",
  },
  {
    trigger: 0.32,
    label: "Findora Verification Layer",
    content: "AI-generated response.",
    warning: true,
    color: "#008f7a",
  },
  {
    trigger: 0.58,
    label: "Verification Pipeline",
    content: `Hallucination Detection
• Reliability Scoring
• Policy Enforcement`,
    color: "#eaba33",
  },
  {
    trigger: 0.84,
    label: "Trusted Output",
    content: "Verified response delivered.",
    success: true,
    color: "#7332a1",
  },
];

/* ================= MAIN ================= */

export default function FindoraDiagram() {
  const progress = useMotionValue(0);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    });

    return () => controls.stop();
  }, [progress]);

  const mobileY = useTransform(progress, [0, 1], ["0%", "100%"]);
  const desktopX = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#111828] py-1 pb-10">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.05em] text-black dark:text-white">
            How Trusted AI Outputs Are Generated
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-black/70 dark:text-white/70 text-[1.3rem] md:text-[1.7rem]">
            Enterprise-grade verification infrastructure designed for reliable AI deployment across critical systems.
          </p>
        </div>

        {/* FLOW */}
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-6">

          {/* MOBILE SIGNAL */}
          <SignalLine mobile progressStyle={{ top: mobileY }} />

          {/* DESKTOP SIGNAL */}
          <SignalLine progressStyle={{ left: desktopX }} />

          {/* STEPS */}
          {STEPS.map((step) => (
            <StepCard key={step.label} progress={progress} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= SIGNAL LINE ================= */

function SignalLine({
  mobile,
  progressStyle,
}: {
  mobile?: boolean;
  progressStyle: any;
}) {
  return (
    <div
      className={`
        absolute overflow-hidden rounded-full
        ${
          mobile
            ? "left-1/2 top-0 h-full w-[5px] -translate-x-1/2 lg:hidden"
            : "left-0 top-1/2 hidden h-[5px] w-full -translate-y-1/2 lg:block"
        }
      `}
    >
      {/* MAIN LINE */}
      <div
        className="absolute inset-0"
        style={{
          background: mobile
            ? SIGNAL_GRADIENT_MOBILE
            : SIGNAL_GRADIENT,
        }}
      />

      {/* SOFT GLOW */}
      <div
        className="absolute inset-0 blur-[14px] opacity-40"
        style={{
          background: mobile
            ? SIGNAL_GRADIENT_MOBILE
            : SIGNAL_GRADIENT,
        }}
      />

      {/* CORE SIGNAL (FIXED — NO GLOW LEAK) */}
      <motion.div
        style={progressStyle}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3.2, repeat: Infinity }}
        className={`absolute ${
          mobile
            ? "left-1/2 -translate-x-1/2 -translate-y-1/2"
            : "top-1/2 -translate-x-1/2 -translate-y-1/2"
        }`}
      >
        {/* controlled glow layers (no overflow artifacts) */}
        <div className="absolute h-20 w-20 rounded-full bg-[#7332a1]/20 blur-[28px]" />
        <div className="absolute h-14 w-14 rounded-full bg-[#eaba33]/20 blur-[16px]" />
        <div className="absolute h-8 w-8 rounded-full bg-[#008f7a]/20 blur-[8px]" />

        
       
      </motion.div>
    </div>
  );
}

/* ================= CARD ================= */

function StepCard({
  label,
  content,
  warning,
  success,
  progress,
  trigger,
  color,
}: StepCardProps) {
  const active = useTransform(progress, (v) => v >= trigger && v < trigger + 0.18);

  const smoothActive = useTransform(active, (v) => (v ? 1 : 0));

  const borderColor = useTransform(smoothActive, (v) =>
    v > 0 ? color : "rgba(255,255,255,0.08)"
  );

  const shadow = useTransform(smoothActive, (v) =>
    v > 0
      ? `0 0 0 1px ${color}60, 0 18px 50px ${color}18`
      : "0 10px 30px rgba(0,0,0,0.18)"
  );

  return (
    <motion.div
      style={{ borderColor, boxShadow: shadow }}
      className="
        relative z-10 w-full max-w-[290px]
        rounded-[28px]
        border-[3.5px]
        bg-white/70 dark:bg-[#0b1220]/60
        px-7 py-7
        backdrop-blur-2xl
        transition-colors duration-700
      "
    >
      {/* ACCENT */}
      <div
        className="mb-5 h-[5px] w-14 rounded-full"
        style={{ backgroundColor: color }}
      />

      {/* LABEL */}
      <p className="text-[16px] font-semibold uppercase  text-black/60 dark:text-white/80">
        {label}
      </p>

      {/* CONTENT */}
      <p className="mt-4 whitespace-pre-line text-[1.2rem] font-medium leading-8 text-black/80 dark:text-white/90">
        {content}
      </p>

      {/* WARNING (always visible) */}
      {warning && (
        <div
          className="mt-5 inline-flex rounded-full border px-3 py-1 text-[16px] font-semibold"
          style={{
            borderColor: `${color}60`,
            backgroundColor: `${color}18`,
            color,
            opacity: 0.95,
          }}
        >
          Potential reliability issue
        </div>
      )}

      {/* SUCCESS (always visible) */}
      {success && (
        <div
          className="mt-5 inline-flex rounded-full border px-6 py-1 text-[16px] font-semibold"
          style={{
            borderColor: `${color}50`,
            backgroundColor: `${color}14`,
            color,
            opacity: 0.95,
          }}
        >
          Verified • Enterprise-grade reliability
        </div>
      )}
    </motion.div>
  );
}