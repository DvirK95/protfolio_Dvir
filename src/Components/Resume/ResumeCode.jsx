import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faFaceSmileWink } from '@fortawesome/free-regular-svg-icons';

function ResumeCode() {
  const codeIcon = <FontAwesomeIcon className="resumeIcon" icon={faCode} />;
  const pythonIcon = <FontAwesomeIcon icon={faPython} />;
  const javaIcon = <FontAwesomeIcon icon={faJava} />;
  const smileIcon = <FontAwesomeIcon icon={faFaceSmileWink} />;

  return (
    <Card>
      <Card.Header>{codeIcon}</Card.Header>
      <Card.Body>
        <Card.Title>Fullstack</Card.Title>
        <ul>
          <li>Self study - My passion!</li>
          <li>React</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>NodeJs</li>
          <li>HTML & CSS - Obviously&nbsp;{smileIcon}&nbsp;</li>
        </ul>

        <Card.Title>{pythonIcon} Python</Card.Title>
        <ul>
          <li>Self study & degree</li>
          <li>Selenium - Experienced!</li>
          <li>Machine Learning & NLP</li>
          <li>Pandas - Experienced!</li>
        </ul>

        <Card.Title>{javaIcon} Java</Card.Title>
        <ul>
          <li>Object-Oriented Programming</li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default ResumeCode;
