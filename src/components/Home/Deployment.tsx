"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const deployments = [
  {
    title: "Enterprise AI",
    tagline: "Trusted AI deployment for internal systems and workflows.",
    color: "#008f7a",
  },
  {
    title: "Government Systems",
    tagline: "Secure and sovereign AI verification infrastructure.",
    color: "#eaba33",
  },
  {
    title: "AI PCs & OEM Deployment",
    tagline: "Optimized for local and edge AI environments.",
    color: "#0b87b6",
  },
  {
    title: "Edge AI",
    tagline: "Low-latency verification for on-device AI systems.",
    color: "#7332a1",
  },
  {
    title: "Multimodal AI",
    tagline: "Unified verification across text, vision, and multimodal systems.",
    color: "#c31069",
  },
  {
    title: "Air-Gapped Deployment",
    tagline: "Fully isolated verification for high-security environments.",
    color: "#c67f48",
  },
];

export default function DeploymentSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#111828] py-5 lg:py-20">
      
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[15%] h-56 w-56 rounded-full blur-3xl opacity-10 dark:opacity-5 bg-[#008f7a]" />
        <div className="absolute right-[12%] top-[10%] h-64 w-64 rounded-full blur-3xl opacity-10 dark:opacity-5 bg-[#7332a1]" />
        <div className="absolute left-[45%] bottom-[0%] h-72 w-72 rounded-full blur-3xl opacity-10 dark:opacity-5 bg-[#0b87b6]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* HEADER */}
        <div className="max-w-4xl">
          <h2 className="text-[2rem] sm:text-[2rem] lg:text-[3.5rem] font-semibold tracking-tight text-neutral-950 dark:text-white">
            Built for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008f7a] via-[#0b87b6] to-[#7332a1]">
              Enterprise
            </span>
            , Government, and Edge AI
          </h2>

          <p className="mt-5 max-w-2xl text-[1.3rem] sm:text-[1.7rem] text-black/80 dark:text-white/80 font-medium">
            Deploy across cloud, local, on-device, or air-gapped environments
            with no retraining required.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deployments.map((item, i) => {
            const isActive = active === i;

            return (
              <motion.div
                key={item.title}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="
                  group relative cursor-pointer overflow-hidden
                  rounded-2xl border border-black/10 dark:border-white/10
                  bg-white/70 dark:bg-[#0f172a]/70
                  backdrop-blur-xl p-6 h-[170px]
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                "
              >
                {/* TOP BAR */}
                <div className="absolute left-0 top-0 h-[3px] w-full bg-black/5 dark:bg-white/10">
                  <div
                    className="h-full transition-all duration-500"
                    style={{
                      width: isActive ? "100%" : "45%",
                      backgroundColor: item.color,
                    }}
                  />
                </div>

                {/* GLOW */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: `radial-gradient(circle at top left, ${item.color}18, transparent 60%)`,
                  }}
                />

                {/* CONTENT */}
                <div className="relative z-10">
                  <h3 className="text-[1.4rem] sm:text-[1.5rem] font-bold tracking-tight text-black dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[1.3rem] sm:text-[1.4rem] leading-7 text-black/70 dark:text-white/70 font-semibold">
                    {item.tagline}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}