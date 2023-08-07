import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";

function ResumeDb() {
  const dbIcon = (
    <FontAwesomeIcon
      className="resumeIcon"
      style={{ padding: "1rem" }}
      icon={faDatabase}
    />
  );
  const awsIcon = <FontAwesomeIcon style={{ fontSize: "2rem" }} icon={faAws} />;

  return (
    <Card>
      <Card.Header>{dbIcon}</Card.Header>
      <Card.Body>
        <Card.Title>{awsIcon}&nbsp; Solution Architect</Card.Title>
        <ul>
          <li>EC2</li>
          <li>S3</li>
          <li>RDS</li>
        </ul>
        <Card.Title>API</Card.Title>
        <ul>
          <li>Post & Get</li>
          <li>Rest API</li>
          <li>Postman</li>
        </ul>
        <Card.Title>MySql</Card.Title>
        <ul>
          <li>Planning Entities</li>
          <li>UML Diagrams</li>
          <li>Writing Queries</li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default ResumeDb;
