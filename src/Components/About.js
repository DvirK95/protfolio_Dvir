import "./About.css";
import { Row, Col } from "react-bootstrap";
import img from "../photos/profileImg.jpg";
import "./UI/MainButton.css";

function About() {
  return (
    <section id="about">
      <Row>
        <Col md={3} sm={12}>
          <img
            className="img-thumbnail"
            src={img}
            width={"100%"}
            alt="profile"
          />
        </Col>
        <Col md={9}>
          <h2 id="profileTitle">Dvir Karl</h2>
          <h6 id="profileSubtitle">Developer</h6>
          <p>
            Final semester B.Sc. Information System student with strong
            technical skills seeking a developer role to continue learning and
            growing. Graduating in July 2023.
          </p>
          <button className="white-green-btn">Downolad CV</button>
        </Col>
      </Row>
    </section>
  );
}
export default About;
