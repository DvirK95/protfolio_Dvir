import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home";
import About from "./Components/About";

import { Container } from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <div>
      <Navigation />

      <Home />
      <Container className="mainWrapper">
        <About>
          <h2>About</h2>
        </About>
        <section id="contact">
          <h2>Contact</h2>
          {/* rest of your contact page content goes here */}
        </section>
      </Container>
    </div>
  );
}

export default App;
