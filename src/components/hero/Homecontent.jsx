import React from "react";
import leaf from "../../assets/leaf.png";
import leaf2 from "../../assets/leaf2.png";
import calander from "../../assets/calander.svg";
import location from "../../assets/location.svg";
import globe from "../../assets/globe.svg";
import tree1 from "../../assets/tree1.svg";
import tree2 from "../../assets/tree2.svg";
import Timer from "./Timer";
import CardSlider from "./CardSlider";
import Sponlogos from "./Sponlogos";
import group35 from "../../assets/Group 35.svg";
import FileDownloader from "../../components/Download";
import broucher from "../../assets/Conference.pdf";
import cbroucher from "../../assets/Conclave.pdf";
import conference from "../../assets/conference.png";
import { Link } from 'react-router-dom';
import Flashnews from "./Flashnews"

function Homecontent() {
  return (
    <div className="text-white">
      <div className="relative">
        <div className="bg-gogreen shadow-md shadow-slate-700 p-3">
          <div className="flex justify-center">
            <div className="shadow-md m-3 w-full sm:w-9/12 md:w-8/12 lg:w-1/2 bg-white shadow-neutral-700 rounded text-black">
              <Sponlogos />
            </div>
          </div>
          <h1 className="text-center text-5xl font-bold my-5">ICST - 2025</h1>
          <div className="font-semibold my-5 flex justify-center w-full">
            <div className="md:w-7/12 text-center z-10">
              Join us for an inspiring event where industry leaders,
              researchers, and professionals gather to explore the latest
              advancements in sustainable technology and its impact on our
              world.
            </div>
          </div>
        </div>
        <img
          src={leaf}
          alt=""
          className="float-end absolute right-0 w-52 md:w-64 top-40 md:top-24"
        />
        <img
          src={leaf2}
          alt=""
          className="float-start absolute left-0 w-52 md:w-64 -bottom-3 md:-bottom-5"
        />
        <Flashnews/>
        <div className="text-black relative">
          <div className="md:flex m-10 md:flex-wrap justify-center text-white md:justify-evenly">
            <div className=" bg-gogreen md:w-72 m-1 rounded-md shadow-2xl shadow-slate-600 p-5">
              <div className="flex justify-center">
                <img src={calander} alt="Calander" className="p-5" />
                <div className="flex flex-col justify-center">
                  <b>Date</b>
                  <div>February</div>
                  <div>19 & 20, 2025</div>
                </div>
                
              </div>
              <div className="flex justify-center mt-8 ">
              <button class="bg-gogreen4 rounded-lg px-2 py-1 hover:text-logo2">
                <a href="#dates">view Important Dates</a>
                </button>
              </div>
              
            </div>
            <div className="bg-gogreen md:w-72 m-1 rounded-md shadow-2xl shadow-slate-600 p-5">
              <div className="flex justify-center">
                <img src={location} alt="Calander" className="p-5" />
                <div className="flex flex-col justify-center">
                  <b>Venue</b>
                  <div>
                    The National Institute
                    <br /> of Engineering
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button class="bg-gogreen4 rounded-lg px-2 py-1 hover:text-logo2">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/The+National+Institute+of+Engineering+South+Campus+(NIE+South)/@12.283902,76.640659,15z/data=!4m6!3m5!1s0x3baf65561e102919:0xf947b18cc5ad3d88!8m2!3d12.2838184!4d76.6414748!16zL20vMDRqdG5k?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D">
                 View Location
                  </a>
                  </button>
              </div>
            </div>
            <div className="bg-gogreen md:w-72 m-1 rounded-md shadow-2xl shadow-slate-600 p-5">
              <div className="flex justify-center">
                <img src={globe} alt="Approve" className="p-5" />
                <div className="flex flex-col justify-center">
                  <b>Approval</b>
                  <div>
                    IEI Approved &<br /> Global Participation
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8 ">
                <button class="bg-gogreen4 rounded-lg px-2 py-1 hover:text-logo2">
                  <a href="https://www.ieindia.org/" target="_blank" rel="noopener noreferrer">View IEI Website</a> </button>
              </div>
            </div>
            <div className="bg-gogreen md:w-72 m-1 rounded-md shadow-2xl shadow-slate-600 p-5">
              <div className="flex justify-center">
              <img src={conference} alt="Calander" class="w-32 h-32 p-6 object-cover"/>
              <div className="flex flex-col justify-center">
                  <b>Conclave</b>
                  <div>
                  International conclave on Sustainable technologies
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4 ">
              <button class="bg-gogreen4 rounded-lg px-2 py-1 hover:text-logo2">
                <Link to="/conclave">View Conclave
                </Link></button>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="text-2xl font-bold text-center text-gogreen">
              Going green in
            </div>
            <div className="text-4xl font-medium text-center pt-5 pb-10">
              <Timer targetDate="2025-02-19T10:00:00" />
            </div>
          </div>

          <div className="flex justify-center relative flex-wrap">
            <FileDownloader fileName="Conference Broucher" fileUrl={broucher} />
            <FileDownloader fileName="Conclave Broucher" fileUrl={cbroucher} />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-gogreen2 min-h-28 shadow-md shadow-slate-600">
          <div className="flex p-5 md:mx-20">
            <div className="w-full md:w-3/4 text-justify">
              <div className="text-2xl font-bold my-3">OUR VISION</div>
              <div className="font-semibold">
                NIE strives to be a globally acknowledged institution, fostering
                a culture of innovation and excellence in technical and
                scientific education. We aim to cultivate world-class talent
                that not only excels academically but also embodies strong
                ethical values and a commitment to societal progress. Through
                state-of-the-art facilities, cutting-edge research, and
                collaborative learning environments, we empower students to
                become leaders and change-makers in a rapidly evolving global
                landscape. Our vision is to continuously advance the frontiers
                of knowledge while contributing to sustainable development and
                the well-being of humanity.
              </div>
            </div>
            <div className="hidden md:block">
              <img src={tree1} alt="" className="min-w-40 max-w-80" />
            </div>
          </div>
          <div className="flex p-5 md:mx-20">
            <div className="hidden md:block">
              <img src={tree2} alt="" className="min-w-40 max-w-80" />
            </div>
            <div className="w-full md:w-3/4 text-justify">
              <div className="text-2xl font-bold my-3">OUR MISSION</div>
              <div className="font-semibold">
                Impart state-of-the-art engineering education through strong
                theoretical foundation and practical training to students in
                their choice of specialization. Create new knowledge through
                innovation and cutting-edge research in science and engineering.
                Provide a platform for inclusiveness and collaboration by
                following ethical and responsible engineering practices for
                long-term interaction with academia and industry. Encourage
                entrepreneurship and develop sustainable technologies for the
                benefit of global society.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="text-slate-900">
          <div className="text-gogreen text-2xl font-bold text-center my-4 md:my-8">
            Meet Our Sponsors
          </div>
          <CardSlider />
        </div> */}
      </div>

      <div id="dates" className="text-gogreen text-2xl text-center font-semibold my-3">
        Important Dates
      </div>
      <div className="m-4 flex justify-center">
        <span className="md:w-1/2">
          <img src={group35} alt="" />
        </span>
      </div>
    </div>
  );
}

export default Homecontent;
