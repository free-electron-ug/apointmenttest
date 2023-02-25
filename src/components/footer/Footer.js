import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <footer className="footer">
    <Row className="justify-content-between text-center fs--1 mt-4 mb-3">
      <Col sm="auto">
        <p className="mb-0 text-600">
          Digital Revolution{' '}
          <span className="d-none d-sm-inline-block">| </span>
          <br className="d-sm-none" /> {new Date().getFullYear()} &copy;{' '}
          <a href="https://free-electron.de">Free Electron</a>
        </p>
      </Col>
      <Col sm="auto">
        <p className="mb-0 text-600">
          {' '}
          {<FontAwesomeIcon icon={faLock} />} Secured with SSL
        </p>
      </Col>
    </Row>
  </footer>
);

export default Footer;
