import { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import scifiBooks from "../data/scifi.json";

class LatestRelease extends Component {
  render() {
    return (
      <Container>
        <Row>
          {scifiBooks.map(({ asin, img, title }) => (
            <Col lg={3} md={4} sm={6} className="my-2" key={asin}>
              <Card className="my-card">
                <Card.Img className="my-card-img" src={img} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default LatestRelease;
