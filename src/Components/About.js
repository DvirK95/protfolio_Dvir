import "./About.css";
import { Container } from "react-bootstrap";
import "./UI/MainButton.css";

function About() {
  return (
    <section id="about">
      <Container>
        <h2 id="profileTitle">
          Hello! I'm Dvir Karl, and it's a pleasure to virtually meet you.
        </h2>
        <p>
          A soon-to-be B.Sc. Information Systems graduate with a passion for
          development. Equipped with self-learning expertise and experience in
          Selenium automation, I'm currently immersed in a full stack project.
          Eager to embark on my next professional adventure, I blend fun and
          dedication to create exceptional software solutions. Let's connect and
          innovate together!
        </p>
        <button className="button sec-btn">Contact Me</button>
      </Container>
    </section>
  );
}
export default About;
