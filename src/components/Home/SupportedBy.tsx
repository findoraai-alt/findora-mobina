"use client";

import React from "react";
import Image from "next/image";

const logos = [
  {
    id: 1,
    src: "/images/logo1.jpg",
    alt: "Logo 1",
  },
  {
    id: 2,
    src: "/images/logo2.jpg",
    alt: "Logo 2",
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
    <section className="relative w-full py-12 md:py-20 bg-white overflow-hidden">
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
          width: 180px;
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
            width: 110px;
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