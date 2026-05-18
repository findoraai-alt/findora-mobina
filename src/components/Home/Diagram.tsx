"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  MotionValue,
} from "framer-motion";
import { useEffect } from "react";

const COLORS = [
  "#008f7a",
  "#eaba33",
  "#0b87b6",
  "#7332a1",
  "#c31069",
  "#c67f48",
];

const STEPS = [
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
    <section className="relative overflow-hidden bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-24 max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-black md:text-5xl">
            How Trusted AI Outputs Are Generated
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/50">
            Enterprise-grade verification infrastructure designed for reliable
            AI deployment across critical systems.
          </p>
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-6">
          {/* MOBILE LINE */}
          <SignalLine mobile progressStyle={{ top: mobileY }} />

          {/* DESKTOP LINE */}
          <SignalLine progressStyle={{ left: desktopX }} />

          {/* CARDS */}
          {STEPS.map((step) => (
            <StepCard
              key={step.label}
              progress={progress}
              {...step}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================================================== */
/* SIGNAL LINE */
/* ====================================================== */

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
      {/* colored segments */}
      <div
        className={`
          absolute inset-0 flex
          ${mobile ? "flex-col" : "flex-row"}
        `}
      >
        {COLORS.map((color) => (
          <div
            key={color}
            className="flex-1"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* glow */}
      <div
        className={`
          absolute inset-0 blur-[10px] opacity-70 flex
          ${mobile ? "flex-col" : "flex-row"}
        `}
      >
        {COLORS.map((color) => (
          <div
            key={color}
            className="flex-1"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* moving pulse */}
      <motion.div
        animate={
          mobile
            ? {
                y: ["-20%", "120%"],
                opacity: [0, 1, 0],
              }
            : {
                x: ["-10%", "110%"],
                opacity: [0, 1, 0],
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`
          absolute rounded-full blur-[14px]
          ${
            mobile
              ? "left-1/2 h-32 w-[12px] -translate-x-1/2 bg-white"
              : "top-1/2 h-12 w-44 -translate-y-1/2 bg-white"
          }
        `}
      />

      {/* SIGNAL */}
      <motion.div
        style={progressStyle}
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          absolute
          ${
            mobile
              ? "left-1/2 -translate-x-1/2 -translate-y-1/2"
              : "top-1/2 -translate-x-1/2 -translate-y-1/2"
          }
        `}
      >
        {/* outer glow */}
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0b87b6]/30 blur-[34px]" />

        {/* purple glow */}
        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7332a1]/35 blur-[18px]" />

        {/* warm glow */}
        <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eaba33]/35 blur-[10px]" />

        {/* core */}
        <div className="relative h-4 w-4 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.9)]" />
      </motion.div>
    </div>
  );
}

/* ====================================================== */
/* CARD */
/* ====================================================== */

type StepProps = {
  label: string;
  content: string;
  warning?: boolean;
  success?: boolean;
  progress: MotionValue<number>;
  trigger: number;
  color: string;
};

function StepCard({
  label,
  content,
  warning,
  success,
  progress,
  trigger,
  color,
}: StepProps) {
  const active = useTransform(
    progress,
    (v) => Math.abs(v - trigger) < 0.12
  );

  const borderColor = useTransform(
    active,
    (v) => (v ? color : "rgba(0,0,0,0.07)")
  );

  const shadow = useTransform(
    active,
    (v) =>
      v
        ? `0 0 0 1px ${color}55, 0 25px 70px ${color}25`
        : "0 10px 30px rgba(0,0,0,0.04)"
  );

  return (
    <motion.div
      style={{
        borderColor,
        boxShadow: shadow,
      }}
      className="
        relative z-10 w-full max-w-[290px]
        rounded-[28px] border bg-white/92
        px-7 py-7 backdrop-blur-xl
        transition-all duration-500
      "
    >
      {/* accent */}
      <div
        className="mb-5 h-[2px] w-14 rounded-full"
        style={{
          backgroundColor: color,
        }}
      />

      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/80">
        {label}
      </p>

      <p className="mt-4 whitespace-pre-line text-[1rem] font-medium leading-8 text-black/88">
        {content}
      </p>

      {warning && (
        <div
          className="mt-5 inline-flex rounded-full border px-3 py-1 text-[12px] font-medium"
          style={{
            borderColor: `${color}40`,
            backgroundColor: `${color}10`,
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
            backgroundColor: `${color}10`,
            color,
          }}
        >
          Verified • Enterprise-grade reliability
        </div>
      )}
    </motion.div>
  );
}