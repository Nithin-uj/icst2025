import React, { useRef, useEffect } from "react";
import Spon1 from "../../assets/Spon1.png";
import Spon2 from "../../assets/Spon2.svg";
import Spon3 from "../../assets/Spon3.jpg";
import Spon4 from "../../assets/Spon4.png";
import Spon5 from "../../assets/Spon5.jpg";
import Alum1 from "../../assets/Alum1.jpg";
import Alum2 from "../../assets/Alum2.jpg";



const CardSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const scrollStep = 2; // Number of pixels to scroll per interval
    const scrollInterval = 30; // Interval time in milliseconds

    const scroll = () => {
      if (slider.scrollLeft >= slider.scrollWidth /2) {
        // Reset to the start when halfway through duplicated content
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += scrollStep;
      }
    };

    const interval = setInterval(scroll, scrollInterval);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const cards = [
    { id: 1, title: "SCHEVARAN", description: "This is the first card.", image:Spon1 },
    { id: 2, title: "AUTODESK", description: "This is the second card.", image:Spon2 },
    { id: 3, title: "BRITT", description: "This is the third card.", image:Spon3 },
    { id: 4, title: "SDMIMD", description: "This is the fourth card.", image:Spon4 },
    { id: 5, title: "GREENERIA", description: "This is the fourth card.", image:Spon5 },

  ];

  const alumnus = [
    {id:1, name:"Mr. Ravishankar", image:Alum1 },
    {id:2, name:"Mr. Hareesh Ramanna", image:Alum2 },

  ]

  // Duplicate cards to create seamless loop
  const loopingCards = [...cards, ...cards, ...cards];
  const loopingalumnus = [...alumnus];

  return (
    <div>
      <div className="overflow-hidden py-4 px-3" >
        <div
          ref={sliderRef}
          className="flex space-x-10 p-4 overflow-x-scroll no-scrollbar"
        >
          {loopingCards.map((card, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white shadow-md shadow-slate-600 rounded-lg p-4 flex-shrink-0"
            >
              <div className="flex justify-center overflow-hidden"><img className="object-contain w-44 h-44" src={card.image} alt=""/></div>
              <h3 className="text-lg font-bold text-center">{card.title}</h3>
              {/* <p className="text-sm text-gray-600 text-center">{card.description}</p> */}
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden py-4 px-3" >
        <div className="text-gogreen text-2xl font-bold text-center my-4 md:my-8">
        Our Proud Alumni Sponsors
        </div>
        <div
          // ref={sliderRef}
          className="flex space-x-10 p-4 overflow-x-scroll no-scrollbar justify-center"
        >
          {loopingalumnus.map((alumnus, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white shadow-md shadow-slate-600 rounded-lg p-4 flex-shrink-0"
            >
              <div className="flex justify-center overflow-hidden"><img className=" w-44 h-44 rounded-full" src={alumnus.image} alt=""/></div>
              <h3 className="text-lg font-bold text-center pt-4">{alumnus.name}</h3>
            </div>
          ))}
        </div>
      </div>
      
    </div>    
  );
};

export default CardSlider;
