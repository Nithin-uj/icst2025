import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import noimage from "../../assets/noimage.svg";

const Slides = ({ data }) => {
  const CustomArrow = ({ className, style, onClick, direction }) => (
    <div
      className={className}
      style={{
        ...style,
        top: "50%",
        [direction === "left" ? "left" : "right"]: "10px",
        transform: "translateY(50%)",
        zIndex: 10,
      }}
      onClick={onClick}
    ></div>
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // arrows:true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  return (
    <div className="container mx-auto py-4">
      <Slider {...settings} className="h-full">
        {data.map((card, index) => (
          <div
            key={index}
            className="grid place-items-center w-full h-80 md:h-80"
          >
            <div className="bg-gogreen4 text-white shadow-lg rounded-lg w-[95%] h-full md:w-60 p-3 mx-auto">
              <div className="font-semibold text-center">{card.type}</div>
              <div className="h-full flex flex-col justify-around">
                <div className="flex justify-center">
                  <img
                    src={!!card.imglink ? card.imglink : noimage}
                    className="rounded-full w-44 md:w-36"
                    alt=""
                    onerror={noimage}
                  />
                </div>
                <div>
                  <h2 className="text-sm md:text-md font-semibold text-center">
                    {card.name}
                  </h2>
                  <div className="text-sm md:text-md text-center">
                    {card.designation}
                  </div>
                  <div className="text-sm md:text-md text-center">
                    {card.department}
                  </div>
                  {!!card.email && (
                    <div className="text-sm md:text-md text-center">
                      <span className="hidden md:inline">Email : </span>
                      <a
                        href={`mailto:${card.email}`}
                        className="text-orange-300"
                      >
                        {card.email}
                      </a>
                    </div>
                  )}
                  {!!card.phone && (
                    <div className="text-sm md:text-md text-center">
                      <span className="hidden md:inline">Phone No. : </span>
                      {card.phone}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function Chiefpatron() {
  const data = [
    {
      name: "Sri Ranganath M.S.",
      designation: "Hon. President",
      department: "NIE-MC",
      imglink: "https://nie.ac.in/wp-content/uploads/elementor/thumbs/Dr-Ranganath-Hon.-President-1-qpu261i01wzda0cbm6cgq9veytlnrpohcqewx5s0uc.jpeg",
    },
    {
      name: "Sri Udaya Shankar S.B.",
      designation: "Hon. Secretary",
      department: "NIE-MC",
      imglink: "https://nie.ac.in/wp-content/uploads/2024/06/Mr.-S-B-Uday-shankar-Hon.-Secretary.jpeg",
    },
    {
      name: "Sri N. Sathyakumar",
      designation: "Hon. Treasurer",
      department: "NIE-MC",
      imglink: "https://nie.ac.in/wp-content/uploads/2024/06/Mr.-Sathya-Kumar-N-Hon.-Treasurer.jpeg",
    },
    {
      name: "Sri Deepak H. S.",
      designation: "Hon. Director",
      department: "NIE-MC",
      imglink: "https://nie.ac.in/wp-content/uploads/elementor/thumbs/Mr-Deepak-H-S-Director-qpu52z7d12mretwzv1a2lakyeedu399pg4bco86s78.jpeg",
    },
    {
      name: "Dr. B. E. Rangaswamy",
      designation: "Registrar",
      department: "VTU - Belagavi",
      imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ1jlbd__6-luRmg-QxCYD2lC_iwEKBgzMaw&s",
    },
    {
      name: "Dr. T. N. Sreenivasa",
      designation: "Registrar (Evaluation)",
      department: "VTU - Belagavi",
      imglink: "https://vtu.ac.in/wp-content/uploads/2022/12/resir.png",
    },
    {
      name: "Dr. Rohini Nagapadma",
      designation: "Principal",
      department: "The National Institute of Engineering (NIE), Mysuru",
      imglink: "https://nie.ac.in/wp-content/uploads/2022/06/rnp-principal-300x290.jpeg",
    },
    {
      name: "Dr. K.C. Manjunath",
      designation: "Vice Principal",
      department: "The National Institute of Engineering (NIE), Mysuru",
      imglink: "https://nie.ac.in/wp-content/uploads/2019/02/DrKCM-VP-South.jpg",
    },
  ];

  return (
    <div className="">
      <div className="text-gogreen text-2xl text-center font-semibold underline underline-2">Chief Patron</div>
      <Slides data={data} />
    </div>
  );
}

export default Chiefpatron;
