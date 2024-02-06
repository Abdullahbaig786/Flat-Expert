import React from "react";
import homeImage from "../assets/home.png";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative">
        {/* Your apartment building image */}
        <img src={homeImage} alt="Apartment Building" className="w-full" />

        {/* Left Side Content */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-10 text-white">
          <h1 className="text-4xl font-bold">FLATEXPERT FE GMBH</h1>
          <p className="text-lg">Leading in Flats, Leading in Experts.</p>
          <button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white">
            KONTAKT
          </button>
        </div>
      </div>

      {/* Right Side Logo */}
      <div className="absolute top-5 right-5">
        <img src={logo} alt="FlatExpert Logo" className="w-40" />{" "}
      </div>
    </div>
  );
};

export default Home;
