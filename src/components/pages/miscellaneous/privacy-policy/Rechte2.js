import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Rechte2 = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="rechte2" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">Datensicherheit</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary fs-0 text-uppercase">
          Wir hosten die Inhalte unserer Website bei Amazon Web Services
        </h6>
        <p className="p-3 text-justify">
          Wir verwenden innerhalb des Website-Besuchs das verbreitete
          SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils
          höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt
          wird. In der Regel handelt es sich dabei um eine 256 Bit
          Verschlüsselung. Falls Ihr Browser keine 256-Bit Verschlüsselung
          unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie
          zurück. Ob eine einzelne Seite unseres Internetauftrittes
          verschlüsselt übertragen wird, erkennen Sie an der geschlossenen
          Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der
          oberen Statusleiste Ihres Browsers.
        </p>
        <p className="p-3 text-justify">
          Wir bedienen uns im Übrigen geeigneter technischer und
          organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige
          oder vorsätzliche Manipulationen, teilweisen oder vollständigen
          Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu
          schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der
          technologischen Entwicklung fortlaufend verbessert.
        </p>
      </Card.Body>
    </Card>
  );
});

export default Rechte2;
