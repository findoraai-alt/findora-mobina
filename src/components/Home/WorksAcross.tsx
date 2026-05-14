"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "AI Input",
    desc: "The model produces an output that enters the trust pipeline.",
  },
  {
    title: "Verification Layer",
    desc: "Fact-checking and validation mechanisms activate.",
  },
  {
    title: "Source Cross‑Check",
    desc: "Sources are compared, ranked, and measured.",
  },
  {
    title: "Trust Score",
    desc: "A confidence and credibility score is calculated.",
  },
  {
    title: "Trusted Output",
    desc: "The final refined and verified answer is delivered.",
  },
];

export default function WorksTimeline() {
  return (
    <section className="py-10 md:py-20 bg-white dark:bg-[#202938] transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
            How Findora Works
          </h2>
          <p className="mt-4 text-gray-600 dark:text-white/50 text-sm md:text-base leading-relaxed">
            A transparent pipeline that turns raw AI output into trusted information.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-10">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-gray-200 dark:bg-white/10 rounded-full"></div>

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6"
              >
                {/* Step Circle */}
                <div className="absolute -left-[2.5rem] flex items-center justify-center">
                  <div
                    className="
                      w-6 h-6 rounded-full border-[3px]
                      transition-all duration-300
                      border-indigo-500
                      bg-white dark:bg-[#202938]
                    "
                  ></div>
                </div>

                {/* Content Card */}
                <div
                  className="
                    p-5 rounded-xl border
                    bg-white dark:bg-white/[0.03]
                    border-black/80 dark:border-white/10
                    backdrop-blur-xl shadow-sm

                    hover:bg-indigo-50
                    dark:hover:bg-white/[0.06]
                    transition-all duration-300 cursor-default
                  "
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-white/50 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
