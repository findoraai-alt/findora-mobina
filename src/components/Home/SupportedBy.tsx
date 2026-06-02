"use client";

import React from "react";
import Image from "next/image";

const logos = [
  {
    id: 1,
    src: "/images/nvidia-logo2.png",
    alt: "nvidia-logo",
  },
  {
    id: 2,
    src: "/images/google-logo3.png",
    alt: "google_logo",
  },
  {
    id: 3,
    src: "/images/aws-logo2.png",
    alt: "aws-logo",
  },
   {
    id: 4,
    src: "/images/aiforgood-logo4.png",
    alt: "aiforgood-logo",
  },
];

export default function SupportedBy() {
  const duplicatedLogos = [
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
  ];

  return (
    <section className="relative w-full py-6 md:py-20  overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mb-8 md:mb-12">
          <p className="text-[1.8rem] md:text-[2.5rem] text-black/90 font-bold text-left">
            Supported By
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="supported-marquee">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="logo-item"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={220}
                  height={100}
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .supported-marquee {
          display: flex;
          align-items: center;
          width: max-content;
          will-change: transform;
          animation: scrollLeft 24s linear infinite;
        }

        .logo-item {
          width: 250px;
          min-width: 180px;
          height: 80px;
          margin-right: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .logo-item:hover {
          opacity: 1;
        }

        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .logo-item {
            width: 200px;
            min-width: 110px;
            height: 50px;
            margin-right: 32px;
          }

          .supported-marquee {
            animation: scrollLeft 18s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}