import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Urheberrecht = forwardRef((props, ref) => {
  return (
    <Card className="mb-5" id="xxx" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">Urheberrecht</h5>
      </Card.Header>
      <Card.Body>
        <p className="fs-0 mb-0 fw-semi-bold">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <hr className="my-1" />

        <p className="fs-0 mb-0 fw-semi-bold">
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
      </Card.Body>
    </Card>
  );
});

export default Urheberrecht;
