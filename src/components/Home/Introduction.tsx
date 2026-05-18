"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const ref = useRef(null);

  const [isDesktop, setIsDesktop] = useState(false);

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

  // smoother + slower motion
  const yellowX = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const blueX = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const pinkX = useTransform(scrollYProgress, [0, 1], [0, -460]);

  const yellowY = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const blueY = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const pinkY = useTransform(scrollYProgress, [0, 1], [0, 24]);

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.08],
    ["9999px 0 0 9999px", "9999px"]
  );

  // subtle neon interaction
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
      className="
        relative
        overflow-hidden
        bg-white
        pt-20
        pb-24
        md:pt-30
        md:pb-32
      "
    >
      {/* ambient gradient */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.03),transparent_45%)]
        "
      />

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-6xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
            mx-auto
            max-w-5xl
            text-5xl
            font-semibold
            tracking-[-0.06em]
            leading-[0.9]
            text-black

            sm:text-6xl
            md:text-7xl
            lg:text-[7.5rem]
          "
        >
          Trusted AI Infrastructure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9 }}
          className="
            mx-auto
            mt-10
            max-w-3xl
            text-[1.05rem]
            leading-[1.8]
            text-black/55
            font-medium

            md:text-[1.15rem]
          "
        >
          Findora verifies AI outputs before they reach users, enabling
          trusted deployment across enterprise, government, and edge systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="
            mt-14
            flex
            flex-col
            items-center
            gap-4

            sm:flex-row
            sm:justify-center
          "
        >
          {/* PRIMARY BUTTON */}
          <button
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="
              relative
              overflow-hidden
              rounded-full
              bg-black
              px-8
              py-3.5
              text-[15px]
              font-medium
              tracking-[-0.01em]
              text-white
              transition-all
              duration-300
            "
          >
            <span
              className="
                absolute
                inset-0
                rounded-full
                shadow-[0_12px_40px_rgba(0,0,0,0.16)]
              "
            />

            <span
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-full
                transition-opacity
                duration-300
              "
              style={{
                opacity: hovered ? 1 : 0,
                background: `radial-gradient(
                  140px circle at ${position.x}px ${position.y}px,
                  rgba(255,255,255,0.28),
                  rgba(255,255,255,0.12) 28%,
                  rgba(255,255,255,0.04) 48%,
                  transparent 72%
                )`,
                filter: "blur(14px)",
              }}
            />

            <span className="relative z-10">Book Demo</span>
          </button>

          {/* SECONDARY BUTTON */}
          <button
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              border
              border-black/10
              bg-white/70
              px-7
              py-3.5
              text-[15px]
              font-medium
              tracking-[-0.01em]
              text-black/80
              backdrop-blur-md
              transition-all
              duration-300

              hover:border-black/20
              hover:bg-black
              hover:text-white
            "
          >
            Try Findora Search

            <ArrowUpRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-[1px]
                group-hover:translate-x-[1px]
              "
            />
          </button>
        </motion.div>
      </div>

      {/* INFRASTRUCTURE SIGNAL LINES */}
      <div
        className="
          pointer-events-none
          relative
          z-10
          mt-20
          flex
          flex-col
          items-end
          gap-3
          pr-0

          lg:absolute
          lg:right-0
          lg:top-1/2
          lg:mt-0
          lg:-translate-y-1/2
        "
      >
        {/* YELLOW */}
        <motion.div
          style={{
            x: isDesktop ? 0 : yellowX,
            y: isDesktop ? 0 : yellowY,
            borderRadius,
          }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 24,
          }}
          className="
            relative
            h-[8px]
            w-36
            overflow-hidden
            bg-[#eaba33]/90

            md:w-44
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-[#eaba33]
              blur-[10px]
              opacity-60
            "
          />
        </motion.div>

        {/* BLUE */}
        <motion.div
          style={{
            x: isDesktop ? 0 : blueX,
            y: isDesktop ? 0 : blueY,
            borderRadius,
          }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 24,
          }}
          className="
            relative
            h-[8px]
            w-64
            overflow-hidden
            bg-[#0b87b6]/90

            md:w-80
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-[#0b87b6]
              blur-[12px]
              opacity-50
            "
          />
        </motion.div>

        {/* MAGENTA */}
        <motion.div
          style={{
            x: isDesktop ? 0 : pinkX,
            y: isDesktop ? 0 : pinkY,
            borderRadius,
          }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 24,
          }}
          className="
            relative
            h-[8px]
            w-48
            overflow-hidden
            bg-[#c31069]/90

            md:w-64
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-[#c31069]
              blur-[12px]
              opacity-50
            "
          />
        </motion.div>
      </div>

      {/* subtle bottom fade */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-32
          w-full
          bg-gradient-to-b
          from-transparent
          to-white
        "
      />
    </section>
  );
}