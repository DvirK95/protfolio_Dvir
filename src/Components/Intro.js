import './Intro.css';
import { Row } from 'react-bootstrap';
import profileImg from '../photos/DvirProfile.png';
import Social from './Social';

function Intro() {
  return (
    <section id="intro">
      <div className="infos">
        <h1 className="title">Developer and & Automation</h1>
        <p>Passionate about coding and always eager to learn technologies</p>
        <Row className="justify-content-center">
          <Social />
        </Row>
        <img id="profileImg" src={profileImg} alt="profile" />
      </div>
    </section>
  );
}

export default Intro;
