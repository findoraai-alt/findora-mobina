"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden  py-20 pb-40 md:py-30 md:pb-36">

      {/* Background */}
      <div className="absolute inset-0  from-white via-[#FAFBFC] to-[#F3F4F6]" />

      {/* Rectangles */}
      <div
        className="
        pointer-events-none
        absolute
        right-0
        bottom-10
        md:top-1/2
        md:bottom-auto
        z-0
        flex
        md:-translate-y-1/2
        flex-col
        items-end
        gap-4
        md:gap-6
      "
      >

        {/* Yellow */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 4,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
          className="
          origin-right
          h-8 w-20
          md:h-12 md:w-32
          rounded-l-full rounded-r-none
          bg-[#DDBB00]
        "
        />

        {/* Blue */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 4.2,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.8
          }}
          className="
          origin-right
          h-8 w-44
          md:h-12 md:w-72
          rounded-l-full rounded-r-none
          bg-[#0078D4]
        "
        />

        {/* Pink */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 4.4,
            ease: [0.22, 1, 0.36, 1],
            delay: 1.4
          }}
          className="
          origin-right
          h-8 w-36
          md:h-12 md:w-60
          rounded-l-full rounded-r-none
          bg-[#D6006C]
        "
        />

      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold tracking-tight text-black sm:text-5xl md:text-6xl dark:text-white"
        >
          Trusted AI Infrastructure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mx-auto mt-6 max-w-2xl text-base text-black/70 md:text-lg font-semibold dark:text-white"
        >
          Verification and governance layer for enterprise AI systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button className="flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800">
            Book Demo
          </button>

          <button className="flex items-center gap-2 rounded-full border border-black px-7 py-3 text-sm font-bold text-black transition hover:bg-black hover:text-white dark:text-white dark:border-white">
            Try Findora Search
            <ArrowUpRight size={16} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
