import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function FormContainer({ children }) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col zs={12} ms={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}
