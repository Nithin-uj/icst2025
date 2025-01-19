import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import noimage from "../../assets/noimage.svg";

function Section1() {
  const [tabs, setTabs] = useState(1);
  return (
    <div className="m-2">
      <div className="flex justify-start md:justify-center gap-2 md:gap-3 overflow-scroll no-scrollbar">
        <button
          className={`${
            tabs == 1 && "border-b-4 border-b-orange-400 font-bold"
          }`}
          onClick={() => {
            setTabs(1);
          }}
        >
          Conference
        </button>
        <button
          className={`${
            tabs == 2 && "border-b-4 border-b-orange-400 font-bold"
          }`}
          onClick={() => {
            setTabs(2);
          }}
        >
          Technical
        </button>
        <button
          className={`${
            tabs == 3 && "border-b-4 border-b-orange-400 font-bold"
          }`}
          onClick={() => {
            setTabs(3);
          }}
        >
          Publication
        </button>
        <button
          className={`${
            tabs == 4 && "border-b-4 border-b-orange-400 font-bold"
          }`}
          onClick={() => {
            setTabs(4);
          }}
        >
          Arrangement
        </button>
        <button
          className={`${
            tabs == 5 && "border-b-4 border-b-orange-400 font-bold"
          }`}
          onClick={() => {
            setTabs(5);
          }}
        >
          Finance
        </button>
      </div>
      <div>{rendertabs(tabs)}</div>
    </div>
  );
}

const rendertabs = (tabs) => {
  switch (tabs) {
    case 1:
      return (
        <div>
          <Conference />
        </div>
      );
    case 2:
      return <div><Technical/></div>;
    case 3:
      return <div><Publication/></div>;
    case 4:
      return <div><Arrangement/></div>;
    case 5:
      return <div><Finance/></div>;
    default:
      return <div></div>;
  }
};

const Slides = ({data}) => {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    // arrows:true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <div className="container mx-auto py-4">
      <Slider {...settings} className="h-full">
        {data.map((card, index) => (
          <div
            key={index}
            className="grid place-items-center w-full h-96 md:h-96 p-3"
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

const Slides2 = ({data}) => {
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
    <div className="container mx-auto py-4 lg:px-32">
      <Slider {...settings} className="h-full flex justify-center">
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

const Conference = () => {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    // arrows:true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  const conferenceCommittee = [
    {
      type: "Chair",
      name: "Prof. Shamsundar",
      imglink:
        "https://nie.ac.in/wp-content/uploads/2019/02/KVM_3487-1-e1591122477602.jpg",
      designation: "Associate Professor",
      department: "Dept. of ME, NIE, Mysuru",
      email: "sham@nie.ac.in",
      phone: "+91 9972695511",
    },
    {
      type: "Co-chair",
      name: "Dr. Imran M Jamadar",
      imglink: "https://nie.ac.in/wp-content/uploads/2021/03/jamadar.jpg",
      designation: "Dean R&D, Associate Professor",
      department: "Dept. of ME, NIE, Mysuru",
      email: "imjamadar@nie.ac.in",
      phone: "+91-9860603195",
    },
    {
      type: "Co-chair",
      name: "Dr. Stephan Weyers",
      imglink:
        "https://www.fh-dortmund.de/kontakt-daten/Weyers-Stephan.php.media/168538/Stephan_Weyers11510.jpg.scaled/ef0f8b9f2370859a2ac0382cf699453a.jpg",
      designation: "Professor",
      department:
        "University of Applied Sciences and Arts [FH] Dortmund, Germany",
    },
  ];
  return <Slides data={conferenceCommittee}/>;
};

const Technical = () => {
  const technicalCommittee = [
    {
      "type": "Chair",
      "name": "Prof. Vinod Rajamani",
      "imglink":"https://www.fh-dortmund.de/kontakt-daten/Rajamani-Vinod.php.media/82194/Vinod-Rajamani_Portrait.jpg.scaled/3312b7eed140ac54332cfc22f82c192c.jpg",
      "designation": "Professor",
      "department": "FH Dortmund University, Germany"
    },
    {
      "type": "Co-chair",
      "name": "Dr. S. A. Mohan Krishna",
      "imglink":"https://livedna.net/images/scientist/S.A.-Mohan-Krishna.jpg",
      "designation": "FIE-Honorary-Secretary",
      "department": "IE India Mysuru Chapter"
    },
    {
      "type": "Co-chair",
      "name": "Mr. Rampur Srinath",
      "imglink":"https://nie.ac.in/wp-content/uploads/2019/03/rampur-srinath.png",
      "designation": "Associate Professor",
      "department": "Dept. of ISE, NIE, Mysuru"
    }
  ];
  return <Slides data={technicalCommittee}/>
};

const Publication = () => {
  const data = [
    {
      "type": "Chair",
      "name": "Dr. K. R. Prakash",
      "designation": "Professor & Head",
      "department": "Dept. of ME, NIE, Mysuru",
      "imglink": "https://nie.ac.in/wp-content/uploads/2019/02/KVM_3510-1.jpg"
    },
    {
      "type": "Co-chair",
      "name": "Dr. Deepu R",
      "designation": "Chairman",
      "department": "IE India Mysuru Chapter",
      "imglink": "https://pes.edu/wp-content/uploads/2024/01/Dr.-Deepu-R.jpg"
    },
    {
      "type": "Co-chair",
      "name": "Mr. Prasanta Kumar Samal",
      "designation": "Assistant Professor",
      "department": "Dept. of ME, NIE, Mysuru",
      "imglink": "https://nie.ac.in/wp-content/uploads/2019/02/Prasanta-kumar-samal-1.jpg"
    }
  ]
  return <Slides data={data}/>
}

const Arrangement = () => {
  const data = [
    {
      "type": "Chair",
      "name": "Dr. Sharath Chandra N.",
      "designation": "Assistant Professor",
      "department": "Dept. of ME, NIE, Mysuru",
      "imglink": "https://nie.ac.in/wp-content/uploads/2019/02/KVM_3505-1.jpg"
    },
    {
      "type": "Co-chair",
      "name": "Dr. Lakshmi Ranganatha V.",
      "designation": "Head",
      "department": "Dept. of CHE, NIE, Mysuru",
      "imglink": "https://nie.ac.in/wp-content/uploads/2019/02/KVM_3758-1.jpg"
    }
  ]
  return <Slides2 data={data}/>
}

const Finance = () => {
  const data = [
    {
      "type": "Chair",
      "name": "Dr. Vikram Athreya",
      "designation": "Assistant Professor",
      "department": "Dept. of ME, NIE, Mysuru",
      "imglink": "https://nie.ac.in/wp-content/uploads/2019/02/KVM_3511-1-e1591121408185.jpg"
    },
    {
      "type": "Co-chair",
      "name": "Dr. T. Raghavendra",
      "designation": "Assistant Professor",
      "department": "Dept. of ME, NIE, Mysuru",
      "imglink": "https://nie.ac.in/wp-content/uploads/2021/03/Dr-T-Raghavendra-mech.jpg"
    }
  ]
  return <Slides2 data={data}/>
}

export default Section1;
