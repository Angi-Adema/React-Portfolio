import React from "react";
import "./contactMe.css";
import { navigationLinks } from "../../helpers/navigationLinks";

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <p key={idx}>
      <a href={e.ref}>{e.name}</a>
    </p>
  ));
}

function ContactMe() {
  return (
      <div className="contactMe_container" id="contact">
        <h1>CONTACT</h1>
      <div className="contactMe_data_links">
        <div>
          <p>Email: angi.adema@gmail.com</p>
          <p>
            LinkedIn Link:
            <a
              href="https://www.linkedin.com/in/angi-adema-169b6925b/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              https://www.linkedin.com/in/angi-adema-169b6925b/
            </a>
          </p>
        </div>
      </div>
      <div style={{ textAlign: "center", fontSize: "12px" }}>
        Made with &#10084;&#65039; by Angela E. Adema
      </div>
    </div>
  );
}

export default ContactMe;
