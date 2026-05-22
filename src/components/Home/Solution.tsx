"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowBigRightDash,
  Brain,
  ScanSearch,
  Gavel,
  FileBox,
  CircleCheck,
  BookOpenCheck
} from "lucide-react";

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
          ? { boxShadow: `0 0 18px ${glowColor}40` }
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

function StepIcon({ color, children }: any) {
  return (
    <div
      className="flex items-center justify-center rounded-xl w-14 h-14 shrink-0 transition-transform duration-300 group-hover:scale-105"
      style={{ backgroundColor: `${color}15`, color }}
    >
      {children}
    </div>
  );
}

function StepNumber({ color, num }: any) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm shrink-0"
      style={{ backgroundColor: `${color}25`, color }}
    >
      {num}
    </div>
  );
}

function Feature({ icon, title, className }: any) {
  return (
    <div className={`flex flex-col items-center gap-2 text-center transition-transform duration-300 hover:-translate-y-1 ${className}`}>
      <div className="text-[#2fa58d]">{icon}</div>
      <p className="text-[1rem] font-medium text-gray-700 dark:text-black">{title}</p>
    </div>
  );
}

/* ================= MAIN ================= */

export default function VerificationLayerDiagram() {
  return (
    <section className="w-full bg-white dark:bg-[#111828] px-6 py-10 flex flex-col items-center">

      {/* TITLE */}
      <div className="text-center max-w-2xl mb-16">
        <h2 className="font-bold text-gray-900 dark:text-gray-100  text-[2rem] md:text-[2.3rem]">
          <motion.span
            className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-[#0b87b6]
              via-[#7332a1]
              to-[#2fa58d]
              bg-[length:300%_100%]
              drop-shadow-[0_0_8px_rgba(180,180,180,0.35)]
            "
            
          >
            Varification { }
          </motion.span>

          Layer for Enterprise AI
        </h2>

        <p className="text-black/80 dark:text-gray-200 mt-6 text-[1.4rem] md:text-[1.8rem] font-semibold">
          Findora validates AI outputs before they reach users or downstream systems.
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-8">

        {/* STEP 1 */}
        <FadeInSection glowColor="#8b5cf6">
          <div className="group relative flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 hover:-translate-y-1 transition bg-white dark:bg-white/80">

            <div className="absolute top-4 left-4 sm:static">
              <StepNumber color="#8b5cf6" num="01" />
            </div>

            <StepIcon color="#8b5cf6">
              <ArrowBigRightDash size={26}/>
            </StepIcon>

            <div className="text-center sm:text-left w-full">
              <h3 className="font-bold text-lg text-gray-900 dark:text-black">INPUT</h3>
              <p className="text-gray-600 dark:text-black text-[1.2rem] font-semibold">
                Prompt, data, or request
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* STEP 2 */}
        <FadeInSection glowColor="#3b82f6">
          <div className="group relative flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 hover:-translate-y-1 transition bg-white dark:bg-white/80">

            <div className="absolute top-4 left-4 sm:static">
              <StepNumber color="#3b82f6" num="02" />
            </div>

            <StepIcon color="#3b82f6">
              <Brain size={26}/>
            </StepIcon>

            <div className="text-center sm:text-left w-full">
              <h3 className="font-bold text-lg text-gray-900 dark:text-black">
                LLM / VLM / AI AGENT
              </h3>
              <p className="text-gray-600 dark:text-black text-[1.2rem] font-semibold">
                Model generates response
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* STEP 3 */}
        <FadeInSection glowColor="#2fa58d">
          <div className="group relative border border-[#2fa58d]/40 dark:border-[#2fa58d]/40 rounded-2xl p-8 bg-[#2fa58d08] dark:bg-white/80">

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">

              <div className="absolute top-4 left-4 sm:static">
                <StepNumber color="#2fa58d" num="03" />
              </div>

              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Findora Logo"
                  className="w-14 h-14 object-contain"
                />
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#2fa58d] align-center dark:text-black">
                  FINDORA LAYER
                </h3>

                <p className="text-gray-600 dark:text-black text-[1.2rem] font-semibold">
                  Enterprise-grade verification and governance of AI outputs
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 border border-gray-300 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-white/80">

              <Feature title="Hallucination Detection" icon={<ScanSearch size={24} />} />
              <Feature title="Reliability Scoring" icon={<BookOpenCheck size={24} />} />
              <Feature title="Policy Enforcement" icon={<Gavel size={24} />} />
              <Feature title="Post-generation Verification" icon={<CircleCheck size={24} />} />
              <Feature className="col-span-2 sm:col-span-1 justify-self-center" title="Model-Agnostic Validation" icon={<FileBox size={24} />} />
            </div>
          </div>
        </FadeInSection>

        {/* STEP 4 */}
        <FadeInSection glowColor="#4f46e5">
          <div className="group relative flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 hover:-translate-y-1 transition bg-white dark:bg-white/80">

            <div className="absolute top-4 left-4 sm:static">
              <StepNumber color="#4f46e5" num="04" />
            </div>

            <StepIcon color="#4f46e5">
              <CircleCheck size={26}/>
            </StepIcon>

            <div className="text-center sm:text-left w-full">
              <h3 className="font-bold text-lg text-gray-900 dark:text-black">
                TRUSTED OUTPUT
              </h3>
              <p className="text-gray-600 dark:text-black text-[1.2rem] font-semibold">
                Verified, reliable, and policy-compliant response
              </p>
            </div>
          </div>
        </FadeInSection>

      </div>

      {/* FOOTER */}
      <FadeInSection>
        <div className="mt-10 border border-gray-300 dark:border-gray-700 rounded-2xl p-4 max-w-3xl text-center bg-white dark:bg-white/80">
          <p className="font-semibold text-[1.3rem] text-gray-900 dark:text-black mb-4">
            Enterprise-grade verification infrastructure
          </p>

          <p className="text-gray-600 dark:text-black text-[1.2rem] font-semibold mb-6">
            for reliable AI deployment.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            {["Secure", "Reliable", "Governed", "Auditable"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-white text-[1rem] font-semibold"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      </FadeInSection>

    </section>
  );
}
