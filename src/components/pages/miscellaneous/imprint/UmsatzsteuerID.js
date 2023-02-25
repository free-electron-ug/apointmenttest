import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const UmsatzsteuerID = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="subscriptions" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">Umsatzsteuer-ID</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary">
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz
        </h6>
        <p className="mb-0 ps-3">DE- noch nicht vorhanden</p>
      </Card.Body>
    </Card>
  );
});

export default UmsatzsteuerID;
