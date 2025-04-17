import { notFound } from "next/navigation";
import React from "react";
import { newsData } from "../../../components/Newsroom/Data";

const getData = async (id) => {
  const data = newsData[id];

  if (data) {
    return data;
  }

  return null; // Avoid calling notFound() inside an async function
};

// Dynamic metadata
export async function generateMetadata({ params: paramsPromise }) {
  const params = await paramsPromise; // Await params before using it
  const post = await getData(params.id);

  if (!post) {
    return {
      title: "Not Found",
      description: "The requested page does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.subtitle,
  };
}

const CardPage = async ({ params: paramsPromise }) => {
  const params = await paramsPromise; // Await params before using it
  const data = await getData(params.id);

  if (!data) {
    notFound();
  }

  return (
    <div className="py-20 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div
        key={data.id}
        className="w-full h-auto flex flex-col justify-center items-center gap-16"
      >
        <h1 className="text-2xl lg:text-4xl font-medium text-center">
          {data.title}
        </h1>
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
