import { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import ScifiBooks from "../data/scifi.json";

class LatestRelease extends Component {
  render() {
    return (
      <Container>
        <Row>
          {ScifiBooks.map((book) => (
            <Col lg={3} md={4} sm={6} className="my-2" key={book.asin}>
              <Card className="my-card">
                <Card.Img className="my-card-img" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
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
