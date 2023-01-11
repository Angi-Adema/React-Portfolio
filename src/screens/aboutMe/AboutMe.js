import React from 'react';
import './aboutMe.css';
import person from '../../images/AngiAdema.JPG';

function AboutMe() {
  return (
    <div className="about_container" id="about-me">
      <div>
        <img src={person} alt="Picture of Angi Adema" />
      </div>
      <div className="about_text">
        <h1>About Me</h1>
        <p>WRITE PARAGRAPH ABOUT YOU!!!!</p>
      </div>
    </div>
  )
}

export default AboutMe
