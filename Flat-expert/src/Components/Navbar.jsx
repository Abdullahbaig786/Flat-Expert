import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-[#69C9C4] sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-center">
          <div className="flex items-center">
            <div className="hidden md:block whitespace-nowrap">
              {" "}
              <div className="ml-10 flex items-baseline space-x-6">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black hover:text-blue-500 px-3 py-2 text-xl font-bold"
                >
                  ÜBER UNS
                </Link>

                <Link
                  to="warum"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black hover:text-blue-500 px-3 py-2 text-xl font-bold"
                >
                  WARUM WIR
                </Link>
                <Link
                  to="cards"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black hover:text-blue-500 px-3 py-2 text-xl font-bold"
                >
                  UNSERE DIENSTLEISTUNGEN
                </Link>
                <Link
                  to="vision"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black hover:text-blue-500 px-3 py-2 text-xl font-bold"
                >
                  UNSERE VISION
                </Link>
                <Link
                  to="feedback"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black hover:text-blue-500 px-3 py-2 text-xl font-bold"
                >
                  FEEDBACK
                </Link>
                <Link
                  to="betrungs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black hover:text-blue-500 px-3 py-2 text-xl font-bold"
                >
                  BETRUGSPRÄVENTION
                </Link>
                <Link
                  to="kontakt"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black hover:text-blue-500 px-3 py-2 text-xl font-bold"
                >
                  KONTAKT
                </Link>
                <Link
                  to="impressum"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black hover:text-blue-500 px-3 py-2 text-xl font-bold"
                >
                  IMPRESSUM
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
