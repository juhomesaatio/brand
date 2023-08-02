import React from "react";
import { useToast } from "./use-toast";
import { unsecureClipboardCopy } from "./clipboard";

const COLORS = [
  { name: "Melvio Purple", hex: "#5f3c66", color: "#efe0db" },
  { name: "Melvio Red", hex: "#f88ba2", color: "#5f3c66" },
  { name: "Melvio Green", hex: "#608a7b", color: "#efe0db" },
  { name: "Melvio Light Red", hex: "#efe0db", color: "#5f3c66" },
  { name: "Melvio Light Green", hex: "#b3ccb2", color: "#5f3c66" },
];

export default function Colors({}) {
  const [Toast, showToast] = useToast();
  const onCopyColor = (hex: string, e: React.MouseEvent) => {
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
    <section className="section">
      <h2>Colors</h2>
      <p className="mb-3">
        In terms of hierarchy, the brand colors are all of equal value, which
        means they can be used as equal surfaces in different applications. It
        is essential to ensure that the text on the surface is clearly legible,
        i.e. the contrast between the text and the background is sufficient.
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
      <Toast />
      <textarea className="unsecure-textarea" id="unsecureTextArea" />
    </section>
  );
}
