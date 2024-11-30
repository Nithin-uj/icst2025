import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Callforpapers() {
  return (
    <>
      <Navbar />
      <div className="about-us w-full justify-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gogreen via-gogreen to-green-400 flex justify-center p-5">
          Call for papers
        </h1>
        <p className="mx-3 md:mx-9 lg:mx-14 text-center text-green-800 font-medium">
          The conference does not accept or encourage the submission of Survey
          or Review articles. We aim to maintain a focus on high-quality,
          original research that contributes new insights and advances in the
          field of Sustainable Technology.
        </p>
        <hr className="m-4 border-gogreen border-1" />
        <div className="md:mx-9 lg:mx-20">
          <h2 className="font-bold mx-4 text-xl text-green-800">
            Submission Guidelines
          </h2>
          <p className="mx-4 my-2 text-justify">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Submission Guidelines Prospective authors
            are encouraged to submit quality and original research papers for
            presentation at the Conference. Authors are requested to submit
            their manuscripts in Word/PDF format as per the guidelines of
            Journal of Institution of Engineers (India) Series A-D through
            online submission at Microsoft CMT <a className="text-blue-600" href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICST2025">Click here</a> or&nbsp;
            <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICST2025" className="text-blue-600 hidden md:block">https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICST2025</a>
            &nbsp;on or before 15th December 2024. The manuscript should follow the
            standard IEI template <a href="https://www.ieindia.org/webui/iei-home.aspx" className="text-blue-600">Standard IEI template</a> or <a href="https://www.ieindia.org/webui/iei-home.aspx" className="text-blue-600 hidden md:block">https://www.ieindia.org/webui/iei-home.aspx</a>
            All submissions for the conference will be handled electronically on
            Microsoft CMT platform. The submitted papers will be peer-reviewed
            by domain experts. The significant contributions from the conference
            will be communicated to IEI Journals. All the remaining accepted &
            presented papers in the conference will be communicated to Scopus
            indexed Journals/Conference Proceedings/Book Chapter, the details
            about which will be updated on the conference website. Authors can
            download the required manuscript template by visiting the link
            provided below:
          </p>
          <a className="mx-4 bg-green-900 text-white p-2 px-4 rounded" href="https://www.ieindia.org/webui/IEI-Activities.aspx#Call_Papers">
            Manuscript Template
          </a>
        </div>
        <div className="md:mx-9 lg:mx-20">
          <h2 className="font-bold mx-4 mt-6 text-xl text-green-800">
            Publication
          </h2>
          <p className="mx-4 my-3 text-justify">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All the Registered and Selected Papers will
            be published in SCOPUS/WoS INDEXED JOURNAL following the routine
            editorial process of the respective journal. Journal of Institution
            of Engineers (India) Series: A to D (Springer) Sigma Journal of
            Engineering and Natural Sciences [Scopus/WoS Indexed]
          </p>
          <a className="mx-4 bg-green-900 text-white p-2 px-4 rounded" href="https://www.ieindia.org/webui/ajax/Downloads/WebUI_PDF/Call_F_Papers/GUIDELINE_FOR_SUBMISSION.pdf?v20240429.1">
          Guidelines for Authors
          </a>
        </div>
        <div className="flex justify-center my-6 text-white p-3">
          <a className="bg-gradient-to-r from-green-500 to-green-800 font-semibold rounded-lg p-3 px-10" href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICST2025">
            Submit the paper
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Callforpapers;
