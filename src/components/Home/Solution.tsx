"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  BarChart3,
  SearchCheck,
  ShieldCheck,
  Activity,
  Layers,
} from "lucide-react";

/* ================= Fade In ================= */

function FadeInSection({ children }: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

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
      className={`transition-all duration-700 ease-out ${
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

function Feature({ icon, title }: any) {
  return (
    <div className="flex flex-col items-center gap-2 text-center transition-transform duration-300 hover:-translate-y-1">
      <div className="text-[#2fa58d]">{icon}</div>
      <p className="text-[1rem] font-medium text-gray-700">{title}</p>
    </div>
  );
}

/* ================= DATA ================= */

const features = [
  { text: "Hallucination Detection", icon: AlertTriangle, color: "#008f7a" },
  { text: "Reliability Scoring", icon: BarChart3, color: "#eaba33" },
  { text: "Static filtering", icon: SearchCheck, color: "#0b87b6" },
  { text: "Policy Enforcement", icon: ShieldCheck, color: "#7332a1" },
  { text: "Post-generation verification", icon: Activity, color: "#c31069" },
  { text: "Model-Agnostic Architecture", icon: Layers, color: "#c67f48" },
];

/* ================= MAIN ================= */

export default function VerificationLayerDiagram() {
  return (
    <section className="w-full bg-white px-6 py-10 flex flex-col items-center">

      {/* TITLE */}
      <div className="text-center max-w-2xl mb-16">
        <h2 className="font-bold text-gray-900 leading-tight text-[2rem] md:text-[2.3rem]">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Verification
          </span>{" "}
          Layer for Enterprise AI
        </h2>

        <p className="text-black/80 mt-6 text-[1.4rem] md:text-[1.8rem] font-semibold">
          Findora validates AI outputs before they reach users or downstream systems.
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-8">

        {/* STEP 1 */}
        <FadeInSection>
          <div className="group relative flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-gray-300 rounded-2xl p-6 hover:-translate-y-1 transition">

            <div className="absolute top-4 left-4 sm:static">
              <StepNumber color="#8b5cf6" num="01" />
            </div>

            <StepIcon color="#8b5cf6">
              <svg width="26" height="26" stroke="currentColor" fill="none" strokeWidth="2">
                <path d="M4 12h14" />
                <path d="M12 6l6 6-6 6" />
              </svg>
            </StepIcon>

            <div className="text-center sm:text-left w-full">
              <h3 className="font-bold text-lg text-gray-900">INPUT</h3>
              <p className="text-gray-600 text-[1.2rem] font-semibold">
                Prompt, data, or request
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* STEP 2 */}
        <FadeInSection>
          <div className="group relative flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-gray-300 rounded-2xl p-6 hover:-translate-y-1 transition">

            <div className="absolute top-4 left-4 sm:static">
              <StepNumber color="#3b82f6" num="02" />
            </div>

            <StepIcon color="#3b82f6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M9 6a3 3 0 0 1 6 0v1a2.5 2.5 0 0 1 2.5 2.5c0 .8-.4 1.5-1 2 .8.5 1.3 1.4 1.3 2.4A3.1 3.1 0 0 1 15 17h-.2a3 3 0 0 1-5.6 0H9a3 3 0 0 1-2.8-3.1c0-1 .5-1.9 1.3-2.4a2.5 2.5 0 0 1-1-2C6.5 8.1 7.6 7 9 7V6Z" />
                <path d="M12 6v12" />
              </svg>
            </StepIcon>

            <div className="text-center sm:text-left w-full">
              <h3 className="font-bold text-lg text-gray-900">
                LLM / VLM / AI AGENT
              </h3>
              <p className="text-gray-600 text-[1.2rem] font-semibold">
                Model generates response
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* STEP 3 FIXED (IMPORTANT) */}
        <FadeInSection>
          <div className="group relative border border-[#2fa58d]/40 rounded-2xl p-8 bg-[#2fa58d08]">

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">

              {/* FIXED POSITION */}
              <div className="absolute top-4 left-4 sm:static">
                <StepNumber color="#2fa58d" num="03" />
              </div>

              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Findora Logo"
                  className="w-[4rem] h-[4rem] object-contain"
                />
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#2fa58d]">
                  FINDORA LAYER
                </h3>

                <p className="text-gray-600 text-[1.2rem] font-semibold">
                  Enterprise-grade verification and governance of AI outputs
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 border border-gray-300 rounded-xl p-6">

              <Feature title="Hallucination Detection" icon={<svg width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>} />
              <Feature title="Reliability Scoring" icon={<svg width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2"><path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-6" /></svg>} />
              <Feature title="Policy Enforcement" icon={<svg width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2"><path d="M12 3l7 4v5c0 5-3.5 7-7 9-3.5-2-7-4-7-9V7l7-4z" /></svg>} />
              <Feature title="Post-generation Verification" icon={<svg width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-5" /></svg>} />
              <Feature title="Model-Agnostic Validation" icon={<svg width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2"><circle cx="5" cy="12" r="2" /><circle cx="12" cy="5" r="2" /><circle cx="19" cy="12" r="2" /><circle cx="12" cy="19" r="2" /></svg>} />
            </div>
          </div>
        </FadeInSection>

        {/* STEP 4 */}
        <FadeInSection>
          <div className="group relative flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-gray-300 rounded-2xl p-6 hover:-translate-y-1 transition">

            <div className="absolute top-4 left-4 sm:static">
              <StepNumber color="#4f46e5" num="04" />
            </div>

            <StepIcon color="#4f46e5">
              <svg width="26" height="26" stroke="currentColor" fill="none" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12l3 3 5-5" />
              </svg>
            </StepIcon>

            <div className="text-center sm:text-left w-full">
              <h3 className="font-bold text-lg text-gray-900">
                TRUSTED OUTPUT
              </h3>
              <p className="text-gray-600 text-[1.2rem] font-semibold">
                Verified, reliable, and policy-compliant response
              </p>
            </div>
          </div>
        </FadeInSection>

      </div>

      {/* FOOTER */}
      <FadeInSection>
        <div className="mt-10 border border-gray-300 rounded-2xl p-4 max-w-3xl text-center">
          <p className="font-semibold text-lg text-gray-900 mb-4">
            Enterprise-grade verification infrastructure
          </p>

          <p className="text-gray-600 text-[1.2rem] font-semibold mb-6">
            for reliable AI deployment.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            {["Secure", "Reliable", "Governed", "Auditable"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-[1rem] font-semibold"
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