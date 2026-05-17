import React from "react";


import { motion } from "framer-motion";

const differentiationData = {
  traditional: [
    "Block prompts",
    "Rule-based moderation",
    "Limited verification",
    "Cloud dependent"
  ],
  findora: [
    "Verifies outputs",
    "Reliability scoring",
    "Post-inference architecture",
    "Local and edge-ready",
    "Model-agnostic"
  ],
  statement: "Findora verifies what AI says before it reaches the user."
};

const Differentiation = () => {
  return (
    <section
      aria-labelledby="differentiation-headline"
      className="w-full max-w-7xl mx-auto px-6 py-20 bg-white text-gray-900"
    >
      <h2
        id="differentiation-headline"
        className="text-4xl font-extrabold mb-10 tracking-tight leading-tight"
        style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
      >
        Why Guardrails Are Not Enough
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 mb-14">
        {/* Traditional Systems */}
        <div>
          <h3 className="text-xl font-semibold mb-6 border-b border-gray-300 pb-2">
            Traditional Systems
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            {differentiationData.traditional.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Findora */}
        <div>
          <h3 className="text-xl font-semibold mb-6 border-b border-gray-300 pb-2 text-gradient">
            Findora
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            {differentiationData.findora.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-lg font-semibold text-gray-800 max-w-3xl mx-auto text-center select-none">
        {differentiationData.statement}
      </p>

      
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Differentiation;
