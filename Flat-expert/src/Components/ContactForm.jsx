import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Datenschuty from "./Datenschutz";

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
      .sendForm("service_72olbbn", "template_2ef70fu", form.current, {
        publicKey: "aG74etRnisnRdPD8r",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="flex flex-col md:flex-row">
        <form
          id="kontakt"
          ref={form}
          onSubmit={sendEmail}
          className="flex-auto md:mr-4 md:px-4"
        >
          <div className="mb-9">
            <h2 className="text-2xl font-bold mb-2">
              KONTAKTIEREN SIE UNS FÜR EINE KOSTENLOSE BERATUNG
            </h2>
            <h6 className="text-lg font-bold mb-4">KONTAKTFORMULAR</h6>
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
          <div className="flex flex-col mb-4 w-64">
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
            <div className="flex items-center mb-4">
              <label htmlFor="terms" className="text-sm">
                ICH STIMME DER{" "}
                <a
                  href="/src/assets/DatenForm.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DATENSCHUTZERKLÄRUNG
                </a>{" "}
                ZU
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors ml-2"
            >
              Absenden
            </button>
          </div>
        </form>

        {/* Contact Information */}
        <div className="mt-8 md:mt-0 md:ml-4 md:w-64">
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
    </div>
  );
};

export default ContactForm;
