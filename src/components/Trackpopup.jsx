import React, { useState } from "react";

const TrackPopup = ({ track, title, description, points, keynote, image }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = () => setPopupVisible(true);
  const hidePopup = () => setPopupVisible(false);

  return (
    <>
      <div className="w-full max-w-md mx-auto relative bg-gogreen4 rounded-3xl shadow-lg overflow h-[380px] md:h-[400px]">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-[75%] h-[30%] md:h-[40%] object-cover rounded-3xl absolute top-3 left-6"
        />

        {/* Track Label */}
        <div className="absolute top-28 right-4 origin-top-right rotate-90 text-black/50 text-lg font-medium font-['Poppins'] tracking-widest">
          {track}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 pt-4">
          <h3 className="text-white text-1xl font-semibold font-['Poppins'] mb-2">
            {title}
          </h3>
          <p className="text-white text-xs font-normal font-['Poppins'] mb-4">
            {description}
          </p>
          {/* <div className="justify-begin">
              <h3 className="text-white font-semibold"> Keynote Speaker: </h3>
              <h3 className="text-white">  {keynote}</h3>
          </div> */}
          <div className="flex justify-end">
            <button 
              onClick={showPopup}
              className="bg-green-900 text-white px-6 py-2 rounded-lg text-sm font-medium font-['Poppins'] hover:bg-green-800 transition-colors"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div 
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 py-4 md:py-20"
          onClick={hidePopup}
        >
          <div 
            className="w-11/12 h-full max-w-2xl bg-gogreen4 p-8 rounded-3xl shadow-lg text-white relative overflow-scroll no-scrollbar"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-200"
              onClick={hidePopup}
              aria-label="Close popup"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold font-['Poppins'] mb-6 sticky">{title}</h2>
            <ul className="space-y-3 list-disc list-inside">
              {points.map((point, index) => (
                <li key={`point-${index}`} className="text-base font-['Poppins']">
                  {point}
                </li>
              ))}
            </ul>
            
          </div>
        </div>
        // <></>
      )}
    </>
  );
};

export default TrackPopup;