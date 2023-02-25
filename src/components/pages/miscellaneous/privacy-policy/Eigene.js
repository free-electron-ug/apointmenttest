import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Eigene = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="eigene" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">EIGENE DIENSTE</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary fs-0 text-uppercase">
          UMGANG MIT BEWERBERDATEN
        </h6>
        <p className="p-3 text-justify">
          Wir bieten Ihnen die Möglichkeit, sich bei uns zu bewerben (z. B. per
          E-Mail, postalisch oder via Online-Bewerberformular). Im Folgenden
          informieren wir Sie über Umfang, Zweck und Verwendung Ihrer im Rahmen
          des Bewerbungsprozesses erhobenen personenbezogenen Daten. Wir
          versichern, dass die Erhebung, Verarbeitung und Nutzung Ihrer Daten in
          Übereinstimmung mit geltendem Datenschutzrecht und allen weiteren
          gesetzlichen Bestimmungen erfolgt und Ihre Daten streng vertraulich
          behandelt werden.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          umfang und zweck der datenerhebung
        </h6>
        <p className="p-3 text-justify">
          Wenn Sie uns eine Bewerbung zukommen lassen, verarbeiten wir Ihre
          damit verbundenen personenbezogenen Daten (z. B. Kontakt- und
          Kommunikationsdaten, Bewerbungsunterlagen, Notizen im Rahmen von
          Bewerbungsgesprächen etc.), soweit dies zur Entscheidung über die
          Begründung eines Beschäftigungsverhältnisses erforderlich ist.
          Rechtsgrundlage hierfür ist § 26 BDSG nach deutschem Recht (Anbahnung
          eines Beschäftigungsverhältnisses), Art. 6 Abs. 1 lit. b DSGVO
          (allgemeine Vertragsanbahnung) und – sofern Sie eine Einwilligung
          erteilt haben – Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung ist
          jederzeit widerrufbar. Ihre personenbezogenen Daten werden innerhalb
          unseres Unternehmens ausschließlich an Personen weitergegeben, die an
          der Bearbeitung Ihrer Bewerbung beteiligt sind.
        </p>
        <p className="p-3 text-justify">
          Sofern die Bewerbung erfolgreich ist, werden die von Ihnen
          eingereichten Daten auf Grundlage von § 26 BDSG und Art. 6 Abs. 1 lit.
          b DSGVO zum Zwecke der Durchführung des Beschäftigungsverhältnisses in
          unseren Datenverarbeitungssystemen gespeichert.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          aufbewahrungsdauer der daten
        </h6>
        <p className="p-3 text-justify">
          Sofern wir Ihnen kein Stellenangebot machen können, Sie ein
          Stellenangebot ablehnen oder Ihre Bewerbung zurückziehen, behalten wir
          uns das Recht vor, die von Ihnen übermittelten Daten auf Grundlage
          unserer berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO) bis zu 6
          Monate ab der Beendigung des Bewerbungsverfahrens (Ablehnung oder
          Zurückziehung der Bewerbung) bei uns aufzubewahren. Anschließend
          werden die Daten gelöscht und die physischen Bewerbungsunterlagen
          vernichtet. Die Aufbewahrung dient insbesondere Nachweiszwecken im
          Falle eines Rechtsstreits. Sofern ersichtlich ist, dass die Daten nach
          Ablauf der 6-Monatsfrist erforderlich sein werden (z. B. aufgrund
          eines drohenden oder anhängigen Rechtsstreits), findet eine Löschung
          erst statt, wenn der Zweck für die weitergehende Aufbewahrung
          entfällt.
        </p>
        <p className="p-3 text-justify">
          Eine längere Aufbewahrung kann außerdem stattfinden, wenn Sie eine
          entsprechende Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) erteilt haben
          oder wenn gesetzliche Aufbewahrungspflichten der Löschung
          entgegenstehen.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          aufnahme in den bewerber-pool
        </h6>
        <p className="p-3 text-justify">
          Sofern wir Ihnen kein Stellenangebot machen, besteht ggf. die
          Möglichkeit, Sie in unseren Bewerber-Pool aufzunehmen. Im Falle der
          Aufnahme werden alle Dokumente und Angaben aus der Bewerbung in den
          Bewerber-Pool übernommen, um Sie im Falle von passenden Vakanzen zu
          kontaktieren.
        </p>
        <p className="p-3 text-justify">
          Die Aufnahme in den Bewerber-Pool geschieht ausschließlich auf
          Grundlage Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a
          DSGVO). Die Abgabe der Einwilligung ist freiwillig und steht in keinem
          Bezug zum laufenden Bewerbungsverfahren. Der Betroffene kann seine
          Einwilligung jederzeit widerrufen. In diesem Falle werden die Daten
          aus dem Bewerber-Pool unwiderruflich gelöscht, sofern keine
          gesetzlichen Aufbewahrungsgründe vorliegen.
        </p>
        <p className="p-3 text-justify">
          Die Daten aus dem Bewerber-Pool werden spätestens zwei Jahre nach
          Erteilung der Einwilligung unwiderruflich gelöscht.
        </p>
      </Card.Body>
    </Card>
  );
});

export default Eigene;
