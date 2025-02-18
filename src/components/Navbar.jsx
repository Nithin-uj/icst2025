import React, { useEffect, useState } from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(0);
  useEffect(()=>{
    const mdata = window.location.pathname;
    // console.log(mdata)
    if(mdata === '/'){
      setMenu(1);
    }
    else if(mdata === '/about-us'){
      setMenu(2);
    }
    else if(mdata === '/committee'){
      setMenu(3);
    }
    else if(mdata === '/call-for-papers'){
      setMenu(4);
    }
    else if(mdata === '/track'){
      setMenu(5);
    }
    else if(mdata === '/speakers'){
      setMenu(6);
    }
    else if(mdata === '/registration'){
      setMenu(7);
    }
    else if(mdata === '/conclave'){
      setMenu(8);
    }
    else if(mdata === '/contact-us'){
      setMenu(9);
    }
    else{
      setMenu(0);
    }
  },[])

  return (
    <nav className="text-white bg-gogreen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center">
            <img src={logo} alt="ICST" className="" width={"100px"}/>
            <a href="/" className="text-2xl font-bold ms-2">
              <span>ICST</span>
            </a>
          </div>

          <div className="hidden md:flex w-full justify-between mx-40 flex-wrap font-semibold space-x-4 ">
            <a className="hover:text-logo2 hover:cursor-pointer"><Link to="/" className={`${menu == 1 && 'underline decoration-4 decoration-logo3'}`}>Home</Link></a>
            <a className="hover:text-logo2 hover:cursor-pointer"><Link to="/about-us" className={`${menu == 2 && 'underline decoration-4 decoration-logo3'}`}>About</Link></a>
            <a className="hover:text-logo2 hover:cursor-pointer"><Link to="/committee" className={`${menu == 3 && 'underline decoration-4 decoration-logo3'}`}>Committee</Link></a>
            <a className="hover:text-logo2 hover:cursor-pointer"><Link to="/call-for-papers" className={`${menu == 4 && 'underline decoration-4 decoration-logo3'}`}>Call For Papers</Link></a>
            <a className="hover:text-logo2 hover:cursor-pointer"><Link to="/track" className={`${menu == 5 && 'underline decoration-4 decoration-logo3'}`}>Track</Link></a>
            <a className="hover:text-logo2 hover:cursor-pointer"><Link to="/speakers" className={`${menu == 6 && 'underline decoration-4 decoration-logo3'}`}>Speakers</Link></a>
            <a className="hover:text-logo2 hover:cursor-pointer"><Link to="/registration" className={`${menu == 7 && 'underline decoration-4 decoration-logo3'}`}>Registration</Link></a>
            <a className="hover:text-logo2 hover:cursor-pointer"><Link to="/conclave" className={`${menu == 8 && 'underline decoration-4 decoration-logo3'}`}>Conclave</Link></a>
            <a className="hover:text-logo2 hover:cursor-pointer"><Link to="/contact-us" className={`${menu == 9 && 'underline decoration-4 decoration-logo3'}`}>Contact Us</Link></a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-gray-400 focus:outline-none mx-3"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
        </div>
          </div>

      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to={"/"} className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gogreen3 ${menu == 1 && 'underline decoration-4 decoration-logo3'}`} onClick={()=>{setIsOpen(!isOpen)}}>Home</Link>
            <Link to={"/about-us"} className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gogreen3 ${menu == 2 && 'underline decoration-4 decoration-logo3'} `} onClick={()=>{setIsOpen(!isOpen)}}>About</Link>
            <Link to={"/committee"} className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gogreen3 ${menu == 3 && 'underline decoration-4 decoration-logo3'} `} onClick={()=>{setIsOpen(!isOpen)}}>Committee</Link>
            <Link to={"/call-for-papers"} className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gogreen3 ${menu == 4 && 'underline decoration-4 decoration-logo3'} `} onClick={()=>{setIsOpen(!isOpen)}}>Call For Papers</Link>
            <Link to={"/track"} className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gogreen3 ${menu == 5 && 'underline decoration-4 decoration-logo3'} `} onClick={()=>{setIsOpen(!isOpen)}}>Track</Link>
            <Link to={"/speakers"} className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gogreen3 ${menu == 6 && 'underline decoration-4 decoration-logo3'} `} onClick={()=>{setIsOpen(!isOpen)}}>Speakers</Link>
            <Link to={"/registration"} className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gogreen3 ${menu == 7 && 'underline decoration-4 decoration-logo3'} `} onClick={()=>{setIsOpen(!isOpen)}}>Registration</Link>
            <Link to={"/conclave"} className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gogreen3 ${menu == 8 && 'underline decoration-4 decoration-logo3'}`} onClick={()=>{setIsOpen(!isOpen)}}>Conclave</Link>
            <Link to={"/contact-us"} className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gogreen3 ${menu == 9 && 'underline decoration-4 decoration-logo3'}`} onClick={()=>{setIsOpen(!isOpen)}}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
