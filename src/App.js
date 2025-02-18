import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Notfound from "./components/Notfound";
import Committee from "./components/Committee2";
import Track from "./components/Track";
import ContactUs from './components/ContactUs';
import Callforpapers from "./components/Callforpapers";
import Registration from "./components/Registration";
import Conclave from "./components/Conclave";
import Speakers from "./components/Speakers";

// import About from "./components/About";
// import Contact from "./components/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
         <Route path="/about-us" element={<Aboutus />} />
         <Route path="/call-for-papers" element={<Callforpapers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/track" element={<Track />} />
        <Route path="/conclave" element={<Conclave />} /> 
        <Route path="/speakers" element={<Speakers />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
