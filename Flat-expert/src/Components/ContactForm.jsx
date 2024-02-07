import React from "react";

const ContactForm = () => {
  return (
    <div id = "kontakt" className="bg-[#30D5C8] text-white p-4 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold">
        KONTAKTIEREN SIE UNS FÜR EINE KOSTENLOSE BERATUNG
      </h2>
      <form className="mt-2 md:mt-4">
        <input
          type="text"
          placeholder="IHR NAME"
          className="p-2 mb-2 md:mb-3 w-full"
        />
        <input
          type="email"
          placeholder="E-MAIL"
          className="p-2 mb-2 md:mb-3 w-full"
        />
        <input
          type="tel"
          placeholder="TELEFON"
          className="p-2 mb-2 md:mb-3 w-full"
        />
        <textarea
          placeholder="IHRE NACHRICHT"
          className="p-2 mb-2 md:mb-3 w-full h-[100px]"
        ></textarea>
        <div>
          <input type="checkbox" id="agreement" name="agreement" />
          <label htmlFor="agreement">
            ICH STIMME DER DATENSCHUTZERKLÄRUNG ZU*
          </label>
        </div>
        <button
          type="submit"
          className="bg-white text-green-500 p-2 md:p-[10px] mt-2 md:mt-[10px]"
        >
          ABSENDEN
        </button>
      </form>
      {/* Contact Information */}
      <div className="mt-4 md:mt-[20px] grid grid-cols-1 md:grid-cols-[1fr,1fr,1fr]">
        {/* Phone */}
        <div className="mb-2 md:mb-0">
          TELEFON
          <br />
          030 12113394
        </div>

        {/* Email */}
        <div className="mb-2 md:mb-0">
          EMAIL
          <br />
          support@flat-expert.com
        </div>

        {/* Address */}
        <div className="mb-2 md:mb-0">
          POSTANSCHRIFT
          <br />
          FlatExpert FE GmbH
          <br />
          c/o WeWork Germany GmbH Kurürstendamm 11 10719 Berlin
        </div>
      </div>
      {/* Office Hours */}
      <div className="mt-2 md:mt-4">
        BÜROZEITEN
        <br />
        09:00 bis 18:00 Uhr
      </div>
    </div>
  );
};

export default ContactForm;
