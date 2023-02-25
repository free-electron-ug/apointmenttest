import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Rechte = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="rechte" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">BETROFFENENRECHTE</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary fs-0 text-uppercase">
          Sie haben das Recht:
        </h6>
        <ul type="1">
          <li className="p-3 text-justify">
            gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten
            personenbezogenen Daten zu verlangen. Insbesondere können Sie
            Auskunft über die Verarbeitungszwecke, die Kategorie der
            personenbezogenen Daten, die Kategorien von Empfängern, gegenüber
            denen Ihre Daten offengelegt wurden oder werden, die geplante
            Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung,
            Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines
            Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei
            uns erhoben wurden, sowie über das Bestehen einer automatisierten
            Entscheidungsfindung einschließlich Profiling und ggf.
            aussagekräftigen Informationen zu deren Einzelheiten verlangen;
          </li>
          <li className="p-3 text-justify">
            gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder
            Vervollständigung Ihrer bei uns gespeicherten personenbezogenen
            Daten zu verlangen;
          </li>
          <li className="p-3 text-justify">
            gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten
            personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung
            zur Ausübung des Rechts auf freie Meinungsäußerung und Information,
            zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des
            öffentlichen Interesses oder zur Geltendmachung, Ausübung oder
            Verteidigung von Rechtsansprüchen erforderlich ist
          </li>
          <li className="p-3 text-justify">
            gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen, soweit die Richtigkeit der
            Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist,
            Sie aber deren Löschung ablehnen und wir die Daten nicht mehr
            benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder
            Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21
            DSGVO Widerspruch gegen die Verarbeitung eingelegt haben
          </li>
          <li className="p-3 text-justify">
            gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns
            bereitgestellt haben, in einem strukturierten, gängigen und
            maschinenlesebaren Format zu erhalten oder die Übermittlung an einen
            anderen Verantwortlichen zu verlangen
          </li>
          <li className="p-3 text-justify">
            gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung
            jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir
            die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die
            Zukunft nicht mehr fortführen dürfen
          </li>
          <li className="p-3 text-justify">
            gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.
            In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres
            üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres
            Kanzleisitzes wenden.
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
});

export default Rechte;
