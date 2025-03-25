"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import findoraLogo from "@/../public/images/findora_logo_black.png";
import Image from "next/image";

const EntQCard = () => {
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycleKey((prev) => prev + 1);
    }, 6000); // Restart after the last animation (adjust based on total delay)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f0f0fc] dark:bg-[#111828]">
      <div className=" pt-20 md:pt-24">
        <div
          style={{ backgroundImage: "url(/images/enterbg.jpg)" }}
          className="w-full h-auto flex justify-center items-end pt-16 px-8 bg-cover bg-center"
        >
          <div className="bg-white/40 pt-4 px-4 rounded-t-2xl">
            <div className="bg-white select-none rounded-t-2xl w-[350px] md:w-[450px] h-auto p-4 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src={findoraLogo}
                  alt="findora logo"
                  width={45}
                  height={45}
                />
                <h6 className="text-lg text-black">findora</h6>
              </div>
              <hr />
              <div key={cycleKey} className="flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
                  className="flex gap-2 items-center"
                >
                  <img
                    src="/images/man.jpeg"
                    alt="person"
                    className="rounded-lg object-cover object-center"
                  />
                  <div className=" bg-purple-600 text-white h-auto w-full rounded-lg p-2 flex flex-col justify-center">
                    <span className="text-xs font-extralight">Alex</span>
                    <p className=" text-sm">What was our Q2 revenue?</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
                  className="flex gap-2 w-[60%] self-end"
                >
                  <div className="bg-[#f4f4f4] h-auto w-full rounded-lg p-2 flex flex-col justify-center text-black">
                    <span className="text-xs font-extralight">Findora</span>
                    <span className=" text-sm">{"Here's"} what I found</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}
                  className="flex gap-2 w-[60%] self-end"
                >
                  <div className="bg-[#f4f4f4] w-full h-auto rounded-lg p-2 flex flex-col justify-center text-black">
                    <span className="text-xs font-extralight">Findora</span>
                    <p className=" text-sm">
                      The company reported a revenue of $15.3M in Q2, reflecting
                      a 7% growth compared to Q1. For a detailed breakdown,
                      refer to the Q2 Financial Report.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 3, ease: "easeInOut" }}
                  className="flex gap-2 w-[60%] self-end"
                >
                  <div className="bg-[#f4f4f4] h-auto w-full rounded-lg p-2 flex flex-col gap-2 justify-center">
                    <div className="flex gap-1 items-center text-black">
                      <MdArrowDropDown />
                      <span className="text-xs font-extralight ">
                        Citations
                      </span>
                    </div>
                    <div className="bg-[#F0E6FE] flex items-center gap-2 rounded-lg p-2 text-black">
                      <BsFileEarmarkPdf size={20} />
                      <div className="flex flex-col justify-start items-center rounded-lg ">
                        <span className=" text-xs">Q2Report.pdf</span>
                        <span className="self-start text-xs opacity-50">
                          4 MB
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntQCard;
