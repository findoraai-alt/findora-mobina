"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const ROTATION_RANGE = 35;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const PERSPECTIVE = "1500px";

const Prelude = () => {
  return (
    <div className=" pt-20 md:pt-24 px-4 md:px-8 max-w-7xl mx-auto flex justify-center items-center">
      <div className=" flex flex-col items-center gap-8">
        <h3 className=" text-3xl lg:text-4xl font-medium text-center">
          The Problem With Information Today
        </h3>
        <TiltShineCard />
        <p className=" text-lg font-medium text-center">
          We live in a world flooded with content — but not all of it is
          reliable. Traditional search engines surface results based on
          popularity, not accuracy. That leaves people sifting through
          conflicting claims, outdated facts, and unverified opinions.
          <br />
          <br />
          At Findora, we believe the internet should be a source of clarity —
          not confusion.
          <br />
          <br />
          {"That’s"} why we built more than just an AI search engine. We built
          smart tools that analyze, fact-check, and simplify the truth. Meet
          DANA and ARTA.
        </p>
      </div>
    </div>
  );
};

const TiltShineCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const sheenOpacity = useTransform(
    ySpring,
    [-HALF_ROTATION_RANGE, 0, HALF_ROTATION_RANGE],
    [0.5, 0, 0.5]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{
        perspective: PERSPECTIVE,
      }}
      className="overflow-visible"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
          backgroundImage: "url(/images/prelude.webp)",
          backgroundSize: "cover",
        }}
        className="relative aspect-[9/13] w-80 overflow-hidden bg-zinc-950 shadow-2xl shadow-zinc-950"
      >
        <motion.div
          style={{
            opacity: sheenOpacity,
          }}
          className="absolute inset-0 bg-gradient-to-br from-zinc-300/50 via-zinc-300 to-zinc-300/50"
        />
      </motion.div>
    </div>
  );
};

export default Prelude;
