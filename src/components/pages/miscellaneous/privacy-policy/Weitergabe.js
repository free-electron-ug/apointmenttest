import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Weitergabe = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="weitergabe" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">WEITERGABE VON DATEN</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary fs-0 text-uppercase">
          Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als
          den im Folgenden aufgeführten Zwecken findet nicht statt.
        </h6>
        <p className="mb-0 ps-3">
          Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
        </p>
        <ul type="1">
          <li className="p-3 text-justify">
            Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche
            Einwilligung dazu erteilt haben.
          </li>
          <li className="p-3 text-justify">
            Die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
            erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein
            überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer
            Daten haben.
          </li>
          <li className="p-3 text-justify">
            Für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c
            DSGVO eine gesetzliche Verpflichtung besteht.
          </li>
          <li className="p-3 text-justify">
            Dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO
            für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich
            ist.
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
});

export default Weitergabe;
