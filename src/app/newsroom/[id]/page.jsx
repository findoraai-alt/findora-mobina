import { notFound } from "next/navigation";
import React from "react";
import { newsData } from "../../../components/Newsroom/Data";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const getData = async (id) => {
  const data = newsData[id];
  return data || null;
};

export async function generateMetadata({ params: paramsPromise }) {
  const params = await paramsPromise;
  const post = await getData(params.id);

  if (!post) {
    return {
      title: "Not Found",
      description: "This page does not exist.",
    };
  }

  const domain = "https://findora.ai";
  const url = `${domain}/newsroom/${params.id}`;

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

  const domain = "https://findora.ai";
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

        <div className="flex items-center gap-4 mt-2">
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on X"
            className="bg-purple-600 text-white p-1 lg:p-2 rounded-md lg:hover:bg-purple-700 lg:transition-all lg:duration-300 lg:ease-in-out"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            className="bg-purple-600 text-white p-1 lg:p-2 rounded-md lg:hover:bg-purple-700 lg:transition-all lg:duration-300 lg:ease-in-out"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            className="bg-purple-600 text-white p-1 lg:p-2 rounded-md lg:hover:bg-purple-700 lg:transition-all lg:duration-300 lg:ease-in-out"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>

        <img
          src={data.img}
          alt={data.title}
          className=" w-full object-cover object-center rounded-2xl"
        />

        <div className="lg:text-lg">{data.description}</div>
      </div>
    </div>
  );
};

export default CardPage;
