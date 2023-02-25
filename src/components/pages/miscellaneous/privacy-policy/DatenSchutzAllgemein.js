import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const DatenSchutzAllgemein = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="datenSchutzAllgemein" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">DATENSCHUTZ AUF EINEN BLICK</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary fs-0 text-uppercase">
          ALLGEMEINE HINWEISE
        </h6>
        <p className="p-3 text-justify">
          Die nachstehenden Informationen erläutern, wie Ihre personenbezogenen
          Daten, wenn Sie diese Website besuchen, verarbeitet werden.
          Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
          identifiziert werden können. Wenn Sie mehr über den Schutz Ihrer Daten
          erfahren möchten, schauen Sie in unsere Datenschutzerklärung, die
          unten aufgeführt ist.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          wer ist verantwortlich für die datenerfassung auf dieser website?
        </h6>
        <p className="p-3 text-justify">
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
          „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
          entnehmen.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          wie erfassen wir ihre daten?
        </h6>
        <p className="p-3 text-justify">
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben. Andere Daten werden automatisch oder nach
          Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme
          erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser,
          Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
          Daten erfolgt automatisch, sobald Sie diese Website betreten.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          wofür nutzen wir ihre daten?
        </h6>
        <p className="p-3 text-justify">
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </p>
        <hr className="my-4f" />
        <h6 className="text-primary fs-0 text-uppercase">
          welche rechte haben sie bezüglich ihrer daten?
        </h6>
        <p className="p-3 text-justify">
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
          dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung
          jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
          unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie
          zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an
          uns wenden.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          ANALYSE-TOOLS UND TOOLS VON DRITT­ANBIETERN
        </h6>
        <p className="p-3 text-justify">
          Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
          ausgewertet werden. Das geschieht vor allem mit sogenannten
          Analyseprogrammen. Detaillierte Informationen zu diesen
          Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
        </p>
      </Card.Body>
    </Card>
  );
});

export default DatenSchutzAllgemein;
