"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  PackageSearch,
  BookCheck,
  Siren,
  BadgeCheck,
  FileBadge,
  MessageSquareQuote,
} from "lucide-react";

/* ----------------------------- Sub-components ----------------------------- */

interface FeatureItemProps {
  title: string;
  desc: string;
  color: string;
  icon: React.ReactNode;
}

function FeatureItem({ title, desc, color, icon }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-4 md:gap-5 w-full">
      <div
        className="w-12 h-12 md:w-14 md:h-14 mt-1 flex items-center justify-center rounded-lg md:rounded-xl shrink-0"
        style={{ backgroundColor: `${color}15` }}
      >
        {icon}
      </div>

      <div className="flex-1 min-w-0">
        <p
          className="font-semibold leading-tight tracking-[-0.02em] text-[#111827] dark:text-white"
          style={{ fontSize: "clamp(1.05rem, 1vw + 0.9rem, 1.6rem)" }}
        >
          {title}
        </p>

        <p
          className="font-medium leading-relaxed tracking-[-0.01em] text-[#4B5563] dark:text-white/60"
          style={{
            fontSize: "clamp(1rem, 0.6vw + 0.85rem, 1.18rem)",
            marginTop: "0.25rem",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

/* ----------------------------- Main Component ----------------------------- */

interface DiagramProps {
  findoraLogoUrl?: string;
}

export default function Diagram({
  findoraLogoUrl = "YOUR_FINDORA_LOGO_URL",
}: DiagramProps) {
  const [activatedCards, setActivatedCards] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLDivElement;

          const index = cardRefs.current.findIndex(
            (card) => card === target
          );

          if (index === -1) return;

          /* -------------------- وقتی کارت وارد دید شد -------------------- */

          if (entry.isIntersecting) {
            setActivatedCards((prev) => {
              const copy = [...prev];

              copy[index] = true;

              return copy;
            });
          }

          /* -------------------- وقتی کارت از دید خارج شد -------------------- */
          else {
            setActivatedCards((prev) => {
              const copy = [...prev];

              copy[index] = false;

              return copy;
            });
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex flex-col items-center px-6 py-10 md:py-20 font-sans bg-white dark:bg-[#111828] transition-colors duration-500 overflow-hidden">
      <style>{`
        .card {
          border: 2px solid #e5e7eb;
          border-radius: 20px;
          background: #ffffff;
          transition:
            border-color 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .card {
            border-radius: 28px;
          }
        }

        .dark .card {
          background: #111828;
          border-color: rgba(255,255,255,0.08);
        }

        /* هاله فعال بدون سایه بیرونی */
        .active-card {
          border-color: var(--border-clr) !important;
          transform: scale(1.02);
          box-shadow:
            inset 0 0 0 1px var(--border-clr),
            inset 0 0 100px var(--shadow-clr),
            inset 0 0 30px var(--glow-clr);
        }

        /* لایه هاله داخلی */
        .active-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--overlay-clr);
          opacity: 1;
          pointer-events: none;
          border-radius: inherit;
        }

        @media (max-width: 1023px) {
          .active-card {
            transform: scale(1.03);
          }
        }
      `}</style>

      <h2 className="text-3xl md:text-[3.7rem] leading-[1.05] font-bold text-center mb-16 md:mb-20 text-[#111827] dark:text-white tracking-[-0.04em] max-w-5xl">
        How Findora Verifies AI Answers?
      </h2>

      {/* کانتینر اصلی کارت‌ها */}
      <div className="flex flex-col items-center justify-center w-full max-w-[550px] gap-0">
        {/* CARD 1 */}
        <div
          ref={(el) => {
            cardRefs.current[0] = el;
          }}
          className={`card p-5 md:p-8 w-full ${
            activatedCards[0] ? "active-card" : ""
          }`}
          style={
            {
              ["--border-clr" as any]: "#c31069",
              ["--shadow-clr" as any]: "rgba(195, 16, 106, 0.03)",
              ["--glow-clr" as any]: "rgba(195, 16, 105, 0.03)",
              ["--overlay-clr" as any]: "rgba(195, 16, 105, 0.03)",
            } as React.CSSProperties
          }
        >
          <div className="flex items-start gap-4 md:gap-5 relative z-10">
            <div className="mt-5 md:mt-6 w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-pink-100 dark:bg-pink-500/10 flex items-center justify-center shrink-0">
              <MessageSquareQuote
                className="w-9 h-9 md:w-11 md:h-11 text-[#c31069]"
                strokeWidth={1.5}
              />
            </div>

            <div className="flex-1">
              <div className="h-[5px] md:h-[6px] w-[30px] md:w-[38px] rounded-full mb-2 md:mb-3 bg-[#c31069]" />

              <p className="font-bold text-[1.2rem] md:text-[1.7rem] tracking-[-0.03em] text-[#111827] dark:text-white">
                AI SYSTEM OUTPUT
              </p>

              <p className="text-[1.1rem] md:text-[1.25rem] leading-relaxed text-gray-600 dark:text-white/80 font-semibold">
                Response generated for enterprise workflow.
              </p>
            </div>
          </div>
        </div>

        {/* کانکتور بین کارت ۱ و ۲ */}
        <div className="w-[3px] md:w-[4px] h-[60px] md:h-[90px] bg-[#008f7a] dark:bg-white/10 shrink-0 rounded-full" />

        {/* CARD 2 */}
        <div
          ref={(el) => {
            cardRefs.current[1] = el;
          }}
          className={`card p-6 md:p-10 w-full z-10 ${
            activatedCards[1] ? "active-card" : ""
          }`}
          style={
            {
              ["--border-clr" as any]: "#008f7a",
              ["--shadow-clr" as any]: "rgba(0, 143, 122, 0.02)",
              ["--glow-clr" as any]: "rgba(0, 143, 122, 0.02)",
              ["--overlay-clr" as any]: "rgba(0, 143, 122, 0.02)",
            } as React.CSSProperties
          }
        >
          <div className="flex items-start gap-4 md:gap-5 mb-6 md:mb-10 relative z-10">
            <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden mt-4 shrink-0">
              <img
                src={findoraLogoUrl}
                alt="Findora"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="h-[5px] md:h-[6px] w-[30px] md:w-[38px] rounded-full mb-2 md:mb-3 bg-[#008f7a]" />

              <p className="font-bold text-[#008f7a] text-[1.2rem] md:text-[1.75rem] tracking-[-0.03em] leading-tight">
                FINDORA VERIFICATION LAYER
              </p>

              <p className="text-[1.1rem] md:text-[1.25rem] leading-relaxed text-gray-600 dark:text-white/80 font-semibold">
                AI-generated response verification.
              </p>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 relative z-10">
            <FeatureItem
              title="Hallucination Detection"
              desc="Detects factual inconsistencies and hallucinations."
              color="#008f7a"
              icon={
                <PackageSearch
                  className="w-9 h-9 md:w-10 md:h-10 text-[#008f7a]"
                  strokeWidth={1.5}
                />
              }
            />

            <FeatureItem
              title="Reliability Scoring"
              desc="Scores responses based on multiple reliability signals."
              color="#008f7a"
              icon={
                <BookCheck
                  className="w-9 h-9 md:w-10 md:h-10 text-[#008f7a]"
                  strokeWidth={1.5}
                />
              }
            />

            <FeatureItem
              title="Policy Enforcement"
              desc="Ensures alignment with enterprise policies and rules."
              color="#008f7a"
              icon={
                <Siren
                  className="w-9 h-9 md:w-10 md:h-10 text-[#008f7a]"
                  strokeWidth={1.5}
                />
              }
            />

            <FeatureItem
              title="Post-generation Verification"
              desc="Validates final response before delivery."
              color="#008f7a"
              icon={
                <BadgeCheck
                  className="w-9 h-9 md:w-10 md:h-10 text-[#008f7a]"
                  strokeWidth={1.5}
                />
              }
            />
          </div>
        </div>

        {/* کانکتور بین کارت ۲ و ۳ */}
        <div className="w-[3px] md:w-[4px] h-[60px] md:h-[90px] bg-[#7332a1] dark:bg-white/10 shrink-0 rounded-full" />

        {/* CARD 3 */}
        <div
          ref={(el) => {
            cardRefs.current[2] = el;
          }}
          className={`card p-5 md:p-8 w-full ${
            activatedCards[2] ? "active-card" : ""
          }`}
          style={
            {
              ["--border-clr" as any]: "#7332a1",
              ["--shadow-clr" as any]: "rgba(115, 50, 161, 0.04)",
              ["--glow-clr" as any]: "rgba(98, 43, 137, 0.04)",
              ["--overlay-clr" as any]: "rgba(115, 50, 161, 0.04)",
            } as React.CSSProperties
          }
        >
          <div className="flex items-start gap-4 md:gap-5 relative z-10">
            <div className="mt-3 md:mt-6 w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center shrink-0">
              <FileBadge
                className="w-9 h-9 md:w-11 md:h-11 text-[#7332a1]"
                strokeWidth={1.5}
              />
            </div>

            <div className="flex-1">
              <div className="h-[5px] md:h-[6px] w-[30px] md:w-[38px] rounded-full mb-2 md:mb-3 bg-[#7332a1]" />

              <p className="font-bold text-[1.1rem] md:text-[1.6rem] tracking-[-0.03em] text-[#111827] dark:text-white leading-tight">
                TRUSTED RESPONSE DELIVERED
              </p>

              <p className="font-semibold text-[1.1rem] md:text-[1.22rem] text-[#7332a1] dark:text-[#b784ff] mt-1">
                Verified, Enterprise-grade reliability
              </p>

              <p className="text-[1.05rem] md:text-[1.18rem] leading-relaxed text-gray-600 dark:text-white/80 font-semibold">
                policy-compliant output.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}