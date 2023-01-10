import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { navigationLinks } from "../../helpers/navigationLinks";

function NavigationBar() {
  return (
    <div id="home">
      <Navbar>
        <Navbar.Brand href="#home">Angela E. Adema</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
