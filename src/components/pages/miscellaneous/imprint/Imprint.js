import React, { useRef } from 'react';
import PageHeader from 'components/common/PageHeader';
import { Card, Col, Nav, Row } from 'react-bootstrap';
import Inhaber from './Inhaber';
import UmsatzsteuerID from './UmsatzsteuerID';
import Verantwortlich from './Verantwortlich';
import Haftungsausschluss from './Haftungsausschluss';
import Urheberrecht from './Urheberrecht';
import useScrollSpy from 'react-use-scrollspy';
import FooterDocApp from '../FooterDocApp';

const Imprint = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -150
  });

  return (
    <>
      <PageHeader
        title="Impressum"
        description="Free Electron UG (haftungsbeschränkt)"
        className="mb-3"
      />
      <Row className="g-0">
        <Col lg={8} className="pe-lg-2">
          <Inhaber ref={sectionRefs[0]} />
          <UmsatzsteuerID ref={sectionRefs[1]} />
          <Verantwortlich ref={sectionRefs[2]} />
          <Haftungsausschluss ref={sectionRefs[3]} />
          <Urheberrecht ref={sectionRefs[4]} />
        </Col>
        <Col lg={4} className="ps-lg-2">
          <div className="sticky-sidebar">
            <Card className="sticky-top mb-5">
              <Card.Header className="border-bottom">
                <h6 className="mb-0 fs-0">Inhalt</h6>
              </Card.Header>
              <Card.Body>
                <div
                  id="terms-sidebar"
                  className="terms-sidebar nav flex-column fs--1"
                >
                  <Nav.Item>
                    <Nav.Link
                      href="#account"
                      className="nav-link px-0 py-1"
                      active={activeSection === 0}
                    >
                      Inhaber
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#subscriptions"
                      className="nav-link px-0 py-1"
                      active={activeSection === 1}
                    >
                      Umsatzsteuer-ID
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#termination"
                      className="nav-link px-0 py-1"
                      active={activeSection === 2}
                    >
                      Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#rules"
                      className="nav-link px-0 py-1"
                      active={activeSection === 3}
                    >
                      Haftungsausschluss
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#xxx"
                      className="nav-link px-0 py-1"
                      active={activeSection === 4}
                    >
                      Urheberrecht
                    </Nav.Link>
                  </Nav.Item>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      <FooterDocApp />
    </>
  );
};

export default Imprint;
