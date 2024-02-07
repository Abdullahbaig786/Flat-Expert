import React from "react";
import X from "../assets/X.png";
import insta from "../assets/Insta.png";
import facebook from "../assets/FB.png";

const Footer = () => {
  return (
    <footer
      id="impressum"
      className="bg-white text-black dark:bg-neutral-600 dark:text-neutral-200 lg:text-left"
    >
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Impressum</span>
        </div>
        <div className="flex justify-center">
          {/* Facebook */}
          <a href="#!" className="mr-7 text-neutral-600 dark:text-neutral-200">
            <img src={facebook} alt="Background" className="h-5 w-5" />
          </a>

          {/* X */}
          <a href="#!" className="mr-7 text-neutral-600 dark:text-neutral-200">
            <img src={X} alt="Background" className="h-5 w-5" />
          </a>

          {/* Instagram */}
          <a href="#!" className="mr-7 text-neutral-600 dark:text-neutral-200">
            <img src={insta} alt="Background" className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* 1st column */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h6 className="font-semibold mb-4">Anschrift:</h6>
            <p>
              FlatExpert FE GmbH <br />
              c/o WeWork Germany GmbH
              <br />
              Kurfürstendamm 11
              <br />
              10719 Berlin
              <br />
              <br />
              <br />
              <h6 className="font-semibold mb-4">
                Verantwortlich für den Inhalt:
              </h6>
              <p>FlatExpert FE GmbH</p>
              <br />
              <br />
              <h6 className="font-semibold mb-4">Kontakt:</h6>
              <p>
                Tel.: 030 12113394 <br /> E-Mail: support@flat-expert.com <br />
                Web: www.flat-expert.com
              </p>
            </p>
          </div>

          {/* 2nd Column */}
          <div className="col-span-1">
            <h6 className="font-semibold mb-4">
              Vertretungsberechtigte Geschäftsführer:
            </h6>
            <p>
              Stefan Teschner
              <br />
              <br />
              <br />
              <h6 className="font-semibold mb-4">Haftungshinweis:</h6>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
                Haftung für die Inhalte externer Links. Für den Inhalt der
                verlinkten Seiten sind ausschließlich deren Betreiber
                verantwortlich.
              </p>
              <br />
              <br />
              <h6 className="font-semibold mb-4">Datenschutz:</h6>
              <p>
                Datenschutzerklärung gemäß DSGVO finden Sie hier (Link zur
                Datenschutzerklärung einfügen)
              </p>
            </p>
          </div>

          {/* 3rd Column */}
          <div className="col-span-1">
            <h6 className="font-semibold mb-4">Handelsregister:</h6>
            <p>
              Registergericht: Amtsgericht Berlin (Charlottenburg) <br />
              Registernummer: HRB 259438 B <br />{" "}
              Umsatzsteuer-Identifikationsnummer: <br />
              (folgt) <br /> Steuernummer: <br />
              (folgt)
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white text-black dark:bg-neutral-600 dark:text-neutral-200 p-4 text-sm">
        <p>
          <span className="font-bold">
            Urheberrecht: <br />
          </span>{" "}
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
