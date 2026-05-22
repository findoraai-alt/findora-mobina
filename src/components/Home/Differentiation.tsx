"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const data = {
  traditional: [
    "Block prompts",
    "Rule-based moderation",
    "Limited verification",
    "Cloud dependent",
  ],
  findora: [
    "Verifies outputs",
    "Reliability scoring",
    "Output Verification",
    "Local and edge-ready",
    "Model-agnostic",
  ],
  statement: "Findora verifies what AI says before it reaches the user.",
};

const Differentiation = () => {
  const maxLen = Math.max(
    data.traditional.length,
    data.findora.length
  );

  return (
    <section className="w-full bg-white dark:bg-[#111828] text-gray-900 dark:text-gray-100 py-10 px-4 md:px-20">
      
      {/* HEADER */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center md:text-left mb-16 tracking-tight"
      >
        Why Guardrails Are Not Enough
      </motion.h2>

      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-2 gap-28">
        
        {/* Traditional */}
        <div className="space-y-6 text-left">
          <h3 className="text-xl uppercase tracking-widest text-[#c31069] font-bold">
            Traditional System
          </h3>

          {data.traditional.map((item, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <X className="text-[#c31069] mt-1 shrink-0" size={23} />
              <p className="text-[1.3rem] text-gray-600 dark:text-gray-300 font-semibold">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Findora */}
        <div className="space-y-6 text-left">
          <h3 className="text-2xl uppercase tracking-widest text-[#008f7a] font-bold">
            Findora
          </h3>

          {data.findora.map((item, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <Check className="text-[#008f7a] mt-1 shrink-0" size={23} />
              <p className="text-[1.3rem] font-semibold text-gray-900 dark:text-gray-100">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
          
          {/* HEADER */}
          <div className="grid grid-cols-2 bg-gray-50 dark:bg-gray-800 uppercase tracking-wider font-bold">
            <div className="p-3 border-r border-gray-200 dark:border-gray-700 text-[#c31069] text-[1.3rem]">
              Traditional
            </div>
            <div className="p-3 text-[#008f7a] text-[1.3rem]">
              Findora
            </div>
          </div>

          {/* ROWS */}
          {Array.from({ length: maxLen }).map((_, idx) => (
            <div
              key={idx}
              className="grid grid-cols-2 border-t border-gray-100 dark:border-gray-700"
            >
              {/* Traditional */}
              <div className="p-4 flex gap-2 items-start border-r border-gray-100 dark:border-gray-700">
                {data.traditional[idx] ? (
                  <>
                    <X className="text-[#c31069] mt-1 shrink-0" size={23} />
                    <span className="text-[1.3rem] text-gray-500 dark:text-gray-300 font-semibold">
                      {data.traditional[idx]}
                    </span>
                  </>
                ) : (
                  <span className="text-[1.3rem] text-gray-300 dark:text-gray-600">
                    —
                  </span>
                )}
              </div>

              {/* Findora */}
              <div className="p-4 flex gap-2 items-start">
                {data.findora[idx] ? (
                  <>
                    <Check className="text-[#008f7a] mt-1 shrink-0" size={23} />
                    <span className="text-[1.3rem] font-semibold text-gray-900 dark:text-gray-100">
                      {data.findora[idx]}
                    </span>
                  </>
                ) : (
                  <span className="text-[1.3rem] text-gray-300 dark:text-gray-600">
                    —
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STATEMENT */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 text-center md:text-left"
      >
        <p className="text-[1.5rem] md:text-2xl font-semibold max-w-2xl md:mx-0 mx-auto">
          <span className="text-black/80 dark:text-white/90">
            {data.statement}
          </span>
        </p>
      </motion.div>
    </section>
  );
};

export default Differentiation;