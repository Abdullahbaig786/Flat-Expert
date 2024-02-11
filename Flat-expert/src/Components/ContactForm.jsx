import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import DatenFormPDF from "../assets/DatenForm.pdf";

const ContactForm = () => {
  const form = useRef();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleCheckboxChange = (e) => {
    setAcceptedTerms(e.target.checked);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!acceptedTerms) {
      console.log("Please accept the terms and conditions.");
      return;
    }

    emailjs
      .sendForm("service_b7t0088", "template_p24k58b", form.current, {
        publicKey: "S1IRfjRNAIuUZKrGb",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          resetForm();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const resetForm = () => {
    form.current.reset();
    setAcceptedTerms(false);
  };

  return (
    <div className="mt-40">
      <div className="bg-[#30d5c8] p-8">
        <div className="flex flex-col md:flex-row">
          <form
            id="kontakt"
            ref={form}
            onSubmit={sendEmail}
            className="flex-auto md:mr-4 md:px-4"
          >
            <div className="mb-9">
              <h2 className="text-4xl font-bold mb-16 ultra">
                KONTAKTIEREN SIE UNS FÜR EINE KOSTENLOSE BERATUNG
                <div className="border-b-2 border-gray-300 mb-4 mr-32 mt-4 "></div>
              </h2>
              <h6 className="font-bold mb-4 text-2xl ultra">KONTAKTFORMULAR</h6>
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="user_name" className="mb-2">
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                className="p-2 border border-gray-300 rounded-md w-1/2"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="user_email" className="mb-2">
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="p-2 border border-gray-300 rounded-md w-1/2"
                required
              />
            </div>
            <div className="flex flex-col mb-4 w-1/2">
              <label htmlFor="user_telephone" className="mb-2">
                Telephone
              </label>
              <input
                type="tel"
                id="user_telephone"
                name="user_telephone"
                className="p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mb-4 w-1/2">
              <label htmlFor="message" className="mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="p-2 border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={acceptedTerms}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-sm">
                ICH STIMME DER{" "}
                <a
                  href={DatenFormPDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue" }}
                >
                  DATENSCHUTZERKLÄRUNG
                </a>{" "}
                ZU
              </label>
            </div>

            <button
              type="submit"
              className={`bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-400 transition-colors ml-2 ${
                !acceptedTerms ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!acceptedTerms}
            >
              Absenden
            </button>
          </form>
          {/* Contact Information */}
          <div className="mt-8 md:mt-28 md:ml-4 md:w-64">
            {" "}
            <div className="mb-5">
              <strong>TELEFON</strong>
              <br />
              030 12113394
            </div>
            <div className="mb-5">
              <strong>EMAIL</strong>
              <br />
              support@flat-expert.com
            </div>
            <div>
              <strong>POSTANSCHRIFT</strong>
              <br />
              FlatExpert FE GmbH
              <br />
              c/o WeWork Germany GmbH <br />
              Kurürstendamm 11 10719 Berlin
            </div>
            <div className="mt-5">
              <strong>BÜROZEITEN</strong>
              <br />
              09:00 bis 18:00 Uhr
            </div>
          </div>
        </div>
        <hr className="border-black my-8" />
      </div>
    </div>
  );
};

export default ContactForm;
