import React from "react";
import "./contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Contact() {
  return (
    <Form className="form_container">
      <h1>Contact Information</h1>
      <p>Feel free to reach out to Angi Adema directly by phone at: (720) 641-5568 or by email at: angi.adema@gmail.com. Otherwise fill in the contact form below.</p>
      <br></br>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Name" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <InputGroup>
        <InputGroup.Text>Message</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>

      <Button className="button" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
