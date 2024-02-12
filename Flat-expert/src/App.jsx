import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Address from "./Components/Address";
import Betrungs from "./Components/Betrungs";
import Cards from "./Components/Cards";
import ContactForm from "./Components/ContactForm";
import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Vision from "./Components/Vision";
import Warum from "./Components/Warum";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Warum />
      <Cards />
      <Vision />
      <Feedback />
      <Betrungs />
      <ContactForm />
      <Address />
      <Footer />
    </div>
  );
};

export default App;
