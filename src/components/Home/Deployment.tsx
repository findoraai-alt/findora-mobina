"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const deployments = [
  {
    title: "Enterprise AI",
    description:
      "Lorem ipsum dolor sit amet, enterprise AI infrastructure verification and reliability scoring for production systems.",
    color: "#008f7a",
  },
  {
    title: "Government Systems",
    description:
      "Lorem ipsum dolor sit amet, secure AI verification pipelines designed for regulated and public sector environments.",
    color: "#eaba33",
  },
  {
    title: "AI PCs & OEM Deployment",
    description:
      "Lorem ipsum dolor sit amet, on-device verification architecture embedded directly into AI-native hardware.",
    color: "#0b87b6",
  },
  {
    title: "Edge AI",
    description:
      "Lorem ipsum dolor sit amet, distributed verification running locally across edge and low-latency systems.",
    color: "#7332a1",
  },
  {
    title: "Multimodal AI",
    description:
      "Lorem ipsum dolor sit amet, verifying text, vision and multimodal outputs across complex AI pipelines.",
    color: "#c31069",
  },
  {
    title: "Air-Gapped Deployment",
    description:
      "Lorem ipsum dolor sit amet, trusted verification layers for highly secure isolated environments.",
    color: "#c67f48",
  },
];

export default function DeploymentSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-white py-10 lg:py-28">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[15%] h-56 w-56 rounded-full blur-3xl opacity-10 bg-[#008f7a]" />
        <div className="absolute right-[12%] top-[10%] h-64 w-64 rounded-full blur-3xl opacity-10 bg-[#7332a1]" />
        <div className="absolute left-[45%] bottom-[0%] h-72 w-72 rounded-full blur-3xl opacity-10 bg-[#0b87b6]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* HEADER */}
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-950">
            Built for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008f7a] via-[#0b87b6] to-[#7332a1]">
              Enterprise
            </span>
            , Government, and Edge AI
          </h2>

          <p className="mt-5 max-w-2xl text-lg sm:text-xl text-black/70 font-medium">
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
                layout
                onClick={() => setActive(isActive ? null : i)}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  isActive ? "min-h-[190px]" : "min-h-[100px]"
                }`}
              >
                {/* TOP BAR */}
                <div className="absolute left-0 top-0 h-[2px] w-full bg-black/5">
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
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION (reveal on active) */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      height: isActive ? "auto" : 0,
                    }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-m sm:text-[15px] leading-6 text-black/80 font-semibold">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}