import { Card, Col, Row } from "react-bootstrap";

function ResumeSkills() {
  return (
    <Row>
      <Col md={4}>
        <Card>
          <Card.Header>Programing Language</Card.Header>
          <Card.Body>
            <Card.Title>Python</Card.Title>
            <Card.Text>
              <ul>
                <li>dsf</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Header>Skills</Card.Header>
        </Card>
      </Col>
    </Row>
  );
}

export default ResumeSkills;
