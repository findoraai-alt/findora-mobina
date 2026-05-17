"use client";

import { motion } from "framer-motion";
import {
  SearchCheck,
  Scale,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

const checks = [
  {
    title: "Fact Verification",
    icon: SearchCheck,
    color: "#0b87b6",
  },
  {
    title: "Reliability Analysis",
    icon: Scale,
    color: "#eaba33",
  },
  {
    title: "Policy Enforcement",
    icon: ShieldCheck,
    color: "#7332a1",
  },
  {
    title: "Hallucination Detection",
    icon: AlertTriangle,
    color: "#008f7a",
  },
];

export default function FindoraDiagram() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* TITLE */}
        <h2 className="text-center text-4xl font-bold tracking-tight text-black mb-14">
          How Findora Verifies AI Answers
        </h2>

        {/* PIPELINE */}
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:justify-between">

          {/* USER QUESTION */}
          <StepCard
            label="User Query"
            content="Where is Canada's capital city?"
          />

          <Arrow />

          {/* AI MODEL RESPONSE */}
          <StepCard
            label="AI Raw Response"
            warning
            content={`"The capital of Canada is Toronto."`}
          />

          <Arrow />

          {/* FINDORA ENGINE */}
          <div className="flex flex-col items-center rounded-3xl border border-[#008f7a]/30 bg-[#008f7a]/5 px-6 py-6 shadow-sm w-full max-w-sm">

            <p className="text-xs font-bold tracking-[0.25em] text-[#008f7a] uppercase">
              Findora Engine
            </p>

            <h3 className="text-xl font-bold text-black mt-2">
              Verification Layer
            </h3>

            <div className="grid grid-cols-2 gap-3 mt-5 w-full">
              {checks.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2"
                  >
                    <Icon
                      size={18}
                      strokeWidth={2.5}
                      style={{ color: item.color }}
                    />

                    <span className="text-sm font-semibold text-black">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4 text-xs font-semibold text-black/40"
            >
              Validating response...
            </motion.div>
          </div>

          <Arrow />

          {/* TRUSTED OUTPUT */}
          <StepCard
            label="Trusted Output"
            success
            content={`"The capital of Canada is Ottawa."`}
          />
        </div>

      </div>
    </section>
  );
}

function StepCard({
  label,
  content,
  warning,
  success,
}: {
  label: string;
  content: string;
  warning?: boolean;
  success?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`w-full max-w-sm rounded-2xl border px-5 py-5 shadow-sm
      ${warning ? "border-red-200 bg-red-50" : ""}
      ${success ? "border-[#008f7a]/30 bg-[#008f7a]/5" : ""}
      ${!warning && !success ? "border-black/10 bg-white" : ""}
      `}
    >
      <p
        className={`text-xs font-bold uppercase tracking-[0.2em]
        ${warning ? "text-red-500" : ""}
        ${success ? "text-[#008f7a]" : ""}
        ${!warning && !success ? "text-black/40" : ""}
        `}
      >
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold leading-relaxed text-black">
        {content}
      </p>

      {warning && (
        <p className="mt-3 text-xs font-semibold text-red-500">
          Potential factual error
        </p>
      )}

      {success && (
        <p className="mt-3 text-xs font-semibold text-black/50">
          Verified • Reliability Score: 98%
        </p>
      )}
    </motion.div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 1.4, repeat: Infinity }}
        className="text-black/40"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M5 12h14" />
          <path d="M13 5l7 7-7 7" />
        </svg>
      </motion.div>
    </div>
  );
}
