import React, { useRef } from 'react';
import PageHeader from 'components/common/PageHeader';
import { Card, Col, Nav, Row } from 'react-bootstrap';
import DatenSchutzAllgemein from './DatenSchutzAllgemein';
import Hosting from './Hosting';
import Pflicht from './Pflicht';
import DatenErfassung from './DatenErfassung';
import SozialeMedien from './SozialeMedien';
import Zahlung from './Zahlung';
import Plugins from './Plugins';
import useScrollSpy from 'react-use-scrollspy';

import Eigene from './Eigene';
import FooterDocApp from '../FooterDocApp';
import Weitergabe from './Weitergabe';
import Rechte from './Rechte';
import Rechte1 from './Rechte1';
import Rechte2 from './Rechte2';
import Rechte3 from './Rechte3';

const PrivacyPolicy = () => {
  //to the number of list Items
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
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
        title="DATENSCHUTZ UND PRIVATSPHÄRE"
        description=""
        className="mb-3"
      />
      <Row className="g-0">
        <Col lg={8} className="pe-lg-2">
          <DatenSchutzAllgemein ref={sectionRefs[0]} />
          <Hosting ref={sectionRefs[1]} />
          <Pflicht ref={sectionRefs[2]} />
          <DatenErfassung ref={sectionRefs[3]} />
          <SozialeMedien ref={sectionRefs[4]} />
          <Plugins ref={sectionRefs[5]} />
          <Zahlung ref={sectionRefs[6]} />
          <Eigene ref={sectionRefs[7]} />
          <Weitergabe ref={sectionRefs[8]} />
          <Rechte ref={sectionRefs[9]} />
          <Rechte1 ref={sectionRefs[10]} />
          <Rechte2 ref={sectionRefs[11]} />
          <Rechte3 ref={sectionRefs[12]} />
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
                      href="#datenSchutzAllgemein"
                      className="nav-link px-0 py-1"
                      active={activeSection === 0}
                    >
                      DATENSCHUTZ AUF EINEN BLICK
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#hosting"
                      className="nav-link px-0 py-1"
                      active={activeSection === 1}
                    >
                      HOSTING
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#pflicht"
                      className="nav-link px-0 py-1"
                      active={activeSection === 2}
                    >
                      ALLGEMEINE HINWEISE UND PFLICHT­INFORMATIONEN
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#datenErfasung"
                      className="nav-link px-0 py-1"
                      active={activeSection === 3}
                    >
                      DATENERFASSUNG AUF DIESER WEBSITE
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#sozialeMedien"
                      className="nav-link px-0 py-1"
                      active={activeSection === 4}
                    >
                      SOZIALE MEDIEN
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#plugins"
                      className="nav-link px-0 py-1"
                      active={activeSection === 5}
                    >
                      PLUGINS UND TOOLS
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#zahlung"
                      className="nav-link px-0 py-1"
                      active={activeSection === 6}
                    >
                      ECOMMERCE UND ZAHLUNGS­ANBIETER
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#eigene"
                      className="nav-link px-0 py-1"
                      active={activeSection === 7}
                    >
                      EIGENE DIENSTE
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#weitergabe"
                      className="nav-link px-0 py-1"
                      active={activeSection === 8}
                    >
                      WEITERGABE VON DATEN
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#rechte"
                      className="nav-link px-0 py-1"
                      active={activeSection === 9}
                    >
                      BETROFFENENRECHTE
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#rechte1"
                      className="nav-link px-0 py-1 text-uppercase"
                      active={activeSection === 10}
                    >
                      WIDERSPRUCHSrecht
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#rechte2"
                      className="nav-link px-0 py-1"
                      active={activeSection === 11}
                    >
                      Datensicherheit
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#rechte3"
                      className="nav-link px-0 py-1"
                      active={activeSection === 12}
                    >
                      Aktualität und Änderung dieser Datenschutzerklärung
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

export default PrivacyPolicy;
