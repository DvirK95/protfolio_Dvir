import "./Contact.css";
import { Container, Form, FloatingLabel, Row } from "react-bootstrap";
import "./UI/MainButton.css";

function Contact() {
  return (
    <section id="contact">
      <Container>
        <Row lg={2} className="justify-content-lg-center">
          <Form
            action="https://formsubmit.co/6abef2ff48d83b8147834c57b958d58d"
            method="POST"
          >
            <h2>Get in Touch</h2>
            <FloatingLabel
              controlId="floatingInput"
              label="*Name"
              className="mb-3 "
            >
              <Form.Control
                required
                type="text"
                placeholder="Name"
                name="name"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="*Email"
              className="mb-3"
            >
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea"
              label="*Leave a message here"
            >
              <Form.Control
                required
                rows="10"
                as="textarea"
                name="message"
                placeholder=""
                style={{ height: "10rem" }}
              ></Form.Control>
            </FloatingLabel>
            <input type="hidden" name="_honey" style={{ display: "none" }} />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for reaching out."
            />
            <br />
            <button className="button" type="submit">
              Send Message
            </button>
          </Form>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
