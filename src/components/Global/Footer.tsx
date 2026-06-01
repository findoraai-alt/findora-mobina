"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import SupportedBy from "../Home/SupportedBy";

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

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
    };

    await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    formRef.current?.reset();
  };

  return (
    <div className="bg-[#f0f0fc] dark:bg-[#111828] py-6 md:py-8">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        
        <div className="-mt-[40px] mb-[40px] bg-[#2065ee] h-auto w-full rounded-2xl">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="p-8 md:p-12 lg:p-16 flex flex-col items-center gap-6 md:gap-8"
          >
            
            <h6 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium text-center">
              Subscribe to Our Newsletter
            </h6>

            <div className="flex flex-col items-center gap-4 w-full">
              
              <div className="flex flex-col gap-4 w-full sm:w-auto">
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    required
                    className="bg-white/10 backdrop-blur-md outline-none py-2 px-3 rounded-full border-[1px] text-white placeholder:text-white/80 border-white shadow-inner shadow-white/20 sm:w-[240px]"
                  />
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    required
                    className="bg-white/10 backdrop-blur-md outline-none py-2 px-3 rounded-full border-[1px] text-white placeholder:text-white/80 border-white shadow-inner shadow-white/20 sm:w-[240px]"
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full sm:w-[496px] bg-white/10 backdrop-blur-md outline-none py-2 px-3 rounded-full border-[1px] text-white placeholder:text-white/80 border-white shadow-inner shadow-white/20"
                />
              </div>

              <button className="bg-white px-6 py-2 rounded-full w-full sm:w-auto">
                <span className="font-medium text-transparent bg-clip-text bg-[#2065ee]">
                  Send
                </span>
              </button>

            </div>
          </form>
        </div>

        <div className="flex flex-col justify-between gap-16 md:gap-20">

          <div className="flex flex-col lg:flex-row-reverse justify-between gap-10 lg:gap-8">

            <div className="flex flex-col justify-between gap-4 lg:text-right">
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
                className="text-xl md:text-2xl lg:text-4xl leading-snug dark:text-white/90 text-black/70"
              >
                {slogan.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 2.5,
                      delay: index * 0.08,
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

            <div className="flex gap-10 lg:gap-16 dark:text-white/80 text-black/80">

              <div className="flex flex-col justify-between gap-10">
                <div className="flex flex-col gap-1 text-sm md:text-[15px]">
                  {links.map((link) => (
                    <Link key={link.id} href={link.href}>
                      {link.title}
                    </Link>
                  ))}
                </div>
                <div className="text-sm md:text-[15px] dark:text-white/70 text-black/70">
                  Montréal - Canada
                </div>
              </div>

              <div className="flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-1 text-sm md:text-[15px]">
                  {socials.map((social) => (
                    <Link key={social.id} href={social.href} target="_blank">
                      {social.title}
                    </Link>
                  ))}
                </div>
                <div className="text-sm md:text-[15px] dark:text-white/70 text-black/70">
                  © 2026 findora
                </div>
              </div>

            </div>
          </div>

          <div className="overflow-hidden flex justify-center items-center text-7xl md:text-[10rem] lg:text-[16rem] xl:text-[20rem] font-bold leading-none">
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
              const color = colors[index % colors.length];

              return (
                <motion.h1
                  key={index}
                  style={{ color }}
                  initial={{ opacity: 0, y: -85 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
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

      <SupportedBy />
    </div>
  );
};