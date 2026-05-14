"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Brain,
  SearchCheck,
  Scale,
} from "lucide-react";

export default function WhatisFindora() {
  const title = "What Findora Does?";

  const features = [
    {
      title: "AI Verification",
      text: "Ensure every AI output is validated before reaching users.",
      icon: ShieldCheck,
      color: "#008f7a",
    },
    {
      title: "Hallucination Detection",
      text: "Detect unreliable or fabricated AI responses in real time.",
      icon: Brain,
      color: "#eaba33",
    },
    {
      title: "Source Validation",
      text: "Trace and confirm the underlying data behind AI answers.",
      icon: SearchCheck,
      color: "#0b87b6",
    },
    {
      title: "Governance & Control",
      text: "Monitor and enforce AI policies across systems.",
      icon: Scale,
      color: "#7332a1",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-white dark:bg-[#202938] pt-10 pb-19 transition-colors duration-500 overflow-hidden">
      <motion.div
        className="mx-auto max-w-6xl px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="
              text-4xl md:text-5xl
              font-semibold
              tracking-tight
              text-black dark:text-white
            "
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {title.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="
              mt-5
              text-base
              leading-relaxed
              text-black/80
              dark:text-white/60
            "
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: title.length * 0.05 + 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            Verification, validation, and governance for enterprise AI systems,
            designed for accuracy, transparency, and real trust.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: title.length * 0.05 + 0.6,
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isHovered = hovered === i;

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 24,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{
                  scale: 1.06,
                  y: -14,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                animate={{
                  opacity:
                    hovered === null || isHovered ? 1 : 0.45,
                }}
                className="
                  relative
                  rounded-3xl

                  p-8 md:p-9

                  border-2
                  border-black/60
                  dark:border-white/80

                  bg-transparent
                  dark:bg-white/90

                  backdrop-blur-md

                  cursor-pointer

                  transition-all
                  duration-300

                  hover:border-black/80
                  dark:hover:border-white

                  overflow-hidden
                "
              >
                {/* Subtle Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-3xl

                    opacity-0
                    hover:opacity-100

                    transition-opacity
                    duration-300

                    pointer-events-none

                    dark:bg-white/[0.03]
                  "
                />

                {/* Icon */}
                <div className="relative z-10">
                  <Icon
                    size={34}
                    strokeWidth={1.7}
                    style={{ color: feature.color }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    relative z-10
                    mt-6
                    text-lg
                    font-bold
                  "
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h3>

                {/* Text */}
                <p
                  className="
                    relative z-10
                    mt-3
                    text-sm
                    leading-relaxed

                    text-black/90
                    font-semibold
                    dark:text-black/90
                  "
                >
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
