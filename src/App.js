import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume/Resume";

import { Container } from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />

      <Home />
      <Container className="mainWrapper">
        <About />
        <Resume />
        <section id="contact">
          <h2>Contact</h2>
          {/* rest of your contact page content goes here */}
        </section>
      </Container>
    </>
  );
}

export default App;
