import React from "react"
import "./navigation.css"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { navigationLinks } from "../../helpers/navigationLinks"

function createLinks(setCurrentPage, currentPage) {
  return navigationLinks.map((e, idx) => (
    <Nav.Link
      key={idx}
      className={`${currentPage === e.name ? "nav-link active" : "nav-link"}`}
      onClick={() => setCurrentPage(e.name)}
    >
      {e.name}
    </Nav.Link>
  ))
}

function NavigationBar({ currentPage, setCurrentPage }) {
  return (
    <div id="home">
      <Navbar
        className="navigation_container"
        style={{ zIndex: "2", position: "fixed", top: "0", width: "100%" }}
        collapseOnSelect
        expand="md"
      >
        <Navbar.Brand
          style={{ marginLeft: "1rem" }}
          onClick={() => setCurrentPage("HOME")}
        >
          Angela E. Adema
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{
            justifyContent: "flex-end",
            marginRight: "1rem",
            borderColor: "none",
          }}
        >
          <Nav className="links" style={{ margin: "0 1rem" }}>
            {createLinks(setCurrentPage, currentPage)}
            <a
              href="https://app.enhancv.com/share/3718490d/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
              className="nav-link"
              target="_blank"
              download
            >
              RESUME
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
