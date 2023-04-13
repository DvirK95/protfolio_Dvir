import React from "react";
import { Row, Col } from "react-bootstrap";
import data from "../../Tools/StaticData.json";
import ResumeCard from "./ResumeCard";
import ResumeSkills from "./ResumeSkills";

function Resume() {
  return (
    <section id="Resume">
      <h2>My Resume</h2>
      <Row>
        {
          <Col md={6}>
            <ResumeCard
              subjectName="Employment History"
              subject={data["Employment History"]}
            />
          </Col>
        }
        <Col md={6}>
          <ResumeCard subjectName="Education" subject={data["education"]} />
        </Col>
      </Row>
      <h2>Technical Skills</h2>
      <ResumeSkills />
    </section>
  );
}

export default Resume;
