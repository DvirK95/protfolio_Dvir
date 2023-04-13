import "./Home.css";
import { Row } from "react-bootstrap";
import profileImg from "../photos/DvirProfile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGoogle,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  const GitHubIcon = <FontAwesomeIcon icon={faGithub} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedinIn} />;
  const gmatlIcon = <FontAwesomeIcon icon={faGoogle} />;
  const whatsappIcon = <FontAwesomeIcon icon={faWhatsapp} />;

  return (
    <section id="home">
      <div className="infos">
        {/*<h6 className="subtitle">Hello, I'm</h6>*/}
        <h1 className="title">Full Stack Developer and & Automation</h1>
        <p>Passionate about coding and always eager to learn technologies</p>
        {/*<p>Developer, B.Sc. Information System</p>*/}
        <Row className="justify-content-center">
          <a className="social-item" href="mailto:dvirkarl@gmail.com">
            {gmatlIcon}
          </a>
          <a
            className="social-item"
            href="https://www.linkedin.com/in/dvir-karl-a59547140/"
          >
            {linkedinIcon}
          </a>
          <a className="social-item" href="https://github.com/DvirK95">
            {GitHubIcon}
          </a>
          <a
            className="social-item"
            href="https://api.whatsapp.com/send/?phone=9720526300494"
          >
            {whatsappIcon}
          </a>
        </Row>
        <img id="profileImg" src={profileImg} alt="profile" />
      </div>
    </section>
  );
}

export default Home;
