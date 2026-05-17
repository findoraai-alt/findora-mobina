"use client";

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

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function DeploymentSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[12%] top-[18%] h-56 w-56 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: "#008f7a" }}
        />
        <div
          className="absolute right-[10%] top-[10%] h-64 w-64 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: "#7332a1" }}
        />
        <div
          className="absolute left-[45%] bottom-[5%] h-72 w-72 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: "#0b87b6" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
            Deployment
          </p>

          <h2 className="max-w-5xl text-3xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
            Built for{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #008f7a 0%, #0b87b6 25%, #7332a1 50%, #c31069 75%, #c67f48 100%)",
              }}
            >
              Enterprise
            </span>
            , Government, and Edge AI
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-500 sm:text-base">
            Deploy across cloud, local, on-device, or air-gapped environments
            with no retraining required.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {deployments.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_20px_60px_-24px_rgba(0,0,0,0.18)]"
            >
              {/* subtle gradient overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.10]"
                style={{
                  background: `linear-gradient(135deg, ${item.color} 0%, transparent 70%)`,
                }}
              />

              {/* top accent line */}
              <div
                className="absolute left-5 top-0 h-[2px] w-10 transition-all duration-500 group-hover:w-16"
                style={{ backgroundColor: item.color }}
              />

              {/* corner glow */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                style={{ backgroundColor: item.color }}
              />

              <div className="relative z-10 flex min-h-[150px] flex-col justify-between">
                <div>
                  <div
                    className="mb-4 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />

                  <h3 className="max-w-[14ch] text-lg font-semibold tracking-[-0.03em] text-neutral-950">
                    {item.title}
                  </h3>
                </div>

                {/* Hidden by default, visible on hover */}
                <div className="mt-5 overflow-hidden">
                  <p className="translate-y-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 text-sm leading-6 text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}