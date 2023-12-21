import React, { useState } from "react"
import portfolioData from "../../helpers/portfolioData"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import "./portfolio.css"

function Portfolio() {
  const [modalShow, SetModalShow] = useState(false)
  const [tempData, setTempData] = useState({})

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
        <a
          id="portfolio_modal_link"
          href={data.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub Link!
        </a>
        <Modal.Footer>
          <div>Technologies Used: </div>
          <p style={{ fontSize: "0.7rem", marginRight: "auto" }}>{data.tech}</p>
          <Button onClick={() => SetModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
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
        className="portfolio_img_card"
      >
        <Image
          className="portfolio_image"
          onClick={() => {
            setTempData({
              image: e.image,
              github: e.github,
              link: e.link,
              title: e.title,
              summary: e.summary,
              tech: e.tech,
            })
            SetModalShow(true)
          }}
          src={e.image}
        />
        {createModal(tempData)}
      </Card>
    )
  })

  return (
    <div className="portfolio">
      <Container
        fluid="lg"
        className="portfolio_main_container"
        style={{ padding: "2rem 0", marginTop: "30px ", textAlign: "center" }}
      >
        <h1>PORTFOLIO</h1>
        <Row>{mapped}</Row>
      </Container>
    </div>
  )
}

export default Portfolio
