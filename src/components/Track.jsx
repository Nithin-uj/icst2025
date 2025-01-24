import React from "react";
import TrackPopup from "./Trackpopup";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Track1 from "../assets/Track1.png";
import Track2 from "../assets/Track2.png";
import Track3 from "../assets/Track3.png";
import Track4 from "../assets/Track4.png";
import Track5 from "../assets/Track5.png";
import Track6 from "../assets/Track6.png";

const TRACK_CARDS = [
  {
    track: "TRACK 1",
    title: "Sustainable Energy",
    description:
      "Exploring innovations in renewable energy, sustainable power, and next-generation technologies, this overview addresses advancements like green nanotechnology, hydrogen energy systems, and smart grids while focusing on environmental impacts and emissions control.",
    points: [
      "Renewable Energy",
      "Sustainable Power",
      "Solar, Wind, and Bioenergy",
      "Geothermal Energy",
      "Green Nanotechnology",
      "Nano Environmental Technologies",
      "Fuel Cells, Green Energy, and Economy",
      "Bioremediation & Waste to Energy",
      "Smart Grid & Sustainable Technologies",
      "Electric Vehicles & Battery Energy Storage",
      "Energy Storage and Conservation",
      "NEXT-GENERATION Technologies in Power Sector",
      "Environmental Impact of Energy Conversion",
      "Hydrogen Energy Conversion Systems",
      "Environmental Impact Assessment",
      "Fuel Trends, Pricing, and Availability",
      "Emissions Control Technologies",
    ],
    keynote: "Prof. Dr. Stephan Weyers",
    keynoteDetails: {
      name: "Dr. Stephan Weyers",
      imglink:
        "https://www.fh-dortmund.de/kontakt-daten/Weyers-Stephan.php.media/168538/Stephan_Weyers11510.jpg.scaled/ef0f8b9f2370859a2ac0382cf699453a.jpg",
      designation: "Professor",
      department:
        "University of Applied Sciences and Arts [FH] Dortmund, Germany",
    },
    image: Track1,
  },
  {
    track: "TRACK 2",
    title: "Robotics & e-Mobility for Sustainable Development",
    description:
      "This overview highlights advancements in electric vehicle technology, battery systems, and hydrogen fuel cells, alongside robotics innovations in environmental monitoring, renewable energy maintenance, precision farming, and automated construction, enhanced by AI-driven decision-making.",
    points: [
      "Electrical Vehicle Technology",
      "Battery Production and Disposal",
      "Battery Charging Stations",
      "Electric Drive Systems for Electric Vehicles",
      "Power Electronics",
      "E-Vehicle Design",
      "Life Cycle Analysis and Emission Reduction",
      "Solid-State Batteries",
      "Hydrogen Fuel Cells",
      "Automation, Monitoring, Control, and Electrical Systems",
      "Wildlife Tracking: Drones and Robotic Sensors",
      "Pollution Monitoring: Robots Equipped with Pollution Sensors",
      "Precision Farming: Agricultural Robots, Including Drones and Autonomous Tractors",
      "Robots for Weed and Pest Control",
      "Robots for Waste Collection, Sorting, and Recycling",
      "Robots for Renewable Energy Maintenance: Solar Panels and Wind Turbines",
      "Robotic Systems for Energy Management",
      "Automated Construction",
      "Robots for Inspection and Maintenance",
    ],
    keynote: "Prof. Dr. Björn Schäfer",
    keynoteDetails: {
      name: "Dr. Björn Schäfer",
      imglink:
        "https://www.fh-dortmund.de/kontakt-daten/Schafer-Bjorn.php.media/131634/Bjoern-Schaefer_baege_222873-ret-2.jpg.scaled/90c843c75d17f0931c5d946dbc2f1790.jpg",
      designation: "Professor",
      department:
        "University of Applied Sciences and Arts [FH] Dortmund, Germany",
    },
    image: Track2,
  },
  {
    track: "TRACK 3",
    title: "Sustainable Materials",
    description:
      "This overview delves into innovative materials like biodegradable, recycled, and energy-efficient options, emphasizing applications in sustainable construction, energy harvesting, and advanced technologies such as self-healing, graphene-based, and optoelectronic materials.",
    points: [
      "Renewable Materials",
      "Recycled Materials",
      "Biodegradable Materials",
      "Low-Impact and Non-Toxic Materials",
      "Energy-Efficient Materials",
      "Sustainable Construction Materials",
      "Green Concrete",
      "Energy Harvesting Materials",
      "Advanced and Emerging Materials: Self-Healing Materials",
      "Lifecycle Assessment",
      "Energy Storage/Harvesting Materials and Devices",
      "Crystal Growth and Applications",
      "Optoelectronic Materials",
      "Nano, 2D, and Graphene-Based Materials",
      "Modelling and Simulation of Materials and Devices",
      "Thin Film Devices",
      "Polymer/Ceramic/Dielectric/Composite Materials",
      "Magnetic/Optical/Fluorescent Materials/LED/OLED",
      "Bio Materials",
      "Radiation Shielding Materials",
      "Electrochemical Sensors and Supercapacitors",
    ],
    keynote:"",
    keynoteDetails: {
      name: "Dr. Shaik Saboor",
      imglink:
        "https://vit.ac.in/system/files/styles/facultyfilter/private/15272.jpg?itok=o0hi0hv5",
      designation: "Associate Professor",
      department:
        "School of Mechanical Engineering, Department of Thermal & Energy Engineering, VIT, Vellore",
    },
    image: Track3,
  },
  {
    track: "TRACK 4",
    title: "Design for Sustainability",
    description:
      "Focusing on sustainable and regenerative practices, this overview highlights cradle-to-cradle design, modularity, and lifecycle assessment while leveraging eco-design tools, simulation, and optimization for ethical, low-impact, and energy-efficient solutions.",
    points: [
      "Cradle-to-Cradle Design",
      "Modular Design",
      "Product Lifecycle Assessment",
      "Circular Design",
      "Design for Low-Energy Production",
      "Design for Energy-Efficient Use",
      "Ethical and Inclusive Design",
      "Design for Repair and Maintenance",
      "Design for Modular Use",
      "Design for Minimal Impact",
      "Sustainable Design Tools and Software",
      "Optimum Design",
      "Eco-Design",
      "Diagnostics, Condition Monitoring, and Predictive Maintenance",
      "Regenerative Design",
      "Simulation and Rapid Prototyping",
    ],
    keynote:"",
    keynoteDetails: {
      name: "Dr.E.V. S Kiran Kumar Donthu",
      imglink:
        "https://i1.rgstatic.net/ii/profile.image/962034527117316-1606378313222_Q512/D-E-V-S-Kiran-Kumar.jpg",
      designation: "Assistant Professor",
      department:
        "Department of Architecture, Planning and Design, Indian Institute of Technology (IIT-BHU), Varanasi,Uttar Pradesh",
    },
    image: Track4,
  },
  {
    track: "TRACK 5",
    title: "Green Computing for Sustainabilityble",
    description:
      "This overview explores advanced IT energy-aware technologies, including green computing, e-waste management, and power-efficient designs, while highlighting smart grids, sustainability-focused sensors, and technology as green enablers.",
    points: [
      "Advanced IT energy-aware technologies",
      "Green Computing",
      "Geo-energy",
      "E-Cycling",
      "E-Inclusion",
      "Electronic Waste",
      "Energy Efficient Ethernet",
      "IT Energy Management and Power-Aware Software",
      "Power-Efficient Architectures and Chip Designs",
      "Component Level Power Management",
      "Memory Server Management",
      "Power-Aware Networking",
      "Smart Grids Applications",
      "Technology as Green Enablers",
      "Seniors and Electronics for Sustainability",
      "Signal Processing and Embedded Systems for Sustainability",
    ],
    keynote:"",
    keynoteDetails: {
      name: "Prof R. Geetha Balakrishna",
      imglink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHtL4_pbA-Mzchhdj98_K6eV4aPDWAuBKyQ&s",
      designation: "FRSC Director",
      department:
        "Center for Nano and Material Sciences, JAIN (Deemed-to-be University), Bangalore, Editorial Advisory Board Member, ACS Energy Letters,Editorial Advisory Board Member, ACS Applied Engineering Materials",
    },
    image: Track5,
  },
  {
    track: "TRACK 6",
    title: "Environment & Green Buildings for Sustainable Developmentinable",
    description:
      "This overview emphasizes green building design, integrating energy-efficient systems, rainwater harvesting, and sustainable materials while addressing smart grids, zero-energy buildings, and climate-resilient infrastructure.",
    points: [
      "Green Building Design",
      "Rainwater Harvesting",
      "Photovoltaics",
      "Recycling and Sewage Treatment",
      "Landfill Management",
      "Smart Grid Developments",
      "Smart Cities",
      "Building Envelope",
      "Energy-Efficient Systems",
      "Water-Saving Fixtures",
      "Greywater Recycling",
      "Eco-Friendly Building Materials",
      "Sustainable Site Design",
      "Construction Waste Management",
      "Green Certifications and Standards",
      "Green Roofs and Walls",
      "Zero-Energy Buildings",
      "Climate Resilience",
    ],
    keynote:"",
    keynoteDetails: {
      name: "Dr.Rajkumar Buyya",
      imglink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu2gFLESHAmU0sMLl71ychpTXB3fWiP3Itng&s",
      designation: "Director and Professor",
      department:
        "Cloud Computing and Distributed Systems (CLOUDS) Laboratory at the University of Melbourne, Australia and Founder of Manjrasoft",
    },
    image: Track6,
  },
];

const Track = () => {
  return (
    <div>
      <Navbar />
      <main className="py-16 px-4 font-serif">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-3 md:mx-20">
            {TRACK_CARDS.map((card, index) => (
              <TrackPopup key={`track-${index}`} {...card} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Track;
