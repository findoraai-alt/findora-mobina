import AboutBottom from "@/components/About/AboutBottom";
import AboutJoinUs from "@/components/About/AboutJoinUs";
import AboutScrollingImages from "@/components/About/AboutScrollingImages";
import AboutTop from "@/components/About/AboutTop";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "About us, our mission, our values, and our team. Learn more about our company and our commitment to providing the best possible service to our customers",
};

const About = () => {
  return (
    <div>
      <div className="bg-[#f0f0fc] dark:bg-[#111828]">
        <AboutTop />
        <AboutScrollingImages />
      </div>
      <AboutBottom />
      <AboutJoinUs />
    </div>
  );
};

export default About;
