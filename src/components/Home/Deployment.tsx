"use client";
import { motion } from "framer-motion";

const markerWidths = [50, 50, 50, 50, 50, 50];

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
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function DeploymentSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-14">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[12%] top-[14%] h-44 w-44 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: "#008f7a" }}
        />
        <div
          className="absolute right-[10%] top-[8%] h-52 w-52 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: "#7332a1" }}
        />
        <div
          className="absolute left-[45%] bottom-[2%] h-60 w-60 rounded-full blur-3xl opacity-10"
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
         

          <h2 className="max-w-5xl text-3xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
            Built for&nbsp;
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

          <p className="mt-4 max-w-2xl text-[1.18rem] sm:text-[1.26rem] leading-8 font-semibold text-black">
            Deploy across cloud, local, on-device, or air-gapped environments
            with no retraining required.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {deployments.map((item, i) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white px-6 py-5 min-h-[160px] transition-all duration-500 hover:-translate-y-[2px] hover:border-neutral-300 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.12)]"
            >
              {/* top marker line */}
              <div className="absolute left-0 top-0 h-[2px] w-full bg-neutral-100 flex items-center">
                <div
                  className="h-full rounded-full transition-all duration-500 group-hover:w-full opacity-70"
                  style={{
                    width: `${markerWidths[i]}px`,
                    backgroundColor: item.color,
                  }}
                />
              </div>

              {/* Card content */}
              <div className="relative z-10 pt-2">
                {/* Title */}
                <h3 className="max-w-[18ch] text-xl font-semibold tracking-[-0.02em] text-neutral-900 sm:text-2xl">
                  {item.title}
                </h3>

                {/* Description */}
                <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="pt-3 text-[14px] leading-6 text-black font-medium opacity-0 translate-y-1 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
