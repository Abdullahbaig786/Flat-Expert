import React from "react";
import homeImage from "../assets/home.png";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative">
        {/* Your apartment building image */}
        <img src={homeImage} alt="Apartment Building" className="w-full" />

        {/* Left Side Content */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-5 md:left-16 text-white">
          <div className="transform -translate-y-7 left-5 md:left-10 ultra">
            <h1 className="text-5xl md:text-7xl font-bold">
              Leading in <br /> Flats, <br /> Leading in <br /> Experts.
            </h1>
          </div>
          <p className="mt-4 text-sm md:text-lg"></p>
          <Link
            to="kontakt" // ID of the Kontakt form
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p>KONTAKTIEREN SIE UNS DIREKT</p>
            <button className="mt-2 md:mt-4 px-3 md:px-6 py-2 md:py-3 bg-green-500 hover:bg-green-400 rounded-md text-white text-xs md:text-sm">
              KONTAKT
            </button>
          </Link>
        </div>

        {/* FLATEXPERT FE GMBH text in top left corner */}
        <div className="absolute top-2 left-2 md:top-5 md:left-36 text-white">
          <h1 className="text-lg md:text-xl font-bold">FLATEXPERT FE GMBH</h1>
        </div>
      </div>

      {/* Right Side Logo */}
      <div className="absolute top-2 right-2 md:top-5 md:right-5">
        <img src={logo} alt="FlatExpert Logo" className="w-32 md:w-64" />
      </div>
    </div>
  );
};

export default Home;
