import React from "react";
import backgroundImage from "../assets/warum.png"; // Import your background image here

const Warum = () => {
  return (
    <div
      className="p-4 bg-cover bg-no-repeat bg-center md:bg-cover md:bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-5xl font-bold mb-1 mt-10 md:mt-20 ultra text-white  ">
        WARUM MIT UNS ?
      </h1>
      <div className="border-b-2 border-gray-300 mb-4 ml-7 mr-10 md:ml-0 md:mr-0"></div>
      <div className="flex justify-center items-center md:h-screen">
        <div className="grid  lg:grid-cols-4 gap-4">
          <div className="max-w-xs p-6 border border-white rounded-lg hover:bg-gray-700 dark:bg-gray-800 md:h-auto">
            <div className="bg-opacity-50 h-full">
              <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                INDIVIDUELLE BETREUUNG
              </h5>
              <p className="font-normal text-sm md:text-base text-gray-700 dark:text-gray-400 mt-3 md:mt-7">
                Wir bieten eine persönliche und maßgeschneiderte Beratung, die
                sich auf die individuellen Bedürfnisse jedes Kunden
                konzentriert.
              </p>
            </div>
          </div>

          <div className="max-w-xs p-6 border border-white rounded-lg hover:bg-gray-700 dark:bg-gray-800 md:h-auto">
            <div className="bg-opacity-50 h-full">
              <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                UMFASSNDER SERVICE
              </h5>
              <p className="font-normal text-sm md:text-base text-gray-700 dark:text-gray-400 mt-3 md:mt-7">
                Unser breites Servicepaket deckt alle Aspekte der Wohnungssuche
                ab – von der Standortanalyse bis zur Überprüfung des
                Mietvertrags.
              </p>
            </div>
          </div>

          <div className="max-w-xs p-6 border border-white rounded-lg hover:bg-gray-700 dark:bg-gray-800 md:h-auto">
            <div className="bg-opacity-50 h-full">
              <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                PREMIUM ANGEBOTE
              </h5>
              <p className="font-normal text-sm md:text-base text-gray-700 dark:text-gray-400 mt-3 md:mt-7">
                Durch exklusive Accounts auf Premium-Wohnungsportalen
                ermöglichen wir unseren Kunden den Zugang zu hochwertigen
                Wohnungsangeboten.
              </p>
            </div>
          </div>

          <div className="max-w-xs p-6 border border-white rounded-lg hover:bg-gray-700 dark:bg-gray-800 md:h-auto">
            <div className="bg-opacity-50 h-full">
              <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                SICHERHEIT
              </h5>
              <p className="font-normal text-sm md:text-base text-gray-700 dark:text-gray-400 mt-3 md:mt-7">
                Wir legen großen Wert auf die Sicherheit unserer Kunden und
                bieten aktive Beratung zur Betrugsprävention während des
                gesamten Wohnungsfindungsprozesses
              </p>
            </div>
          </div>
          {/* End of repeating div */}
        </div>
      </div>
    </div>
  );
};

export default Warum;
