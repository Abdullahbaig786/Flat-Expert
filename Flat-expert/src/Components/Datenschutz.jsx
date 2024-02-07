// Datenschutz.jsx

import React from "react";
import DatenschutzForm from "../assets/DatenForm.pdf"; // Import the PDF form

const Datenschutz = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Datenschutzerklärung</h2>
        <p>Insert your Datenschutzerklärung content here...</p>
        <iframe
          src={DatenschutzForm}
          width="100%"
          height="500px"
          title="Datenschutz Form"
        ></iframe>
      </div>
    </div>
  );
};

export default Datenschutz;
