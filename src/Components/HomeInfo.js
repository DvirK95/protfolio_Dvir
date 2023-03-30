import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />;
const linkedinIcon = <FontAwesomeIcon icon={faLinkedinIn} />;

function HomeInfo() {
  return (
    <div class="infos">
      <h6 class="subtitle">My name is</h6>
      <h1 class="title">Dvir Karl</h1>
      <p>Developer, B.Sc. Information System</p>
      <div className="social mt-4">
        <a className="social-item" href="#">
          {facebookIcon}
        </a>
        <a className="social-item" href="#">
          {linkedinIcon}
        </a>
      </div>
      <p></p>
    </div>
  );
}

export default HomeInfo;
