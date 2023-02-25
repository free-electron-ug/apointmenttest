import React, { useState } from 'react';

import Section from 'components/common/Section';
import { Row, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { I18n } from '@aws-amplify/core';
import SectionHeader from '../SectionHeader';
import CreateAppointment from './CreateAppointment';

const Appointment = () => {
  const [isOpenAppointmentModal, setIsOpenAppointmentModal] = useState(false);

  const [appointmentDate, setAppointmentDate] = useState();

  return (
    <Section bg="light" className="shadow-sm">
      <SectionHeader
        title={I18n.get('Appointment')}
        subtitle="Please set your Appointment"
      />
      <Row className="justify-content-center align-items-center">
        <Col className="text-center">
          <Button
            type="button"
            onClick={() => {
              setIsOpenAppointmentModal(!isOpenAppointmentModal);
            }}
            variant="outline-warning"
            size="lg"
            className="border-2 rounded-pill  py-2"
          >
            Set your appointment
            <FontAwesomeIcon icon="play" transform="shrink-6 down-1 right-5" />
            <FontAwesomeIcon icon="play" transform="shrink-6 down-1 right-5" />
          </Button>
        </Col>
        <CreateAppointment
          isOpenAppointmentModal={isOpenAppointmentModal}
          setIsOpenAppointmentModal={setIsOpenAppointmentModal}
          appointmentDate={appointmentDate}
          setAppointmentDate={setAppointmentDate}
        />
      </Row>
    </Section>
  );
};

export default Appointment;
