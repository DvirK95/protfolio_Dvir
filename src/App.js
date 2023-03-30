import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <div className="mainWrapper">
        <Home />
        <section id="about">
          <h2>About</h2>
          {/* rest of your about page content goes here */}
        </section>
        <section id="contact">
          <h2>Contact</h2>
          {/* rest of your contact page content goes here */}
        </section>
      </div>
    </div>
  );
}

export default App;
