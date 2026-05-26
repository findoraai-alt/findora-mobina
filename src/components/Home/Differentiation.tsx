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
    "Fact Checking",
    "Local and edge-ready",
    "Model-agnostic",
  ],
  statement: "Findora verifies what AI says before it reaches the user.",
};

const Differentiation = () => {
  const maxLen = Math.max(data.traditional.length, data.findora.length);

  return (
    <section className="w-full bg-white dark:bg-[#111828] text-gray-900 dark:text-gray-100 py-10 px-4 md:px-20 flex flex-col items-center">
      
      {/* HEADER */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight"
      >
        Why Guardrails Are Not Enough
      </motion.h2>

      {/* TABLE */}
      <div className="w-full flex justify-center">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm inline-block">
          
          {/* HEADER */}
          <div className="grid grid-cols-2 bg-gray-50 dark:bg-gray-800 uppercase tracking-wider font-bold">
            
            {/* Traditional */}
            <div className="px-4 py-3 md:px-8 md:py-5 border-r border-gray-200 dark:border-gray-700 text-[#c31069]">
              
              {/* MOBILE */}
              <span className="text-[1.1rem] md:hidden">
                Traditional
              </span>

              {/* DESKTOP */}
              <span className="hidden md:block text-[1.6rem] min-w-[340px] ">
                Traditional AI Systems
              </span>
            </div>

            {/* Findora */}
            <div className="px-4 py-3 md:px-8 md:py-5 text-[#008f7a]">
              
              {/* MOBILE */}
              <span className="text-[1.1rem] md:hidden">
                Findora
              </span>

              {/* DESKTOP */}
              <span className="hidden md:block text-[1.6rem] min-w-[340px]">
                Findora
              </span>
            </div>
          </div>

          {/* ROWS */}
          {Array.from({ length: maxLen }).map((_, idx) => (
            <div
              key={idx}
              className="grid grid-cols-2 border-t border-gray-100 dark:border-gray-700"
            >
              {/* Traditional */}
              <div className="px-4 py-3 md:px-8 md:py-5 flex gap-2 items-center border-r border-gray-100 dark:border-gray-700 min-h-[70px] md:min-h-[76px]">
                {data.traditional[idx] ? (
                  <>
                    <X
                      className="text-[#c31069] shrink-0"
                      size={20}
                    />

                    <span className="text-[1.1rem] md:text-[1.5rem] text-gray-500 dark:text-gray-300 font-semibold leading-snug">
                      {data.traditional[idx]}
                    </span>
                  </>
                ) : (
                  <span className="text-[1.1rem] md:text-[1.5rem] text-gray-300 dark:text-gray-600">
                    —
                  </span>
                )}
              </div>

              {/* Findora */}
              <div className="px-4 py-3 md:px-8 md:py-5 flex gap-2 items-center min-h-[70px] md:min-h-[76px]">
                {data.findora[idx] ? (
                  <>
                    <Check
                      className="text-[#008f7a] shrink-0"
                      size={20}
                    />

                    <span className="text-[1.1rem] md:text-[1.5rem] font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                      {data.findora[idx]}
                    </span>
                  </>
                ) : (
                  <span className="text-[1rem] md:text-[1.12rem] text-gray-300 dark:text-gray-600">
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
        className="mt-10 text-center"
      >
        <p className="text-[1.5rem] md:text-[1.9rem]font-semibold max-w-2xl mx-auto">
          <span className="text-black/80 dark:text-white/90">
            {data.statement}
          </span>
        </p>
      </motion.div>
    </section>
  );
};

export default Differentiation;