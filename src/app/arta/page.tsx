import ArtaCards from "@/components/Arta/ArtaCards";
import ArtaFeatures from "@/components/Arta/ArtaFeatures";
import ArtaHero from "@/components/Arta/ArtaHero";
import ArtaText from "@/components/Arta/ArtaText";
import ArtaTop from "@/components/Arta/ArtaTop";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Arta",
  description:
    "Arta provides real-time deepfake detection and media verification for secure, seamless digital interactions.",
};

const Arta = () => {
  return (
    <div>
      <ArtaHero />
      <ArtaTop />
      <ArtaText />
      <ArtaFeatures />
      <ArtaCards />
    </div>
  );
};

export default Arta;
