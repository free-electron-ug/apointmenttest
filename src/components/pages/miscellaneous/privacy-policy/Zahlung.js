import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Zahlung = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="zahlung" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">ECOMMERCE UND ZAHLUNGS­ANBIETER</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary fs-0 text-uppercase">
          VERARBEITEN VON KUNDEN- UND VERTRAGSDATEN
        </h6>
        <p className="p-3 text-justify">
          Wir erheben, verarbeiten und nutzen personenbezogene Kunden- und
          Vertragsdaten zur Begründung, inhaltlichen Ausgestaltung und Änderung
          unserer Vertragsbeziehungen. Personenbezogene Daten über die
          Inanspruchnahme dieser Website (Nutzungsdaten) erheben, verarbeiten
          und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die
          Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen.
          Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO.
        </p>
        <p className="p-3 text-justify">
          Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder
          Beendigung der Geschäftsbeziehung und Ablauf der ggf. bestehenden
          gesetzlichen Aufbewahrungsfristen gelöscht. Gesetzliche
          Aufbewahrungsfristen bleiben unberührt.
        </p>
      </Card.Body>
    </Card>
  );
});

export default Zahlung;
