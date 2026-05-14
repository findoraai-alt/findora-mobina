"use client";

import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section className="relative overflow-hidden bg-[#FAFBFC] py-32">

      {/* WIDE BACKGROUND IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-[1400px] max-w-none opacity-70">
          <img
            src="/Images/Introduction.jpg"
            alt="AI Infrastructure"
            className="w-full rounded-[40px] object-cover blur-[1px]"
          />

          {/* soft white overlay */}
          <div className="absolute inset-0 bg-white/55 rounded-[40px]" />
        </div>
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-semibold leading-tight text-black md:text-6xl"
        >
          Trusted AI Infrastructure
          <br />
          for Enterprise & Government
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/70"
        >
          Verify AI outputs before they reach users with hallucination
          detection, fact-checking, governance, and private deployment.
        </motion.p>

      </div>
    </section>
  );
}