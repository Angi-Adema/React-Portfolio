import React from "react";
import "./footer.css";
import { navigationLinks } from "../../helpers/navigationLinks";

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <p key={idx}>
      <a href={e.ref}>{e.name}</a>
    </p>
  ));
}

function Footer() {
  return (
    <div className="footer_container" id="contact">
      <div className="footer_data_links">
        <div>
          <p>
            <a
              href="https://www.linkedin.com/in/angelaadema/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../../images/logos/linkedin-logo.png")}
                alt="LinkedIn"
                className="logo"
              ></img>
            </a>
          </p>
        </div>
        <div>
          <a
            href="https://github.com/Angi-Adema"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../../images/logos/github-mark-white.png")}
              alt="GitHub"
              className="logo"
            ></img>
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/Angi_Adema"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../../images/logos/twitter.png")}
              alt="Twitter"
              className="logo"
            ></img>
          </a>
        </div>
      </div>
      <div style={{ textAlign: "center", fontSize: "12px" }}>
        Made with &#10084;&#65039; by Angela E. Adema
      </div>
    </div>
  );
}

export default Footer;
