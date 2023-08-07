import './Intro.css';
import { Row } from 'react-bootstrap';
import profileImg from '../../photos/DvirProfile.png';
import Social from '../../Components/Social/Social';

function Intro() {
  return (
    <section id="intro">
      <div className="infos">
        <h1 className="title">FrontEnd Developer & Automation</h1>
        <p>Passionate about coding and always eager to learn more and more</p>
        <Row className="justify-content-center">
          <Social />
        </Row>
        <img id="profileImg" src={profileImg} alt="profile" />
      </div>
    </section>
  );
}

export default Intro;
