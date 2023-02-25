import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const DatenErfassung = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="datenErfasung" ref={ref}>
      <Card.Header className="bg-light">
        <h5 className="mb-0">DATENERFASSUNG AUF DIESER WEBSITE</h5>
      </Card.Header>
      <Card.Body>
        <h6 className="text-primary fs-0 text-uppercase">COOKIES</h6>
        <p className="p-3 text-justify">
          Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind
          kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an.
          Sie werden entweder vorübergehend für die Dauer einer Sitzung
          (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
          Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs
          automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
          gespeichert, bis Sie diese selbst löschen oder eine automatische
          Löschung durch Ihren Webbrowser erfolgt. Teilweise können auch Cookies
          von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie
          unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns
          oder Ihnen die Nutzung bestimmter Dienstleistungen des
          Drittunternehmens (z. B. Cookies zur Abwicklung von
          Zahlungsdienstleistungen).
        </p>
        <p className="p-3 text-justify">
          Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
          technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht
          funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von
          Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten
          oder Werbung anzuzeigen.
        </p>
        <p className="p-3 text-justify">
          Cookies, die zur Durchführung des elektronischen
          Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
          erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur
          Optimierung der Website (z. B. Cookies zur Messung des Webpublikums)
          erforderlich sind (notwendige Cookies), werden auf Grundlage von Art.
          6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage
          angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an
          der Speicherung von notwendigen Cookies zur technisch fehlerfreien und
          optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung
          zur Speicherung von Cookies und vergleichbaren
          Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung
          ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a
          DSGVO und § 25 Abs. 1 TTDSG); die Einwilligung ist jederzeit
          widerrufbar.
        </p>
        <p className="p-3 text-justify">
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
          Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
          Annahme von Cookies für bestimmte Fälle oder generell ausschließen
          sowie das automatische Löschen der Cookies beim Schließen des Browsers
          aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
          dieser Website eingeschränkt sein.
        </p>
        <p className="p-3 text-justify">
          Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt
          werden, werden wir Sie hierüber im Rahmen dieser Datenschutzerklärung
          gesondert informieren und ggf. eine Einwilligung abfragen.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          Consent-Technologie
        </h6>
        <p className="p-3 text-justify">
          Unsere Website nutzt unser eigene Consent-Technologie , um Ihre
          Einwilligung zur Speicherung bestimmter Cookies auf Ihrem Endgerät
          oder zum Einsatz bestimmter Technologien einzuholen und diese
          datenschutzkonform zu dokumentieren.
        </p>
        <p className="p-3 text-justify">
          unser eigene Consent-Technologie speichert einen Cookie in Ihrem
          Browser, um Ihnen die erteilten Einwilligungen bzw. deren Widerruf
          zuordnen zu können. Die so erfassten Daten werden gespeichert, bis Sie
          uns zur Löschung auffordern, den Free-Electron-Cookie selbst löschen
          oder der Zweck für die Datenspeicherung entfällt. Zwingende
          gesetzliche Aufbewahrungspflichten bleiben unberührt.
        </p>
        <p className="p-3 text-justify">
          Der Einsatz von eigene Consent-Technologie erfolgt, um die gesetzlich
          vorgeschriebenen Einwilligungen für den Einsatz von Cookies
          einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. c DSGVO.
        </p>

        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">KONTAKTFORMULAR</h6>
        <p className="p-3 text-justify">
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter.
        </p>
        <p className="p-3 text-justify">
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
          zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
          unserem berechtigten Interesse an der effektiven Bearbeitung der an
          uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
          wurde; die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p className="p-3 text-justify">
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
          uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
          Speicherung widerrufen oder der Zweck für die Datenspeicherung
          entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
          Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen
          – bleiben unberührt.
        </p>
        <hr className="my-4" />
        <h6 className="text-primary fs-0 text-uppercase">
          ANFRAGE PER E-MAIL, TELEFON ODER TELEFAX
        </h6>
        <p className="p-3 text-justify">
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
          Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
          (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
          gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter.
        </p>
        <p className="p-3 text-justify">
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
          zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
          unserem berechtigten Interesse an der effektiven Bearbeitung der an
          uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
          wurde; die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p className="p-3 text-justify">
          Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben
          bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
          Speicherung widerrufen oder der Zweck für die Datenspeicherung
          entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens).
          Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche
          Aufbewahrungsfristen – bleiben unberührt.
        </p>
      </Card.Body>
    </Card>
  );
});

export default DatenErfassung;
