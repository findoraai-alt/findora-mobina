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
    "Post-inference architecture",
    "Local and edge-ready",
    "Model-agnostic",
  ],
  statement: "Findora verifies what AI says before it reaches the user.",
};

const Differentiation = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-28 px-4 md:px-20">
      {/* HEADER */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight"
      >
        Why Guardrails Are Not Enough
      </motion.h2>

      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-2 gap-28">
        {/* Traditional */}
        <div className="space-y-6">
          <h3 className="text-sm uppercase tracking-widest text-[#c31069]">
            Traditional System
          </h3>

          {data.traditional.map((item, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <X className="text-[#c31069] mt-1" size={18} />
              <p className="text-lg text-gray-600 font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Findora */}
        <div className="space-y-6">
          <h3 className="text-sm uppercase tracking-widest text-[#008f7a]">
            Findora
          </h3>

          {data.findora.map((item, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <Check className="text-[#008f7a] mt-1" size={18} />
              <p className="text-lg font-semibold text-gray-900">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE (TRUE COMPARISON TABLE) */}
      <div className="md:hidden">
        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">

          {/* HEADER */}
          <div className="grid grid-cols-2 bg-gray-50 text-xs uppercase tracking-wider">
            <div className="p-3 border-r border-gray-200 text-[#c31069]">
              Traditional
            </div>
            <div className="p-3 text-[#008f7a]">
              Findora
            </div>
          </div>

          {/* ROWS */}
          {data.traditional.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-2 border-t border-gray-100"
            >
              {/* Traditional */}
              <div className="p-4 flex gap-2 items-start border-r border-gray-100">
                <X className="text-[#c31069] mt-1" size={14} />
                <span className="text-sm text-gray-500">
                  {item}
                </span>
              </div>

              {/* Findora */}
              <div className="p-4 flex gap-2 items-start">
                <Check className="text-[#008f7a] mt-1" size={14} />
                <span className="text-sm font-semibold text-gray-900">
                  {data.findora[idx]}
                </span>
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
        className="mt-20 text-center"
      >
        <p className="text-xl md:text-2xl font-semibold max-w-2xl mx-auto">
          <span className="text-[#0b87b6]">
            {data.statement}
          </span>
        </p>
      </motion.div>
    </section>
  );
};

export default Differentiation;