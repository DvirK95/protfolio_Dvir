import { Card } from "react-bootstrap";

function ResumeCard({ subjectName, subject }) {
  return (
    <Card>
      <Card.Header>{subjectName}</Card.Header>
      <Card.Body>
        {subject.map((period, index) => (
          <div key={index}>
            <Card.Title>{period.date}</Card.Title>
            <div>{period.title}</div>
            <ul>
              {period.body.map((paragraph, paragraphIndex) => (
                <li key={paragraphIndex}>{paragraph}</li>
              ))}
            </ul>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default ResumeCard;
