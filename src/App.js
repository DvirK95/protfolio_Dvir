import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume/Resume";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Resume />
      <section id="contact">
        <h2>Contact</h2>
      </section>
    </>
  );
}

export default App;
