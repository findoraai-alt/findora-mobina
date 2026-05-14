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
      <div className="mx-auto max-w-6xl px-6">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-black">
            What Findora Does?
          </h2>

          <p className="mt-4 text-black/60 leading-relaxed">
            Verification, validation, and governance for enterprise AI systems,
            designed for accuracy, transparency, and real trust.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isHovered = hovered === i;

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                animate={{
                  scale: isHovered ? 1.08 : 1,
                  y: isHovered ? -16 : 0,
                  opacity: hovered === null || isHovered ? 1 : 0.55,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="
                  relative rounded-3xl
                  border border-black/80
                  bg-transparent
                  p-7 backdrop-blur-0
                  cursor-pointer
                  transition-all
                "
              >
                {/* Icon */}
                <Icon
                  size={32}
                  strokeWidth={1.6}
                  style={{ color: feature.color }}
                />

                {/* Title */}
                <h3
                  className="mt-5 text-lg font-semibold"
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h3>

                {/* Text */}
                <p className="mt-2 text-sm text-black/80 leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}