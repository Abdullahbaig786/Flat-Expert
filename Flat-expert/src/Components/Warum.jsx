import React from "react";
import backgroundImage from "../assets/warum.png";

const Warum = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-md mx-2 my-20 bg-black bg-opacity-70 border-white border-2 overflow-hidden shadow-md rounded-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-white mb-2">
            STANDORTANALYSE
          </div>
          <p className="text-white text-base">
            Ermittlung des idealen Wohnortes basierend auf individuellen
            Kundenpräferenzen, wie Verkehrsanbindung und Freizeitmöglichkeiten.
          </p>
        </div>
      </div>

      <div className="max-w-md mx-2 my-20 bg-black bg-opacity-70 border-white border-2 overflow-hidden shadow-md rounded-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-white mb-2">WOHNUNGSSUCHE</div>
          <p className="text-white text-base">
            Zusammenarbeit mit Hausverwaltungen und Wohnungsbaugesellschaften
            zur gezielten Suche passender Wohnungen unter optimalen Bedingungen.
          </p>
        </div>
      </div>

      <div className="max-w-md mx-2 my-20 bg-black bg-opacity-70 border-white border-2 overflow-hidden shadow-md rounded-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-white mb-2">BERATUNG</div>
          <p className="text-white text-base">
            Persönliche Sitzungen zur Klärung individueller Anforderungen und
            maßgeschneiderter Unterstützung bei der Wohnungssuche.
          </p>
        </div>
      </div>
    </div>
  );
};

const WarumPage = () => {
  return (
    <div
      className="relative"
      style={{
        height: "700px", // You can adjust the height here
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-8 p-8 lg:left-20">
        <div className="bg-black bg-opacity-60 rounded-lg">
          <h1 className="text-5xl font-bold mb-20 text-white ultra">
            WARUM MIT <br /> UNS?
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <Warum />
      </div>
    </div>
  );
};

export default WarumPage;
