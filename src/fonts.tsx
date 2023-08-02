import React from "react";
import { IconDownload } from "./icons";
export default function Fonts({}) {
  return (
    <section className="font section">
      <div className="layout">
        <div className="layout-description">
          <h2>Primary typography</h2>
          <p>
            Our brand font is Rouna with fonts weights/ styles shown here. It
            should be used whenever technically possible.
          </p>
          <a href="public/rouna.zip" download>
            Download fonts
            <IconDownload />
          </a>
        </div>
        <div className="layout-content">
          <div className="font-large">Aa123</div>
          <div>
            <div className="font-name">Rouna</div>
          </div>
        </div>
      </div>
    </section>
  );
}
