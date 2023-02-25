import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Rechte1 = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="rechte1" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0 text-uppercase">Widerspruchsrecht</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary fs-0 text-uppercase">
          Wir hosten die Inhalte unserer Website bei Amazon Web Services
        </h6>
        <p className="p-3 text-justify">
          Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten
          Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden,
          haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die
          Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür
          Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder
          sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall
          haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer
          besonderen Situation von uns umgesetzt wird.
        </p>
        <p className="p-3 text-justify">
          Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch
          machen, genügt eine E-Mail an letstalk@free-electron.de
        </p>
      </Card.Body>
    </Card>
  );
});

export default Rechte1;
