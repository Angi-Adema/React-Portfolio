import React, { useState } from "react";
import portfolioData from "../../helpers/portfolioData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./portfolio.css";

function Portfolio() {
  const [modalShow, SetModalShow] = useState(false);
  const [tempData, setTempData] = useState({});

  function createModal(data) {
    return (
      <Modal
        show={modalShow}
        onHide={() => SetModalShow(false)}
        size="lg"
        arial-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.summary}</p>
          <Image src={data.image} style={{ width: "200px" }} />
        </Modal.Body>
        <a
          id="portfolio_modal_link"
          href={data.link}
          target="_blank"
          rel="noreferrer"
        >
          Link to project site!
        </a>
        <Modal.Footer>
          <div>Technologies Used: </div>
          <p style={{ fontSize: "0.7rem", marginRight: "auto" }}>{data.tech}</p>
          <Button onClick={() => SetModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const mapped = portfolioData.map((e, idx) => {
    return (
      <Card
        key={idx}
        id="portfolio_card_container"
        style={{
          width: "650px",
          height: "500px",
          margin: 5,
          padding: 5,
        }}
      >
        <Image
          className="portfolio_image"
          onClick={() => {
            setTempData({
              image: e.image,
              link: e.link,
              title: e.title,
              summary: e.summary,
              tech: e.tech,
            });
            SetModalShow(true);
          }}
          src={e.image}
        />
        <div className="portfolio_click_info">&#x1F50E;&#xFE0E;</div>
        {createModal(tempData)}
      </Card>
    );
  });

  return (
    <div className="portfolio_main_container" id="portfolio">
      <h1>PORTFOLIO</h1>
      <p>
        GitHub Link:
        <a
          href="https://github.com/Angi-Adema"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          https://github.com/Angi-Adema
        </a>
      </p>
      <Container fluid="lg" style={{ padding: "2rem 0" }}>
        <Row>{mapped}</Row>
      </Container>
    </div>
  );
}

export default Portfolio;
