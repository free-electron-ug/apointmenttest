import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Verantwortlich = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="termination" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
        </h5>
      </Card.Header>
      <Card.Body>
        <p className="fs-0 mb-0 fw-semi-bold">Mohammad Mahdi Yaghoubi</p>
        <p className="fs-0 mb-0 fw-semi-bold">Kappeler Straße 182</p>
        <p className="fs-0 mb-0 fw-semi-bold">40599 Düsseldorf</p>
      </Card.Body>
    </Card>
  );
});

export default Verantwortlich;
