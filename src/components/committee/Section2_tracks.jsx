import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import noimage from "../../assets/noimage.svg";

function Section2_tracks() {
  const [tabs, setTabs] = useState(1);
  return (
    <div className="m-2 p-4">
      <div className="flex justify-start md:justify-center gap-2 md:gap-3 overflow-scroll no-scrollbar">
        <button
          className={`${
            tabs == 1 && "border-b-4 border-b-orange-400 font-bold"
          }`}
          onClick={() => {
            setTabs(1);
          }}
        >
          Track 1
        </button>
        <button
          className={`${
            tabs == 2 && "border-b-4 border-b-orange-400 font-bold"
          }`}
          onClick={() => {
            setTabs(2);
          }}
        >
          Track 2
        </button>
        <button
          className={`${
            tabs == 3 && "border-b-4 border-b-orange-400 font-bold"
          }`}
          onClick={() => {
            setTabs(3);
          }}
        >
          Track 3
        </button>
        <button
          className={`${
            tabs == 4 && "border-b-4 border-b-orange-400 font-bold"
          }`}
          onClick={() => {
            setTabs(4);
          }}
        >
          Track 4
        </button>
        <button
          className={`${
            tabs == 5 && "border-b-4 border-b-orange-400 font-bold"
          }`}
          onClick={() => {
            setTabs(5);
          }}
        >
          Track 5
        </button>
        <button
          className={`${
            tabs == 6 && "border-b-4 border-b-orange-400 font-bold"
          }`}
          onClick={() => {
            setTabs(6);
          }}
        >
          Track 6
        </button>
      </div>
      <div className="mt-2">{rendertabs(tabs)}</div>
    </div>
  );
}

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
    slidesToShow: 2,
    slidesToScroll: 1,
    // arrows:true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <div className="container mx-auto py-4 lg:px-48">
      <Slider {...settings} className="h-full">
        {data.map((card, index) => (
          <div
            key={index}
            className="grid place-items-center w-full h-80 md:h-80 p-3"
          >
            <div className="bg-gogreen4 text-white shadow-lg rounded-lg w-[95%] h-full md:w-60 p-3 mx-auto hover:scale-105 transition-transform duration-300">
              <div className="font-semibold text-center">{card.type}</div>
              <div className="h-full flex flex-col justify-around">
                <div className="flex justify-center">
                  <img
                    src={!!card.imglink ? card.imglink : noimage}
                    className="rounded-full w-44 h-44 md:w-36 md:h-36"
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

const rendertabs = (tabs) => {

  const trackCoordinationCommittee = {
    "Track 1": [
      {
        type: "Chair",
        name: "Dr. Jayasankar V. N.",
        designation: "Associate Professor",
        department: "Dept. of EE, NIE, Mysuru",
        imglink: "https://nie.ac.in/wp-content/uploads/2023/11/Jayasankar-eee.jpg",
      },
      {
        type: "Co-chair",
        name: "Dr. Rohith K Mathew",
        designation: "Associate Professor",
        department: "Dept. of EE, NIE, Mysuru",
        imglink: "https://nie.ac.in/wp-content/uploads/2021/04/RKM.jpg",
      },
    ],
    "Track 2": [
      {
        type: "Chair",
        name: "Dr. Rajalekshmi Kishore",
        designation: "Associate Professor",
        department: "Dept. of ECE, NIE, Mysuru",
        imglink: "https://nie.ac.in/wp-content/uploads/2020/09/Rajalekshmi-Kishore-ece.jpg",
      },
      {
        type: "Co-chair",
        name: "Dr. Kavitha S S",
        designation: "Associate Professor",
        department: "Dept. of ECE, NIE, Mysuru",
        imglink: "https://nie.ac.in/wp-content/uploads/2019/02/kavitha-ec.jpg",
      },
    ],
    "Track 3": [
      {
        type: "Chair",
        name: "Dr. Sangamesha M. A.",
        designation: "Assistant Professor",
        department: "Dept. of CHE, NIE, Mysuru",
        imglink: "https://nie.ac.in/wp-content/uploads/2019/02/drsangamesh.png",
      },
      {
        type: "Co-chair",
        name: "Dr. Sansarkashan",
        designation: "Assistant Professor",
        department: "Dept. of Physics, NIE, Mysuru",
        imglink: "https://nie.ac.in/wp-content/uploads/2019/04/Sankarshan-1.jpg",
      },
    ],
    "Track 4": [
      {
        type: "Chair",
        name: "Dr. N. C. Balaji",
        designation: "Associate Professor",
        department: "Dept. of CVE, NIE, Mysuru",
        imglink: "https://nie.ac.in/wp-content/uploads/2019/02/balajinc.png",
      },
      {
        type: "Co-chair",
        name: "Mr. Prasantakumar Samal",
        designation: "Associate Professor",
        department: "Dept. of ME, NIE, Mysuru",
        imglink: "https://nie.ac.in/wp-content/uploads/2019/02/Prasanta-kumar-samal-1.jpg",
      },
    ],
    "Track 5": [
      {
        type: "Chair",
        name: "Dr. Jayasri B. S.",
        designation: "Professor",
        department: "Dept. of CSE, NIE, Mysuru",
        imglink: "https://nie.ac.in/wp-content/uploads/2019/03/bsj-cse.jpg",
      },
      {
        type: "Co-chair",
        name: "Dr. Shashank D",
        designation: "Associate professor",
        department: "Dept. of ISE, NIE, Mysuru",
        imglink: "https://nie.ac.in/wp-content/uploads/2019/03/sd-ise-1.jpg",
      },
    ],
    "Track 6": [
      {
        type: "Chair",
        name: "Dr. Vasanth Keshav",
        designation: "Assistant Professor",
        department: "Dept. of CVE, NIE, Mysuru",
        imglink: "https://nie.ac.in/wp-content/uploads/2022/10/Vasanth-Keshav.jpg",
      },
      {
        type: "Co-chair",
        name: "Dr. K. Gourav",
        designation: "Assistant Professor",
        department: "Dept. of CVE, NIE, Mysuru",
        imglink: "https://nie.ac.in/wp-content/uploads/2019/02/2-2-1.jpg",
      },
    ],
  };

  switch (tabs) {
    case 1:
      return (
        <div>
          <h2 className="text-center text-md font-semibold text-gogreen">
            Sustainable Energy
          </h2>
          <Slides data={trackCoordinationCommittee["Track 1"]} />
        </div>
      );
    case 2:
      return (
        <div>
          <h2 className="text-center text-md font-semibold text-gogreen">
            Robotics & e-Mobility for Sustainable Development
          </h2>
          <Slides data={trackCoordinationCommittee["Track 2"]} />
        </div>
      );
    case 3:
      return (
        <div>
          <h2 className="text-center text-md font-semibold text-gogreen">
            Sustainable Materials
          </h2>
          <Slides data={trackCoordinationCommittee["Track 3"]} />
        </div>
      );
    case 4:
      return (
        <div>
          <h2 className="text-center text-md font-semibold text-gogreen">
            Design for Sustainability
          </h2>
          <Slides data={trackCoordinationCommittee["Track 4"]} />
        </div>
      );
    case 5:
      return (
        <div>
          <h2 className="text-center text-md font-semibold text-gogreen">
            Green Computing for Sustainability
          </h2>
          <Slides data={trackCoordinationCommittee["Track 5"]} />
        </div>
      );
    case 6:
      return (
        <div>
          <h2 className="text-center text-md font-semibold text-gogreen">
            Environment & Green Buildings for Sustainable Development
          </h2>
          <Slides data={trackCoordinationCommittee["Track 6"]} />
        </div>
      );
    default:
      return <div></div>;
  }
};

export default Section2_tracks;
