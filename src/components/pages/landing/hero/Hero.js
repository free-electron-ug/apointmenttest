import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from 'components/common/Section';
import AppContext from 'context/Context';
import React, { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { Typewriter } from 'react-simple-typewriter';
import SphericalWordCloud from '../SphericalWordCloud';
import { Link } from 'react-router-dom';
import { I18n } from '@aws-amplify/core';

const Hero = () => {
  const {
    config: { isRTL }
  } = useContext(AppContext);

  return (
    <>
      <Section className="py-0 overflow-hidden light">
        <Row className="justify-content-center align-items-center pt-8 pt-lg-10 pb-lg-9 pb-xl-0">
          <Col
            md={11}
            lg={8}
            xl={4}
            className="pb-7 pb-xl-9 text-center text-xl-start"
          >
            <h1 className="text-white fw-light">
              Bring{' '}
              <span className="fw-bold">
                <Typewriter
                  words={[
                    I18n.get('Efficiency'),
                    I18n.get('Productivity'),
                    I18n.get('Saving'),
                    I18n.get('perfection'),
                    I18n.get('Innovation'),
                    I18n.get('motivation'),
                    I18n.get('Customer Satisfaction'),
                    I18n.get('Security')
                  ]}
                  loop={false}
                  cursor={!isRTL ? true : false}
                  cursorStyle="|"
                  cursorColor="#fa2720"
                  typeSpeed={40}
                  deleteSpeed={40}
                  delaySpeed={2000}
                />
              </span>
              <br />
              {I18n.get('to your company')}
            </h1>
            <p className="lead text-white opacity-75">{I18n.get('leadText')}</p>

            <Button
              as={Link}
              to="/dashboard/webapp"
              variant="outline-light"
              size="lg"
              className="border-2 rounded-pill mt-4 fs-0 py-2"
            >
              {I18n.get('Tomorrow will be too late!')}
              <FontAwesomeIcon
                icon="play"
                transform="shrink-6 down-1 right-5"
              />
            </Button>
          </Col>
          <Col
            xs={11}
            sm={11}
            md={11}
            lg={8}
            xl={8}
            className="pb-7 pb-xl-9  text-center text-xl-start"
          >
            <SphericalWordCloud />
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default Hero;
