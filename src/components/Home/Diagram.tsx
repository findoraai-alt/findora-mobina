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

/* ================= DATA ================= */

const COLORS = [
  "#008f7a",
  "#eaba33",
  "#0b87b6",
  "#7332a1",
  "#c31069",
  "#c67f48",
];

const STEPS: Step[] = [
  {
    trigger: 0.08,
    label: "AI System Output",
    content: "Response generated for enterprise workflow.",
    color: "#008f7a",
  },
  {
    trigger: 0.32,
    label: "Findora Verification Layer",
    content: "AI-generated response.",
    warning: true,
    color: "#eaba33",
  },
  {
    trigger: 0.58,
    label: "Verification Pipeline",
    content: `Hallucination Detection
• Reliability Scoring
• Policy Enforcement`,
    color: "#0b87b6",
  },
  {
    trigger: 0.84,
    label: "Trusted Output",
    content: "Verified response delivered.",
    success: true,
    color: "#7332a1",
  },
];

/* ================= MAIN COMPONENT ================= */

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
    <section className="relative overflow-hidden bg-white dark:bg-[#111828] py-16 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HEADER */}
        <div className="mx-auto mb-24 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.05em] text-black dark:text-white">
            How Trusted AI Outputs Are Generated
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-black/70 dark:text-white/70">
            Enterprise-grade verification infrastructure designed for reliable AI deployment across critical systems.
          </p>
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-6">
          
          <SignalLine mobile progressStyle={{ top: mobileY }} />
          <SignalLine progressStyle={{ left: desktopX }} />

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
            ? "left-1/2 top-0 h-full w-[3px] -translate-x-1/2 lg:hidden"
            : "left-0 top-1/2 hidden h-[3px] w-full -translate-y-1/2 lg:block"
        }
      `}
    >
      {/* COLORS */}
      <div className={`absolute inset-0 flex ${mobile ? "flex-col" : "flex-row"}`}>
        {COLORS.map((color) => (
          <div key={color} className="flex-1" style={{ backgroundColor: color }} />
        ))}
      </div>

      {/* GLOW */}
      <div className={`absolute inset-0 flex blur-[10px] opacity-60 dark:opacity-40 ${mobile ? "flex-col" : "flex-row"}`}>
        {COLORS.map((color) => (
          <div key={color} className="flex-1" style={{ backgroundColor: color }} />
        ))}
      </div>

      {/* MOVING PULSE */}
      <motion.div
        animate={
          mobile
            ? { y: ["-20%", "120%"], opacity: [0, 1, 0] }
            : { x: ["-10%", "110%"], opacity: [0, 1, 0] }
        }
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className={`
          absolute rounded-full blur-[14px]
          ${
            mobile
              ? "left-1/2 h-32 w-[12px] -translate-x-1/2 bg-white/50"
              : "top-1/2 h-12 w-44 -translate-y-1/2 bg-white/50"
          }
        `}
      />

      {/* SIGNAL CORE */}
      <motion.div
        style={progressStyle}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className={`absolute ${
          mobile
            ? "left-1/2 -translate-x-1/2 -translate-y-1/2"
            : "top-1/2 -translate-x-1/2 -translate-y-1/2"
        }`}
      >
        <div className="absolute h-24 w-24 rounded-full bg-[#0b87b6]/30 blur-[34px]" />
        <div className="absolute h-16 w-16 rounded-full bg-[#7332a1]/30 blur-[18px]" />
        <div className="absolute h-10 w-10 rounded-full bg-[#eaba33]/25 blur-[10px]" />

        <div className="relative h-4 w-4 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.9)]" />
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
  const active = useTransform(progress, (v) => Math.abs(v - trigger) < 0.12);

  const borderColor = useTransform(active, (v) =>
    v ? color : "rgba(255,255,255,0.08)"
  );

  const shadow = useTransform(active, (v) =>
    v
      ? `0 0 0 1px ${color}55, 0 25px 70px ${color}25`
      : "0 10px 30px rgba(0,0,0,0.25)"
  );

  return (
    <motion.div
      style={{ borderColor, boxShadow: shadow }}
      className="
        relative z-10 w-full max-w-[290px]
        rounded-[28px] border
        bg-white/90 dark:bg-[#0f172a]/80
        px-7 py-7 backdrop-blur-xl
      "
    >
      {/* accent line */}
      <div className="mb-5 h-[2px] w-14 rounded-full" style={{ backgroundColor: color }} />

      <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-black/80 dark:text-white/80">
        {label}
      </p>

      <p className="mt-4 whitespace-pre-line text-[1rem] font-medium leading-8 text-black/80 dark:text-white/90">
        {content}
      </p>

      {warning && (
        <div
          className="mt-5 inline-flex rounded-full border px-3 py-1 text-[12px]"
          style={{
            borderColor: `${color}40`,
            backgroundColor: `${color}15`,
            color,
          }}
        >
          Potential reliability issue
        </div>
      )}

      {success && (
        <div
          className="mt-5 inline-flex rounded-full border px-3 py-1 text-[12px] font-semibold"
          style={{
            borderColor: `${color}40`,
            backgroundColor: `${color}15`,
            color,
          }}
        >
          Verified • Enterprise-grade reliability
        </div>
      )}
    </motion.div>
  );
}