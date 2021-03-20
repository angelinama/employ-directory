import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://media.giphy.com/media/mBukxOCWsdVAXIJUUW/giphy.gif">
        <h1>Employee Directory</h1>
        <h2>A quick way to view and search employee!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-8">
            <p>To get started, click to view all Employees:</p>
          </Col>
          <Col size="md-4">
            <Link to="/search" className="btn btn-success">
              View all Employees
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
