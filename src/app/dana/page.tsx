import DanaBottom from "@/components/Dana/DanaBottom";
import DanaHero from "@/components/Dana/DanaHero";
import DanaMovingText from "@/components/Dana/DanaMovingText";
import DanaTop from "@/components/Dana/DanaTop";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dana",
  description:
    "Dana offers personalized wellness tools for emotional support, cognitive health, and daily routines, designed for all ages.",
};

const Dana = () => {
  return (
    <div>
      <DanaHero />
      <DanaMovingText />
      <DanaTop />
      <DanaBottom />
    </div>
  );
};

export default Dana;
