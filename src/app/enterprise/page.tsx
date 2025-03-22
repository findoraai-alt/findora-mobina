import EntBoxes from "@/components/Enterprise/EntBoxes";
import EntCards from "@/components/Enterprise/EntCards";
import EntCarousel from "@/components/Enterprise/EntCarousel";
import EntEnd from "@/components/Enterprise/EntEnd";
import EntImages from "@/components/Enterprise/EntImages";
import EntSticky from "@/components/Enterprise/EntSticky";
import EntTop from "@/components/Enterprise/EntTop";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Enterprise",
  description: "Enterprise page",
};

const Enterprise = () => {
  return (
    <div>
      <EntTop />
      <EntSticky />
      <EntImages />
      <EntBoxes />
      <EntCards />
      <EntCarousel />
      <EntEnd />
    </div>
  );
};

export default Enterprise;
