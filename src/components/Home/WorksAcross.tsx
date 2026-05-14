"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Step = {
  title: string;
  desc: string;
};

const colors = [
  "#C31069",
  "#EABA33",
  "#008F7A",
  "#C44900",
  "#7332A1",
];

const steps: Step[] = [
  {
    title: "AI Input",
    desc: "Raw model output enters the trust pipeline.",
  },
  {
    title: "Verification Layer",
    desc: "Outputs are validated against trust criteria.",
  },
  {
    title: "Source Cross‑Check",
    desc: "Multiple sources are compared and verified.",
  },
  {
    title: "Trust Score",
    desc: "A transparent confidence score is calculated.",
  },
  {
    title: "Trusted Output",
    desc: "Users receive verified and refined AI responses.",
  },
];

export default function WorksTimeline() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          } else if (entry.boundingClientRect.top > 0) {
            setActiveIndex((prev) => Math.min(prev, index - 1));
          }
        },
        {
          threshold: 0.6,
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#202938] transition-colors">

      <div className="max-w-2xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-black dark:text-white">
            How Findora Works?
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-white/50">
            A transparent pipeline transforming AI into trusted intelligence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-10">

          {/* base line */}
          <div className="absolute left-0 top-0 w-[2px] h-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">

            {/* progress */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-black dark:bg-white"
              animate={{
                height:
                  activeIndex >= 0
                    ? `${((activeIndex + 1) / steps.length) * 100}%`
                    : "0%",
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>

          <div className="flex flex-col gap-14">

            {steps.map((step, i) => {
              const passed = i < activeIndex;

              return (
                <motion.div
                  key={i}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  animate={{
                    scaleX: passed ? 0.9 : 1,
                    opacity: passed ? 0.6 : 1,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="origin-left"
                >
                  <div
                    className="
                    p-6
                    rounded-2xl
                    border-2 border-black/60
                    dark: border-none
                    dark: hover:border-white/[0.04]
                    bg-white
                    dark:bg-white/80
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-black
                  "
                  >
                    <h3
                      className="text-lg md:text-xl font-bold"
                      style={{ color: colors[i % colors.length] }}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-black/90 dark:text-black/80 font-semibold">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
