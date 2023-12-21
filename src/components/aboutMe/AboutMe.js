import React from "react"
import "./aboutMe.css"
import person from "../../images/AngiAdema.JPG"

function AboutMe() {
  return (
    <div className="about_container" id="about-me">
      <div>
        <img src={person} alt="Picture of Angi Adema" />
      </div>
      <div className="about_text" style={{ marginTop: "3rem" }}>
        <h1>ABOUT ME</h1>
        <p>
          Armed with a Bachelor of Science from the University of Colorado at
          Denver, I embarked on a dynamic career journey that has woven together
          diverse expertise in Human Resources, Mortgage Processing, and Web
          Development.
        </p>
        <p>
          Driven by a passion for learning and technology, I pivoted to immerse
          myself in the realm of web development, undertaking comprehensive
          studies at the University of Denver. My dedication culminated in
          achieving certification as a MERN Full-Stack Developer, equipping me
          with a robust skill set poised to innovate and create impactful
          digital solutions.
        </p>
        <p>
          My proficiency spans an array of technologies including HTML, CSS,
          JavaScript, Node.js, Express.js, MySQL/MySQL2, NoSQL, MongoDB, and
          ReactJS, among others. Throughout my journey, I've employed Object
          Oriented Programming and embraced RESTful API construction through
          various frameworks to craft diverse projects, fostering a keen knack
          for problem-solving and continual learning.
        </p>
        <p>
          I am fervently driven by a dual pursuit: to perpetually expand my
          knowledge horizon and to leverage my expertise to enhance a company's
          online footprint, amplifying its success in the digital sphere. I
          invite you to explore my portfolio showcasing a curated collection of
          projects, each a testament to my commitment to excellence.
        </p>
        <p>
          I eagerly anticipate the opportunity to connect and explore avenues
          where my skills and passion align with your organizational goals.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
