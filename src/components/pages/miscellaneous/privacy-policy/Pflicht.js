import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Pflicht = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="pflicht" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">ALLGEMEINE HINWEISE UND PFLICHT¬INFORMATIONEN</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary fs-0 text-uppercase">DATENSCHUTZ</h6>
        <p className="p-3 text-justify">
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung. Wenn Sie diese Website benutzen, werden
          verschiedene personenbezogene Daten erhoben. Personenbezogene Daten
          sind Daten, mit denen Sie persönlich identifiziert werden können. Die
          vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben
          und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck
          das geschieht. Wir weisen darauf hin, dass die Datenübertragung im
          Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken
          aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
          Dritte ist nicht möglich.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          HINWEIS ZUR VERANTWORTLICHEN STELLE
        </h6>
        <p className="p-3 text-justify">
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website sowie des betrieblichen Datenschutzbeauftragte ist:
        </p>
        <hr className="my-4" />
        <p className="mb-0 ps-3">Free Electron UG (haftungsbeschränkt)</p>
        <p className="mb-0 ps-3">Kappeler Straße 182</p>
        <p className="mb-0 ps-3">40599 Düsseldorf</p>
        <p className="mb-0 ps-3">Deutschland</p>
        <p className="mb-0 ps-3">Telefon: +49 211 96294088</p>
        <p className="mb-0 ps-3">E-Mail: letstalk@free-electron.de</p>
        <hr className="my-4" />
        <p className="p-3 text-justify">
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
          o. Ä.) entscheidet.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">SPEICHERDAUER</h6>
        <p className="p-3 text-justify">
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
          ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
          zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
          wir keine anderen rechtlich zulässigen Gründe für die Speicherung
          Ihrer personenbezogenen Daten haben (z. B. steuer- oder
          handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
          erfolgt die Löschung nach Fortfall dieser Gründe.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          ALLGEMEINE HINWEISE ZU DEN RECHTSGRUNDLAGEN DER DATENVERARBEITUNG AUF
          DIESER WEBSITE
        </h6>
        <p className="p-3 text-justify">
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
          wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit.
          a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
          Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle
          einer ausdrücklichen Einwilligung in die Übertragung personenbezogener
          Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf
          Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die
          Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr
          Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt
          die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG.
          Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
          Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs.
          1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
          zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf
          Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann
          ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs.
          1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen
          Rechtsgrundlagen wird in den folgenden Absätzen dieser
          Datenschutzerklärung informiert.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          HINWEIS ZUR DATENWEITERGABE IN DIE USA UND SONSTIGE DRITTSTAATEN
        </h6>
        <p className="p-3 text-justify">
          Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA
          oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten. Wenn
          diese Tools aktiv sind, können Ihre personenbezogene Daten in diese
          Drittstaaten übertragen und dort verarbeitet werden. Wir weisen darauf
          hin, dass in diesen Ländern kein mit der EU vergleichbares
          Datenschutzniveau garantiert werden kann. Beispielsweise sind
          US-Unternehmen dazu verpflichtet, personenbezogene Daten an
          Sicherheitsbehörden herauszugeben, ohne dass Sie als Betroffener
          hiergegen gerichtlich vorgehen könnten. Es kann daher nicht
          ausgeschlossen werden, dass US-Behörden (z. B. Geheimdienste) Ihre auf
          US-Servern befindlichen Daten zu Überwachungszwecken verarbeiten,
          auswerten und dauerhaft speichern. Wir haben auf diese
          Verarbeitungstätigkeiten keinen Einfluss.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          WIDERRUF IHRER EINWILLIGUNG ZUR DATENVERARBEITUNG
        </h6>
        <p className="p-3 text-justify">
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
          erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          WIDERSPRUCHSRECHT GEGEN DIE DATENERHEBUNG IN BESONDEREN FÄLLEN SOWIE
          GEGEN DIREKTWERBUNG (ART. 21 DSGVO)
        </h6>
        <p className="p-3 text-justify">
          Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. E oder
          F DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich
          aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer
          personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein
          auf diese Bestimmungen gestütztes Profiling. Die jeweilige
          Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie
          dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir
          Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es
          sei denn, wir können zwingende schutzwürdige Gründe für die
          Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
          überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung
          oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs.
          1 DSGVO).
        </p>
        <p className="p-3 text-justify">
          Wenn Ihre personenbezogenen Daten zum Zweck der Direktwerbung
          verarbeitet werden, haben Sie das Recht, jederzeit gegen die
          Verarbeitung Ihrer betreffenden personenbezogenen Daten für solche
          Zwecke Widerspruch einzulegen. Dies gilt auch für Profiling, wenn es
          in Zusammenhang mit solcher Direktwerbung steht. Wenn Sie
          widersprechen, werden Ihre personenbezogenen Daten anschließend nicht
          mehr zu Zwecken der Direktwerbung verwendet (Widerspruch nach Art. 21
          Abs. 2 DSGVO).
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          BESCHWERDE­RECHT BEI DER ZUSTÄNDIGEN AUFSICHTS­BEHÖRDE
        </h6>
        <p className="p-3 text-justify">
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
          Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
          Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
          besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          RECHT AUF DATEN­ÜBERTRAG­BARKEIT
        </h6>
        <p className="p-3 text-justify">
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
          oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an
          einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
          technisch machbar ist.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          AUSKUNFT, LÖSCHUNG UND BERICHTIGUNG
        </h6>
        <p className="p-3 text-justify">
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit an uns wenden.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          RECHT AUF EINSCHRÄNKUNG DER VERARBEITUNG
        </h6>
        <p className="p-3 text-justify">
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
          an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
          folgenden Fällen:
        </p>

        <ul type="1">
          <li className="p-3 text-justify">
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
            personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit,
            um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das
            Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
            Daten zu verlangen.
          </li>
          <li className="p-3 text-justify">
            Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
            geschah/geschieht, können Sie statt der Löschung die Einschränkung
            der Datenverarbeitung verlangen.
          </li>
          <li className="p-3 text-justify">
            Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie
            jedoch zur Ausübung, Verteidigung oder Geltendmachung von
            Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung
            die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
            verlangen.
          </li>
          <li className="p-3 text-justify">
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
            haben, muss eine Abwägung zwischen Ihren und unseren Interessen
            vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
            überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung
            Ihrer personenbezogenen Daten zu verlangen.
          </li>
        </ul>

        <p className="p-3 text-justify">
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
          haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
          Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
          von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
          natürlichen oder juristischen Person oder aus Gründen eines wichtigen
          öffentlichen Interesses der Europäischen Union oder eines
          Mitgliedstaats verarbeitet werden.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          SSL- BZW. TLS-VERSCHLÜSSELUNG
        </h6>
        <p className="p-3 text-justify">
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder
          Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
          TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
          daran, dass die Adresszeile des Browsers von „http://“ auf „https://“
          wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die
          SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie
          an uns übermitteln, nicht von Dritten mitgelesen werden.
        </p>
        <hr className="my-4" />
      </Card.Body>
    </Card>
  );
});

export default Pflicht;
