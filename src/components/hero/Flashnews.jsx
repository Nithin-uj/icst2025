import React, { useState, useEffect } from "react";

const FlashNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const newsList = [
    "📝 Last date for paper submision is extended to 10th Jan 2025",
  ];

  // Automatically change the news every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsList.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [newsList.length]);

  return (
    <div className=" text-green-800 flex justify-center mt-3">
      <div className="flex items-center space-x-3 animate-pulse duration-150">
        <div className="ms-3">
        🌳
        </div>
        <strong className="font-bold text-sm md:text-xl w-auto hidden md:inline">Latest update :</strong>
        <span className="text-sm md:text-xl">{newsList[currentIndex]}</span>
      </div>
    </div>
  );
};

export default FlashNews;
