"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const ref = useRef(null);

  const [isDesktop, setIsDesktop] = useState(false);

  // ✅ Detect desktop without extra library
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = () => setIsDesktop(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yellowX = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const blueX = useTransform(scrollYProgress, [0, 1], [0, -420]);
  const pinkX = useTransform(scrollYProgress, [0, 1], [0, -580]);

  const yellowY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const blueY = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const pinkY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.08],
    ["9999px 0 0 9999px", "9999px"]
  );

  // ✅ Neon button state
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white pt-20 pb-16 md:pt-24 md:pb-20"
    >
      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-6xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.92] text-black"
        >
          Trusted AI Infrastructure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto mt-8 max-w-3xl text-lg md:text-xl text-black/65"
        >
          Findora verifies AI outputs before they reach users, enabling trusted
          deployment across enterprise, government, and edge systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          {/* ✅ Neon Demo Button */}
          <button
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative overflow-hidden rounded-full bg-black px-8 py-3.5 text-lg font-semibold text-white transition duration-300"
          >
            <span className="absolute inset-0 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.18)]" />

            <span
              className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300"
              style={{
                opacity: hovered ? 1 : 0,
                background: `radial-gradient(
                  140px circle at ${position.x}px ${position.y}px,
                  rgba(255,255,255,0.35),
                  rgba(255,255,255,0.18) 25%,
                  rgba(255,255,255,0.08) 45%,
                  transparent 70%
                )`,
                filter: "blur(10px)",
              }}
            />

            <span className="relative z-10">Book Demo</span>
          </button>

          <button className="flex items-center gap-2 rounded-md border border-black/20 px-7 py-3 text-lg font-medium text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white">
            Try Findora Search
            <ArrowUpRight size={18} />
          </button>
        </motion.div>
      </div>

      {/* ✅ SHAPES */}
      <div
        className="
        pointer-events-none
        relative
        mt-12
        flex flex-col items-end gap-2
        pr-4
        z-10

        lg:absolute
        lg:right-0
        lg:top-1/2
        lg:-translate-y-1/2
        lg:mt-0
        lg:z-0
        "
      >
        <motion.div
          style={{
            x: isDesktop ? 0 : yellowX,
            y: isDesktop ? 0 : yellowY,
            borderRadius,
          }}
          className="origin-right h-10 w-32 md:h-12 md:w-40 bg-[#DDBB00]"
        />

        <motion.div
          style={{
            x: isDesktop ? 0 : blueX,
            y: isDesktop ? 0 : blueY,
            borderRadius,
          }}
          className="origin-right h-10 w-56 md:h-12 md:w-72 bg-[#0078D4]"
        />

        <motion.div
          style={{
            x: isDesktop ? 0 : pinkX,
            y: isDesktop ? 0 : pinkY,
            borderRadius,
          }}
          className="origin-right h-10 w-44 md:h-12 md:w-60 bg-[#D6006C]"
        />
      </div>
    </section>
  );
}
