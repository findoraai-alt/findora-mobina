import { notFound } from "next/navigation";
import React from "react";
import { CardsData } from "../../../components/Enterprise/Data";

const getData = (id: number) => {
  const data = CardsData[id];

  if (!data) {
    notFound(); // Ensure Next.js properly handles 404
  }

  return data;
};

// Dynamic metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (isNaN(id)) notFound(); // Handle invalid numbers

  const post = getData(id);
  return {
    title: post?.title || "Default Title",
    description: post?.subtitle || "Default Description",
  };
}

const CardPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const id = Number(params.id);
  if (isNaN(id)) notFound(); // Ensure proper handling

  const data = getData(id);

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
