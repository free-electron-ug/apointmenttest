import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Haftungsausschluss = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="rules" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">Haftungsausschluss</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary">Allgemein</h6>
        <p className="mb-0 ps-3">
          Diese Webseite wurde mit größter Sorgfalt erstellt. Der Anbieter
          übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und
          Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der
          Webseite erfolgt auf eigene Gefahr des Nutzers. Soweit nicht
          ausdrücklich anders gekennzeichnet, sind alle Inhalte urheberrechtlich
          geschützt. Namentlich gekennzeichnete Beiträge geben nicht unbedingt
          die Meinung des Anbieters wieder. Die bereitgestellten Informationen
          stellen keine Beratung oder Empfehlung dar.
        </p>
        <hr className="my-1" />
        <p className="mb-0 ps-3">
          Der Anbieter übernimmt keinerlei Gewähr hinsichtlich der Inhalte
          externer Links. Für den Inhalt der verlinkten Seiten sind
          ausschließlich deren Betreiber verantwortlich. Der Anbieter hat
          keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf
          die Inhalte der verlinkten Seiten.
        </p>
        <hr className="my-1" />
        <p className="mb-0 ps-3">
          Der Anbieter behält sich das Recht vor, Änderungen oder Ergänzungen
          der bereitgestellten Informationen vorzunehmen. Inhalte und Struktur
          der Webseite können jederzeit ohne vorherige Ankündigung geändert,
          ergänzt oder gelöscht werden.
        </p>
        <hr className="my-1" />
        <p className="mb-0 ps-3">
          Der Anbieter übernimmt keinerlei Haftung für direkte oder indirekte
          Schäden, einschließlich entgangenen Gewinns, die aus der Nutzung der
          Inhalte dieser Webseite entstehen.
        </p>
        <hr className="my-1" />
        <p className="mb-0 ps-3">
          Dieser Haftungsausschluss ist als Teil des Internetangebotes zu
          betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile
          oder einzelne Formulierungen dieses Textes der geltenden Rechtslage
          nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben
          die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit
          davon unberührt.
        </p>
        <hr className="my-4" />

        <h6 className="text-primary">Haftung für Inhalte</h6>
        <p className="mb-0 ps-3">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <hr className="my-1" />
        <p className="mb-0 ps-3">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary">Haftung für Links</h6>
        <p className="mb-0 ps-3">
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <hr className="my-1" />
        <p className="mb-0 ps-3">
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
      </Card.Body>
    </Card>
  );
});

export default Haftungsausschluss;
