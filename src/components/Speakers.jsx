import React from "react";
import speaker1 from "../assets/Speakers/Speaker1.png";
import speaker2 from "../assets/Speakers/Speaker2.png";
import speaker3 from "../assets/Speakers/Speaker3.png";
import speaker4 from "../assets/Speakers/Speaker4.png";
import speaker5 from "../assets/Speakers/Speaker5.png";
import Footer from "./Footer";
import Navbar from "./Navbar";



const Speakers = () => {
  // List of pre-converted PDF images
  const imagePages = [
    speaker1, speaker2, speaker3, speaker4, speaker5
  ];

  return (
    <div>
        <Navbar />
    <div className="w-full">
      {imagePages.map((imgSrc, index) => (
        <img key={index} src={imgSrc} alt={`Page ${index + 1}`} className="w-full block" />
      ))}
    </div>
    <Footer />
    </div>
  );
};

export default Speakers;
