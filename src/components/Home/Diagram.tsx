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
    <div className="flex items-start gap-4 w-full">
      <div
        className="w-12 h-12 mt-1 flex items-center justify-center rounded-lg shrink-0"
        style={{ backgroundColor: `${color}15` }}
      >
        {icon}
      </div>

      <div className="flex-1 min-w-0">
        <p
          className="font-semibold leading-tight tracking-[-0.02em] text-[#111827] dark:text-white"
          style={{ fontSize: "clamp(1.05rem, 1vw + 0.9rem, 1.45rem)" }}
        >
          {title}
        </p>

        <p
          className="font-medium leading-relaxed tracking-[-0.01em] text-[#4B5563] dark:text-white/60"
          style={{ fontSize: "1.1rem", marginTop: "0.25rem" }}
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
            const delay = window.innerWidth >= 1024 ? index * 300 : 0;

            setTimeout(() => {
              setActivatedCards((prev) => {
                const copy = [...prev];
                copy[index] = true;
                return copy;
              });
            }, delay);
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
    <div className="w-full flex flex-col items-center px-6 py-10 font-sans bg-white dark:bg-[#111828] transition-colors duration-500">
      <style>{`
        .card {
          border: 2px solid #e5e7eb;
          border-radius: 20px;
          background: white;
          transition:
            border-color 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .dark .card {
          background: rgba(255,255,255,0.03);
          border-color: rgba(255,255,255,0.1);
        }

        /* حالت فعال موبایل */
        .active-mobile {
          border-color: var(--border-clr) !important;
          background-color: var(--bg-highlight) !important;
        }

        /* حالت فعال دسکتاپ */
        @media (min-width: 1024px) {
          .active-desktop {
            border-color: var(--border-clr) !important;
            background-color: var(--bg-highlight) !important;
            transform: scale(1.02);
          }
        }
      `}</style>

      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 md:mt-5 text-[#111827] dark:text-white">
        How Findora Verifies AI Answers?
      </h2>

      {/* کانتینر اصلی کارت‌ها با gap اضافه شده */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-0 lg:gap-1">
        {/* CARD 1 */}
        <div
          ref={(el) => {
            cardRefs.current[0] = el;
          }}
          className={`card p-5 w-full lg:w-[350px] shrink-0 ${
            activatedCards[0] ? "active-mobile active-desktop" : ""
          }`}
          style={{
            ["--border-clr" as any]: "#c31069",
            ["--bg-highlight" as any]: "rgba(195, 16, 105, 0.03)",
          }}
        >
          <div className="flex items-top gap-4">
            <div className="mt-4 w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-500/10 flex items-center justify-center shrink-0">
              <MessageSquareQuote
                className="w-9 h-9 text-[#c31069]"
                strokeWidth={1.5}
              />
            </div>

            <div>
              <div className="h-[5px] w-[30px] rounded-full mb-2 bg-[#c31069]" />

              <p className="font-bold text-[1.2rem] text-[#111827] dark:text-white">
                AI SYSTEM OUTPUT
              </p>

              <p className="text-[1.1rem] text-gray-600 dark:text-white/80 font-semibold">
                Response generated for enterprise workflow.
              </p>
            </div>
          </div>
        </div>

        {/* کانکتور بین کارت ۱ و ۲ */}
        {/* طول کانکتور کوتاه شده و gap فاصله بین کارت ها را ایجاد می کند */}
        <div className="w-[3px] h-[60px] lg:h-[3px] lg:w-[30px] bg-[#008f7a] dark:bg-white/10 shrink-0" /> 

        {/* CARD 2 */}
        <div
          ref={(el) => {
            cardRefs.current[1] = el;
          }}
          className={`card p-6 w-full lg:w-[500px] shrink-0 z-10 ${
            activatedCards[1] ? "active-mobile active-desktop" : ""
          }`}
          style={{
            ["--border-clr" as any]: "#008f7a",
            ["--bg-highlight" as any]: "rgba(0, 143, 122, 0.02)",
          }}
        >
          <div className="flex items-top gap-4 mb-6">
            <div className="relative w-12 h-12 overflow-hidden mt-5">
              <img
                src={findoraLogoUrl}
                alt="Findora"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="mx-1">
              <div className="h-[5px] w-[30px] rounded-full mb-2 bg-[#008f7a]" />

              <p className="font-bold text-[#008f7a] text-[1.2rem]">
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
              icon={
                <PackageSearch
                  className="w-9 h-9 text-[#008f7a]"
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
                  className="w-9 h-9 text-[#008f7a]"
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
                  className="w-9 h-9 text-[#008f7a]"
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
                  className="w-9 h-9 text-[#008f7a]"
                  strokeWidth={1.5}
                />
              }
            />
          </div>
        </div>

        {/* کانکتور بین کارت ۲ و ۳ */}
        <div className="w-[3px] h-[60px] lg:h-[3px] lg:w-[30px] bg-[#7332a1] dark:bg-white/10 shrink-0" />

        {/* CARD 3 */}
        <div
          ref={(el) => {
            cardRefs.current[2] = el;
          }}
          className={`card p-5 w-full lg:w-[350px] shrink-0 ${
            activatedCards[2] ? "active-mobile active-desktop" : ""
          }`}
          style={{
            ["--border-clr" as any]: "#7332a1",
            ["--bg-highlight" as any]: "rgba(115, 50, 161, 0.06)",
          }}
        >
          <div className="flex items-center gap-4 items-top">
            <div className="mt-5 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center shrink-0 self-start">
              <FileBadge
                className="w-9 h-9 text-[#7332a1]"
                strokeWidth={1.5}
              />
            </div>

            <div>
              <div className="h-[5px] w-[30px] rounded-full mb-2 bg-[#7332a1]" />

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
