import React from "react";
import img2 from "../assets/about.png";

const About = () => {
  return (
    <div id="about">
      <div className="flex bg-[#30d5c8]">
        {/* Left side */}
        <div className="w-full md:w-1/2 flex justify-end md:mr-0 md:ml-0">
          <img
            className="h-auto max-w-[1000px]"
            src={img2}
            alt="image description"
          />
        </div>
        {/* Right side */}
        <div className="w-full md:w-1/2 p-6 bg-[#30d5c8] md:ml-16 md:mr-0 mb-20 ">
          <h1 className="text-5xl font-bold mb-4 mt-20 ultra text-white">
            ÜBER <br /> UNS
          </h1>
          <div className="border-b-2 border-gray-300 mb-8 md:mr-10"></div>

          <div className="max-w-[500px]">
            {" "}
            {/* Set maximum width using Tailwind CSS */}
            <p className="text-lg text-white text-justify mr-10">
              FlatExpert FE GmbH - Ihre Wegbegleiter zur neuen Wohnung! Unser
              Motto lautet: "Gemeinsam den richtigen Weg finden – Wohnungen sind
              die Lösung, und wir zeigen Ihnen, wie Sie es richtig machen."
              Unsere Mission ist es, Sie durch den Prozess der Wohnungssuche zu
              führen, indem wir Ihnen nicht nur eine maßgeschneiderte Beratung
              und exklusiven Zugang zu Premium-Angeboten bieten, sondern auch
              zeigen, wie Sie die Schritte zur erfolgreichen Wohnungssuche
              optimal gestalten. Bei FlatExpert FE GmbH sind wir für Sie da, um
              nicht nur ein neues Zuhause zu finden, sondern Ihnen auch die
              besten Wege dorthin aufzuzeigen.
            </p>
            <div className="text-sm mt-5 text-white">
              {" "}
              {/* Container for names */}
              <strong className="font-bold mr-4">Vertrauen</strong>{" "}
              <strong className="font-bold mr-4">Kundenzufriedenheit</strong>{" "}
              <strong className="font-bold">Transparenz</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
