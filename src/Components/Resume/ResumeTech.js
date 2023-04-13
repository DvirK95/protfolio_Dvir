import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import "./Resume.css";

function ResumeTech() {
  const computerIcon = (
    <FontAwesomeIcon className="resumeIcon" icon={faComputer} />
  );
  const GlobeIcon = (
    <FontAwesomeIcon className="" style={{ padding: "1rem" }} icon={faGlobe} />
  );

  return (
    <Card>
      <Card.Header>{computerIcon}</Card.Header>

      <Card.Body>
        <Card.Title>QA</Card.Title>
        <ul>
          <li>Familiar with testing methodology</li>
          <li>ISTQB Certified</li>
        </ul>
        <Card.Title>Softwares</Card.Title>
        <ul>
          <li>Adobe Photoshop</li>
          <li>SAP S/4HANA</li>
          <li>Figma & Axure</li>
          <li>Blender 3d & Rhinoceros 3d</li>
          <li>Microsoft Word & Excel & Project</li>
        </ul>
        <Card.Title>{GlobeIcon}</Card.Title>
        <ul>
          <li>עברית - שפת אם</li>
          <li>English - Full Professional Proficiency</li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default ResumeTech;
