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
          certification as a MERN Full-Stack Developer and am now seeking
          opportunities not only to continue learning, but also to help make a
          business profitable through their web presence.
        </p>
        <br></br>
        <p>
          My experience includes working in HTML, CSS, JavaScript, Node.js,
          Express.js, MySQL/MySQL2, NoSQL, MongoDB and ReactJS among others.
          Sample projects were built using Object Oriented Programming and using
          the Model-View-Controller framework to name a couple. My experience
          has taught me how to problem solve as well as how to learn! Please
          check out my portfolio of projects and I look forward to connecting
          soon!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
