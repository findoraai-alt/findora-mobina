"use client";

import React, { useEffect, useRef, useState } from "react";
import {PackageSearch, BookCheck, Siren, BadgeCheck, FileBadge, MessageSquareQuote} from "lucide-react"

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


/* ----------------------------- Main Component ----------------------------- */

interface DiagramProps {
  findoraLogoUrl?: string;
}

export default function Diagram({
  findoraLogoUrl = "YOUR_FINDORA_LOGO_URL",
}: DiagramProps) {
  const [activatedCards, setActivatedCards] = useState<boolean[]>([false, false, false]);
  const [isMobile, setIsMobile] = useState(false);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hasRun = useRef(false);

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
  if (isMobile) return;
  if (hasRun.current) return;

  hasRun.current = true;

  const delays = [0, 1800, 3600];
  const timers: NodeJS.Timeout[] = [];

  delays.forEach((delay, index) => {
    const t = setTimeout(() => {
      setActivatedCards((prev) => {
        const copy = [...prev];
        copy[index] = true;
        return copy;
      });
    }, delay);

    timers.push(t);
  });

  return () => timers.forEach(clearTimeout);
}, [isMobile]);
  useEffect(() => {
    if (isMobile === null) return;
    if (!isMobile) return;

    const observer = new IntersectionObserver(
     (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLDivElement;

          const index = cardRefs.current.findIndex(
            (card): card is HTMLDivElement => card === target
          );

          if (index === -1) return;

          setActivatedCards((prev) => {
            if (prev[index]) return prev;

            const copy = [...prev];
            copy[index] = true;
            return copy;
          });
        });
      
    
      //   useEffect(() => {
      //   if (isMobile) return;

      //   const delays = [0, 1800, 3600];

      //   delays.forEach((delay, index) => {
      //     setTimeout(() => {
      //       setActivatedCards((prev) => {
      //         if (prev[index]) return prev; // جلوگیری از rerun
      //         const copy = [...prev];
      //         copy[index] = true;
      //         return copy;
      //       });
      //     }, delay);
      //   });
      // }, [isMobile]);

        
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
          /* استایل پایه برای حالت فعال */
        .active-mobile {
          
          box-shadow: inset 0px 0px 60px 10px color-mix(in srgb, var(--clr), transparent 95%) !important;
          
          
          border-color: color-mix(in srgb, var(--clr), transparent 50%) !important;
          
          
          background: color-mix(in srgb, var(--clr), white 98%) !important;
          
          transform: scale(1.01);
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1) !important;
        }

        
        .dark .active-mobile {
          background: color-mix(in srgb, var(--clr), #111828 92%) !important;
          box-shadow: inset 0px 0px 80px 20px color-mix(in srgb, var(--clr), transparent 85%) !important;
          border-color: color-mix(in srgb, var(--clr), transparent 50%) !important;
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
          animation: none;
        }
        }
                @keyframes sweep {
        0% {
          transform: translateX(-120%);
        }
        100% {
          transform: translateX(120%);
        }
      }
          @keyframes shine {
        0% {
          transform: translateX(-120%) rotate(25deg);
        }
        100% {
          transform: translateX(120%) rotate(0deg);
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
            isMobile && activatedCards[0] ? "active-mobile" : ""
          }`}
          style={{
            ["--clr" as any]: "#c31069",
            animationDelay: "0s",
          }}
        >
          <div className="flex items-top gap-4">
            <div className="mt-4 w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-500/10 flex items-center justify-center shrink-0">
              <div className="relative w-9 h-9 overflow-hidden">
                    <MessageSquareQuote className="w-9 h-9 text-[#c31069]" strokeWidth={1.5}/>

                    <div
                      className="absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"
                      style={{
                        animation: "sweep 2.5s linear infinite",
                      }}
                    />
                  </div>
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
            isMobile && activatedCards[1] ? "active-mobile" : ""
          }`}
          style={{
            ["--clr" as any]: "#008f7a",
            animationDelay: "2s",
          }}
        >
          <div className="flex items-top gap-4 mb-6">
            <div className="relative w-12 h-12 overflow-hidden">
              <img
                src={findoraLogoUrl}
                alt="Findora"
                className="w-full h-full object-contain"
              />

              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
                style={{
                  transform: "translateX(-120%) rotate(25deg)",
                  animation: "shine 4s linear infinite",
                }}
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
              icon={<div className="relative w-9 h-9 overflow-hidden">
                    <PackageSearch className="w-9 h-9 text-[#008f7a]" strokeWidth={1.5}/>

                    <div
                      className="absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"
                      style={{
                        animation: "sweep 5s linear infinite",
                      }}
                    />
                  </div>}
            />

            <FeatureItem
              title="Reliability Scoring"
              desc="Scores responses based on multiple reliability signals."
              color="#008f7a"
              icon={<div className="relative w-9 h-9 overflow-hidden">
                    <BookCheck className="w-9 h-9 text-[#008f7a]" strokeWidth={1.5} />

                    <div
                      className="absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"
                      style={{
                        animation: "sweep 5s linear infinite",
                      }}
                    />
                  </div>
         }
            />

            <FeatureItem
              title="Policy Enforcement"
              desc="Ensures alignment with enterprise policies and rules."
              color="#008f7a"
              icon={<div className="relative w-9 h-9 overflow-hidden">
                    <Siren className="w-9 h-9 text-[#008f7a]" strokeWidth={1.5}/>

                    <div
                      className="absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"
                      style={{
                        animation: "sweep 5s linear infinite",
                      }}
                    />
                  </div>}
            />

            <FeatureItem
              title="Post-generation Verification"
              desc="Validates final response before delivery."
              color="#008f7a"
              icon={<div className="relative w-9 h-9 overflow-hidden">
                    <BadgeCheck className="w-9 h-9 text-[#008f7a]" strokeWidth={1.5}/>

                    <div
                      className="absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"
                      style={{
                        animation: "sweep 5s linear infinite",
                      }}
                    />
                  </div>}
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
            isMobile && activatedCards[2] ? "active-mobile" : ""
          }`}
          style={{
            ["--clr" as any]: "#7332a1",
            animationDelay: "4s",
          }}
        >
          <div className="flex items-center gap-4 items-top">
            <div className="mt-5 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center shrink-0 self-start mt-1">
              
              <div className="relative w-9 h-9 overflow-hidden">
                    <FileBadge className="w-9 h-9 text-[#7332a1]" strokeWidth={1.5}/>

                    <div
                      className="absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"
                      style={{
                        animation: "sweep 5s linear infinite",
                      }}
                    />
                  </div>
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
