"use client";

import React, { useEffect, useRef, useState } from "react";

/* ----------------------------- Sub-components ----------------------------- */

interface FeatureItemProps {
  title: string;
  desc: string;
  color: string;
  icon: React.ReactNode;
}

function FeatureItem({ title, desc, color, icon }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-4 w-full">
      <div
        className="w-12 h-12 flex items-center justify-center rounded-lg shrink-0"
        style={{ backgroundColor: `${color}15` }}
      >
        {icon}
      </div>

      <div className="flex-1 min-w-0">
        <p
          className="font-semibold leading-tight tracking-[-0.02em] text-[#111827] dark:text-white"
          style={{
            fontSize: "clamp(1.05rem, 1vw + 0.9rem, 1.45rem)",
          }}
        >
          {title}
        </p>

        <p
          className="font-medium leading-relaxed tracking-[-0.01em] text-[#4B5563] dark:text-white/60"
          style={{
            fontSize: "1.1rem",
            marginTop: "0.25rem",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

/* ----------------------------- Icons ----------------------------- */

const BrainIcon = ({ color }: { color: string }) => (
  <svg width="40" height="40" fill="none" stroke={color} strokeWidth="1.3" viewBox="0 0 24 24">
    <path d="M12 3c-3.5 0-6 2.5-6 6v1c0 1.4.6 2.6 1.5 3.5" />
    <path d="M12 3c3.5 0 6 2.5 6 6v1c0 1.4-.6 2.6-1.5 3.5" />
    <path d="M9 12h6" />
    <path d="M12 9v6" />
    <circle cx="8" cy="16" r="1.5" />
    <circle cx="16" cy="16" r="1.5" />
    <path d="M9.5 17.5 11 19" />
    <path d="M14.5 17.5 13 19" />
  </svg>
);

const GaugeIcon = ({ color }: { color: string }) => (
  <svg width="40" height="40" fill="none" stroke={color} strokeWidth="1.3" viewBox="0 0 24 24">
    <path d="M5 18a9 9 0 1 1 14 0" />
    <path d="M12 13l4-4" />
    <circle cx="12" cy="13" r="1.5" fill={color} stroke="none" />
    <path d="M7.5 15.5h.01" />
    <path d="M16.5 15.5h.01" />
    <path d="M12 6v1.5" />
  </svg>
);

const ShieldIcon = ({ color }: { color: string }) => (
  <svg width="40" height="40" fill="none" stroke={color} strokeWidth="1.3" viewBox="0 0 24 24">
    <path d="M12 3 5 6v6c0 5 3.5 8 7 9 3.5-1 7-4 7-9V6l-7-3Z" />
    <path d="M9 12h6" />
    <path d="M12 9v6" />
    <circle cx="12" cy="12" r="3.5" opacity="0.25" />
  </svg>
);

const CheckListIcon = ({ color }: { color: string }) => (
  <svg width="40" height="40" fill="none" stroke={color} strokeWidth="1.3" viewBox="0 0 24 24">
    <path d="M5 6h14" />
    <path d="M5 12h14" />
    <path d="M5 18h14" />
    <path d="M3 6l1 1 2-2" />
    <path d="M3 12l1 1 2-2" />
    <path d="M3 18l1 1 2-2" />
  </svg>
);

/* ----------------------------- Main Component ----------------------------- */

interface DiagramProps {
  findoraLogoUrl?: string;
}

export default function Diagram({
  findoraLogoUrl = "YOUR_FINDORA_LOGO_URL",
}: DiagramProps) {
  const [activeCard, setActiveCard] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleEntry: IntersectionObserverEntry | null = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              !mostVisibleEntry ||
              entry.intersectionRatio > mostVisibleEntry.intersectionRatio
            ) {
              mostVisibleEntry = entry;
            }
          }
        });

        if (mostVisibleEntry) {
          const index = cardRefs.current.findIndex(
            (card) => card === mostVisibleEntry!.target
          );
          if (index !== -1) {
            setActiveCard(index);
          }
        }
      },
      {
        threshold: [0.35, 0.5, 0.65, 0.8],
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  return (
    <div className="w-full flex flex-col items-center px-6 py-10 font-sans bg-white dark:bg-[#111828] transition-colors duration-300">
      <style>{`
        .card {
          border: 3.5px solid transparent;
          border-radius: 16px;
          background: white;
          box-shadow: 0px 10px 100px rgba(0,0,0,0.08);
          transition: border-color 400ms ease, box-shadow 400ms ease, transform 400ms ease;
        }

        .dark .card {
          background: rgba(255,255,255,0.03);
          box-shadow: 0px 20px 120px rgba(0,0,0,0.45);
        }

        @keyframes borderPulse {
          0% { border-color: transparent; }
          20% { border-color: var(--clr); }
          45% { border-color: var(--clr); }
          70% { border-color: transparent; }
          100% { border-color: transparent; }
        }

        .anim {
          animation: borderPulse 6s infinite ease-in-out;
        }

        .active-mobile {
          border-color: var(--clr) !important;
          box-shadow: 0px 14px 40px rgba(0,0,0,0.12);
          transform: translateY(-2px);
        }

        .dark .active-mobile {
          box-shadow: 0px 20px 60px rgba(0,0,0,0.5);
        }

        @media (max-width: 1023px) {
          .anim {
            animation: none !important;
          }
        }
      `}</style>

      {/* TITLE */}
      <h2
        className="font-bold text-center mb-16 tracking-[-0.03em] text-[#111827] dark:text-white"
        style={{
          fontSize: "clamp(1.8rem, 2vw + 1rem, 3rem)",
          lineHeight: 1.1,
        }}
      >
        How Findora Verifies AI Answers?
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl">
        {/* CARD 1 */}
        <div
          ref={(el) => {
            cardRefs.current[0] = el;
          }}
          className={`card anim p-4 lg:p-5 w-full lg:w-[350px] shrink-0 ${
            isMobile && activeCard === 0 ? "active-mobile" : ""
          }`}
          style={{
            ["--clr" as any]: "#c31069",
            animationDelay: "0s",
          }}
        >
          <div className="flex items-top gap-4">
            <div className="mt-4 w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-500/10 flex items-center justify-center shrink-0">
              <svg width="40" height="40" fill="none" stroke="#c31069" strokeWidth="1.3" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M7 9h10" />
                <path d="M7 13h6" />
              </svg>
            </div>

            <div>
              <div className="h-[7px] w-[30px] rounded-full mb-2 bg-[#c31069]" />
              <p className="font-bold text-[#111827] dark:text-white">
                AI SYSTEM OUTPUT
              </p>
              <p className="text-[1.1rem] text-gray-600 dark:text-white/80 font-semibold">
                Response generated for enterprise workflow.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[7px] h-[60px] lg:h-[3px] lg:w-[60px] bg-[#008f7a] dark:bg-white/10 shrink-0" />

        {/* CARD 2 */}
        <div
          ref={(el) => {
            cardRefs.current[1] = el;
          }}
          className={`card anim p-5 lg:p-6 w-full lg:w-[500px] shrink-0 z-10 ${
            isMobile && activeCard === 1 ? "active-mobile" : ""
          }`}
          style={{
            ["--clr" as any]: "#008f7a",
            animationDelay: "2s",
          }}
        >
          <div className="flex items-top gap-4 mb-6">
            <div className=" w-14 h-14 rounded-lg flex items-top justify-center shrink-0">
              <img
                src={findoraLogoUrl}
                alt="Findora"
                className="w-14 h-14 object-contain self-start mt-4"
              />
            </div>

            <div>
              <div className="h-[7px] w-[30px] rounded-full mb-2 bg-[#008f7a]" />
              <p className="font-bold text-[#008f7a] text-[1.1rem]">
                FINDORA VERIFICATION LAYER
              </p>
              <p className="text-[1.1rem] text-gray-600 dark:text-white/80 font-semibold">
                AI-generated response verification.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <FeatureItem
              title="Hallucination Detection"
              desc="Detects factual inconsistencies and hallucinations."
              color="#008f7a"
              icon={<BrainIcon color="#008f7a" />}
            />

            <FeatureItem
              title="Reliability Scoring"
              desc="Scores responses based on multiple reliability signals."
              color="#008f7a"
              icon={<GaugeIcon color="#008f7a" />}
            />

            <FeatureItem
              title="Policy Enforcement"
              desc="Ensures alignment with enterprise policies and rules."
              color="#008f7a"
              icon={<ShieldIcon color="#008f7a" />}
            />

            <FeatureItem
              title="Post-generation Verification"
              desc="Validates final response before delivery."
              color="#008f7a"
              icon={<CheckListIcon color="#008f7a" />}
            />
          </div>
        </div>

        <div className="w-[7px] h-[60px] lg:h-[3px] lg:w-[60px] bg-[#7332a1] dark:bg-white/10 shrink-0" />

        {/* CARD 3 */}
        <div
          ref={(el) => {
            cardRefs.current[2] = el;
          }}
          className={`card anim p-4 lg:p-5 w-full lg:w-[350px] shrink-0 ${
            isMobile && activeCard === 2 ? "active-mobile" : ""
          }`}
          style={{
            ["--clr" as any]: "#7332a1",
            animationDelay: "4s",
          }}
        >
          <div className="flex items-center gap-4 items-top">
            <div className="mt-5 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center shrink-0 self-start mt-1">
              <svg width="40" height="40" fill="none" stroke="#7332a1" strokeWidth="1.3" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="m8.5 12.5 2.5 2.5 4.5-5" />
              </svg>
            </div>

            <div>
              <div className="h-[7px] w-[30px] rounded-full mb-2 bg-[#7332a1]" />

              <p className="font-bold text-[#111827] dark:text-white">
                TRUSTED RESPONSE DELIVERED
              </p>

              <p className="font-semibold text-[1.1rem] text-[#7332a1] dark:text-[#7332a1]">
                Verified, Enterprise-grade reliability
              </p>

              <p className="text-[1.1rem] text-gray-600 dark:text-white/80">
                policy-compliant output.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
