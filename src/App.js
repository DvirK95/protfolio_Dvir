import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Resume from "./Components/Resume/Resume";
import FloatingButton from "./Components/Accessibility/FloatingButton";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Intro />
      <FloatingButton />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
