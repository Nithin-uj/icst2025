import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import nie_logo from '../assets/nie_logo.svg'
import fd_logo from '../assets/fd_logo.svg'
import ioe_logo from '../assets/ioe_logo.svg'
import renewable_logo from '../assets/NIE_CREST.png'
import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import FileDownloader from "../components/Download";
import cinvite from "../assets/cinvitation.pdf";
import cposter from "../assets/cposter.pdf";

const SponsorshipData = [
  {
    title: 'Platinum Sponsors',
    description: [
      'Keynote address during the Conclave.',
      'Exhibit stall space of 30 ft x 10 ft.',
      'Free registrations for 5 participants.'
    ],
    amount: '₹3 Lakhs'
  },
  {
    title: 'Gold Sponsors',
    description: [
      'Presentation during the Conclave.',
      'Exhibit Stall space of 20 ft x 10 ft.',
      'Free registrations for 3 participants.'
    ],
    amount: '₹1 Lakhs'
  },
  {
    title: 'Silver Sponsors',
    description: [
      'Exhibit stall space of 10 ft x 10 ft.',
      'Free registrations for 2 participants.'
    ],
    amount: '₹50 Thousand'
  },
  {
    title: 'Associate Sponsors',
    description: [
      'Exhibit stall space of 10 ft x 10 ft.',
      'Free registrations for 1 participants.'
    ],
    amount: '₹30 Thousand'
  }
]

const RegistrationData = [
  {
    title: 'Companies',
    description: 'Engineers, Technocrats, Decision-makers, Directors, CEOs and others',
    amount: '₹ 2000'
  },
  {
    title: 'Research Organization, NGOs, Academia',
    description: 'Faculty from academic institutions',
    amount: '₹ 1500'
  },
  {
    title: 'Individual Registrations',
    description: 'Pioneer Investors, Venture Capitalists, Potential Entrepreneurs, Technology Leaders etc.',
    amount: '₹ 1000'
  },
  {
    title: 'Students',
    description: 'Students from all Academic Institutions',
    amount: '₹ 500'
  }
]

const SectionsData = [
  {
    title: 'OBJECTIVE',
    description: [
      'Explore global and Indian innovations in sustainable technology.',
      'Facilitate discussions on government policies and programs in sustainable tech.',
      'Provide a collaborative platform for experts and emerging leaders in sustainable fields.',
      'Offer networking opportunities for investors and technologists to foster partnerships.',
      'Encourage collaborations to launch sustainable entrepreneurial ventures.',
      'Showcase the industry\'s latest technological advancements in sustainability.'
    ]
  },
  {
    title: 'WE INVITE',
    description: [
      'Technology Leaders',
      'Pioneer Investors',
      'Venture Capitalisis',
      'Policy Makers',
      'Academic and Research Institutions',
      'Non-Governmental Organizations',
      'Students'
    ]
  },
  {
    title: 'SPONSORS & EXHIBITORS PRESENTATION',
    description: 'Keynote address & presentations by sponsors & exhibitors to showcase their contributions in the domain of Sustainability.',
    image: img1
  },
  {
    title: 'NETWORKING',
    description: 'ICST 2025 offers a dynamic platform for entrepreneurs, investors, and academics to share ideas, proposals, and advancements in sustainable technology. Designated boardrooms will be available for B2B and B2C discussions. Visit the conference site to book a slot!',
    image: img2
  },
  {
    title: 'POSTER PRESENTATION',
    description: 'Students and researchers are invited to present pastiers on sustainable inviovations, providing an opportunity to highlight research and Dees. For rules and registration visit the conference website.',
    image: img3
  }
]

