import React from "react";
import X from "../assets/X.png";
import insta from "../assets/Insta.png";
import facebook from "../assets/FB.png";
import logo from "../assets/logo.png";
import DatenFormPDF from "../assets/DatenForm.pdf";

const Footer = () => {
  return (
    <footer
      id="impressum"
      className="bg-white text-black lg:text-left relative"
    >
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <h4 className="text-5xl font-bold mb-3 mt-2 ultra">IMPRESSUM</h4>
        </div>
        <div className="flex justify-center">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61556183733918"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-7 text-neutral-600 dark:text-neutral-200"
          >
            <img src={facebook} alt="Facebook" className="h-5 w-5" />
          </a>

          {/* X */}
          <a
            href="https://twitter.com/flatxpert"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-7 text-neutral-600 dark:text-neutral-200"
          >
            <img src={X} alt="X" className="h-5 w-5" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/flatxpert?igsh=MTFoa2Qxc2FwZHYwdA=="
            target="_blank"
            rel="noopener noreferrer"
            className="mr-7 text-neutral-600 dark:text-neutral-200"
          >
            <img src={insta} alt="Instagram" className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Logo */}
      <img
        src={logo}
        alt="FlatExpert Logo"
        className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-full md:top-16 md:-translate-y-0 md:left-auto md:right-0 w-20 md:w-40 mt-5 md:mt-10"
      />

      {/* 1st column */}
      <div className="bg-white text-black mx-6 py-10 text-center md:text-left">
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
            </p>
            <br />
            <span className="font-semibold mb-4">
              Verantwortlich für den Inhalt:
            </span>
            <p>FlatExpert FE GmbH</p>
            <br />
            <span className="font-semibold mb-4">Kontakt:</span>
            <p>
              Tel.: 030 12113394 <br /> E-Mail: support@flat-expert.com <br />
              Web: www.flat-expert.com
            </p>
          </div>

          {/* 2nd Column */}
          <div className="col-span-1">
            <span className="font-semibold mb-4">
              Vertretungsberechtigte Geschäftsführer:
            </span>
            <p>Stefan Teschner</p>
            <br />
            <br />
            <span className="font-semibold mb-4">Haftungshinweis:</span>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
            <br />
            <br />
            <span className="font-semibold mb-4">Datenschutz:</span>
            <p>
              Datenschutzerklärung gemäß DSGVO finden Sie hier{" "}
              <a
                href={DatenFormPDF}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue" }}
              >
                (Link zur Datenschutzerklärung einfügen)
              </a>
            </p>
          </div>
          {/* 3rd Column */}
          <div className="col-span-1 mt-40">
            {" "}
            {/* Increased margin top here */}
            <span className="font-semibold mb-4">Handelsregister:</span>
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

      <div className="bg-white text-black p-4 text-sm">
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
