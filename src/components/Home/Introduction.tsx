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
        pt-10 pb-6 md:pt-10 md:pb-18
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
      <div className="relative z-20 mx-auto max-w-6xl px-7 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
            mx-auto max-w-5xl
            text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem]
            font-semibold tracking-[-0.06em] leading-[0.9]
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
            mx-auto mt-10 max-w-3xl
            text-[1.3rem] md:text-[1.8rem]
            font-medium
            text-black/70 dark:text-white/70
          "
        >
          Findora verifies AI outputs before they reach users, enabling trusted deployment across enterprise, government, and edge systems.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-10 flex flex-col items-center gap-6"
        >
          {/* SECONDARY */}
           
          
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
         

          {/* PRIMARY */}
         {/* <button
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="
              relative overflow-hidden rounded-full
              bg-black dark:bg-white
              px-8 py-3.5
              text-[15px] font-medium tracking-[-0.01em]
              text-white dark:text-black
              transition-all duration-300
            "
          >
            <span
              className="absolute inset-0 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.16)] dark:shadow-[0_12px_40px_rgba(255,255,255,0.08)]"
            />

            <span
              className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300"
              style={{
                opacity: hovered ? 1 : 0,
                background: `radial-gradient(
                  140px circle at ${position.x}px ${position.y}px,
                  rgba(255,255,255,0.25),
                  rgba(255,255,255,0.10) 28%,
                  rgba(255,255,255,0.04) 48%,
                  transparent 72%
                )`,
                filter: "blur(14px)",
              }}
            />

            <span className="relative z-10 text-[1.3rem]">Book Demo</span>
          </button>*/}
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
        {/* YELLOW */}
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

        {/* BLUE */}
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

        {/* MAGENTA */}
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