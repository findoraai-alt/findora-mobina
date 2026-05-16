"use client";

import { motion } from "framer-motion";

const labels = [
  {
    text: "Verified",
    color: "#008f7a",
  },
  {
    text: "Reliability Score",
    color: "#eaba33",
  },
  {
    text: "Policy Enforced",
    color: "#0b87b6",
  },
  {
    text: "Low Hallucination Risk",
    color: "#7332a1",
  },
];

export default function FindoraDiagram() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-black sm:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_0%,rgba(255,255,255,1)_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,rgba(0,0,0,1)_70%)]" />

      {/* Ambient Blur */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/5 blur-3xl dark:bg-white/5" />

      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-4 sm:px-6">
        <div className="relative flex flex-col items-center">
          <PipelineNode title="User Query" />

          <Beam />

          <PipelineNode title="AI Model" />

          <Beam />

          {/* Verification Layer */}
          <div className="relative flex flex-col items-center py-16">
            {/* Floating Labels */}

            <FloatingLabel
              text={labels[0].text}
              color={labels[0].color}
              className="
                left-2 top-0
                sm:-left-44
              "
            />

            <FloatingLabel
              text={labels[1].text}
              color={labels[1].color}
              className="
                right-2 top-14
                sm:-right-52
              "
            />

            <FloatingLabel
              text={labels[2].text}
              color={labels[2].color}
              className="
                left-3 bottom-7
                sm:-left-56
                sm:bottom-10
              "
            />

            {/* 👇 فقط این یکی پایین‌تر در موبایل */}
            <FloatingLabel
              text={labels[3].text}
              color={labels[3].color}
              className="
                right-2 bottom-0
                sm:-right-48

                translate-y-2
                sm:translate-y-0
              "
            />

            {/* Orb */}
            <motion.div
              animate={{
                y: [-8, 8],
                boxShadow: [
                  "0 0 20px rgba(0,0,0,0.08)",
                  "0 0 40px rgba(0,0,0,0.14)",
                  "0 0 20px rgba(0,0,0,0.08)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="relative flex h-32 w-32 items-center justify-center rounded-full sm:h-40 sm:w-40"
            >
              <div className="absolute inset-0 rounded-full bg-black/10 blur-3xl dark:bg-white/10" />

              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-black sm:h-32 sm:w-32">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-3 rounded-full border border-black/20 dark:border-white/20"
                />

                <div className="absolute inset-6 rounded-full border border-black/10 bg-gradient-to-br from-white to-black/5 dark:from-neutral-900 dark:to-white/5" />

                <div className="relative z-10 h-8 w-8 rounded-full bg-black shadow-[0_0_25px_rgba(0,0,0,0.25)] dark:bg-white sm:h-10 sm:w-10" />
              </div>
            </motion.div>

            <motion.h3
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="
                mt-8 text-center text-2xl font-bold tracking-tight
                bg-gradient-to-r from-black via-neutral-700 to-black
                dark:from-white dark:via-neutral-300 dark:to-white
                bg-clip-text text-transparent
                sm:text-3xl
              "
            >
              Findora Verification Layer
            </motion.h3>
          </div>

          <Beam />

          <PipelineNode title="Trusted Output" />
        </div>
      </div>
    </section>
  );
}

function PipelineNode({ title }: { title: string }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} className="flex justify-center">
      <div className="rounded-2xl border border-black/5 bg-white/80 px-5 py-4 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:px-8">
        <p className="text-base font-semibold text-black/80 dark:text-white/90 sm:text-lg">
          {title}
        </p>
      </div>
    </motion.div>
  );
}

function Beam() {
  return (
    <div className="relative flex h-20 w-[2px] items-center justify-center overflow-hidden sm:h-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-transparent dark:via-white/60" />

      <motion.div
        animate={{ y: ["-120%", "120%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-12 w-3 rounded-full bg-black blur-xl dark:bg-white"
      />
    </div>
  );
}

function FloatingLabel({
  text,
  color,
  className,
}: {
  text: string;
  color: string;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [-5, 5] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
      }}
      className={`absolute z-20 ${className}`}
    >
      <div
        className="
          rounded-full px-4 py-2 shadow-xl
          sm:px-6 sm:py-3
        "
        style={{
          backgroundColor: color, // ✅ always colored background
          boxShadow: `0 12px 30px ${color}35`,
        }}
      >
        <p
          className="
            whitespace-nowrap font-extrabold tracking-tight
            text-sm text-white
            sm:text-base md:text-lg
          "
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
}