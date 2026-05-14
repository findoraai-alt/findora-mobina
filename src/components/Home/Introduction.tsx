"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Introduction() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    // فقط موبایل
    if (window.innerWidth < 768) {
      const timer = setTimeout(() => {
        setCollapsed(true);
      }, 5500); 

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#FAFBFC] py-16 md:py-28">

      {/* BACKGROUND */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <img
          src="/Images/Introduction.jpg"
          alt="AI Infrastructure"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-white/55" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-3xl
            font-semibold
            leading-tight
            tracking-tight
            text-black
            sm:text-4xl
            md:text-6xl
          "
        >
          Trusted AI Infrastructure
          <br />
          for Enterprise & Government
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            mx-auto
            mt-5
            max-w-xl
            text-sm
            leading-relaxed
            text-black/70
            sm:text-base
            md:text-lg
          "
        >
          Verify AI outputs before they reach users with hallucination
          detection, fact-checking, governance, and private deployment.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 flex justify-center"
        >
          <motion.button
            onHoverStart={() => setCollapsed(false)}
            onHoverEnd={() => {
              if (window.innerWidth < 768) {
                setCollapsed(true);
              }
            }}
            animate={{
              width: collapsed ? 54 : 290,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              h-[54px]
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-black
              bg-black
              text-white
              transition-colors
              duration-300
              hover:bg-transparent
              hover:text-black
            "
          >

            {/* TEXT */}
            <motion.div
              animate={{
                opacity: collapsed ? 0 : 1,
                x: collapsed ? -8 : 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                absolute
                flex
                items-center
                gap-2
                text-[11px]
                sm:text-xs
                font-medium
                tracking-wide
                whitespace-nowrap
              "
            >
              <span>LIVE PUBLIC AI SEARCH DEMONSTRATION</span>

              <ArrowUpRight
                size={18}
                strokeWidth={2.2}
              />
            </motion.div>

            {/* COLLAPSED ICON */}
            <motion.div
              animate={{
                opacity: collapsed ? 1 : 0,
                scale: collapsed ? 1 : 0.7,
              }}
              transition={{
                duration: 0.35,
              }}
              className="flex items-center justify-center"
            >
              <ArrowUpRight
                size={20}
                strokeWidth={2.4}
              />
            </motion.div>

          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
