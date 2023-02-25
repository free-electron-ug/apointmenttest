import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Hosting = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="hosting" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">HOSTING</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary fs-0 text-uppercase">
          Wir hosten die Inhalte unserer Website bei Amazon Web Services
        </h6>
        <p className="p-3 text-justify">
          Als Teil unseres Hosting-Services stellen wir Amazon Web Services
          (AWS) zur Verfügung, um sicherzustellen, dass unsere Website schnell,
          zuverlässig und mit hoher Verfügbarkeit ausgeführt wird.Wenn Sie
          unsere Website besuchen, erfasst Amazon Web Services (AWS)
          verschiedene Logfiles inklusive Ihrer IP-Adressen. Wir verarbeiten
          personenbezogene Daten mithilfe dieser Dienste, die von AWS
          bereitgestellt werden. AWS bietet eine Reihe von Diensten an, die die
          Sicherheit, den Schutz und die Einhaltung der Datenschutzgesetze
          sicherstellen. Wir haben eine Vereinbarung mit AWS, in der die
          Einhaltung der Datenschutzgesetze sichergestellt wird. Weitere
          Informationen zu den Sicherheits- und Datenschutzrichtlinien von AWS
          finden Sie online unter https://aws.amazon.com/security/.
        </p>
        <p className="p-3 text-justify">
          Die Verwendung von Amazon Web Services (AWS) erfolgt auf Grundlage von
          Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an
          einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine
          entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
          ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25
          Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder
          den Zugriff auf Informationen im Endgerät des Nutzers (z. B. für
          Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung
          ist jederzeit widerrufbar.
        </p>
      </Card.Body>
    </Card>
  );
});

export default Hosting;
