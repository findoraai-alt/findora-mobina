"use client";
import React from "react";
import { motion } from "framer-motion";

const ArtaText = () => {
  const text =
    "ARTA detects and protects against deepfakes in video, audio, image, and text with unmatched speed and accuracy.";
  return (
    <div className="bg-[#f0f0fc] dark:bg-[#111828]">
      <div className=" px-4 md:px-8 py-20 md:py-24 max-w-7xl mx-auto">
        <div>
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.01,
                delay: index * 0.01,
                ease: "easeInOut",
              }}
              className=" text-2xl lg:text-4xl font-medium"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtaText;
