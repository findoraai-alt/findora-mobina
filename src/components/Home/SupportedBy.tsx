"use client";

import React from "react";
import Image from "next/image";

const logos = [
  {
    id: 1,
    src: "/images/logoes/Nvidia_logo.png",
    alt: "nvidia-logo",
    width: 234,
    height: 90,
  },
  {
    id: 2,
    src: "/images/logoes/Google_Logo.png",
    alt: "google_logo",
    width: 165,
    height: 60,
  },
  {
    id: 3,
    src: "/images/logoes/Amazon-Logo2.png",
    alt: "aws-logo",
    width: 120,
    height: 89,
  },
  {
    id: 4,
    src: "/images/logoes/aiforgood-Copy.png",
    alt: "aiforgood-logo",
    width: 234,
    height: 90,
  },
  {
    id: 5,
    src: "/images/logoes/canada-funding-logo.png",
    alt: "canada-funding",
    width: 150,
    height: 150,
  },
  {
    id: 6,
    src: "/images/logoes/Microsoft_logo.png",
    alt: "microsoft-logo",
    width: 234,
    height: 90,
  },
  {
    id: 7,
    src: "/images/logoes/Innovative-Solutions.webp",
    alt: "innovative-solution",
    width: 200,
    height: 80,
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
    ...logos,
    ...logos,
  ];

  return (
    <section className="relative w-full py-6 md:py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mb-8 md:mb-12">
          <p className="text-[1.8rem] md:text-[2.5rem] text-black/90 font-semibold text-left">
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
                  width={logo.width}
                  height={logo.height}
                  style={{
                    width: `${logo.width}px`,
                    height: `${logo.height}px`,
                    objectFit: "contain",
                    maxWidth: "none",
                    flexShrink: 0,
                  }}
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
          animation: scrollLeft 60s linear infinite;
        }

        .logo-item {
          margin-right: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.8;
          transition: opacity 0.3s ease;
          flex-shrink: 0;
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
            margin-right: 60px;
          }

          .supported-marquee {
            animation: scrollLeft 50s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}