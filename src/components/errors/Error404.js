import React, { useState } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import illustration1 from 'assets/img/free-electron/Pair programming-rafiki.svg';
import CreateAppointment from '../pages/landing/appointment/CreateAppointment';
const Error404 = () => {
  const [isOpenAppointmentModal, setIsOpenAppointmentModal] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState();
  return (
    <Card className="text-center">
      <Card.Body className="p-5">
        <Image fluid className="px-6 px-md-0" src={illustration1} alt="" />
        {/*<div className="display-1 text-300 fs-error">*/}
        {/* */}
        {/*</div>*/}
        <p className="lead mt-4 text-800 font-sans-serif fw-semi-bold">
          Wir sind hier, um Ihnen gerne zu helfen.
        </p>
        <Button
          type="button"
          onClick={() => {
            setIsOpenAppointmentModal(!isOpenAppointmentModal);
          }}
          variant="outline-light"
          size="lg"
          className="border-2 rounded-pill  py-2"
        >
          Set your appointment
          <FontAwesomeIcon icon="play" transform="shrink-6 down-1 right-5" />
          <FontAwesomeIcon icon="play" transform="shrink-6 down-1 right-5" />
        </Button>
        <hr />
        <p>
          oder schreiben Sie uns doch bitte eine E-Mail! Unser Adress ist{' '}
          <a href="mailto:letstalk@free-electron.de" className="ms-1">
            letstalk@free-electron.de
          </a>
          . Wir freuen uns auf Ihre Nachricht!
        </p>
        <Link className="btn btn-primary btn-sm mt-3" to="/">
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Startseite
        </Link>

        <CreateAppointment
          isOpenAppointmentModal={isOpenAppointmentModal}
          setIsOpenAppointmentModal={setIsOpenAppointmentModal}
          appointmentDate={appointmentDate}
          setAppointmentDate={setAppointmentDate}
        />
      </Card.Body>
    </Card>
  );
};

export default Error404;
