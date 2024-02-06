import React from "react";
import picture from "../assets/Address.png";

const Address = () => {
  return (
    <div className="bg-[#30D5C8] p-5 rounded-md flex mb-8">
      {" "}
      {/* Added mb-8 for margin-bottom */}
      {/* Image on the left */}
      <div className="w-1/3">
        <img src={picture} alt="Background" className="w-full" />
      </div>
      {/* Text on the right */}
      <div className="w-2/3 ml-4">
        <h2 className="text-white text-xl font-bold">KONTAKT</h2>
        <p className="text-white mt-2">FlatExpert FE GmbH</p>
        <p className="text-white">c/o WeWork Germany GmbH</p>
        <p className="text-white">Kurfürstendamm 11, 10719 Berlin</p>
        <a
          href="tel:03012113394"
          className="text-blue-400 underline mt-2 block"
        >
          030 12113394
        </a>
        <a
          href="mailto:support@flat-expert.com"
          className="text-blue-400 underline mt-1 block"
        >
          support@flat-expert.com
        </a>

        <h3 className="text-white text-lg font-bold mt-4">UNSERE BÜROZEITEN</h3>
        <p className="text-white mt-2">Montag bis Freitag: 09:00 - 18:00 Uhr</p>

        <div className="mt-4">
          {/* Add your social media icons and links here */}
          Get Social
          {/* Example */}
          {/* 
                      <a href='your-instagram-link' target='_blank' rel='noopener noreferrer'>
                          Instagram Icon here
                      </a> 
                  */}
        </div>
      </div>
    </div>
  );
};

export default Address;
