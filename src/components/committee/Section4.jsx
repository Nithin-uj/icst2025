import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import noimage from "../../assets/noimage.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import "swiper/swiper-bundle.css";
import image1 from "../../assets/student/thanusha.jpg"
import image2 from "../../assets/student/vikas.jpg"
import image3 from "../../assets/student/Anirudh.png"
import image4 from "../../assets/student/Vimal.png"
import image5 from "../../assets/student/chaman.png"
import image6 from "../../assets/student/prathamesh.jpg"


function Section4() {
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
          Advisory Committee
        </button>
        <button
          className={`${
            tabs == 2 && "border-b-4 border-b-orange-400 font-bold"
          }`}
          onClick={() => {
            setTabs(2);
          }}
        >
          Student committee
        </button>
        {/* <button
          className={`${
            tabs == 3 && "border-b-4 border-b-orange-400 font-bold"
          }`}
          onClick={() => {
            setTabs(3);
          }}
        >
          Faculty co&#8209;ordinator
        </button> */}
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
          <Advisory />
        </div>
      );
    case 2:
      return (
        <div>
          <Student/>
        </div>
      );
    case 3:
      return <div></div>;
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
    slidesToShow: 5,
    slidesToScroll: 1,
    // arrows:true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 6 },
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
            className="grid place-items-center w-full h-80 md:h-80 p-3"
          >
            <div className="bg-gogreen4 text-white shadow-lg rounded-lg w-[95%] h-full md:w-60 p-3 mx-auto hover:bg-red-500 hover:scale-105 transition-transform duration-300">
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

