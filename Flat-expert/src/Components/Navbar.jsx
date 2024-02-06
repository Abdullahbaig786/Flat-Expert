import React from "react";

const Navbar = () => {
  return (
    <ul className="flex bg-gray-800 p-4">
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800 text-sm" href="#">
          ÜBER UNS
        </a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800 text-sm" href="#">
          WARUM WIR
        </a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800 text-sm" href="#">
          UNSERE DIENSTLEISTUNGEN
        </a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800 text-sm" href="#">
          UNSERE VISION
        </a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800 text-sm" href="#">
          FEEDBACK
        </a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800 text-sm" href="#">
          BETRUGSPRÄVENTION
        </a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800 text-sm" href="#">
          KONTAKT
        </a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800 text-sm" href="#">
          IMPRESSUM
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
