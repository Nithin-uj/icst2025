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
          Publicity
        </button>
        <button
          className={`${
            tabs == 2 && "border-b-4 border-b-orange-400 font-bold"
          }`}
          onClick={() => {
            setTabs(2);
          }}
        >
          Sustainability
        </button>
        <button
          className={`${
            tabs == 3 && "border-b-4 border-b-orange-400 font-bold"
          }`}
          onClick={() => {
            setTabs(3);
          }}
        >
          Sponsorship
        </button>
        <button
          className={`${
            tabs == 4 && "border-b-4 border-b-orange-400 font-bold"
          }`}
          onClick={() => {
            setTabs(4);
          }}
        >
          Hospitality & Transportation
        </button>
      </div>
      <div>{rendertabs(tabs)}</div>
    </div>
  );
}

const rendertabs = (tabs) => {
  switch (tabs) {
    case 1:
      return <div><Publicity/></div>;
    case 2:
      return (
        <div>
            <Sustainability/>
        </div>
      );
    case 3:
      return (
        <div>
            <Sponsorship/>
        </div>
      );
    case 4:
      return (
        <div>
            <Hospitality/>
        </div>
      );
    default:
      return <div></div>;
  }
};

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
      <Slider {...settings} className="h-full lg:px-32">
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

const Publicity = () => {
    const data = [
      {
        "type": "Chair",
        "name": "Dr. Prithvi C.",
        "designation": "Assistant Professor",
        "department": "Dept. of ME, NIE, Mysuru",
        // "imglink": "https://nie.ac.in/wp-content/uploads/2019/02/pruthvi-mech.jpg",
        "imglink" : "https://nie.ac.in/wp-content/uploads/2019/02/Prithvi.jpg"
      },
      {
        "type": "Co-chair",
        "name": "Mr. Vinod Kumar H. P.",
        "designation": "Assistant Professor",
        "department": "Dept. of ME, NIE, Mysuru",
        "imglink": "https://nie.ac.in/wp-content/uploads/2019/02/KVM_3536-1-e1591121453815.jpg"
      }
    ]
    return <Slides data={data}/>
}

const Sustainability = ()=>{
    const data = [
      {
        "type": "Chair",
        "name": "Dr. Shrinatha R. Katti",
        "designation": "Assistant Professor",
        "department": "Dept. of ME, NIE, Mysuru",
        "imglink": "https://nie.ac.in/wp-content/uploads/2023/11/srinathkatti-mech.jpg"
      },
      {
        "type": "Co-chair",
        "name": "Mr. Srikanth N. S.",
        "designation": "Assistant Professor",
        "department": "Dept. of ME, NIE, Mysuru",
        "imglink": "https://nie.ac.in/wp-content/uploads/2019/02/KVM_3791-1-e1591122291981.jpg"
      }
    ]
    return <Slides data={data}/>
}

const Sponsorship = ()=>{
    const data = [
        {
          "type": "Chair",
          "name": "Mr. Harshith Diwakar",
          "designation": "Training and Placement Officer",
          "department": "NIE Mysuru",
          "imglink": "https://media.licdn.com/dms/image/v2/D5603AQGFiYgOy3Bquw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702451328296?e=2147483647&v=beta&t=tY6XWK1dAegpCYS6dM5AkA55w04XxIf2XtkoeOUbmdQ"
        }
      ];
    return <Slides data={data}/>;
}

const Hospitality = ()=>{
    const data = [
        {
          "type": "Chair",
          "name": "Mr. Ravi Shankar MD",
          "designation": "Assistant Professor",
          "department": "Dept. of ME, NIE, Mysuru",
          "imglink": "https://nie.ac.in/wp-content/uploads/2023/11/ravishankar-mech.jpg"
        }
      ]
    return <Slides data={data}/>
}

export default Section1;
