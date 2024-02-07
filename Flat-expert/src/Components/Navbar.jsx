import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Use Link for smooth scrolling */}
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust the offset as needed
                  duration={500} // Duration of the scroll animation
                  className="text-black hover:text-blue-500 px-3 py-2 text-sm font-medium"
                >
                  ÜBER UNS
                </Link>

                <Link
                  to="warum"
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust the offset as needed
                  duration={500} // Duration of the scroll animation
                  className="text-black hover:text-blue-500 px-3 py-2 text-sm font-medium"
                >
                  WARUM WIR
                </Link>
                <Link
                  to="cards"
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust the offset as needed
                  duration={500} // Duration of the scroll animation
                  className="text-black hover:text-blue-500 px-3 py-2 text-sm font-medium"
                >
                  UNSERE DIENSTLEISTUNGEN
                </Link>
                <Link
                  to="vision"
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust the offset as needed
                  duration={500} // Duration of the scroll animation
                  className="text-black hover:text-blue-500 px-3 py-2 text-sm font-medium"
                >
                  UNSERE VISION
                </Link>
                <Link
                  to="feedback"
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust the offset as needed
                  duration={500} // Duration of the scroll animation
                  className="text-black hover:text-blue-500 px-3 py-2 text-sm font-medium"
                >
                  FEEDBACK
                </Link>
                <Link
                  to="betrungs"
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust the offset as needed
                  duration={500} // Duration of the scroll animation
                  className="text-black hover:text-blue-500 px-3 py-2 text-sm font-medium"
                >
                  BETRUGSPRÄVENTION
                </Link>
                <Link
                  to="kontakt"
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust the offset as needed
                  duration={500} // Duration of the scroll animation
                  className="text-black hover:text-blue-500 px-3 py-2 text-sm font-medium"
                >
                  KONTAKT
                </Link>
                <Link
                  to="impressum"
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust the offset as needed
                  duration={500} // Duration of the scroll animation
                  className="text-black hover:text-blue-500 px-3 py-2 text-sm font-medium"
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
