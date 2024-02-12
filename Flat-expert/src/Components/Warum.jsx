import React from "react";
import backgroundImage from "../assets/warum2.png";

const Warum = () => {
  return (
    <div className="flex flex-wrap justify-center" id="warum">
      <div className="max-w-sm my-4 mx-2 bg-black bg-opacity-40 border-white border-2 overflow-hidden shadow-md rounded-lg transition-opacity duration-300 hover:bg-opacity-80">
        <div className="px-6 py-10">
          <div className="font-bold text-xl text-white mb-2">
            INDIVIDUELLE BETREUUNG
          </div>
          <p className="text-white text-base">
            Wir bieten eine persönliche und maßgeschneiderte Beratung, die sich
            auf die individuellen Bedürfnisse jedes Kunden konzentriert.
          </p>
        </div>
      </div>

      <div className="max-w-sm my-4 mx-2 bg-black bg-opacity-40 border-white border-2 overflow-hidden shadow-md rounded-lg transition-opacity duration-300 hover:bg-opacity-80">
        <div className="px-6 py-10">
          <div className="font-bold text-xl text-white mb-2">
            UMFASSNDER SERVICE
          </div>
          <p className="text-white text-base">
            Unser breites Servicepaket deckt alle Aspekte der Wohnungssuche ab –
            von der Standortanalyse bis zur Überprüfung des Mietvertrags.
          </p>
        </div>
      </div>
      <div className="max-w-sm my-4 mx-2 bg-black bg-opacity-40 border-white border-2 overflow-hidden shadow-md rounded-lg transition-opacity duration-300 hover:bg-opacity-80">
        <div className="px-6 py-10">
          <div className="font-bold text-xl text-white mb-2">
            PREMIUM ANGEBOTE
          </div>
          <p className="text-white text-base">
            Durch exklusive Accounts auf Premium-Wohnungsportalen ermöglichen
            wir unseren Kunden den Zugang zu hochwertigen Wohnungsangeboten.
          </p>
        </div>
      </div>
      <div className="max-w-sm my-4 mx-2 bg-black bg-opacity-40 border-white border-2 overflow-hidden shadow-md rounded-lg transition-opacity duration-300 hover:bg-opacity-80">
        <div className="px-6 py-10">
          <div className="font-bold text-xl text-white mb-2">SICHERHEIT</div>
          <p className="text-white text-base">
            Wir legen großen Wert auf die Sicherheit unserer Kunden und bieten
            aktive Beratung zur Betrugsprävention während des gesamten
            Wohnungsfindungsprozesses
          </p>
        </div>
      </div>

      {/* Repeat this structure for other cards */}
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
      <div className="absolute p-8 top-0 lg:top-8 lg:left-20">
        <h1 className="text-5xl font-bold mb-20 text-white ultra relative">
          WARUM MIT UNS?
          <div className="border-b-2 border-gray-300 absolute bottom-0 left-0 w-full hidden lg:block opacity-30"></div>
        </h1>
      </div>

      <div className="flex justify-center items-center h-full">
        <Warum />
      </div>
    </div>
  );
};

export default WarumPage;
