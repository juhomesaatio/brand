import React from "react";
import { createRoot } from "react-dom/client";
import { unsecureClipboardCopy } from "./clipboard";
import { colors, fonts } from "./data";
import { useToast } from "./use-toast";

import "./main.css";
import Logo from "./logo";
import Footer from "./Footer";

const COLORS = [
  { name: "Melvio Purple", hex: "#5f3c66", color: "#efe0db" },
  { name: "Melvio Red", hex: "#f88ba2", color: "#5f3c66" },
  { name: "Melvio Green", hex: "#608a7b", color: "#efe0db" },
  { name: "Melvio Light Red", hex: "#efe0db", color: "#5f3c66" },
  { name: "Melvio Light Green", hex: "#b3ccb2", color: "#5f3c66" },
];

const App = () => {
  const [Toast, showToast] = useToast();
  const onCopyColor = (hex: string, e: MouseEvent) => {
    if (window.isSecureContext) {
      navigator.clipboard.writeText(hex).then(
        function () {
          showToast("Color copied!", e);
        },
        function (err) {
          showToast("Copying failed :( ", e);
        }
      );
    } else {
      const isSuccessful = unsecureClipboardCopy(hex, window.unsecureTextArea);

      if (isSuccessful) showToast("Color copied!", e);
      else showToast("Copying failed :(", e);
    }
  };
  return (
    <main className="app">
      <div className="container">
        <h1 className="app-title">Melvio visual guidelines</h1>
        <Logo />
        <section className="section">
          <h2>Colors</h2>
          <p className="mb-3">
            In terms of hierarchy, the brand colors are all of equal value,
            which means they can be used as equal surfaces in different
            applications. It is essential to ensure that the text on the surface
            is clearly legible, i.e. the contrast between the text and the
            background is sufficient.
          </p>
          <div className="flex">
            {COLORS.map((color) => {
              const style = { background: color.hex, color: color.color };
              return (
                <div
                  key={color.hex}
                  className="color"
                  style={style}
                  onClick={(e) => onCopyColor(color.hex, e)}
                >
                  <h4 className="color-name">{color.name}</h4>
                  <p className="color-hex">HEX: {color.hex}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
      {/* <section className="colors">
        <h2>Colors</h2>
        <section className="color-boxes">
          {colors.map((color) => {
            return (
              <div key={color.name} className="color-box">
                <div
                  className="color"
                  style={{ backgroundColor: color.hex }}
                  onClick={(e) => onCopyColor(color.hex, e)}
                ></div>
                <div className="color-details">
                  <span
                    className="color-name"
                    onClick={(e) => onCopyColor(color.hex, e)}
                  >
                    {color.hex}
                  </span>
                  <span>{color.name}</span>
                </div>
              </div>
            );
          })}
        </section>

        <h3>Color uses</h3>
        <section className="color-uses">
          <ColorUses
            heading="Use as text color over a white background"
            colors={colors}
            usesProp={"overWhite"}
          />
          <ColorUses
            heading="Use as text color over a black background"
            colors={colors}
            usesProp={"overBlack"}
          />
          <ColorUses
            heading="Use as a background color"
            colors={colors}
            usesProp={"underBlack"}
          />
        </section>
      </section>
      <section>
        <h2>Fonts</h2>
        <div className="font-about">
          <div className="font-info">
            <span className="label">Download</span>
            <a href="/rouna.zip">Download font</a>
          </div>
          <div className="font-info">
            <span className="label">Reference</span>
            <a href="https://www.atipofoundry.com/fonts/rouna" target="_blank">
              atipofoundry.com/fonts/rouna
            </a>
          </div>
        </div>
        {fonts.map((font) => {
          return (
            <section key={font.name} className={font.className}>
              <h3>{font.name}</h3>
              <p>Example</p>
              <p>
                Me-säätiö on suomalainen säätiö, joka tekee työtä sen eteen,
                että jokaisella lapsella ja nuorella on taustastaan riippumatta
                mahdollisuus harrastaa, uskoa tulevaisuuteen ja tuntea
                kuuluvansa joukkoon. 1234567890
              </p>
            </section>
          );
        })}
      </section> */}
      <Toast />
      <textarea className="unsecure-textarea" id="unsecureTextArea" />
    </main>
  );
};

const ColorUses = ({ heading, colors, usesProp }) => {
  return (
    <>
      <h4 className="margin-0">{heading}</h4>
      <div className="color-use color-boxes">
        {colors
          .filter((color) => color.uses[usesProp])
          .map((color) => (
            <div key={color.name} className="color-box color-box--fluid">
              <div
                className="color--small"
                style={{ backgroundColor: color.hex }}
              ></div>
            </div>
          ))}
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