function Conclave() {
  const CustomNextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 z-10 bg-[#3c5e4b] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer text-white hover:bg-[#2a4434] transition-colors"
    >
      <FaChevronRight className="w-6 h-6" />
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 z-10 bg-[#3c5e4b] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer text-white hover:bg-[#2a4434] transition-colors"
    >
      <FaChevronLeft className="w-6 h-6" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const CustomUpArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className='absolute top-[-50px] left-1/2 transform -translate-x-1/2 z-10 w-10 h-10 cursor-pointer text-[#ebc136]'>
      <FaChevronUp className='w-8 md:w-12 h-8 md:h-12' />
    </div>
  );
  
  const CustomDownArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className='absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 z-10 w-10 h-10 cursor-pointer text-[#ebc136]'>
      <FaChevronDown className='w-8 md:w-12 h-8 md:h-12' />
    </div>
  );

  const verticalSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <CustomDownArrow />,
    prevArrow: <CustomUpArrow />,
    speed: 500,
    easing: 'ease-in-out',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gogreen shadow-md shadow-slate-700 p-3">
        <h1 className="text-center text-3xl md:text-4xl font-bold my-5 text-white">2nd International conclave on Sustainable Technologies for MSME sector</h1>
        <div className="font-semibold my-5 flex justify-center w-full">
          <div className="md:w-7/12 text-center z-10 text-white text-lg md:text-xl">
            19th and 20th February 2025
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-center items-stretch justify-center gap-10 my-10 mx-auto w-3/4 text-lg font-semibold">
          <div className="text-center flex flex-col items-center justify-center gap-3 bg-white mx-auto w-full md:w-1/3 p-3 border rounded-s-3xl shadow-md ">
            <div>Organized by :</div>
            <div><img src={nie_logo} alt="nie_logo" className="w-auto h-16" /></div>
            <div>The National Institute of Engineering</div>
          </div>

          <div className="text-center flex flex-col items-center justify-center gap-3 bg-white mx-auto w-full md:w-1/3 p-3 border shadow-md">
            <div>In Collaboration with :</div>
            <div><img src={fd_logo} alt="fd_logo" className="w-auto h-16" /></div>
            <div>FH Dortmund University Germany</div>
          </div>

          <div className="text-center flex flex-col items-center justify-center gap-3 bg-white mx-auto w-full md:w-1/3 p-3 border rounded-e-3xl shadow-md">
            <div>Technically Co Sponsored by :</div>
            <div><img src={ioe_logo} alt="ioe_logo" className="w-auto h-16" /></div>
            <div>The Institution of Engineers(India), Mysuru Local Center.</div>
          </div>
        </div>

        <div className='text-center text-white text-lg md:text-lg font-semibold my-3'>
          <div>Venue : Diamond Jubilee Sports Complex, NIE, Mysore, India</div>
        </div>
      </div>
      
      <div className="flex justify-center md:gap-12 relative flex-wrap pt-4">
      
        <FileDownloader fileName="Conclave Invitaion" fileUrl={cinvite} />
        <FileDownloader fileName="Conclave Poster Template" fileUrl={cposter} />
      </div>
      <hr className="border border-black border-dotted my-2 mx-20" />

      <div className='p-3 md:p-6 md:px-[80px] md:pb-1 text-xl'>
        <p className='m-6 md:m-10 text-xl md:text-xl'>In our rapidly evolving world, sustainable technology is becoming essential for addressing pressing environmental challenges. Non-renewable energy sources, while still prominent, are finite and contribute significantly to greenhouse gas emissions and climate change. Sustainable technology offers renewable and environmentally responsible alternatives that can reduce these impacts and support a healthier planet.</p>

        <p className='m-6 md:m-10 text-xl md:text-xl'>The Clean Fuels International Conclave 2022, was organized by NIE on November 2-3 at Silent Shores Convention Centre in Mysuru, India. It was dedicated to exploring the theme of the evolving biofuel ecosystem in India and the growing investment opportunities within it. The event was further enriched by the valuable international collaborations established through partnerships with Tech4Fuels, OWI, and the FH Dortmund University of Applied Sciences and Arts.</p>
        <div className='flex justify-center items-center'>
        <button className="bg-gradient-to-r from-green-800 to-green-600 text-white text-2xl rounded-full px-10 py-4 m-2">
        <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfgfD4s1206cag5nlLotddp59iX4IcpkBfhLG0EPdtvaWXkeg/viewform?usp=dialog">

        Register
        </a>
        </button>
      </div>
        <div className='text-3xl md:text-5xl flex justify-center items-center border-y-[3px] border-black p-2 md:p-4 mx-5 md:mx-10 m-10 md:m-14 text-[#d39609]'>
          ICST 2025 Conclave
        </div>

        <div className='bg-[#14532d] text-white p-1 md:p-6 m-4 mb-14 md:m-8 rounded-3xl text-xl md:text-xl'>
          <p className='m-6 md:m-10'>Continuing the legacy, The International conclave on Sustainable technologies has been organized in Feb 2025. The ICST 2025 Conclave aims to address challenges within the sustainable technology landscape, including land allocation, feedstock supply chains, affordable financing, and innovative market creation. By bringing together global thought leaders, researchers, and industry experts, this event will facilitate meaningful discussions and propose solutions to accelerate the adoption of sustainable practices across various sectors, ultimately supporting the development of a resilient and eco-friendly future.</p>
          <p className='m-6 md:m-10'>We warmly invite all stakeholders committed to sustainable progress to participate in the International Conclave on Sustainable Technology (ICST 2025) σπ February 19th & 20th, 2025, in Mysuru, India. This global platform is dedicated to fostering discussions and collaborations among industry experts, policymakers, business leaders, academics, researchers, and educational pioneers in the field of sustainability</p>


          <p className='m-6 md:m-10'>Mysuru is an ideal host for ICST 2025, celebrated for its historical architecture, vibrant cultural heritage, and commitment to environmental cleanliness. Recognized as one of India's cleanest cities, Mysuru combines traditional charm with modern connectivity, making it accessible by air, rail, and road, Located amid lush agricultural and horticultural landscapes, Mysuru is also a rising industrial center, balancing historical legacy with contemporary innovation</p>

          <p className='m-6 md:m-10'>Join us in Mysuru to be part of meaningful dialogues, experience collaborative sessions, and witness groundbreaking innovations that shape the future of sustainable technology.</p>
        </div>
      </div>

      <div className="flex justify-center items-center m-3 md:m-10 mb-16 md:mb-32">
        <div className='w-[90%] md:w-full max-w-screen-xl relative'>
          <Slider {...verticalSettings}>
            {SectionsData.map((d, i) => (
              <div key={i} className='p-3 pt-5 md:p-6 my-2 md:my-6 rounded-2xl mx-auto w-full bg-[#d9d9d9] h-[400px] shadow-lg flex flex-col'>
                <div className='flex justify-center items-center text-2xl md:text-4xl font-bold text-center mb-4 text-white bg-[#14532D] rounded-xl lg:mx-52'>
                  {d.title}
                </div>

                {d.image ? (
                  <div className="flex flex-col md:flex-row items-center justify-between m-4">
                    <div className="flex-1 text-base md:text-lg lg:text-2xl text-gray-800">
                      {Array.isArray(d.description) ? (
                        <ul className='list-disc pl-6 space-y-3 font-small'>
                          {d.description.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className='font-small'>{d.description}</p>
                      )}
                    </div>

                    <div className="p-2 ml-6 w-2/3 md:w-1/4 flex-shrink-0">
                      <img src={d.image} alt={d.title} className="w-[80%] md:w-full h-auto object-cover rounded-lg" />
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-row items-center justify-center'>
                    <div className="h-[300px] flex items-start justify-center overflow-y-auto m-4">
                      {Array.isArray(d.description) ? (
                        <ul className='list-disc pl-6 space-y-3 text-base md:text-lg lg:text-2xl text-gray-800 font-small'>
                          {d.description.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-center text-lg md:text-2xl text-gray-800">{d.description}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className='pt-4 mx-10 md:mx-50 lg:mx-96 flex justify-center items-center text-3xl md:text-5xl border-b-[3px] border-b-[#ebc136] pb-4'>
        Sponsorship
      </div>

      {/* Sponsorship Section */}
      <div className="w-[75%] md:w-3/4 m-auto mt-10 mb-20">
        <Slider {...settings}>
          {SponsorshipData.map((d, index) => (
            <div key={index} className="px-2">
              <div className="bg-[#3c5e4b] p-6 rounded-3xl text-white h-[450px] flex flex-col">
                <div className="h-24 flex items-center justify-center">
                  <div className="text-3xl md:text-4xl font-bold text-center">{d.title}</div>
                </div>

                <div className="h-48 flex items-center justify-center overflow-hidden m-4">
                  {Array.isArray(d.description) ? (
                    <ul className="list-disc pl-6 space-y-2 overflow-y-auto text-lg md:text-xl">
                      {d.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-center text-xl">{d.description}</p>
                  )}
                </div>

                <div className="h-24 flex items-center justify-center">
                  <div className="text-3xl font-semibold text-center">
                    {d.amount}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className='pt-4 mx-10 md:mx-50 lg:mx-96 flex justify-center items-center text-3xl md:text-5xl border-b-[3px] border-b-[#ebc136] pb-4'>
        Registration Fee
      </div>

      {/* Registration Fee Section */}
      <div className="w-[75%] md:w-3/4 m-auto my-10">
        <Slider {...settings}>
          {RegistrationData.map((d, index) => (
            <div key={index} className="px-2">
              <div className="bg-[#3c5e4b] p-6 rounded-3xl text-white h-[450px] flex flex-col">
                <div className="h-24 flex items-center justify-center">
                  <div className="text-3xl md:text-4xl font-bold text-center">{d.title}</div>
                </div>

                <div className="h-48 flex items-center justify-center overflow-hidden">
                  <p className="text-center text-lg md:text-xl">{d.description}</p>
                </div>

                <div className="h-24 flex items-center justify-center">
                  <div className="text-3xl font-semibold text-center">
                    {d.amount}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      

      <div className='flex justify-center items-center my-20'>
        <div className='bg-[#d9d9d9] h-[750px] md:h-[400px]  w-[90%] lg:w-[80%] rounded-2xl'>
          <div className='flex flex-col md:flex-row justify-evenly p-4 sm:gap-20'>
            <div className='sm:flex flex-col justify-center items-center sm:w-full md:w-20 lg:w-40 h-40 sm:mb-20'>
              <img src={nie_logo} alt="NIE Logo" className="w-full h-full object-contain" />
              <p className="text-center flex justify-center items-start text-gray-700 m-2 ml-0 lg:ml-10">ESTD: 1946</p>
            </div>
            <div className='flex flex-col justify-center items-center w-full md:w-[30%] mt-10 md:mt-0'>
              <p className='text-black-800 text-xl md:text-2xl lg:text-5xl text-center font-semibold border-b-4 border-b-[#ebc136] w-full mx-auto pb-2'>Contact Us</p>
              <div className='flex flex-col justify-center items-center text-lg md:text-sm lg:text-2xl pt-3'>
                <p>For any queries:</p>
                <p>E-mail: nie_conclave@nie.ac.in</p>
                <div className='inline'>
                  <p className='mr-2'>Phone No. : +91 9972695511</p>
                  <p className='ml-[90px] md:ml-[70px] lg:ml-[122px]'>+91 9036949487</p>
                </div>
              </div>
            </div>
            <div className='flex justify-center lg:items-center sm:w-25 sm:h-25 md:w-15 md:h-15 lg:w-25 lg:h-25'>
              <img src={renewable_logo} className='sm:w-25 md:w-15 lg:w-full h-[60%] lg:h-full object-cover rounded-lg' alt="" />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center text-lg md:text-xl lg:text-2xl xl:text-3xl   font-semibold px-5'>
            <div>NIE - Centre for Renewable Energies and  Technologies (NIE - CREST)</div>
            <div className='font-bold'>THE NATIONAL INSTITUTE OF ENGINEERING, Mysuru, India</div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Conclave
