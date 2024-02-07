import React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

function Cards() {
  return (
    <div id="cards" className="relative">
      <img src={card1} alt="Background" />
      <img src={card2} alt="Background" />
      <img src={card3} alt="Background" />
      <img src={card4} alt="Background" />
    </div>
  );
}

export default Cards;
