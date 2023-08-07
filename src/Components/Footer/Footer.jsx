import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { Container } from 'react-bootstrap';
import './Footer.css';
import Social from '../Social/Social';
import { Row } from 'react-bootstrap';

function Footer() {
  const reactIcon = <FontAwesomeIcon icon={faReact} />;
  return (
    <footer>
      <Container>
        <Row className="justify-content-center">
          <Social inverted={true} />
        </Row>
        <p>© 2023 Created by Dvir using ReactJS {reactIcon}</p>
      </Container>
    </footer>
  );
}

export default Footer;
