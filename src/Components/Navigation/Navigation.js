import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navigation.css";
import "../UI/MainButton.css";

function Navigation() {
  return (
    <Navbar variant="dark" sticky="top" className="navbar-cust" expand="lg">
      <Container>
        <Navbar.Brand className="nav-color" href="#home">
          Dvir Karl
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            <Nav.Link className="nav-color" href="#intro">
              Introduction
            </Nav.Link>
            <Nav.Link className="nav-color" href="#about">
              About Me
            </Nav.Link>
            <Nav.Link className="nav-color" href="#resume">
              Resume
            </Nav.Link>
            <Nav.Link className="nav-color" href="#contact">
              Contact
            </Nav.Link>
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
