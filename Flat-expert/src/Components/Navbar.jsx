import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-[#30d5c8] sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          {" "}
          {/* Modified justify-center */}
          <div className="flex items-center">
            <div className="hidden md:flex">
              <div className="flex items-baseline space-x-4">
                <a
                  href="#about"
                  onClick={() => scrollToSection("about")}
                  className="text-black hover:text-green-400 px-3 py-2 text-sm font-medium"
                >
                  ÜBER UNS
                </a>

                <a
                  href="#warum"
                  onClick={() => scrollToSection("warum")}
                  className="text-black hover:text-green-400 px-3 py-2 text-sm font-medium"
                >
                  WARUM WIR
                </a>
                <a
                  href="#cards"
                  onClick={() => scrollToSection("cards")}
                  className="text-black hover:text-green-400 px-3 py-2 text-sm font-medium"
                >
                  UNSERE DIENSTLEISTUNGEN
                </a>

                <a
                  href="#vision"
                  onClick={() => scrollToSection("vision")}
                  className="text-black hover:text-green-400 px-3 py-2 text-sm font-medium"
                >
                  UNSERE VISION
                </a>

                <a
                  href="#feedback"
                  onClick={() => scrollToSection("feedback")}
                  className="text-black hover:text-green-400 px-3 py-2 text-sm font-medium"
                >
                  FEEDBACK
                </a>

                <a
                  href="#betrungs"
                  onClick={() => scrollToSection("betrungs")}
                  className="text-black hover:text-green-400 px-3 py-2 text-sm font-medium"
                >
                  BETRUGSPRÄVENTION
                </a>
                <a
                  href="#kontakt"
                  onClick={() => scrollToSection("kontakt")}
                  className="text-black hover:text-green-400 px-3 py-2 text-sm font-medium"
                >
                  KONTAKT
                </a>
                <a
                  href="#impressum"
                  onClick={() => scrollToSection("impressum")}
                  className="text-black hover:text-green-400 px-3 py-2 text-sm font-medium"
                >
                  IMPRESSUM
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
