import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Inhaber = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="account" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">Inhaber</h5>
      </Card.Header>
      <Card.Body>
        <p className="fs-0 mb-0 fw-semi-bold">Mohammad Mahdi Yaghoubi</p>
        <p className="fs-0 mb-0 fw-semi-bold">Kappeler Straße 182</p>
        <p className="fs-0 mb-0 fw-semi-bold">40599 Düsseldorf</p>

        <hr className="my-4" />
        <h6 className="text-primary">Kontakt</h6>
        <p className="mb-0 ps-3">Telefon: +49 211 96294088</p>
        <p className="mb-0 ps-3">E-Mail: letstalk@free-electron.de</p>
      </Card.Body>
    </Card>
  );
});

export default Inhaber;
