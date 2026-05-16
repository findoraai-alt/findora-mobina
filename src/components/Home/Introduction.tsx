"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setIsScrolled(v > 0.05);
  });

  // حرکت مستطیل‌ها
  const yellowX = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const blueX = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const pinkX = useTransform(scrollYProgress, [0, 1], [0, -700]);

  const yellowY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const blueY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const pinkY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const shapeClass = isScrolled ? "rounded-full" : "rounded-l-full";

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-20 pb-32 md:py-30 md:pb-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Rectangles */}
      <div className="pointer-events-none absolute right-0 bottom-10 md:top-1/2 md:bottom-auto z-0 flex md:-translate-y-1/2 flex-col items-end gap-1 md:gap-2">

        {/* Yellow */}
        <motion.div
          style={{ x: yellowX, y: yellowY }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className={`origin-right h-8 w-20 md:h-12 md:w-32 ${shapeClass} bg-[#DDBB00]`}
        />

        {/* Blue */}
        <motion.div
          style={{ x: blueX, y: blueY }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className={`origin-right h-8 w-44 md:h-12 md:w-72 ${shapeClass} bg-[#0078D4]`}
        />

        {/* Pink */}
        <motion.div
          style={{ x: pinkX, y: pinkY }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className={`origin-right h-8 w-36 md:h-12 md:w-60 ${shapeClass} bg-[#D6006C]`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold tracking-tight text-black sm:text-5xl md:text-6xl"
        >
          Trusted AI Infrastructure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mx-auto mt-6 max-w-2xl text-base md:text-lg font-semibold text-black/70"
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

          <button className="flex items-center gap-2 rounded-full border border-black px-7 py-3 text-sm font-bold text-black transition hover:bg-black hover:text-white">
            Try Findora Search
            <ArrowUpRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}