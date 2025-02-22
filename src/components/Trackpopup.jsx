import React, { useState } from "react";
import noimage from "../assets/noimage.svg";

const TrackPopup = ({ track, title, description, points, keynote, keynoteDetails, image }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isKeynoteVisible, setKeynoteVisible] = useState(false)

  const showPopup = () => setPopupVisible(true);
  const hidePopup = () => setPopupVisible(false);
  const showKeynote = () => setKeynoteVisible(true);
  const hideKeynote = () => setKeynoteVisible(false);

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
          <p className="text-white text-sm font-normal font-['Poppins'] mb-4">
            {description}
          </p>
          {/* <div className="justify-begin">
              <h3 className="text-white font-semibold"> Keynote Speaker: </h3>
              <h3 className="text-white">  {keynote}</h3>
          </div> */}
          <div className="flex justify-end flow-root">
            {/* <button 
              onClick={showKeynote}
              className="bg-green-900 text-white float-left mb-1 px-6 py-2 rounded-lg text-sm font-medium font-['Poppins'] hover:bg-green-800 transition-colors"
            >
              View KeyNote Speaker
            </button> */}
            <button 
              onClick={showPopup}
              className="bg-green-900 text-white float-right px-6 py-2 rounded-lg text-sm font-medium font-['Poppins'] hover:bg-green-800 transition-colors"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {isKeynoteVisible && (
        <div 
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-3 py-4 md:py-20"
          onClick={hideKeynote}
        >
          <div 
            className="w-11/12 h-2xl max-w-2xl bg-gogreen4 p-8 rounded-3xl shadow-lg text-white relative overflow-scroll no-scrollbar"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-200"
              onClick={hideKeynote}
              aria-label="Close popup"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold font-['Poppins'] mb-6 sticky">{title}</h2>
            
              <div className="font-semibold text-center">{keynoteDetails.type}</div>
              <div className="h-full flex flex-col justify-around">
                <div className="flex justify-center p-5">
                  <img
                    src={!!keynoteDetails.imglink ? keynoteDetails.imglink : noimage}
                    className="rounded-full w-44 md:w-36"
                    alt=""
                    onerror={noimage}
                  />
                </div>
                <div>
                  <h2 className="text-sm md:text-md font-semibold text-center">
                    {keynoteDetails.name}
                  </h2>
                  <div className="text-sm md:text-md text-center">
                    {keynoteDetails.designation}
                  </div>
                  <div className="text-sm md:text-md text-center">
                    {keynoteDetails.department}
                  </div>
                  {!!keynoteDetails.email && (
                    <div className="text-sm md:text-md text-center">
                      <span className="hidden md:inline">Email : </span>
                      <a
                        href={`mailto:${keynoteDetails.email}`}
                        className="text-orange-300"
                      >
                        {keynoteDetails.email}
                      </a>
                    </div>
                  )}
                  {!!keynoteDetails.phone && (
                    <div className="text-sm md:text-md text-center">
                      <span className="hidden md:inline">Phone No. : </span>
                      {keynoteDetails.phone}
                    </div>
                  )}
                </div>
              </div>
            
            
          </div>
        </div>


        // <></>
      )}

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