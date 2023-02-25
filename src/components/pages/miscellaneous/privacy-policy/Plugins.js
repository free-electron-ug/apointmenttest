import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Plugins = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="plugins" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">PLUGINS UND TOOLS</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary fs-0 text-uppercase">GOOGLE MAPS</h6>
        <p className="p-3 text-justify">
          Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die
          Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin
          4, Irland. Zur Nutzung der Funktionen von Google Maps ist es
          notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in
          der Regel an einen Server von Google in den USA übertragen und dort
          gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese
          Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum
          Zwecke der einheitlichen Darstellung der Schriftarten Google Fonts
          verwenden. Beim Aufruf von Google Maps lädt Ihr Browser die benötigten
          Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt
          anzuzeigen.
        </p>
        <p className="p-3 text-justify">
          Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden
          Darstellung unserer Online-Angebote und an einer leichten
          Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies
          stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
          DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde,
          erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs.
          1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die
          Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät
          des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst.
          Die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p className="p-3 text-justify">
          Die Datenübertragung in die USA wird auf die Standardvertragsklauseln
          der EU-Kommission gestützt. Details finden Sie hier:
        </p>
        <p className="p-3 ">
          https://privacy.google.com/businesses/gdprcontrollerterms/ und
          https://privacy.google.com/businesses/gdprcontrollerterms/sccs/.
        </p>
        <p className="p-3 text-justify">
          Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
          Datenschutzerklärung von Google:
          https://policies.google.com/privacy?hl=de.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          Auftragsverarbeitung
        </h6>
        <p className="p-3 text-justify">
          Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung
          des oben genannten Dienstes geschlossen. Hierbei handelt es sich um
          einen datenschutzrechtlich vorgeschriebenen Vertrag, der
          gewährleistet, dass dieser die personenbezogenen Daten unserer
          Websitebesucher nur nach unseren Weisungen und unter Einhaltung der
          DSGVO verarbeitet.
        </p>
      </Card.Body>
    </Card>
  );
});

export default Plugins;
