import { notFound } from "next/navigation";
import React from "react";
import { CardsData } from "../../../components/Enterprise/Data";

const getData = (id) => {
  const data = CardsData[id];

  if (data) {
    return data;
  }

  return notFound();
};

// Dynamic metadata
export async function generateMetadata({ params }) {
  const post = getData(params.id);
  return {
    title: post.title,
    description: post.subtitle,
  };
}

const CardPage = ({ params }) => {
  const data = getData(params.id);
  return (
    <div className=" py-20 md:py-24 px-4 md:px-8">
      <div
        key={data.id}
        className=" w-full h-auto flex flex-col justify-center items-center gap-16"
      >
        <div className=" text-center space-y-8">
          <h1 className=" text-2xl font-semibold">{data.title}</h1>
          <h6 className=" text-xl">{data.subtitle}</h6>
        </div>
        <img
          src={data.img}
          alt={data.title}
          className=" max-h-[150px] lg:max-h-[300px] w-full object-cover object-center"
        />
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default CardPage;
