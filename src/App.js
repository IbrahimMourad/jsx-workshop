import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Comments from "./components/Comments";
import List from "./components/List";
const App = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col md={8}>
          <iframe
            style={{ width: "100%", height: "315px" }}
            src="https://www.youtube.com/embed/IJDJ0kBx2LM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Col>
        <Col md={4}>
          <List />
        </Col>
      </Row>
      <Comments />
    </Container>
  );
};

export default App;
