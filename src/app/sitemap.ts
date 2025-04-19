import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/dana`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/arta`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/enterprise`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/discover`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/newsroom`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    },
  ];
}
