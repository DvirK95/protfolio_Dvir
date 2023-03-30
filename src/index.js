import React from "react";
import { createRoot } from "react-dom/client";
//import "tailwindcss/tailwind.css"; // Add this line to import Tailwind CSS
import "bootstrap/dist/css/bootstrap.min.css"; // add this line to import Bootstrap CSS
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
