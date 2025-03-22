import { notFound } from "next/navigation";
import React from "react";
import { CardsData } from "../../../components/Enterprise/Data";

const getData = (id: string) => {
  const numericId = Number(id);

  if (isNaN(numericId) || numericId < 0 || numericId >= CardsData.length) {
    notFound(); // Triggers a 404 page
  }

  return CardsData[numericId];
};

// Dynamic metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = getData(params.id);
  return {
    title: post?.title || "Default Title",
    description: post?.subtitle || "Default Description",
  };
}

const CardPage = ({ params }: { params: { id: string } }) => {
  const data = getData(params.id);

  return (
    <div className="py-20 md:py-24 px-4 md:px-8">
      <div
        key={data.id}
        className="w-full h-auto flex flex-col justify-center items-center gap-16"
      >
        <div className="text-center space-y-8">
          <h1 className="text-2xl font-semibold">{data.title}</h1>
          <h6 className="text-xl">{data.subtitle}</h6>
        </div>
        <img
          src={data.img}
          alt={data.title}
          className="max-h-[150px] lg:max-h-[300px] w-full object-cover object-center"
        />
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default CardPage;
