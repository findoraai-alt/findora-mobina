import Demo from "@/components/Enterprise/Demo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Request a Demo",
  description: "Request a demo from us to explore our solutions.",
};

const page = () => {
  return (
    <div>
      <Demo />
    </div>
  );
};

export default page;
