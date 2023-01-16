import React from "react";
import "./aboutMe.css";
import person from "../../images/AngiAdema.JPG";

function AboutMe() {
  return (
    <div className="about_container" id="about-me">
      <div>
        <img src={person} alt="Picture of Angi Adema" />
      </div>
      <div className="about_text">
        <h1>ABOUT ME</h1>
        <p>
          After earning my Bachelor of Science degree from the University of
          Colorado at Denver, I began my professional career working in Human
          Resources as a Benefits Administrator. From there I spent a few years
          working as a Mortgage Processor through the refinance boom of 2021
          then moved on to study web development through the University of
          Denver. Having gained expertise in web development, I have earned a
          certification as MERN Full-Stack Developer and am now seeking
          opportunities to further my knowledge and experience working in the
          field.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
