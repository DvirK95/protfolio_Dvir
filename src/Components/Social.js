import "./Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Social({ inverted }) {
  const GitHubIcon = <FontAwesomeIcon icon={faGithub} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedinIn} />;
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const whatsappIcon = <FontAwesomeIcon icon={faWhatsapp} />;
  const classNameSocial = inverted ? "social-item inverted" : "social-item";

  return (
    <>
      <a className={classNameSocial} href="mailto:dvirkarl@gmail.com">
        {emailIcon}
      </a>
      <a
        className={classNameSocial}
        href="https://www.linkedin.com/in/dvir-karl-a59547140/"
      >
        {linkedinIcon}
      </a>
      <a className={classNameSocial} href="https://github.com/DvirK95">
        {GitHubIcon}
      </a>
      <a
        className={classNameSocial}
        href="https://api.whatsapp.com/send/?phone=9720526300494"
      >
        {whatsappIcon}
      </a>
    </>
  );
}

export default Social;
