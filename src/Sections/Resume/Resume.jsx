import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ResumeCode from '../../Components/Resume/ResumeCode';
import ResumeTech from '../../Components/Resume/ResumeTech';
import ResumeDb from '../../Components/Resume/ResumeDb';

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
      </Container>
    </section>
  );
}

export default Resume;