const Advisory = () => {
  const data = [
    {
      name: "Dr. Yusuf Javed",
      designation: "Professor & Head",
      department: "Dept. of CVE, NIE, Mysuru",
      imglink: "https://nie.ac.in/wp-content/uploads/2019/02/KVM_3482-1.jpg",
    },
    {
      name: "Dr. Pradeepa H.",
      designation: "Associate Professor & Head",
      department: "Dept. of EEE, NIE, Mysuru",
      imglink: "https://nie.ac.in/wp-content/uploads/2019/03/KVM_3484-1.jpg",
    },
    {
      name: "Dr. Parmeswara S",
      designation: "Associate Professor & Head",
      department: "Dept. of ECE, NIE, Mysuru",
      imglink: "https://nie.ac.in/wp-content/uploads/2019/03/sp.png",
    },
    {
      name: "Dr. H. N. Divakar",
      designation: "Professor & Head",
      department: "Dept. of IPE, NIE, Mysuru",
      imglink: "https://nie.ac.in/wp-content/uploads/2019/02/KVM_3731-1.jpg",
    },
    {
      name: "Dr. Anitha R",
      designation: "Professor & Head",
      department: "Dept. of CSE, NIE, Mysuru",
      imglink: "https://nie.ac.in/wp-content/uploads/2019/03/anithar.png",
    },
    {
      name: "Dr. Girish",
      designation: "Professor & Head",
      department: "Dept. of ISE, NIE, Mysuru",
      imglink: "https://nie.ac.in/wp-content/uploads/2019/03/girish.png",
    },
    {
      name: "Dr. S. Doreswamy",
      designation: "Professor & Head",
      department: "Dept. of PHY, NIE, Mysuru",
      imglink: "https://nie.ac.in/wp-content/uploads/2019/02/doreswamy.png",
    },
    {
      name: "Dr. Shubha Nagaraj",
      designation: "Associate Professor & Head",
      department: "Dept. of Maths, NIE, Mysuru",
      imglink: "https://nie.ac.in/wp-content/uploads/2019/02/shubhanagraj-e1662537807592.png",
    },
    {
      name: "Dr. Sanjay Kumar C. K.",
      designation: "Associate Professor & Head",
      department: "Dept. of MCA, NIE, Mysuru",
      imglink: "https://nie.ac.in/wp-content/uploads/2019/03/sanjaykumar.png",
    },
    {
      name: "Dr. S. N. Omkar",
      designation: "Chief Research Scientist, Control & Guidance",
      department: "Indian Institute of Science, Bangalore",
      imglink: "https://iiscprofiles.irins.org/assets/profile_images/3996.jpg",
    },
    {
      name: "Shashidhar Dongre",
      designation: "Delivery Head",
      department: "L&T Technology Services (LTTS), Senior IEEE member",
      imglink: "",
    },
    {
      name: "Shreeram Shanbhag",
      designation: "Global Head - Digital Consulting & Solutions",
      department: "L&T Technology Services Limited (LTTS)",
      imglink: "https://www.ltts.com/sites/default/files/styles/webinar_speakers/public/webinar/speaker/images/2020-06/Shanbhag.jpg?itok=Dz6Y5nRP",
    },
    {
      name: "Dr. D. P. Vakharia",
      designation: "Professor",
      department: "Mechanical Engineering, SVNIT, Surat",
      imglink: "",
    },
    {
      name: "Dr. V. M. Phalle",
      designation: "Associate Professor",
      department: "Mechanical Engineering, VJTI Mumbai",
      imglink: "https://vikasphalle.com/vmphalle.JPG",
    },
    {
      name: "Dr. Ravichandra Kulkarni",
      designation: "Associate Professor",
      department: "ECE, MIT Mysuru",
      imglink: "",
    },
    {
      name: "Dr. Damodar Reddy Edla",
      designation: "Associate Professor",
      department: "Department of Computer Science and Engineering, NIT Goa",
      imglink: "https://www.nitgoa.ac.in/People/frontend/Dr.%20Damodar%20Reddy%20Edla.png",
    },
    {
      name: "Dr. Naveen M. B.",
      designation: "Associate Professor",
      department:
        "Department of Electrical, Electronics and Communication Engineering (EECE), IIT Dharwad",
      imglink: "https://iitdh.ac.in/naveenmb/myPic.jpeg",
    },
    {
      name: "Dr. Sanjeev Gurugopinath",
      designation: "Engineering Director",
      department: "MMRFIC Tech. Pvt. Ltd.",
      imglink: "",
    },
    {
      name: "Dr. Nisha Haridas",
      designation: "Senior Lead Systems Engineer",
      department: "Qualcomm, Bangalore",
      imglink: "",
    },
    {
      name: "Dr. Praveen Gurunath Bharathi",
      designation: "Research Associate",
      department:"Nuclear Medicine and Molecular Imaging, Department of Radiology, Stanford Medicine, Stanford University, USA",
      imglink: "",
    },
    {
      name: "Dr. Nikhil Sasidharan",
      designation: "Assistant Professor",
      department: "Electrical Engineering Department, NIT Calicut",
      imglink: "https://nitc.ac.in/imgserver/uploads/compressed/pcm__ef497a82-d865-40ac-8d60-fbf384e4a834_0.png",
    },
    {
      name: "Dr. Vinatha U",
      designation: "Professor",
      department:
        "Electrical & Electronics Engineering Department, NITK Surathkal",
      imglink: "https://eee.nitk.ac.in/sites/default/files/UVnew-medium.jpg",
    },
    {
      name: "Dr. Jose Thankachan",
      designation: "Assistant Professor",
      department: "Electrical & Electronics Engineering Department, NIT Trichy",
      imglink: "https://www.nitt.edu/home/academics/departments/eee/people/faculty/joset/IMG_0238%20copy%20copy%20copy.jpg",
    },
    {
      name: "Dr. Shiva Ji",
      designation: "Associate Professor",
      department: "Indian Institute of Technology Hyderabad",
      imglink: "https://design.iith.ac.in/wp-content/uploads/2022/01/Shiva-Ji-e1642440346257.jpg",
    },
    {
      name: "Dr. A. P. Sudheer",
      designation: "Associate Professor",
      department: "Mechanical Engineering, NIT Calicut",
      imglink: "https://nitc.ac.in/imgserver/uploads/attachments/pcm__1f39d820-7a2c-4b39-b047-5dff332eaa49_0.png",
    },
    {
      name: "Dr. Arun P",
      designation: "Associate Professor",
      department: "Mechanical Engineering Department, NIT Calicut",
      imglink: "https://nitc.ac.in/imgserver/uploads/compressed/pcm__923f608b-3b9d-4ed0-8eb5-574cfa6e190f_0.png",
    },
    {
      name: "Prof. Vinay Kumar Ravi",
      designation: "Centre for Artificial Intelligence",
      department: "Prince Mohammad Bin Fahad University, Khobar, Saudi Arabia",
      imglink: "",
    },
    {
      name: "Dr. B. Surendiran",
      designation: "Associate Professor",
      department:
        "Dept. of CSE, National Institute of Technology Puducherry, Karaikal-609609, Puducherry, India",
      imglink: "https://www.nitpy.ac.in/assets/images/faculties/cse/Surendiran.jpg",
    },
    {
      name: "Dr. Pradeep Kumar TS",
      designation: "Professor",
      department: "School of Computer Science and Engineering, VIT, Chennai",
      imglink: "https://chennai.vit.ac.in/wp-content/uploads/2020/08/50024-Dr-PradeepKumar-TS-255x319.jpg",
    },
    {
      name: "Dr. Gururaj H. L.",
      designation: "Associate Professor",
      department:
        "Department of Information Technology, Manipal Institute of Technology, Bengaluru",
      imglink: "https://itsmeguru.in/img/ghl.jpeg",
    },
    {
      name: "Dr. Shrirang Ambaji Kulkarni",
      designation: "Associate Professor",
      department:
        "Department of Information Technology, Manipal Institute of Technology, Bengaluru",
      imglink: "https://pydata.org/global2021/media/speaker_photos/Dr_SAK_Taiwan.jpg.256x256_q85.jpg",
    },
    {
      name : "Dr. Likith Kumar M V",
      designation: "Associate Professor & Head IQAC",
      department : "Department of Electrical and Electronics Engineering",
      imglink:"https://nie.ac.in/wp-content/uploads/2021/09/LMV_New2-e1632814350742.jpg"
    }
  ];
  const slides = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);
  //   return <Slides data={data}/>
  return (
    <div className="m-2">
      <Swiper
        modules={[Grid]}
        spaceBetween={10}
        grid={{
          rows: 2,
          fill: "row",
        }}
        breakpoints={{
          // Mobile screens (default)
          0: {
            slidesPerView: 2, // 1 column
            grid: { rows: 2 }, // 2 rows
          },
          // Tablets
          640: {
            slidesPerView: 3, // 2 columns
            grid: { rows: 2 }, // 2 rows
          },
          // Desktops
          1024: {
            slidesPerView: 4, // 3 columns
            grid: { rows: 2 }, // 2 rows
          },
        }}
        //   slidesPerView={4}
        loop={false}
        className="mySwiper"
      >
        {data.map((card, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center text-black"
          >
            {console.log(index)}
            <div className="h-80 md:h-80 md:p-3">
              <div className="bg-gogreen4 text-white shadow-lg rounded-lg w-[95%] h-full md:w-60 p-2 md:p-3 mx-auto hover:md:scale-105 transition-transform duration-300">
                <div className="font-semibold text-center">{card.type}</div>
                <div className="h-full flex flex-col justify-around">
                  <div className="flex justify-center overflow-hidden">
                    <img
                      src={!!card.imglink ? card.imglink : noimage}
                      className="rounded-full w-36 h-36 md:w-36 md:h-36"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Student = () => {
  const data = [
    {
      name: "Thanusha A Patel",
      department: "Dept. of AI ML, NIE, Mysuru",
      imglink: image1,
    },
    {
      name: "Vikas S",
      department: "Dept. of CSE, NIE, Mysuru",
      imglink: image2,
    },
    {
      name: "Anirudh Bharagav",
      department: "Dept. of MECH, NIE, Mysuru",
      imglink: image3,
    },
    {
      name: "Vimal K A",
      department: "Dept. of CSE, NIE, Mysuru",
      imglink: image4,
    },
    {
      name: "Chaman A S",
      department: "Dept. of Mech, NIE, Mysuru",
      imglink: image5,
    },
    {
      name: "Prathamesh Mahesh Kulkarni",
      department: "Dept. of Mech, NIE, Mysuru",
      imglink: image6,
    },
  ];
  const slides = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);
  //   return <Slides data={data}/>
  return (
    <div className="m-2">
      <Swiper
        modules={[Grid]}
        spaceBetween={10}
        grid={{
          rows: 2,
          fill: "row",
        }}
        breakpoints={{
          // Mobile screens (default)
          0: {
            slidesPerView: 1, // 1 column
            grid: { rows: 2}, // 2 rows
          },
          // Tablets
          640: {
            slidesPerView: 3, // 2 columns
            grid: { rows: 2 }, // 2 rows
          },
          // Desktops
          1024: {
            slidesPerView: 3, // 3 columns
            grid: { rows: 2 }, // 2 rows
          },
        }}
        //   slidesPerView={4}
        loop={false}
        className="mySwiper"
      >
        {data.map((card, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center text-black"
          >
            {console.log(index)}
            <div className="h-80 md:h-80 md:p-3">
              <div className="bg-gogreen4 text-white shadow-lg rounded-lg w-[95%] h-full md:w-60 p-2 md:p-3 mx-auto hover:md:scale-105 transition-transform duration-300">
                <div className="font-semibold text-center">{card.type}</div>
                <div className="h-full flex flex-col justify-around">
                  <div className="flex justify-center overflow-hidden">
                    <img
                      src={!!card.imglink ? card.imglink : noimage}
                      className="rounded-full h-36 w-44 md:w-36"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default Section4;
