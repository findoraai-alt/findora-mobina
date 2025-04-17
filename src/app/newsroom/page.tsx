import NewsroomHero from "@/components/Newsroom/NewsroomHero";
import NewsroomTop from "@/components/Newsroom/NewsroomTop";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Stay up to date with the latest news, announcements, and media coverage. Explore press releases, company updates, and stories from across our community.",
};

const Newsroom = () => {
  return (
    <div>
      <NewsroomHero />
      <NewsroomTop />
    </div>
  );
};

export default Newsroom;
