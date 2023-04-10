import "./Home.css";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedinIn} />;
  const gmatlIcon = <FontAwesomeIcon icon={faGoogle} />;

  return (
    <section id="home">
      <div class="infos">
        <h6 class="subtitle">Hello, I'm</h6>
        <h1 class="title">Dvir Karl</h1>
        <p>Developer, B.Sc. Information System</p>
        <Row>
          <a className="social-item" href="/">
            {facebookIcon}
          </a>
          <a className="social-item" href="/">
            {linkedinIcon}
          </a>
          <a className="social-item" href="/">
            {gmatlIcon}
          </a>
        </Row>
      </div>
    </section>
  );
}

export default Home;
