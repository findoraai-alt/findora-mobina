"use client";
import { useState, useEffect } from "react";

const TABS = ["Top Headlines", "Business", "Technology", "Health", "Sports"];
const API_KEY = "cf21d7b1743aa43a41231f44c80c82eb"; // Replace with your GNews API key

type Article = {
  title: string;
  description: string;
  url: string;
  image?: string; // GNews uses "image" instead of "urlToImage"
};

export default function News() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const category =
          activeTab !== "Top Headlines"
            ? `&topic=${activeTab.toLowerCase()}`
            : "";
        const url = `https://gnews.io/api/v4/top-headlines?country=us${category}&token=${API_KEY}`;

        console.log("Fetching:", url);
        const response = await fetch(url);
        const data = await response.json();

        console.log("API Response:", data); // Debugging log

        if (data.articles && Array.isArray(data.articles)) {
          setNews(data.articles);
        } else {
          setNews([]);
          console.error("API Error or Invalid Response:", data);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [activeTab]);

  return (
    <div className="px-4 md:px-8 py-20 md:py-24">
      <div className="flex space-x-4 mb-6 border-b pb-2 overflow-auto">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${
              activeTab === tab
                ? "border-b-2 border-purple-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading news...</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {news.length > 0 ? (
            news.map((article, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-lg bg-white dark:bg-[#111828]"
              >
                <img
                  src={article.image || "https://via.placeholder.com/150"}
                  alt={article.title}
                  className="w-full h-48 object-cover mb-2"
                />
                <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                <p className="text-sm mb-2">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 lg:hover:underline"
                >
                  Read more
                </a>
              </div>
            ))
          ) : (
            <p>No news available.</p>
          )}
        </div>
      )}
    </div>
  );
}
