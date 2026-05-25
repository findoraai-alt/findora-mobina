"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ================= Fade In ================= */

function FadeInSection({ children, glowColor }: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={
        isMobile && visible && glowColor
          ? { boxShadow: `0 0 10px ${glowColor}40` }
          : {}
      }
      className={`relative rounded-2xl overflow-hidden transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
}

/* ================= Reusable ================= */

function StepIcon({ color, src, alt, big }: any) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-105 dark:bg-[#111828] ${
        big ? "w-16 h-16" : "w-14 h-14"
      }`}
      style={{ backgroundColor: `${color}15` }}
    >
      <img
        src={src}
        alt={alt}
        className={`${big ? "w-9 h-9" : "w-8 h-8"} object-contain`}
      />
    </div>
  );
}

function StepNumber({ color, num }: any) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm md:text-base shrink-0 dark:bg-[#111828]"
      style={{ backgroundColor: `${color}25`, color }}
    >
      {num}
    </div>
  );
}

function Feature({ src, title, className }: any) {
  return (
    <div
      className={`flex flex-col items-center gap-2 text-center transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      <img src={src} alt={title} className="w-11 h-11 object-contain" />

      <p className="text-[1.05rem] md:text-[1.2rem] leading-[1.2] max-w-[145px] font-semibold text-gray-700 dark:text-white/90 whitespace-pre-line">
        {title}
      </p>
    </div>
  );
}

const tags = [
  { label: "Secure", color: "#c31069" },
  { label: "Reliable", color: "#0b87b6" },
  { label: "Governed", color: "#008f7a" },
  { label: "Auditable", color: "#7332a1" },
];

/* ================= MAIN ================= */

export default function VerificationLayerDiagram() {
  return (
    <section className="w-full bg-white dark:bg-[#111828] px-6 py-10 flex flex-col items-center">

      {/* TITLE */}

      <div className="text-center max-w-3xl mb-14">
        <h2 className="font-bold text-gray-900 dark:text-gray-100 text-[2rem] md:text-[2.8rem]">
          <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ab68db] via-[#0b87b6] bg-[length:300%_100%] drop-shadow-[0_0_8px_rgba(180,180,180,0.35)]">
            Verification{" "}
          </motion.span>

          Layer for Enterprise AI
        </h2>

        <p className="text-black/80 dark:text-gray-200 mt-5 text-[1.3rem] md:text-[1.9rem] font-semibold leading-snug">
          Findora validates AI outputs before they reach users or downstream systems.
        </p>
      </div>

      {/* MAIN STACK */}

      <div className="w-full max-w-[860px] flex flex-col gap-5">

        {/* STEP 1 */}

        <FadeInSection glowColor="#c468db">
          <div className="group relative flex flex-col items-center justify-center border border-gray-300 dark:border-gray-700 rounded-2xl px-6 pt-5 pb-4 md:px-8 md:pt-5 md:pb-5 hover:-translate-y-1 transition bg-white dark:bg-[#111828] min-h-[170px] md:min-h-[150px]">

            <div className="absolute top-4 left-4">
              <StepNumber color="#8b5cf6" num="01" />
            </div>

            <div className="flex flex-col items-center text-center w-full gap-2">

              <div className="-mt-1">
                <StepIcon
                  color="#8b5cf6"
                  src="images/icons/input.png"
                  alt="Input"
                />
              </div>

              <h3 className="font-bold text-lg md:text-[1.3rem] text-gray-900 dark:text-white leading-none">
                INPUT
              </h3>

              <p className="text-gray-600 dark:text-white/90 text-[1.05rem] md:text-[1.2rem] leading-tight font-semibold">
                Prompt, data, or request
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* STEP 2 */}

        <FadeInSection glowColor="#3b82f6">
          <div className="group relative flex flex-col items-center justify-center border border-gray-300 dark:border-gray-700 rounded-2xl px-6 pt-5 pb-4 md:px-8 md:pt-5 md:pb-5 hover:-translate-y-1 transition bg-white dark:bg-[#111828] min-h-[175px] md:min-h-[150px]">

            <div className="absolute top-4 left-4">
              <StepNumber color="#3b82f6" num="02" />
            </div>

            <div className="flex flex-col items-center text-center w-full gap-2">

              <div className="-mt-1">
                <StepIcon
                  color="#3b82f6"
                  src="images/icons/model.png"
                  alt="model"
                />
              </div>

              <h3 className="font-bold text-lg md:text-[1.3rem] text-gray-900 dark:text-white whitespace-nowrap leading-none">
                LLM / VLM / AI AGENT
              </h3>

              <p className="text-gray-600 dark:text-white/90 text-[1.05rem] md:text-[1.2rem] leading-tight font-semibold">
                Model generates response
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* STEP 3 */}

        <FadeInSection glowColor="#2fa58d">
          <div className="group relative border border-[#2fa58d]/40 dark:border-[#2fa58d]/40 rounded-2xl px-6 pt-6 pb-5 md:px-8 md:pt-7 md:pb-6 bg-[#2fa58d08] dark:bg-[#111828]">

            <div className="absolute top-4 left-4">
              <StepNumber color="#2fa58d" num="03" />
            </div>

            <div className="flex flex-col items-center text-center gap-4 mb-5">

              <div className="w-20 h-20 flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Findora Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>

              <div>
                <h3 className="font-bold text-[1.4rem] md:text-[1.8rem] text-[#2fa58d] text-center dark:text-white leading-tight">
                  FINDORA VERIFICATION LAYER
                </h3>

                <p className="text-gray-600 dark:text-white/90 text-[1.08rem] md:text-[1.4rem] font-semibold text-center leading-snug mt-2 max-w-[680px]">
                  Enterprise-grade verification and governance of AI outputs
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-4 border border-gray-300 dark:border-gray-700 rounded-xl p-5 md:p-6 bg-white dark:bg-[#111828]">

              <Feature title="Hallucination Detection" src="images/icons/4.png" />
              <Feature title="Reliability Scoring" src="images/icons/quality-assurance.png" />
              <Feature title="Policy Enforcement" src="images/icons/policy (1).png" />
              <Feature title={"Fact\nChecking"} src="images/icons/3.png" />
              <Feature className="col-span-2 sm:col-span-1 justify-self-center" title={"Model\nValidation"} src="images/icons/2.png" />

            </div>

            <p className="text-center text-[1rem] md:text-[1.2rem] font-semibold text-gray-700 dark:text-white/90 mt-5 leading-snug max-w-[720px] mx-auto">
            Validates and improves AI responses.
            </p>
          </div>
        </FadeInSection>

        {/* STEP 4 */}

        <FadeInSection glowColor="#c31069">
          <div className="group relative flex flex-col items-center justify-center border border-gray-300 dark:border-gray-700 rounded-2xl px-6 pt-5 pb-4 md:px-8 md:pt-5 md:pb-5 hover:-translate-y-1 transition bg-white dark:bg-[#111828] shadow-md min-h-[175px] md:min-h-[150px]">

            <div className="absolute top-4 left-4">
              <StepNumber color="#c31069" num="04" />
            </div>

            <div className="flex flex-col items-center text-center w-full gap-2">

              <div className="-mt-1">
                <StepIcon
                  color="#c31069"
                  src="images/icons/1.png"
                  alt="Trusted"
                />
              </div>

              <h3 className="font-bold text-lg md:text-[1.3rem] text-gray-900 dark:text-white leading-none">
                TRUSTED RESPONSE DELIVERED
              </h3>

              <p className="text-gray-600 dark:text-white/90 text-[0.98rem] md:text-[1.1rem] leading-snug font-semibold max-w-[520px]">
                Verified, reliable, and policy-compliant response
              </p>
            </div>
          </div>
        </FadeInSection>

      </div>

      {/* FOOTER */}

      <FadeInSection>
        <div className="mt-9 border border-gray-300 dark:border-gray-700 rounded-2xl p-4 md:p-5 max-w-3xl text-center bg-white dark:bg-[#111828]">

          <p className="font-semibold text-[1.2rem] md:text-[1.6rem] text-gray-900 dark:text-white mb-3">
            Enterprise-grade verification infrastructure
          </p>

          <p className="text-gray-600 dark:text-white/90 text-[1.08rem] md:text-[1.35rem] font-semibold mb-5">
            for reliable AI deployment.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-[0.98rem] md:text-[1.15rem] font-semibold"
                style={{
                  backgroundColor: `${tag.color}15`,
                  color: `${tag.color}`,
                }}
              >
                ✓ {tag.label}
              </span>
            ))}
          </div>

        </div>
      </FadeInSection>

    </section>
  );
}