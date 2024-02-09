import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return !isMobile ? (
    <nav className="bg-[#30d5c8] sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 navbar-container">
        <div className="flex h-12 items-center justify-center">
          <div className="flex items-center">
            <div className="hidden md:block whitespace-nowrap">
              {" "}
              <div className="ml-10 flex items-baseline space-x-2">
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
                {/* Add more Link components for other sections */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  ) : null; // Render nothing if isMobile is true
};

export default Navbar;
