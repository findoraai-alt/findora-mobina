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
        relative overflow-hidden
        bg-white dark:bg-[#111828]
        pt-6 pb-6 md:pt-6 md:pb-18
      "
    >
      {/* ambient gradient */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.03),transparent_45%)]
          dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_45%)]
        "
      />

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-6xl px-7 text-center mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
            mx-auto max-w-5xl
            text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem]
            font-semibold tracking-[-0.06em] leading-[1]
            text-black dark:text-white
          "
        >
          Trusted AI Infrastructure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9 }}
          className="
            
            mx-auto mt-10 max-w-4xl
            text-[1.4rem] md:text-[1.8rem]
            font-semibold leading-[1.9rem]
            md:leading-[2.2rem]
            text-black/85 dark:text-white/85
          "
        >
          Findora ensures AI outputs are verified before reaching users, enabling reliable deployment across enterprise, government, and edge systems.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-14 flex flex-col items-center gap-2"
        >
          <motion.a
            href="https://search.findora.ai/"
            className="
              inline-flex
              items-center
              gap-2
              font-semibold
              group flex items-center gap-2
              rounded-[15px] border-[2px]
              border-black/20 dark:border-white/10
              bg-white/70 dark:bg-white/5
              px-7 py-3.5
              text-[1.3rem] font-medium tracking-[-0.01em]
              text-black/80 dark:text-white/80
              backdrop-blur-md
              transition-all duration-300
              hover:bg-black hover:text-white
              dark:hover:bg-white dark:hover:text-black
            "
          >
            Try Findora Search

            <span className="hover:text-black/90">
              <ArrowUpRight
                size={20}
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-[1px]
                  group-hover:translate-x-[1px]
                  dark:text-white
                  dark:group-hover:text-black
                "
              />
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* SIGNAL LINES */}
      <div
        className="
          pointer-events-none relative z-10 mt-10
          flex flex-col items-end gap-3
          lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2
        "
      >
        <motion.div
          style={{
            x: isDesktop ? 0 : yellowX,
            y: isDesktop ? 0 : yellowY,
            borderRadius,
          }}
          className="relative h-[30px] w-36 md:w-44 bg-[#eaba33]/90"
        >
          <div className="absolute inset-0 bg-[#eaba33] blur-[15px] opacity-20" />
        </motion.div>

        <motion.div
          style={{
            x: isDesktop ? 0 : blueX,
            y: isDesktop ? 0 : blueY,
            borderRadius,
          }}
          className="relative h-[30px] w-64 md:w-80 bg-[#0b87b6]/90"
        >
          <div className="absolute inset-0 bg-[#0b87b6] blur-[15px] opacity-20" />
        </motion.div>

        <motion.div
          style={{
            x: isDesktop ? 0 : pinkX,
            y: isDesktop ? 0 : pinkY,
            borderRadius,
          }}
          className="relative h-[30px] w-48 md:w-64 bg-[#c31069]/90"
        >
          <div className="absolute inset-0 bg-[#c31069] blur-[15px] opacity-20" />
        </motion.div>
      </div>

      {/* bottom fade */}
      <div
        className="
          pointer-events-none absolute bottom-0 left-0
          h-32 w-full
          bg-gradient-to-b from-transparent to-white
          dark:to-[#111828]
        "
      />
    </section>
  );
}