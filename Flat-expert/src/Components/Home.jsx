import React, { useState, useEffect } from "react";
import homeImage from "../assets/home.png";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative">
        {/* Your apartment building image */}
        <img src={homeImage} alt="Apartment Building" className="w-full" />

        {/* Left Side Content */}
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 left-5 md:left-16 text-white ${
            isMobile ? "md:-translate-y-4" : ""
          }`}
        >
          <div
            className={`transform ${
              isMobile ? "-translate-y-0 md:-translate-y-10" : ""
            } left-5 md:left-10 ultra ${isMobile ? "text-2xl" : "text-7xl"}`}
          >
            <h1 className="font-bold leading-tight md:leading-tight">
              Leading in <br /> Flats, <br /> Leading in <br /> Experts.
            </h1>
          </div>
          <p className="mt-4 text-xs md:text-sm">KONTAKTIEREN SIE UNS DIREKT</p>
          <Link
            to="kontakt" // ID of the Kontakt form
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className="mt-2 md:mt-4 px-3 md:px-6 py-2 md:py-3 bg-green-500 hover:bg-green-400 rounded-md text-white text-xs md:text-sm">
              KONTAKT
            </button>
          </Link>
        </div>

        {/* FLATEXPERT FE GMBH text in top left corner */}
        <div className="hidden md:block absolute top-2 left-2 md:top-5 md:left-20 text-white">
          <h1 className="text-lg md:text-xl font-bold">FLATEXPERT FE GMBH</h1>
        </div>
      </div>

      {/* Right Side Logo */}

      <div className="absolute top-2 right-2 md:top-5 md:right-5">
        {isMobile ? (
          <img src={logo} alt="FlatExpert Logo" className="w-24 md:w-32" />
        ) : (
          <img src={logo} alt="FlatExpert Logo" className="w-64 md:w-80" />
        )}
      </div>
    </div>
  );
};

export default Home;
