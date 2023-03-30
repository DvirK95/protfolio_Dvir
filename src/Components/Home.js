import HomeInfo from "./HomeInfo";
import { Row, Col } from "react-bootstrap";
function Home() {
  return (
    <section id="home">
      <Row>
        <Col md={6}>
          <HomeInfo />
        </Col>
        <Col md={4} className="d-none d-md-block">
          ASD2
        </Col>
      </Row>
    </section>
  );
}

export default Home;
