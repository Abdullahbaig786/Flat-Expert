import React from "react";
import img2 from "../assets/vision.png";

const Vision = () => {
  return (
    <div className="mt-40">
      <div className="flex bg-[#30d5c8]">
        {/* Left side */}
        <div className="w-full md:w-1/2 p-4 bg-[#30d5c8] md:ml-20 md:mr-0">
          <h1 className="text-5xl font-bold mb-4 mt-20 ultra text-white">
            UNSERE <br /> VISION
          </h1>
          <div className="border-b-2 border-gray-300 mb-4 mr-10"></div>
          <p className="text-lg text-white">
            {" "}
            {/* Adjusted text-lg class */}
            Wir streben danach, einen signifikanten Beitrag zur Lösung des
            Wohnungsproblems in Großstädten zu leisten. Unsere Vision ist es,
            durch innovative Ansätze und maßgeschneiderte Beratung die
            Herausforderungen der Wohnungssuche zu bewältigen. Wir setzen uns
            dafür ein, dass jeder Mensch Zugang zu angemessenem und bezahlbarem
            Wohnraum hat. Durch unsere Dienstleistungen möchten wir nicht nur
            individuelle Wohnbedürfnisse erfüllen, sondern auch aktiv zur
            Schaffung einer nachhaltigen und inklusiven Wohnkultur beitragen.
            Bei FlatExpert FE GmbH verfolgen wir die Vision, das Wohnungsproblem
            anzugehen und gemeinsam mit unseren Kunden Lösungen zu finden, die
            ihre Lebensqualität verbessern und zu einer positiven Veränderung in
            städtischen Gemeinschaften beitragen.
          </p>
        </div>
        {/* Right side */}
        <div className="w-full md:w-1/2 flex justify-end md:mr-5 md:ml-0">
          <img className="h-auto max-w-lg" src={img2} alt="image description" />
        </div>
      </div>
    </div>
  );
};

export default Vision;
