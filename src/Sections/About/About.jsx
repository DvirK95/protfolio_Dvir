import './About.css';
import '../../Components/UI/MainButton.css';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <section id="about">
      <Container>
        <h2 id="profileTitle">
          Hello! I'm Dvir Karl, and it's a pleasure to virtually meet you.
        </h2>
        <p>
          Got a Bachelor's degree in B.Sc. Information Systems and totally into
          the cool world of development, especially the frontend stuff. I'm
          skilled in React JavaScript/TypeScript and also know my way around
          automation and testing with Selenium Python.
        </p>
        <a href="#contact">
          <button className="button sec-btn">Contact Me</button>
        </a>
      </Container>
    </section>
  );
}
export default About;
