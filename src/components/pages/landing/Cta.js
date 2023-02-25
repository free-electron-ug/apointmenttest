import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Section from 'components/common/Section';
import ParticlesComponent from './ParticlesComponent';

const Cta = () => (
  <>
    <Section className="text-center">
      <Row className="justify-content-center text-center">
        <Col lg={8}>
          <p className="fs-3 fs-sm-4">
            Join our community of 20,000+ developers and content creators on
            their mission to build better sites and apps.
          </p>
          <Button
            variant="outline-light"
            size="lg"
            className="border-2 rounded-pill mt-4 fs-0 py-2"
          >
            Start your webapp
          </Button>
        </Col>
      </Row>
    </Section>
    <ParticlesComponent id="tsparticles" />
  </>
);

export default Cta;
