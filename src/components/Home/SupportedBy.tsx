"use client";

import React from "react";
import Image from "next/image";

const logos = [
  {
    id: 1,
    src: "/images/logoes/nvidia.png",
    alt: "nvidia-logo",
  },
  {
    id: 2,
    src: "/images/logoes/google.png",
    alt: "google_logo",
  },
  {
    id: 3,
    src: "/images/logoes/aws.png",
    alt: "aws-logo",
  },
  {
    id: 4,
    src: "/images/logoes/aiforgood.png",
    alt: "aiforgood-logo",
  },
  {
    id: 5,
    src: "/images/logoes/canada.png",
    alt: "canada-funding",
  },
  {
    id: 6,
    src: "/images/logoes/microsoft.png",
    alt: "microsoft-logo",
  },
  {
    id: 7,
    src: "/images/logoes/innovative2.png",
    alt: "innovative-solution",
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
    <section className="relative w-full py-6 md:py-20 bg-white overflow-hidden">
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
                  width={1000}
                  height={300}
                  style={{
                    height: "100px",
                    width: "auto",
                    maxWidth: "none",
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
          animation: scrollLeft 100s linear infinite;
        }

        .logo-item {
          height: 220px;
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
            height: 80px;
            margin-right: 10px;
            flex-shrink: 0;
          }

          .logo-item :global(img) {
            height: 50px !important;
            width: auto !important;
          }

          .supported-marquee {
            animation: scrollLeft 40s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}