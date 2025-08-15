import React from "react"
import "./aboutMe.css"
import person from "../../images/006-tSTreFkBwbE.jpeg"

function AboutMe() {
  return (
    <div className="about_container" id="about-me">
      <div>
        <img src={person} alt="Picture of Angi Adema" />
      </div>
      <div className="about_text" style={{ marginTop: "3rem" }}>
        <h1>ABOUT ME</h1>
        <p>
          Full-Stack Java Developer with hands-on experience building secure,
          scalable, applications using Core Java, Spring Boot, Spring Framework,
          JPA, JDBC, Hibernate, RESTful APIs, MySQL, and NoSQL databases. Skilled
          in project development, debugging, problem-solving, and Agile collaboration
          to deliver high-quality software solutions.
        </p>
        <p>
          My career began with a Bachelor of Science from the University of Colorado
          at Denver, followed by roles in mortgage processing and human resources 
          before making the pivot into software development. Completing the University
          of Denver Full-Stack Coding Bootcamp and earning a certification in the 
          MERN tech stack laid the groundwork for my current pursuit of the Oracle
          Certified Professional Java SE 11 credential.
        </p>
        <p>
          Recent work includes developing a Social Media Blog RESTful API at 
          Revature—first with Java, Maven, JDBC, Javalin and MySQL. Then re-built
          this project using Spring Boot, Spring Security, JPA, Hibernate and MySQL.
          Another project recently completed for the University of Colorado at Denver
          was refactoring a Python-based architectural modeling application, reducing 
          the codebase by 30%, improving load time by 95% and adding enhanced features 
          for a better user experience. 
        </p>
        <p>
          Passionate about continuous learning and leveraging technology to solve
          complex problems, I aim to create impactful digital solutions that drive
          organizational success. My portfolio showcases projects that reflect technical
          expertise, dedication, and a commitment to excellence.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
