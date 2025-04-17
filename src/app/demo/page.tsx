import DemoPage from "@/components/Global/DemoPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Request a Demo",
  description: "Request a demo from us to explore our solutions.",
};

const Demo = () => {
  return (
    <div>
      <DemoPage />
    </div>
  );
};

export default Demo;
