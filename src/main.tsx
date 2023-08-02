import React from "react";
import { createRoot } from "react-dom/client";

import "./main.css";
import Logo from "./logo";
import Footer from "./Footer";
import Colors from "./colors";
import Fonts from "./fonts";
import FontsUses from "./fonts-uses";

const App = () => {
  return (
    <main className="app">
      <div className="container">
        <h1 className="app-title">Melvio visual guidelines</h1>
        <Logo />
        <Colors />
        <Fonts />
        <FontsUses />
      </div>
      <Footer />
    </main>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
