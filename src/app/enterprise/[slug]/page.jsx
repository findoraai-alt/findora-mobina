import { notFound } from "next/navigation";
import React from "react";
import { CardsData } from "../../../components/Enterprise/Data";

const getData = async (slug) => {
  const data = CardsData.find((item) => item.slug === slug);

  if (data) {
    return data;
  }

  return null; // Avoid calling notFound() inside an async function
};

// Dynamic metadata
export async function generateMetadata({ params: paramsPromise }) {
  const params = await paramsPromise; // Await params before using it
  const post = await getData(params.slug);

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
  const data = await getData(params.slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="py-20 md:py-24 px-4 md:px-8">
      <div
        key={data.id}
        className="w-full h-auto flex flex-col justify-center items-center gap-16"
      >
        <div className="text-center space-y-8">
          <h1 className="text-2xl lg:text-4xl font-medium">{data.title}</h1>
          <h6 className="text-xl">{data.subtitle}</h6>
        </div>
        <img
          src={data.img}
          alt={data.title}
          className="max-h-[150px] lg:max-h-[300px] w-full object-cover object-top"
        />
        <div className=" lg:text-lg">{data.description}</div>
      </div>
    </div>
  );
};

export default CardPage;
