import React from "react";

export default function Page({}) {
  return (
    <main className="main">
      <h1>Colors</h1>
      <p>
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
            </div>
          );
        })}
      </div>
    </main>
  );
}
