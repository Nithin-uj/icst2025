import React, { useState, useEffect } from "react";

const FlashNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLink, setShowLink] = useState(false); // State to control link visibility

  const newsList = [
    "📝 Last date for paper submision is extended to 10th Jan 2025",
  ];

  useEffect(() => {
    const newsInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsList.length);
    }, 2000);

    const linkTimeout = setTimeout(() => {
      setShowLink(true); // Show the link after the news cycle starts
    }, 1000); // Adjust delay if needed

    return () => {
      clearInterval(newsInterval);
      clearTimeout(linkTimeout);
    };
  }, [newsList.length]);

  return (
    <div className="text-green-800 flex flex-col items-center mt-3">
      <div className="flex items-center space-x-3 animate-pulse duration-150">
        <div className="ms-3">
          🌳
        </div>
        <strong className="font-bold text-sm md:text-xl w-auto hidden md:inline">
          Latest update :
        </strong>
        <span className="text-sm md:text-xl">{newsList[currentIndex]}</span>
      </div>
      {showLink && ( // Conditionally render the link
        <div className="mt-2 animate-pulse duration-150"> {/* Added animation to the link as well */}
          <span className="text-sm md:text-xl">
            For conference registration,{" "}
            <a
              href="https://forms.gle/tWPVg4RNquTXx5EXA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline hover:text-green-900"
            >
              click here
            </a>
          </span>
        </div>
      )}
    </div>
  );
};

export default FlashNews;