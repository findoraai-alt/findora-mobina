"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Variants } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);

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
    ["9999px 0px 0px 9999px", "9999px 9999px 9999px 9999px"]
  );

  const [loaded, setLoaded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    const check = () => setIsDesktop(window.innerWidth >= 768);

    check();
    window.addEventListener("resize", check);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", check);
    };
  }, []);

  const titleContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isDesktop ? 0.55 : 0.45,
      },
    },
  };

  const titleItem: Variants = {
    hidden: {
      opacity: 0,
      y: 160,
      scale: 0.88,
      filter: "blur(18px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: isDesktop ? 2.6 : 2.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="
        relative overflow-hidden
        bg-white dark:bg-[#111828]
        pt-6 pb-4 md:pt-6 md:pb-6
      "
    >
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.03),transparent_45%)]
          dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_45%)]
        "
      />

      <div className="relative z-20 mx-auto max-w-6xl px-7 text-center mt-6">
        <motion.h1
          variants={titleContainer}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          className="
            mx-auto max-w-5xl
            text-5xl sm:text-6xl md:text-[4rem] lg:text-[5rem]
            font-semibold tracking-[-0.06em] leading-[1]
            text-black dark:text-white
          "
        >
          <motion.span
            variants={titleItem}
            className="inline-block mr-3"
          >
            Trusted
          </motion.span>

          <motion.span variants={titleItem} className="inline-block">
            AI
          </motion.span>

          <br />

          <motion.span variants={titleItem} className="inline-block">
            Infrastructure
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.94,
            filter: "blur(18px)",
          }}
          animate={
            loaded
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }
              : {}
          }
          transition={{
            delay: isDesktop ? 2.8 : 2.2,
            duration: isDesktop ? 2.4 : 2,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="
            mx-auto mt-10 max-w-4xl
            text-[1.4rem] md:text-[1.8rem]
            font-semibold leading-[1.9rem]
            md:leading-[2.2rem]
            text-black/85 dark:text-white/85
          "
        >
          Findora provides trusted AI infrastructure for reliable deployment
          across enterprise, government, and edge systems.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.86,
            filter: "blur(18px)",
          }}
          animate={
            loaded
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }
              : {}
          }
          transition={{
            delay: isDesktop ? 3.6 : 3.4,
            duration: isDesktop ? 2.6 : 2.2,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="mt-10 flex flex-col items-center gap-2"
        >
          <motion.a
            href="https://search.findora.ai/"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="
              inline-flex items-center gap-2
              font-semibold group
              rounded-[15px] border-[2px]
              border-black/20 dark:border-white/10
              bg-black dark:bg-white/5
              px-7 py-3.5
              text-[1.3rem]
              tracking-[-0.01em]
              text-white
              backdrop-blur-md
              transition-all duration-300
              hover:bg-white hover:text-black
              dark:hover:bg-white dark:hover:text-black
            "
          >
            Try Findora Search
            <ArrowUpRight size={20} />
          </motion.a>
        </motion.div>
      </div>

      <div className="pointer-events-none relative z-10 mt-5 md:mt-2 flex flex-col items-end gap-3">
        <motion.div
          style={{ x: yellowX, y: yellowY, borderRadius }}
          className="relative h-[30px] w-36 md:w-44 lg:w-52 bg-[#eaba33]/90"
        />

        <motion.div
          style={{ x: blueX, y: blueY, borderRadius }}
          className="relative h-[30px] w-64 md:w-80 lg:w-[26rem] bg-[#0b87b6]/90"
        />

        <motion.div
          style={{ x: pinkX, y: pinkY, borderRadius }}
          className="relative h-[30px] w-48 md:w-64 lg:w-80 bg-[#c31069]/90"
        />
      </div>

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