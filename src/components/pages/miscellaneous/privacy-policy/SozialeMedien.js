import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const SozialeMedien = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="sozialeMedien" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">SOZIALE MEDIEN</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary fs-0 text-uppercase">LINKEDIN</h6>
        <p className="p-3 text-justify">
          Diese Website nutzt Elemente des Netzwerks LinkedIn. Anbieter ist die
          LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin
          2, Irland.
        </p>
        <p className="p-3 text-justify">
          Bei jedem Abruf einer Seite dieser Website, die Elemente von LinkedIn
          enthält, wird eine Verbindung zu Servern von LinkedIn aufgebaut.
          LinkedIn wird darüber informiert, dass Sie diese Website mit Ihrer
          IP-Adresse besucht haben. Wenn Sie den „Recommend-Button“ von LinkedIn
          anklicken und in Ihrem Account bei LinkedIn eingeloggt sind, ist es
          LinkedIn möglich, Ihren Besuch auf dieser Website Ihnen und Ihrem
          Benutzerkonto zuzuordnen. Wir weisen darauf hin, dass wir als Anbieter
          der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie
          deren Nutzung durch LinkedIn haben.
        </p>
        <p className="p-3 text-justify">
          Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der
          Einsatz des o. g. Dienstes auf Grundlage von Art. 6 Abs. 1 lit. a
          DSGVO und § 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
          Soweit keine Einwilligung eingeholt wurde, erfolgt die Verwendung des
          Dienstes auf Grundlage unseres berechtigten Interesses an einer
          möglichst umfassenden Sichtbarkeit in den Sozialen Medien.
        </p>
        <p className="p-3 text-justify">
          Die Datenübertragung in die USA wird auf die Standardvertragsklauseln
          der EU-Kommission gestützt. Details finden Sie hier:
        </p>
        <p className="mb-0 ps-3">
          https://www.linkedin.com/help/linkedin/answer/62538/datenubertragung-aus-der-eu-dem-ewr-und-der-schweiz?lang=de
        </p>
        <p className="p-3 text-justify">
          Weitere Informationen hierzu finden Sie in der Datenschutzerklärung
          von LinkedIn unter: https://www.linkedin.com/legal/privacy-policy.
        </p>
      </Card.Body>
    </Card>
  );
});

export default SozialeMedien;
