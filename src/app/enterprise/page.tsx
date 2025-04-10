import EntBoxes from "@/components/Enterprise/EntBoxes";
import EntCards from "@/components/Enterprise/EntCards";
import EntCarousel from "@/components/Enterprise/EntCarousel";
import EntFeatures from "@/components/Enterprise/EntFeatures";
import EntImages from "@/components/Enterprise/EntImages";
import EntQCard from "@/components/Enterprise/EntQCard";
import EntText from "@/components/Enterprise/EntText";
import EntTop from "@/components/Enterprise/EntTop";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Enterprise",
  description:
    "Discover Findora’s enterprise solutions for secure, scalable, and efficient digital transactions, enhancing your business operations with cutting-edge technology.",
};

const Enterprise = () => {
  return (
    <div>
      <EntTop />
      <EntQCard />
      <EntFeatures />
      <EntImages />
      <EntBoxes />
      <EntCards />
      <EntText />
      <EntCarousel />
    </div>
  );
};

export default Enterprise;
