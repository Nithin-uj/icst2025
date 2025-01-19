import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import regimg from "../assets/regimg.svg";
import leaf3 from "../assets/leaf3.svg";
import check from "../assets/check.svg";
import group35 from "../assets/Group 35.svg";

function Registration() {
  return (
    <div>
      <Navbar />
      <div className="m-5 text-3xl text-gogreen font-bold text-center">
        Registration
      </div>
      <div className="w-full md:flex md:justify-center">
        <div className=" block md:flex justify-center space-y-2 md:space-y-0 md:space-x-2 md:px-20 w-full lg:w-10/12 p-2">
          <div className="bg-green-800 md:w-3/12 rounded-lg text-white p-3">
            <span className="flex justify-center font-bold text-2xl">
              Category
            </span>
            <div className="text-center font-semibold">
              * 10% off for IEI Members
            </div>
            <div className="flex justify-center">
              <img src={regimg} alt="" className="p-4 w-52" />
            </div>
          </div>
          <div className="border border-gogreen md:w-3/12 rounded-lg p-3 flex flex-col justify-between">
            <span className="flex justify-center">
              <img
                src={leaf3}
                alt=""
                className="pe-2"
                style={{ width: "30px" }}
              />
              <h2 className="text-2xl font-bold">Academic</h2>
            </span>
            <span className="flex place-items-start m-3 overflow-auto">
              <img src={check} alt="" />
              UG/PG/PhD Scholar/Faculty from India
            </span>
            <div>
              <hr className="border border-slate-600 border-dotted" />
              <span className="text-lg font-bold flex justify-start m-3">
                ₹ 6000
              </span>
              <span className="text-md font-bold flex justify-start m-3">
                <span className="font-medium">Early Bird Reg. </span>&nbsp; ₹ 4000
              </span>
            </div>
          </div>
          <div className="border border-gogreen md:w-3/12 rounded-lg p-3 flex flex-col justify-between">
            <span className="flex justify-center">
              <img
                src={leaf3}
                alt=""
                className="pe-2"
                style={{ width: "30px" }}
              />
              <h2 className="text-2xl font-bold">Industry</h2>
            </span>
            <span className="flex place-items-start m-3 overflow-auto">
              <img src={check} alt="" />
              Industry Professional from India
            </span>
            <div>
              <hr className="border border-slate-600 border-dotted" />
              <span className="text-lg font-bold flex justify-start m-3">
                ₹ 7500
              </span>
              <span className="text-md font-bold flex justify-start m-3">
                <span className="font-medium">Early Bird Reg. </span>&nbsp; ₹ 6000
              </span>
            </div>
          </div>
          <div className="border border-gogreen md:w-3/12 rounded-lg p-3 flex flex-col justify-between">
            <span className="flex justify-center">
              <img
                src={leaf3}
                alt=""
                className="pe-2"
                style={{ width: "30px" }}
              />
              <h2 className="text-2xl font-bold">Non-resident</h2>
            </span>
            <span className="flex place-items-start m-3 overflow-auto no-scrollbar">
              <img src={check} alt="" />
              Foreign Authors (UG/PG/PhD Scholar/Faculty/Industry)
            </span>
            <div>
              <hr className="border border-slate-600 border-dotted" />
              <span className="text-lg font-bold flex justify-start m-3">
                $ 200
              </span>
              <span className="text-md font-bold flex justify-start m-3">
                <span className="font-medium">Early Bird Reg. </span>&nbsp; $ 175
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
  {/* Note Section */}
  <div className="md:w-1/2 border rounded-md border-green-800 mx-4 lg:mx-48 p-4"> 
    <b className="text-green-950">Note :</b>
    <ul className="list-disc pl-5 text-green-900">
      <li>Early bird registration ends on 31st January 2025</li>
      <li>Fees specified are applicable for each attendee</li>
    </ul>
  </div>

  {/* Button Section */}
  <div className="md:w-1/2 flex justify-center lg:justify-start  items-center"> 
    <button className="bg-gradient-to-r from-green-800 to-green-600 text-white text-2xl rounded-full px-10 py-4 m-2">
      <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/tWPVg4RNquTXx5EXA">
      Register
      </a>
    </button>
  </div>  
</div>

      <div>
        <hr className="border border-black border-dotted my-2 mx-20" />
        <div>
          <h2 className="text-gogreen text-2xl text-center font-semibold my-3">
            Additional Information
          </h2>
          <div className="mx-4 md:mx-9 lg:mx-20">
            <p className="my-4">
              <div className="py-3">
                *All the pricing details mentioned above are inclusive of 18%
                GST{" "}
              </div>
              <div className="my-4">
                <b className="text-lg">Accommodation Fees </b>
                <ul className="list-disc ms-4">
                  <li>
                    <span className="font-semibold">Indian Participants:</span>{" "}
                    INR 1000 per person per day
                  </li>
                  <li>
                    <span className="font-semibold">Foreign Participants:</span>{" "}
                    USD 20 per person per day
                  </li>
                </ul>
              </div>
              <div className="my-4">
                <b className="text-lg">Account Details </b>
                <ul className="list-disc ms-4">
                  <li>
                    <span className="font-semibold">Beneficiary Name:</span> The
                    National Institute of Engineering{" "}
                  </li>
                  <li>
                    <span className="font-semibold"> Bank Name:</span> HDFC Bank
                    Ltd.{" "}
                  </li>
                  <li>
                    <span className="font-semibold"> Account No:</span>
                     50100243056071{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="font-semibold">RTGS/NEFT IFSC:</span>
                     HDFC0002568{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="font-semibold">Account Branch:</span> K R
                    Mohalla- Mysuru{" "}
                  </li>
                </ul>
              </div>
              <b className="text-lg">Instructions for Registration</b>
              <ul className="list-disc ms-4">
                <li>
                  At least one author per accepted paper has to register.{" "}
                </li>
                <li>
                  At least one author must present their accepted paper in the
                  conference for consideration of publication on IEI Explore.{" "}
                </li>
                <li>
                  Registration fee for the paper (with authorship) includes
                  access to conference proceedings, all technical sessions, and
                  a presenter certificate.{" "}
                </li>
                <li>
                  Registration fee for conference participation without
                  authorship; attendees are not entitled to paper publication;
                  however, a participation certificate will be provided.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-gogreen text-2xl text-center font-semibold">
            Important Notice
          </h2>
          <div className="mx-4 md:mx-9 lg:mx-20">
            <ul className="list-disc ms-4 my-6">
              <li>
                Registration category should be chosen appropriately from the
                aforementioned table.{" "}
              </li>
              <li>
                Registration fees are not refundable or transferable. You must
                save the payment proof in PDF with UTR number.{" "}
              </li>
              <li>
                This payment proof file is to be attached in a section while
                filling the registration form.{" "}
              </li>
              <li>
                ICST-2025 organizing committee will not be responsible for any
                financial loss caused by improper transactions during the
                registration process in ICST-2025.{" "}
              </li>
              <li>
                The author's name(s) must match the ones provided during the
                manuscript submission and registration (There should be one/same
                name at all stages of the conference).{" "}
              </li>
              <li>
                The submission of invalid proofs will lead to the cancellation
                of participation in the conference.
              </li>
            </ul>
          </div>
        </div>
        <hr className="border border-black border-dotted my-2 mx-20" />
        <div className="text-gogreen text-2xl text-center font-semibold my-3">
          Important Dates
        </div>
        <div className="m-4 flex justify-center">
          <span className="md:w-1/2">
            <img src={group35} alt="" />
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Registration;
