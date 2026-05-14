"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Step = {
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    title: "AI Input",
    desc: "Raw model outputs enter the Findora trust pipeline.",
  },
  {
    title: "Verification Layer",
    desc: "The system analyzes structure, logic, and reliability.",
  },
  {
    title: "Source Cross‑Check",
    desc: "Multiple trusted sources validate the generated output.",
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

const colors = [
  "#C31069",
  "#EABA33",
  "#008F7A",
  "#C44900",
  "#7332A1",
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
        { threshold: 0.6 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#202938]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>

            <div className="mb-20">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-black dark:text-white">
                How Findora Works?
              </h2>

              <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-white/50 max-w-xl">
                A transparent pipeline transforming AI into trusted intelligence.
              </p>
            </div>

            <div className="relative pl-10">

              {/* timeline base line */}
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
                        scaleX: passed ? 0.92 : 1,
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
                        dark:border-white/10
                        bg-white
                        dark:bg-white/[0.04]
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:border-black
                        dark:hover:border-white/20
                        "
                      >

                        <h3
                          className="text-lg md:text-xl font-bold"
                          style={{ color: colors[i % colors.length] }}
                        >
                          {step.title}
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-black/90 dark:text-white/70 font-medium">
                          {step.desc}
                        </p>

                      </div>
                    </motion.div>
                  );
                })}

              </div>

            </div>
          </div>

          {/* RIGHT SIDE STICKY */}
          <div className="relative">

            <div className="lg:sticky lg:top-32">

              <div className="relative rounded-[32px] overflow-hidden w-full h-[420px] md:h-[520px] shadow-2xl">

                <Image
                  src="/image.png"
                  alt="Findora"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

                  <h3 className="text-white text-2xl md:text-2xl font-semibold tracking-tight">
                    Experienced Varified AI
                  </h3>

                  {/* GLOSSY BUTTON */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="
                    relative
                    mt-8
                    px-10
                    py-4
                    rounded-full
                    bg-black
                    text-white
                    overflow-hidden
                    border border-white/10
                    backdrop-blur-xl
                    "
                  >

                    {/* moving light */}
                    <motion.span
                      animate={{ x: ["-120%", "120%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
                      absolute
                      inset-y-0
                      w-1/2
                      bg-gradient-to-r
                      from-transparent
                      via-white/40
                      to-transparent
                      blur-md
                      "
                    />

                    <span className="relative z-10">
                      Start
                    </span>

                  </motion.button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
