import React from "react";
import img3 from "../assets/betrungs.png";

const Betrungs = () => {
  return (
    <div className="mt-40">
      <div className="flex bg-white">
        {/* Left side */}
        <div className="w-full md:w-1/2 p-4 bg-white md:ml-10 md:mr-8">
          <h1 className="text-5xl font-bold mb-4 mt-5 ultra text-black">
            BETRUNGSPRÄVENTION
          </h1>
          <div className="border-b-2 border-gray-300 mb-4 mr-10 "></div>
          <p className="text-lg text-black">
            Liebe Wohnungssuchende, bei FlatExpert FE GmbH setzen wir einen
            klaren Fokus: Wir glauben an ehrliche und korrekte Wege, um Ihnen zu
            Ihrer Traumwohnung zu verhelfen. Schluss mit unnötigen
            Betrüger-Provisionen! Unser Ziel ist es, Ihnen nicht nur eine
            erstklassige Beratung zu bieten, sondern auch den Weg zu Ihrer neuen
            Wohnung so transparent und fair wie möglich zu gestalten. Unsere
            erfahrenen Experten bei FlatExpert FE GmbH stehen Ihnen mit
            individuellen Beratungen zur Seite, um Ihre Bedürfnisse zu verstehen
            und maßgeschneiderte Lösungen zu entwickeln. Wir sind davon
            überzeugt, dass jeder das Recht auf eine ehrliche und qualitativ
            hochwertige Unterstützung bei der Wohnungssuche hat.
          </p>
          <p className="text-lg text-black">
            <br />
            <strong>Warum FlatExpert FE GmbH?</strong>
            <br />
            <br />
            <strong>Keine unnötigen Betrüger-Provisionen:</strong> {""}
            Wir glauben an faire Geschäftspraktiken und erheben keine
            undurchsichtigen Gebühren. Bei uns steht die transparente
            Zusammenarbeit im Vordergrund. <br />
            <strong>Erstklassige Beratung:</strong> Unsere Experten sind
            spezialisiert darauf, Ihnen nicht nur bei der Wohnungssuche, sondern
            auch bei allen Fragen rund um den Umzug und die Organisation zu
            helfen. <br />
            <strong>Transparenz und Ehrlichkeit:</strong> Wir bieten klare
            Informationen und offene Kommunikation, um sicherzustellen, dass Sie
            stets über den Stand Ihrer Wohnungssuche informiert sind.
            <br />
            <br />
            Lassen Sie uns gemeinsam den Weg zu Ihrer neuen Wohnung gestalten,
            ohne sich mit unnötigen Kosten herumschlagen zu müssen. FlatExpert
            FE GmbH steht Ihnen zur Seite!
          </p>
        </div>
        {/* Right side */}
        <div className="w-full md:w-1/2 p-10 bg-white md:ml-20 md:mr-0 mb-8 md:mb-0 mt-4 md:mt-0">
          <img src={img3} alt="Placeholder" className="w-full max-h-[85vh]" />
        </div>
      </div>
    </div>
  );
};

export default Betrungs;
