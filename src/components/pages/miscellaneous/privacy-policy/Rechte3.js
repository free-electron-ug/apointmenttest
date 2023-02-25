import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Rechte3 = forwardRef((props, ref) => {
  return (
    <Card className="mb-5" id="rechte3" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">
          {' '}
          Aktualität und Änderung dieser Datenschutzerklärung
        </h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary fs-0 text-uppercase">
          Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
          Februar 2023.
        </h6>
        <p className="p-3 text-justify">
          Durch die Weiterentwicklung unserer Website und Angebote darüber oder
          aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben
          kann es notwendig werden, diese Datenschutzerklärung zu ändern.
        </p>
      </Card.Body>
    </Card>
  );
});

export default Rechte3;
