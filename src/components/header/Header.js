import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./header.css";

const Header = () => {
  return (
    <div className="main-info">
      <h1>Software Engineer</h1>,
      <TypeAnimation
        sequence={[
          "", // Types 'One'
          1000, // Waits 1s
          "Analytical...", // Deletes 'One' and types 'Two'
          1000, // Waits 1s
          "Innovative...", // Types 'Three' without deleting 'Two'
          1000,
          "Creative...",
          1000,
          "Problem Solver...",
          1000,
          "Always Learning...",
          1000,
          "And!!!",
          1000,
          "A Leader!",
          1000,
          "",
          "",
        ]}
        speed={30}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "2em" }}
      />
    </div>
  );
};

// function Header() {
//   return (
//     <div className="main-info">
//       <h1>What Am I?</h1>
//       <Typed
//         strings={[
//           "",
//           "Software Engineer",
//           "Also referred to as...",
//           "A Front-End Developer",
//           "A Back-End Developer",
//           "A MERN Full Stack Developer",
//           "OR!!!",
//           "A Coder!",
//           "",
//           "",
//         ]}
//         typeSpeed={40}
//         backSpeed={50}
//         loop
//       />
//     </div>
//   );
// }

export default Header;
