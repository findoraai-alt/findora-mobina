import { notFound } from "next/navigation";
import React from "react";
import { CardsData } from "../../../components/Enterprise/Data";

// Define a proper type for the PageProps expected by Next.js
interface PageProps {
  params: {
    id: string;
  };
}

// Function to get data safely
const getData = (id: string) => {
  const numericId = Number(id);
  if (isNaN(numericId) || numericId < 0 || numericId >= CardsData.length) {
    notFound(); // Trigger a 404 page if id is invalid
  }
  return CardsData[numericId];
};

// Dynamic metadata function
export async function generateMetadata({ params }: PageProps) {
  const post = getData(params.id);
  return {
    title: post?.title || "Default Title",
    description: post?.subtitle || "Default Description",
  };
}

// Main component with correct types
const CardPage = ({ params }: PageProps) => {
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
