import React from "react";
import picture from "../assets/Address.png";

const Address = () => {
  return (
    <section className="relative pt-12 bg-[#30d5c8]">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img alt="..." className="max-w-full " src={picture} />
        </div>
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12 pb-4">
            <h3 className="text-3xl font-semibold ultra">KONTAKT</h3>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              FlatExpert FE GmbH <br /> c/o WeWork Germany GmbH <br />{" "}
              Kurfürstendamm 11 <br /> 10719 Berlin <br /> <br />
            </p>
            <p>
              <a
                href="tel:03012113394"
                className="text-blue-600 hover:underline"
              >
                030 12113394
              </a>{" "}
              <br />
              <a
                href="mailto:support@flat-expert.com"
                className="text-blue-600 hover:underline"
              >
                support@flat-expert.com
              </a>
            </p>
          </div>

          <div className="md:pr-8">
            <h4 className="text-2x1 font-semibold">UNSERE BÜROZEITEN</h4>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Montag bis Freitag <br /> 09:00 - 18:00 Uhr <br /> <br />{" "}
              BERATUNGEN NUR NACH <br /> TERMINABSPRACHE
            </p>
          </div>
        </div>
      </div>
      <footer className="relative pt-8 pb-3 mt-8">
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="md:pr-8">
              {/* Empty div to push the heading to the right */}
            </div>
            <div className="hidden md:block"> </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Address;
