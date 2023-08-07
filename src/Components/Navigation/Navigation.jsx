import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Navigation.css';
import '../UI/MainButton.css';
import useNavigation from './useNavigation';

function Navigation() {
  const { activeLink } = useNavigation();

  return (
    <Navbar variant="dark" sticky="top" className="navbar-cust" expand="md">
      <Container>
        <Navbar.Brand href="#intro">Dvir Karl</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            {['intro', 'about', 'resume', 'contact'].map((section) => (
              <Link
                key={section}
                activeClass="active"
                to={section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={50}
                className={`nav-link ${activeLink === section ? 'active' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </Nav>
          <Nav>
            <Nav.Link
              href={`${process.env.PUBLIC_URL}/Dvir_Karl_CV.pdf`}
              download
            >
              <button className="button">Download CV</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
