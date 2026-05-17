"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  MotionValue,
} from "framer-motion";
import { useEffect } from "react";

const FLOW_COLOR = "#eaba33";

export default function FindoraDiagram() {
  const progress = useMotionValue(0);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 6,
      repeat: Infinity,
      ease: "linear",
    });

    return () => controls.stop();
  }, [progress]);

  /* MOBILE FLOW */
  const mobileY = useTransform(
    progress,
    [0, 1],
    ["0%", "100%"]
  );

  /* DESKTOP FLOW */
  const desktopX = useTransform(
    progress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section className="bg-white py-5">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-16 text-center text-4xl font-bold text-black">
          How Findora Verifies AI Answers
        </h2>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-14 lg:flex-row lg:justify-between lg:gap-8">

          {/* MOBILE FLOW */}
          <div className="absolute left-1/2 top-0 h-full w-[6px] -translate-x-1/2 rounded-full bg-[#eaba33]/20 lg:hidden">

            {/* STATIC LINE */}
            <div className="absolute inset-0 rounded-full bg-[#eaba33]" />

            {/* PULSE */}
            <motion.div
              style={{ top: mobileY }}
              className="absolute left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eaba33] blur-[2px]"
            />
          </div>

          {/* DESKTOP FLOW */}
          <div className="absolute left-0 top-1/2 hidden h-[6px] w-full -translate-y-1/2 rounded-full bg-[#eaba33]/20 lg:block">

            {/* STATIC LINE */}
            <div className="absolute inset-0 rounded-full bg-[#eaba33]" />

            {/* PULSE */}
            <motion.div
              style={{ left: desktopX }}
              className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eaba33] blur-[2px]"
            />
          </div>

          {/* CARDS */}

          <StepCard
            progress={progress}
            trigger={0.1}
            label="User Query"
            content="Where is Canada's capital city?"
          />

          <StepCard
            progress={progress}
            trigger={0.35}
            label="AI Raw Response"
            warning
            content={`"The capital of Canada is Toronto."`}
          />

          <StepCard
            progress={progress}
            trigger={0.6}
            label="Findora Verification"
            content="Fact checking • Reliability scoring 
          • Policy enforcement"
          />

          <StepCard
            progress={progress}
            trigger={0.85}
            label="Trusted Output"
            success
            content={`"The capital of Canada is Ottawa."`}
          />

        </div>
      </div>
    </section>
  );
}

type StepProps = {
  label: string;
  content: string;
  warning?: boolean;
  success?: boolean;
  progress: MotionValue<number>;
  trigger: number;
};

function StepCard({
  label,
  content,
  warning,
  success,
  progress,
  trigger,
}: StepProps) {

  const borderColor = useTransform(
    progress,
    (v: number) =>
      Math.abs(v - trigger) < 0.1
        ? FLOW_COLOR
        : "rgba(0,0,0,0.08)"
  );

  return (
    <motion.div
      style={{ borderColor }}
      className="relative z-10 w-full max-w-sm rounded-2xl border-2 bg-white px-6 py-6 shadow-sm transition-colors duration-300"
    >
      <p className="text-s font-bold uppercase text-black/60">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold leading-relaxed text-black">
        {content}
      </p>

      {warning && (
        <p className="mt-3 text-s font-semibold text-red-500">
          Potential factual error
        </p>
      )}

      {success && (
        <p className="mt-3 text-s font-semibold text-black/80">
          Verified • Reliability Score: 98%
        </p>
      )}
    </motion.div>
  );
}