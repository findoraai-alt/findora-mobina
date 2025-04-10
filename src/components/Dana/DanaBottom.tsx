"use client";
import React from "react";
import { motion } from "framer-motion";
const DanaBottom = () => {
  return (
    <div className=" px-4 md:px-8 py-20 md:py-24">
      <div className=" overflow-hidden">
        <motion.p
          initial={{ y: "100%" }}
          whileInView={{
            y: 0,
            transition: {
              duration: 0.75,
              ease: [0.33, 1, 0.68, 1],
              delay: 0.075,
            },
          }}
          viewport={{ once: true }}
          className=" lg:text-2xl font-medium"
        >
          Dana is dedicated to supporting your well-being with personalized
          tools for emotional health, cognitive care, and daily routines.
          Whether {"you're"} managing stress, staying on top of tasks, or
          seeking medical guidance, Dana offers everything you need to stay
          connected, organized, and empowered. Designed for people of all ages,
          Dana is here to help you thrive every day with the care and support
          you deserve.
        </motion.p>
      </div>
    </div>
  );
};

export default DanaBottom;
