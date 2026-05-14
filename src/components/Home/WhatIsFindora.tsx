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
    <section className="bg-white pt-36 pb-28">
      <motion.div
        className="mx-auto max-w-6xl px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Title (Typing) */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold text-black"
            variants={{
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

          {/* Paragraph */}
          <motion.p
            className="mt-4 text-black/60 leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
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
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                delayChildren: title.length * 0.05 + 0.6,
                staggerChildren: 0.15,
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
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.08,
                  y: -16,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                animate={{
                  opacity: hovered === null || isHovered ? 1 : 0.55,
                }}
                className="
                  relative rounded-3xl
                  border border-black/80
                  bg-transparent
                  p-7
                  cursor-pointer
                "
              >
                <Icon
                  size={32}
                  strokeWidth={1.6}
                  style={{ color: feature.color }}
                />

                <h3
                  className="mt-5 text-lg font-semibold"
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-black/80 leading-relaxed">
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