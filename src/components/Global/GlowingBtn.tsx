"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export const GlowingBtn = () => {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative">
      {/* Custom Cursor */}
      <motion.div
        animate={controls}
        className="fixed top-0 left-0 z-50 pointer-events-none"
      >
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="p-1 lg:px-3 lg:py-1 bg-black text-white dark:bg-white dark:text-black text-xs font-semibold rounded-md shadow-lg"
          >
            Coming Soon
          </motion.div>
        )}
      </motion.div>

      {/* Button */}

      <button
        className="text-white font-medium px-3 py-2 cursor-not-allowed rounded-md text-sm lg:text-base overflow-hidden relative transition-transform lg:hover:scale-105 lg:active:scale-95"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) =>
          controls.start({ x: e.clientX + 10, y: e.clientY + 10 })
        }
      >
        <span className="relative z-10">Try findora</span>
        <motion.div
          initial={{ left: 0 }}
          animate={{ left: "-300%" }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 4,
            ease: "linear",
          }}
          className="bg-[linear-gradient(to_right,#8f14e6,#e614dc,#e61453,#e68414,#e6e614)] absolute z-0 inset-0 w-[400%]"
        ></motion.div>
      </button>
      <div />
    </div>
  );
};
