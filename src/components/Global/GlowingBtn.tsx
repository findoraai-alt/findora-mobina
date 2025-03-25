"use client";
import { motion } from "framer-motion";

export const GlowingBtn = () => {
  return (
    <div className=" relative group">
      <button className="text-white font-medium px-3 py-2 cursor-not-allowed rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95">
        <span className="relative z-10">Try Findora</span>
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
      <span className=" hidden group-hover:block absolute top-12 left-4 bg-black text-white dark:bg-white dark:text-black text-center w-fit text-xs font-bold rounded-md p-1">
        coming soon
      </span>
    </div>
  );
};
