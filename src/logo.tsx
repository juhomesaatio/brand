import React from "react";
import { IconDownload } from "./icons";

export default function Logo({}) {
  return (
    <section className="section logo">
      <div className="layout">
        <div className="layout-description">
          <h2>Logo</h2>
          <p>
            The primary version of the logo is the one with the tagline “The
            Impact Tool” and should be used whenever possible.{" "}
          </p>
          <p>
            When the use of space or the small physical size of the logo makes
            the tagline difficult to read, a secondary logo can be used.
          </p>
        </div>
        <div>
          <div className="logo-instance">
            <div className="logo-name">
              <div className="mb-1">
                <b>Primary logo / with tagline</b>
              </div>
              <a href="public/logo/logo-primary.png" download>
                Download png
                <IconDownload />
              </a>
            </div>
            <img className="logo-img" src="public/logo/logo-primary.png" />
          </div>
          <div className="logo-instance">
            <div className="logo-name">
              <div className="mb-1">
                <b>Secondary logo / without tagline</b>
              </div>
              <a href="public/logo/logo-secondary.png" download>
                Download png
                <IconDownload />
              </a>
            </div>
            <img className="logo-img" src="public/logo/logo-secondary.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
