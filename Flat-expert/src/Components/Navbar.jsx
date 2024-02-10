import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return !isMobile ? (
    <nav className="bg-[#30d5c8] sticky top-0 z-50">
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
      </div>
    </nav>
  ) : null;
};

export default Navbar;
