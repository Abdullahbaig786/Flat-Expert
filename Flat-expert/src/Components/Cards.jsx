import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img10 from "../assets/10.png";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";

const Cards = () => {
  return (
    <div className="mt-20">
      <h1 className="text-5xl font-bold mb-8 ml-5 lg:ml-32 ultra">
        UNSERE <br />
        LEISTUNG
      </h1>
      <div className="border-b-2 border-gray-300 mb-4 ml-7 mr-10"></div>
      <div className="flex flex-wrap justify-center">
        <div className="max-w-md mx-2 my-20 bg-[#30d5c8] overflow-hidden shadow-md">
          <img
            className="w-full h-45 object-cover"
            src={img1}
            alt="Card image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-white mb-2">
              STANDORTANALYSE
            </div>
            <p className="text-white text-base">
              Ermittlung des idealen Wohnortes basierend auf individuellen
              Kundenpräferenzen, wie Verkehrsanbindung und
              Freizeitmöglichkeiten.
            </p>
          </div>
        </div>

        <div className="max-w-md mx-2 my-20 bg-[#30d5c8] overflow-hidden shadow-md">
          <img
            className="w-full h-45 object-cover"
            src={img2}
            alt="Card image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-white mb-2">
              WOHNUNGSSUCHE
            </div>
            <p className="text-white text-base">
              Zusammenarbeit mit Hausverwaltungen und Wohnungsbaugesellschaften
              zur gezielten suche passender Wohnungen unter optimalen
              Bedingungen.
            </p>
          </div>
        </div>

        <div className="max-w-md mx-2 my-20 bg-[#30d5c8] overflow-hidden shadow-md">
          <img
            className="w-full h-45 object-cover"
            src={img3}
            alt="Card image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-white mb-2">BERATUNG</div>
            <p className="text-white text-base">
              Persönliche Sitzungen zur Klärung individueller Anforderungen und
              maßgeschneiderter Unterstützung bei der Wohnungssuche.
            </p>
          </div>
        </div>

        <div className="max-w-md mx-2 my-20 bg-[#30d5c8] overflow-hidden shadow-md">
          <img
            className="w-full h-45 object-cover"
            src={img4}
            alt="Card image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-white mb-2">
              PREMIUIM-ZUGANG
            </div>
            <p className="text-white text-base">
              Einrichtung exklusiver Accounts für Premium-Angebote auf
              Wohnungsportalen, um besondere Wohnungsangebote zugänglich zu
              machen.
            </p>
          </div>
        </div>

        <div className="max-w-md mx-2 my-20 bg-[#30d5c8] overflow-hidden shadow-md">
          <img
            className="w-full h-45 object-cover"
            src={img5}
            alt="Card image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-white mb-2">
              ERSTELLUNG VON UNTERLAGEN
            </div>
            <p className="text-white text-base">
              Professionelle Hilfe bei der Erstellung von Bewerbungsunterlagen
              inklusive Foto, um die Chancen auf eine Wohnungszusage zu erhöhen.
            </p>
          </div>
        </div>

        <div className="max-w-md mx-2 my-20 bg-[#30d5c8] overflow-hidden shadow-md">
          <img
            className="w-full h-45 object-cover"
            src={img6}
            alt="Card image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-white mb-2">
              BEGLEITUNG BEI BEISCHTIGUNGEN
            </div>
            <p className="text-white text-base">
              Aktive Unterstützung bei der Wohnungssuche und Begleitung bei
              Besichtigungen für eine fundierte Entscheidungsfindung.
            </p>
          </div>
        </div>

        <div className="max-w-md mx-2 my-20 bg-[#30d5c8] overflow-hidden shadow-md">
          <img
            className="w-full h-45 object-cover"
            src={img7}
            alt="Card image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-white mb-2">
              PRÜFUNG DES MIETVERTRAGS
            </div>
            <p className="text-white text-base">
              Gründliche Überprüfung des Mietvertrags auf Fairness und
              rechtliche Korrektheit vor der Unterzeichnung.
            </p>
          </div>
        </div>

        <div className="max-w-md mx-2 my-20 bg-[#30d5c8] overflow-hidden shadow-md">
          <img
            className="w-full h-45 object-cover"
            src={img8}
            alt="Card image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-white mb-2">
              UMMELDUNG VON VERTRÄGEN
            </div>
            <p className="text-white text-base">
              Assistenz bei der Ummeldung von Verträgen an die neue Adresse für
              einen reibungslosen Umzugsprozess.
            </p>
          </div>
        </div>

        <div className="max-w-md mx-2 my-20 bg-[#30d5c8] overflow-hidden shadow-md">
          <img
            className="w-full h-45 object-cover"
            src={img9}
            alt="Card image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-white mb-2">
              BEHÖRDENGÄNGE
            </div>
            <p className="text-white text-base">
              Begleitung und Unterstützung bei notwendigen Behördengängen
              während des Umzugsprozesses.
            </p>
          </div>
        </div>

        <div className="max-w-md mx-2 my-20 bg-[#30d5c8] overflow-hidden shadow-md">
          <img
            className="w-full h-45 object-cover"
            src={img10}
            alt="Card image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-white mb-2">
              WOHNUNGSÜBERGABE
            </div>
            <p className="text-white text-base">
              Begleitung bei der offiziellen Übergabe mit Zustandsprüfung zur
              Dokumentation von Mängeln und Klärung von Unklarheiten.
            </p>
          </div>
        </div>

        <div className="max-w-md mx-2 my-20 bg-[#30d5c8] overflow-hidden shadow-md">
          <img
            className="w-full h-45 object-cover"
            src={img11}
            alt="Card image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-white mb-2">
              SPRACHMITTLUNG
            </div>
            <p className="text-white text-base">
              Bereitstellung von Übersetzungs- und Dolmetschdiensten für eine
              reibungslose Kommunikation zwischen Kunden und Vermietern.
            </p>
          </div>
        </div>

        <div className="max-w-md mx- my-20 bg-[#30d5c8] overflow-hidden shadow-md">
          <img
            className="w-full h-45 object-cover"
            src={img12}
            alt="Card image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-white mb-2">
              BETRUGSPRÄVENTION
            </div>
            <p className="text-white text-base">
              Sensibilisierung und Beratung bezüglich potenzieller
              Betrugsrisiken während des gesamten Wohnungsfindungsprozesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
