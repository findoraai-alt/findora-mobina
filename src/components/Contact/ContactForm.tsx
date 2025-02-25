"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <div className="px-4 md:px-8 py-20 md:py-24 flex justify-center items-center">
      <div className=" flex flex-col gap-20 relative z-10">
        <div className=" text-center space-y-4">
          <h6 className=" text-4xl font-bold">Contact Us</h6>
          <p className=" text-lg">
            Please leave your information below. {"We‘ll"} reply as soon as
            possible.
          </p>
        </div>
        <div className=" flex flex-col gap-6">
          <div className=" flex flex-col lg:flex-row justify-between gap-6">
            <div className=" flex flex-col w-full gap-1">
              <span className=" self-start text-sm font-semibold">
                Your Name
              </span>
              <input
                type="text"
                name=""
                id=""
                className=" outline-none border-2 border-[#d7d7d9] dark:bg-[#111828] rounded-lg focus:border-[#5046e5] py-1 px-2"
              />
            </div>
            <div className=" flex flex-col w-full gap-1">
              <span className=" self-start text-sm font-semibold">
                Your E-mail
              </span>
              <input
                type="text"
                name=""
                id=""
                className=" outline-none border-2 border-[#d7d7d9] dark:bg-[#111828] rounded-lg focus:border-[#5046e5] py-1 px-2"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <span className=" self-start text-sm font-semibold">Message</span>
            <textarea
              required
              cols={30}
              rows={4}
              name=""
              id=""
              className=" w-full outline-none border-2 border-[#d7d7d9] dark:bg-[#111828] rounded-lg focus:border-[#5046e5] py-1 px-2"
            ></textarea>
          </div>
          <button className=" bg-[#5046e5] py-3 text-white rounded-lg font-semibold lg:hover:scale-105 transition-all duration-300 ease-in-out">
            {"Let's"} Talk
          </button>
        </div>
      </div>
      <motion.div
        animate={{ translateX: [5, 100] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className=" w-40 h-40 md:w-72 md:h-72 bg-gradient-to-b from-pink-500 to-purple-500 lg:blur-2xl absolute top-40 left-5 opacity-15 rounded-full"
      />
      <motion.div
        animate={{ translateY: [5, 100] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className=" w-32 h-32 md:w-64 md:h-64 bg-gradient-to-b from-pink-500 to-purple-500 lg:blur-2xl absolute top-[20%] right-[10%] opacity-15 rounded-full"
      />
    </div>
  );
};

export default ContactForm;
