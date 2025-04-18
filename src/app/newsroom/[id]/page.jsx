import { notFound } from "next/navigation";
import React from "react";
import { newsData } from "../../../components/Newsroom/Data";
import { FaXTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";

const getData = async (id) => {
  const data = newsData[id];
  return data || null;
};

// ✅ Generate metadata including Open Graph and Twitter meta tags
export async function generateMetadata({ params: paramsPromise }) {
  const params = await paramsPromise;
  const post = await getData(params.id);

  if (!post) {
    return {
      title: "Not Found",
      description: "This page does not exist.",
    };
  }

  const domain = "https://findora.ai"; // ⬅️ Replace with your real domain!
  const url = `${domain}/newsroom/${params.id}`;

  // Ensure absolute image URL
  const absoluteImage = post.img.startsWith("http")
    ? post.img
    : `${domain}${post.img}`;

  return {
    title: post.title,
    description: "Findora Launch Announcement",
    openGraph: {
      title: post.title,
      description: "Findora is live! Discover how it's changing search.",
      url,
      type: "article",
      images: [
        {
          url: absoluteImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: "Findora is live! Discover how it's changing search.",
      images: [absoluteImage],
    },
  };
}

const CardPage = async ({ params: paramsPromise }) => {
  const params = await paramsPromise;
  const data = await getData(params.id);

  if (!data) {
    notFound();
  }

  const domain = "https://findora.ai"; // ⬅️ Replace with your deployed domain
  const currentUrl = `${domain}/newsroom/${params.id}`;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentUrl
    )}&text=${encodeURIComponent(data.title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      currentUrl
    )}`,
  };

  return (
    <div className="py-20 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div
        key={data.id}
        className="w-full h-auto flex flex-col justify-center items-center gap-8"
      >
        <span className="lg:text-lg">{data.date}</span>

        <h1 className="text-2xl lg:text-4xl font-medium text-center">
          {data.title}
        </h1>

        {/* 🔗 Share Buttons */}
        <div className="flex gap-4 mt-2">
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on X"
            className="text-black hover:text-blue-500"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            className="text-black hover:text-blue-700"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            className="text-black hover:text-blue-800"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <img
          src={data.img}
          alt={data.title}
          className="max-h-[1200px] lg:max-h-[700px] w-full object-cover object-top rounded-2xl"
        />

        <div className="lg:text-lg">{data.description}</div>
      </div>
    </div>
  );
};

export default CardPage;
