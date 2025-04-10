import DiscTabsPage from "@/components/Discover/DiscTabsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Discover",
  description: "Discover latest news and trends.",
};

const Discover = () => {
  return (
    <div>
      <DiscTabsPage />
    </div>
  );
};

export default Discover;
