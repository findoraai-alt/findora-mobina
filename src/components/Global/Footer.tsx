"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const links = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  { id: 3, title: "Contact", href: "/contact" },
];

const socials = [
  {
    id: 1,
    title: "Facebook",
    href: "https://www.facebook.com",
  },
  {
    id: 2,
    title: "Instagram",
    href: "https://www.instagram.com",
  },
];

export const Footer = () => {
  const text = "findora";
  const slogan = " A Search Engine You Can Trust";
  return (
    <div className="bg-[#f0f0fc] dark:bg-[#111828] py-8">
      <div className=" px-4 md:px-8 max-w-7xl mx-auto">
        <div className="-mt-[60px] mb-[60px] bg-[#2065ee] h-auto w-full rounded-2xl">
          <form className=" p-16 flex flex-col lg:items-center gap-8">
            <h6 className=" text-white text-3xl lg:text-4xl font-medium text-center">
              Subscribe to Our Newsletter
            </h6>
            <div className=" flex flex-col lg:flex-row gap-4 lg:gap-2">
              <div className=" flex flex-col  gap-4">
                <div className=" flex flex-col lg:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className=" bg-white/10 backdrop-blur-md outline-none py-1 px-2 rounded-full border-[1px] text-white placeholder:text-white placeholder:opacity-70 border-white shadow-inner shadow-white/20"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className="bg-white/10 backdrop-blur-md  outline-none py-1 px-2 rounded-full border-[1px] text-white placeholder:text-white placeholder:opacity-70 border-white shadow-inner shadow-white/20"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  required
                  className=" w-full bg-white/10 backdrop-blur-md  outline-none py-1 px-2 rounded-full border-[1px] text-white placeholder:text-white placeholder:opacity-70 border-white shadow-inner shadow-white/20"
                />
              </div>

              <button className=" bg-white lg:self-end px-6 py-1 rounded-full">
                <span className=" font-medium text-transparent bg-clip-text bg-[#2065ee] ">
                  Send
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className=" flex flex-col justify-between gap-24">
          <div className=" flex justify-between gap-4 lg:gap-8">
            <div className=" flex flex-col justify-between gap-4">
              <motion.h6
                initial={{ color: "hsl(340, 82%, 47%)" }}
                animate={{
                  color: ["hsl(340, 82%, 47%)", "hsl(240, 100%, 50%)"],
                  transition: {
                    duration: 4,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                }}
                className=" text-2xl md:text-3xl lg:text-4xl"
              >
                {slogan.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 3,
                      delay: index * 0.1,
                      ease: "anticipate",
                      repeat: Infinity,
                      repeatType: "mirror",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h6>
            </div>
            <div className="flex gap-4 lg:gap-16">
              <div className=" flex flex-col justify-between gap-16">
                <div className=" flex flex-col gap-1 text-sm">
                  {links.map((link) => (
                    <Link key={link.id} href={link.href}>
                      {link.title}
                    </Link>
                  ))}
                </div>
                <div className=" text-sm">Montréal - Canada</div>
              </div>
              <div className=" flex flex-col justify-between gap-4">
                <div className=" flex flex-col gap-1 text-sm">
                  {socials.map((social) => (
                    <Link key={social.id} href={social.href} target="_blank">
                      {social.title}
                    </Link>
                  ))}
                </div>
                <div className=" text-sm">© 2026 findora</div>
              </div>
            </div>
          </div>
          <div></div>
          <div className="overflow-hidden flex justify-center items-center text-8xl md:text-[10rem] lg:text-[16rem] xl:text-[20rem] font-bold">
            {text.split("").map((letter, index) => {
              const colors = [
                "#008f7a",
                "#eaba33",
                "#0b87b6",
                "#7332a1",
                "#c31069",
                "#c67f48",
                "#3d6a7d",
              ];
              const color = colors[index % colors.length]; // This ensures the colors repeat

              return (
                <motion.h1
                  key={index}
                  style={{ color }} // Applying the color to each letter
                  initial={{ opacity: 0, y: -85 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 1,
                    ease: "backInOut",
                  }}
                >
                  {letter}
                </motion.h1>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
