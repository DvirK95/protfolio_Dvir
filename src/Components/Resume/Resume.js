import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import data from "../../Tools/StaticData.json";
//import ResumeCard from "./ResumeCard";
import ResumeCode from "./ResumeCode";
import ResumeTech from "./ResumeTech";
import ResumeDb from "./ResumeDb";

function Resume() {
  return (
    <section id="resume">
      <Container>
        <h2>Technical Skills</h2>
        <Row>
          <Col lg={4} md={6}>
            <ResumeCode />
          </Col>
          <Col lg={4} md={6}>
            <ResumeDb />
          </Col>
          <Col lg={4} md={6}>
            <ResumeTech />
          </Col>
        </Row>
        {/** <h2>Employee History</h2>*/}
      </Container>
    </section>
  );
}

export default Resume;
