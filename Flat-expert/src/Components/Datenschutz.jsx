import React from "react";

const Datenschutz = ({ showPdfModal, setShowPdfModal }) => {
  return (
    <div className={`modal ${showPdfModal ? "block" : "hidden"}`}>
      <div
        className="modal-overlay"
        onClick={() => setShowPdfModal(false)}
      ></div>
      <div className="modal-container">
        <div className="modal-content">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Datenschutzerklärung</h2>
            <p>
              This is your Datenschutzerklärung content. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed ut ex quis nulla tincidunt
              cursus. Nulla facilisi. Proin faucibus nibh sed libero
              scelerisque, sit amet aliquet nisi tincidunt. Donec euismod
              vestibulum massa, id fermentum metus aliquam a. Nullam luctus
              nulla id libero laoreet condimentum. Morbi pulvinar nibh nec
              turpis dapibus, in varius eros bibendum. Suspendisse potenti. In
              hac habitasse platea dictumst.
            </p>
          </div>
        </div>
        <button className="modal-close" onClick={() => setShowPdfModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Datenschutz;
