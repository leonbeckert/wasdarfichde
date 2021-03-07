import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import useScript from "../../util/hooks/useScript";
import MetaDecorator from "../../util/MetaDecorator";

// MUI
import { Typography, Grid, Paper } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
  ...theme.spreadThis,
  root: {
    flexGrow: 1,
    paddingTop: 20,
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
  },
  paper: {
    padding: theme.spacing(2),
  },
});

function Datenschutz(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <MetaDecorator
        title={"wasdarfich.de – Datenschutz"}
        description={
          "Unsere Datenschutzerklärung gibt Ihnen Auskunft über die Datenverarbeitung und den Schutz der Privatsphäre auf unserer Webseite"
        }
      />
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <Typography gutterBottom>{datenschutzString}</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <Typography
              dangerouslySetInnerHTML={{
                __html: `<div id="cookiefirst-policy-page"></div><div>Diese Cookie-Richtlinie wurde erstellt und aktualisiert von der Firma <a href="https://cookiefirst.com">CookieFirst.com</a>.</div>`,
              }}
            ></Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Paper
            className={classes.paper}
            dangerouslySetInnerHTML={{
              __html: `<div id="cookiefirst-cookies-table"></div><div>Diese Cookie-Tabelle wurde erstellt und aktualisiert von der <a href="https://cookiefirst.com">CookieFirst consent management platform</a>.</div>`,
            }}
          ></Paper>
        </Grid>
      </Grid>
      <div style={{ marginBottom: 200 }}></div>
    </div>
  );
}

Datenschutz.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(Datenschutz));

const datenschutzString = `1. Allgemeine Hinweise und Grundsätze der Datenverarbeitung
Wir freuen uns, dass Sie unsere Webseite besuchen. Der Schutz Ihrer Privatsphäre und der Schutz Ihrer persönlichen Daten, der sog. personenbezogenen Daten, bei der Nutzung unserer Webseite ist uns ein wichtiges Anliegen.

Personenbezogene Daten sind nach Art. 4 Nr. 1 DS-GVO alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Hierzu gehören beispielsweise Informationen wie ihr Vor- und Nachname, ihre Anschrift, ihre Telefonnummer, Ihre E-Mail-Adresse, aber auch ihre IP-Adresse. 
Daten bei denen kein Bezug zu Ihrer Person herstellbar ist wie beispielsweise durch eine Anonymisierung, sind keine personenbezogenen Daten. Die Verarbeitung (z.B. das Erheben, die Speicherung, das Auslesen, das Abfragen, die Verwendung, die Übermittlung, das Löschen oder die Vernichtung) nach Art. 4 Nr. 2 DS-GVO bedarf immer einer gesetzlichen Rechtsgrundlage oder Ihrer Einwilligung. Verarbeitete personenbezogene Daten müssen gelöscht werden, sobald der Zweck der Verarbeitung erreicht wurde und keine gesetzlich vorgeschriebenen Aufbewahrungspflichten mehr zu wahren sind.
Hier finden Sie Informationen über den Umgang mit Ihren personenbezogenen Daten beim Besuch unserer Webseite. Zur Bereitstellung der Funktionen und Dienste unserer Webseite ist es erforderlich, dass wir personenbezogene Daten über Sie erheben. 
Wir erklären ihnen zudem, die Art und Umfang der jeweiligen Datenverarbeitung, den Zweck und die entsprechende Rechtsgrundlage und die jeweilige Speicherdauer.

Diese Datenschutzerklärung gilt nur für diese Webseite. Sie gilt nicht für andere Webseiten, auf die wir durch einen Hyperlink lediglich verweisen. Wir können keine Verantwortung für den vertraulichen Umgang Ihrer personenbezogenen Daten auf diesen Webseiten Dritter übernehmen, da wir keinen Einfluss darauf haben, ob diese Unternehmen die Datenschutzbestimmungen einhalten. Über den Umgang mit Ihren personenbezogenen Daten durch diese Unternehmen informieren Sie sich bitte direkt auf diesen Webseiten.	

2. Verantwortliche Stelle
Verantwortlich für die Verarbeitung von personenbezogenen Daten auf dieser Webseite ist (vgl. Impressum):






3. Bereitstellung und Nutzung der Webseite/ Server Logfiles
a) Art und Umfang der Datenverarbeitung	
Wenn Sie diese Webseite nutzen, ohne anderweitig (z.B. durch Registrierung oder Nutzung des Kontaktformulars) Daten an uns zu übermitteln, erheben wir über Server Logfiles technisch notwendige Daten, die automatisch an unseren Server übermittelt werden, u.a.:
•	IP-Adresse
•	Datum und Uhrzeit der Anfrage
•	Name und URL der abgerufenen Datei 
•	Website, von der aus der Zugriff erfolgt (Referrer-URL)
•	Zugriffsstatus/HTTP-Statuscode
•	Browsertyp
•	Sprache und Version der Browsersoftware
•	Betriebssystem

b) Zweck und Rechtsgrundlage
Diese Verarbeitung ist technisch erforderlich, um Ihnen unsere Webseite anzeigen zu können. Wir nutzen die Daten auch, um die Sicherheit und Stabilität unserer Webseite zu gewährleisten.
Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. f) DS-GVO. Die Verarbeitung der genannten Daten ist für die Bereitstellung einer Webseite erforderlich und dient damit der Wahrung eines berechtigten Interesses unseres Unternehmens.	

c) Speicherdauer
Sobald die genannten personenbezogenen Daten zur Anzeige der Webseite nicht mehr erforderlich sind, werden diese gelöscht. Die Erfassung der Daten zur Bereitstellung der Webseite und die Speicherung der Daten in Logfiles ist für den Betrieb der Webseite zwingend erforderlich. Es besteht folglich bezüglich dieses Aspektes seitens des Nutzers keine Widerspruchsmöglichkeit. Eine weitergehende Speicherung kann im Einzelfall dann erfolgen, wenn dies gesetzlich vorgeschrieben ist.

4. Einsatz von Cookies
a) Art, Umfang und Zweck der Datenverarbeitung
Wir verwenden Cookies. Cookies sind kleine Dateien, die im Rahmen Ihres Besuchs unserer Webseite von uns an den Browser Ihres Endgeräts gesendet und dort gespeichert werden.
Einige Funktionen unserer Webseite können ohne den Einsatz technisch notwendiger Cookies nicht angeboten werden. Andere Cookies ermöglichen uns dagegen verschiedene Analysen. So können einige Cookies den von Ihnen verwendeten Browser bei einem erneuten Besuch unserer Webseite wiedererkennen und verschiedene Informationen an uns übermitteln. Wir verwenden Cookies um die Benutzung unserer Webseite zu erleichtern und zu verbessern. So können wir durch Cookies unter anderem unser Internetangebot für Sie nutzerfreundlicher und effektiver gestalten, indem wir beispielsweise Ihre Nutzung unserer Webseite nachvollziehen und Ihre bevorzugten Einstellungen (bspw. Länder- und Spracheneinstellungen) feststellen. Sofern Dritte über Cookies Informationen verarbeiten, erheben diese die Informationen direkt über Ihren Browser. Cookies richten auf Ihrem Endgerät aber keinen Schaden an. Sie können keine Programme ausführen und keine Viren enthalten. Auf unserer Webseite werden verschiedene Arten von Cookies verwendet, deren Art und Funktion im Folgenden erläutert wird.
Temporäre Cookies/ Session-Cookies
Auf unserer Webseite werden sog. temporäre Cookies bzw. Session-Cookies verwendet, die automatisch gelöscht werden, sobald Sie Ihren Browser schließen. Durch diese Art von Cookies ist es möglich, Ihre Session-ID zu erfassen. Dadurch lassen sich verschiedene Anfragen Ihres Browsers einer gemeinsamen Sitzung zuordnen und es ist möglich, Ihr Endgerät bei späteren Webseitenbesuchen wiederzuerkennen.
Permanente Cookies
Auf unserer Webseite werden sog. permanente Cookies eingesetzt. Permanente Cookies sind Cookies, die über einen längeren Zeitraum in Ihrem Browser gespeichert werden und Informationen übermitteln können. Die jeweilige Speicherdauer unterscheidet sich je nach Cookie. Sie können permanente Cookies eigenständig über Ihre Browsereinstellungen löschen.
Drittanbieter-Cookies
Wir verwenden analytische Cookies zur Beobachtung des anonymisierten Nutzerverhaltens auf unserer Webseite. 
Zudem verwenden wir Werbungs-Cookies. Mit  diesen Cookies kann das Nutzerverhalten für Werbe- und gezielte Marketingzwecke verfolgt werden.
Social-Media-Cookies ermöglichen es, eine Verbindung zu Ihren sozialen Netzwerken aufzubauen und Inhalte unserer Webseite innerhalb Ihrer Netzwerke zu teilen.
Konfiguration der Browsereinstellungen
Die meisten Webbrowser sind so voreingestellt, dass Cookies automatisch akzeptiert werden. Sie können Ihren jeweiligen Browser jedoch so konfigurieren, dass er nur noch bestimmte oder auch gar keine Cookies mehr akzeptiert. Wir weisen Sie jedoch darauf hin, dass Sie dann möglicherweise nicht mehr alle Funktionen unserer Webseite nutzen können.
Über Ihre Browsereinstellungen können Sie zudem auch bereits in Ihrem Browser gespeicherte Cookies löschen. Des Weiteren ist es möglich, Ihren Browser so einzustellen, dass er Sie benachrichtigt, bevor Cookies gespeichert werden. Da sich die verschiedenen Browser in ihren jeweiligen Funktionsweisen unterscheiden können, bitten wir Sie, dass jeweilige Hilfemenü Ihres Browsers für die entsprechenden Konfigurationsmöglichkeiten in Anspruch zu nehmen. 
Die Deaktivierung der Verwendung von Cookies erfordert möglicherweise die Speicherung eines permanenten Cookies auf Ihrem Computer. Wenn Sie diesen Cookie anschließend löschen, müssen Sie ihn erneut deaktivieren.
b) Rechtsgrundlage
Aufgrund der beschriebenen Verwendungszwecke ist die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung von Cookies Art. 6 Abs. 1 lit. f) DS-GVO. Falls Sie uns auf Grundlage eines von uns auf der Webseite erteilten Hinweises („Cookie-Banner“) ihre Einwilligung zur Verwendung von Cookies erteilt haben, ist die Rechtsgrundlage zusätzlich Art. 6 Abs. 1 lit. a) DS-GVO.
c) Speicherdauer
Sobald die über die Cookies an uns übermittelten Daten für die oben beschriebene Zwecke nicht mehr erforderlich sind, werden diese Informationen gelöscht. Eine weitergehende Speicherung kann im Einzelfall dann erfolgen, wenn dies gesetzlich vorgeschrieben ist.
5. Datenerhebung zur Durchführung vorvertraglicher Maßnahmen und zur     Vertragserfüllung
a) Art und Umfang der Datenverarbeitung
Im vorvertraglichen Bereich und bei Vertragsschluss erheben wir personenbezogene Daten über Sie. Dies betrifft beispielsweise Vor- und Nachname, Anschrift, E-Mail-Adresse, Telefonnummer oder die Bankverbindung.
b) Zweck und Rechtsgrundlage der Datenverarbeitung
Diese Daten erheben und verarbeiten wir ausschließlich zum Zweck der Vertragsdurchführung bzw. zur Erfüllung vorvertraglichen Pflichten.

Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit b) DS-GVO. Besteht darüber hinaus eine Einwilligung von Ihnen, ist zusätzliche Rechtsgrundlage Art. 6 Abs. 1 lit. a) DS-GVO.

c) Speicherdauer

Die Daten werden gelöscht, sobald sie für den Zweck ihrer Verarbeitung nicht mehr erforderlich sind. 
Es können darüber hinaus gesetzliche Aufbewahrungspflichten bestehen, beispielsweise handels- oder steuerrechtliche Aufbewahrungspflichten nach dem Handelsgesetzbuch (HGB) oder der Abgabenordnung (AO). Sofern solche Pflichten zur Aufbewahrung bestehen, sperren oder löschen wir Ihre Daten mit Ende dieser Aufbewahrungspflichten.
6. Bestellformular
Auf unserer Webseite ist ein Bestellformular vorhanden, welches für elektronische Vorbestellungen genutzt werden kann. 
a) Art und Umfang der Datenverarbeitung
Unsere Datenerhebung beschränkt sich dabei auf folgende Daten:
•	Vor- und Nachname 
•	Telefonnummer 
•	E-Mail Adresse
•	Kontodaten
•	Name des Produkts
b) Zweck und Rechtsgrundlage
Zweck der Datenverarbeitung ist die Möglichkeit ihre Bestellung sachgerecht bearbeiten zu können. 
Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b) DS-GVO. Die Verarbeitung der Daten dient der Erfüllung eines Vertrages, oder ist für die Durchführung einer vorvertraglichen Maßnahme erforderlich, die auf Anfrage der betroffenen Person erfolgt ist. 
c) Speicherdauer
Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes der Verarbeitung nicht mehr benötigt werden. 
Es können darüber hinaus gesetzliche Aufbewahrungspflichten bestehen, beispielsweise handels- oder steuerrechtliche Aufbewahrungspflichten nach dem Handelsgesetzbuch (HGB) oder der Abgabenordnung (AO). Sofern solche Pflichten zur Aufbewahrung bestehen, sperren oder löschen wir Ihre Daten mit Ende dieser Aufbewahrungspflichten.

7. Registrierungsmöglichkeit
a) Art und Umfang der Datenverarbeitung
Auf unserer Webseite können Sie sich registrieren. Wenn Sie sich registrieren, erheben und speichern wir die Daten, die Sie in die Eingabemaske eingeben (z.B. Nachname, Vorname, E-Mail-Adresse). Eine Weitergabe an Dritte findet nicht statt.
b) Zweck und Rechtsgrundlage der Datenverarbeitung
Ihre Registrierung ist für die Nutzung bestimmter Inhalte und Leistungen auf unserer Webseite bzw. für die Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen erforderlich. Nach der Registrierung steht es Ihnen frei, die bei der Registrierung angegebenen personenbezogenen Daten jederzeit abzuändern oder vollständig aus dem Datenbestand des für die Verarbeitung Verantwortlichen löschen zu lassen.
Rechtsgrundlage für die Verarbeitung ist im Falle einer Einwilligung Art. 6 Abs. 1 lit. a) 
DS-GVO. Dient Ihre Registrierung der Vorbereitung eines Vertragsabschlusses ist Art. 6 Abs. 1 lit. b) DS-GVO zusätzliche Rechtsgrundlage.	

c) Speicherdauer
Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie auf unserer Website registriert sind und werden anschließend gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt. Zudem werden ihre registrierten personenbezogenen Daten gelöscht, wenn Sie 

8. Datenübermittlung 
Wir geben Ihre personenbezogenen Daten nur an Dritte weiter, wenn:
a) Sie hierzu ihre ausdrückliche Einwilligung nach Art. 6 Abs. 1 lit. a) DS-GVO erteilt haben.
b) dies gesetzlich zulässig und nach Art. 6 Abs. 1 lit. b) DS-GVO zur Erfüllung eines Vertragsverhältnisses mit Ihnen oder der Durchführung vorvertraglicher Maßnahmen erforderlich ist.
c) nach Art. 6 Abs. 1 lit. c) DS-GVO für die Weitergabe eine rechtliche Verpflichtung besteht.
Gesetzlich verpflichtet sind wir zur Übermittlung von Daten an staatliche Behörden, z.B. Steuerbehörden, Sozialversicherungsträgern, Krankenkassen, Aufsichtsbehörden und Strafverfolgungsbehörden.
d) die Weitergabe nach Art. 6 Abs. 1 lit. f) DS-GVO zur Wahrung berechtigter Unternehmensinteressen, sowie zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben.
e) wir nach Art. 28 DS-GVO bei der Verarbeitung uns externer Dienstleister sog. Auftragsverarbeiter bedienen, welche zum sorgfältigen Umgang mit ihren Daten verpflichtet wurden. 

Wir setzen solche Dienstleister ein in den Bereichen: 
•	IT
•	Logistik
•	Telekommunikation
Bei der Übermittlung an externe Stellen in Drittländern, d.h. außerhalb der EU bzw. des EWR, stellen wir sicher, dass diese Stellen Ihre personenbezogenen Daten mit der gleichen Sorgfalt behandeln wie innerhalb der EU bzw. des EWR. Wir übermitteln personenbezogene Daten nur in Drittländer, bei denen die EU-Kommission ein angemessenes Schutzniveau bestätigt hat oder wenn wir den sorgfältigen Umgang mit den personenbezogenen Daten durch vertragliche Vereinbarungen oder andere geeignete Garantien sicherstellen.

9. Bewerbungsmöglichkeit	

a) Art und Umfang der Datenverarbeitung
Sie können sich auf unserer Webseite bzw. per E-Mail bewerben. Wenn Sie sich bewerben, erheben und speichern wir die Daten, die Sie in die Eingabemaske eingeben bzw. die Sie uns per E-Mail zusenden. 

b) Zweck und Rechtsgrundlage	
Wir verarbeiten Ihre Daten nur zum Zwecke der Bearbeitung Ihrer Bewerbung. 
Eine Weitergabe an Dritte findet nicht statt. Rechtsgrundlage für die Verarbeitung ist Art. 88 Abs. 1 DS-GVO i.V.m. § 26 BDSG und zusätzlich Art. 6 Abs. 1 lit. b) DS-GVO.
Soweit Sie uns eine Einwilligung zur Aufnahme in unseren Bewerberpool erteilen, ist die Rechtsgrundlage Art. 6 Abs. 1 lit. a) DS-GVO. 

c) Speicherdauer
Falls wir Ihnen keine Stelle anbieten können, speichern wir Ihre Daten höchstens bis sechs Monate nach Beendigung des Bewerbungsprozesses unter Berücksichtigung von § 61b Abs. 1 ArbGG i.V.m. § 15 AGG. Der Fristbeginn ist der Zugang des Ablehnungsschreibens.

Wenn Sie uns eine Einwilligung zur Aufnahme in unseren Bewerberpool erteilt haben, speichern wir ihre Daten maximal zwei Jahre lang.

d) Datenweitergabe
Ihre Daten erhalten nur die Stellen, die in die Entscheidung eingebunden sind (zuständige Personal- bzw. Fachabteilungen, Geschäftsführung, Betriebsrat).
Zudem sind wir verpflichtet, öffentlichen Stellen und Institutionen (z. B. Staatsanwaltschaft, Polizei, Aufsichtsbehörden, Finanzamt, Sozialversicherungsträger etc.) ihre Daten zu übermitteln.

Weitere Datenempfänger können diejenigen Stellen sein, für die Sie uns Ihre Einwilligung zur Datenübermittlung erteilt haben. 

10. Kommentarfunktion	

a) Art und Umfang der Datenverarbeitung
Auf unserer Webseite können Sie Beiträge kommentieren. Wenn Sie einen Beitrag kommentieren, erheben und speichern wir die Daten, die Sie in die Eingabemaske eingeben. Neben den von Ihnen hinterlassenen Kommentaren werden auch Angaben zum Zeitpunkt der Kommentareingabe sowie eventuell der von der von Ihnen gewählten Nutzernamen (Pseudonym) gespeichert und veröffentlicht. Ferner wird die vom Internet-Service-Provider (ISP) der betroffenen Person vergebene IP-Adresse gespeichert. Eine Weitergabe an Dritte findet nicht statt. 

b) Zweck und Rechtsgrundlage
Die von Ihnen übermittelten Daten (z.B. der IP-Adresse) erfolgt aus Sicherheitsgründen und für den Fall, dass die betroffene Person durch einen abgegebenen Kommentar die Rechte Dritter verletzt oder rechtswidrige Inhalte postet. 
Es erfolgt keine Weitergabe dieser erhobenen personenbezogenen Daten an Dritte, sofern eine solche Weitergabe nicht gesetzlich vorgeschrieben ist oder der Rechtsverteidigung des für die Verarbeitung Verantwortlichen dient.

Rechtsgrundlage für die Verarbeitung der personenbezogenen Daten, die bei Nutzung der Kommentarfunktion übermittelt werden, ist wenn und soweit Ihre Einwilligung vorliegt Art. 6 Abs. 1 lit. a) DS-GVO. Diese Einwilligung können Sie jederzeit widerrufen. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
Weitere Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DS-GVO. 
Wir haben ein berechtigtes Interesse an der Verarbeitung, falls Rechte Dritter verletzt oder rechtswidrige Inhalte gepostet werden. Dies dient der Sicherheit, falls jemand in Kommentaren und Beiträgen widerrechtliche Inhalte schreibt (Beleidigungen, verbotene politische Propaganda usw.)

c) Speicherdauer
Die Kommentare und die damit verbundenen Daten (z.B. IP-Adresse) werden gespeichert und verbleiben auf unserer Website, bis der kommentierte Inhalt vollständig gelöscht wurde bzw. die Kommentare aus rechtlichen Gründen gelöscht werden müssen.
11. Kontaktformular
a) Art und Umfang der Datenverarbeitung
Auf unserer Webseite bieten wir Ihnen die Möglichkeit an, über ein bereitgestelltes Formular mit uns in Kontakt zu treten. Im Rahmen des Absendevorgangs Ihrer Anfrage über das Kontaktformular wird zur Einholung Ihrer Einwilligung auf diese Datenschutzerklärung verwiesen. 

Wenn Sie von dem Kontaktformular Gebrauch machen, werden darüber die folgenden personenbezogenen Daten von Ihnen verarbeitet: 
-          Anrede
-	Vorname
-          Nachname
- 	Titel
-	Firma
- 	Branche
- 	Funktion
- 	Straße
- 	Straßennummer
- 	Postleitzahl
-	Ort
- 	Land
-          E-Mail-Adresse
-          Telefonnummer
-          Betreff
-          Inhalt der Nachricht

b) Zweck und Rechtsgrundlage
Die Angabe Ihrer E-Mail-Adresse dient dabei dem Zweck, ihnen auf ihre  Anfrage hin per E-Mail eine Antwort zukommen zu lassen Bei der Nutzung des Kontaktformulars erfolgt keine Weitergabe Ihrer personenbezogenen Daten an Dritte.

Rechtsgrundlage für die Verarbeitung ist eine Einwilligung nach Art. 6 Abs. 1 lit. a) DS-GVO auf der von Ihnen im Folgenden freiwillig abgegebenen und jederzeit für die Zukunft widerrufbaren Einwilligungserklärung:

c) Speicherdauer
Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). 
Hiervon bleiben zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen nach der nach dem Handelsgesetzbuch (HGB) oder der Abgabenordnung (AO) – unberührt.

12. Kontaktmöglichkeiten per E-Mail
Auf unserer Webseite steht ihnen eine Kontaktmöglichkeit per E-Mail zur Verfügung.
a) Art und Umfang der Datenverarbeitung	
Sie können sich an uns per E-Mail wenden. Unsere Datenerhebung beschränkt sich dabei auf die E-Mail-Adresse des von Ihnen zur Kontaktaufnahme verwendeten E-Mail-Accounts sowie auf die von Ihnen im Rahmen der Kontaktaufnahme beliebig zur Verfügung gestellten personenbezogenen Daten.
b) Zweck und Rechtsgrundlage	
Zweck der Datenverarbeitung ist die Möglichkeit ihr Anliegen sachgerecht beantworten zu können. Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f) DS-GVO. Es besteht ein berechtigtes Interesse an der Verarbeitung der oben genannten personenbezogenen Daten, um Ihr Anliegen sachgerecht bearbeiten zu können.
c) Speicherdauer	
Die Dauer der Speicherung der oben genannten Daten ist abhängig vom Hintergrund Ihrer Kontaktaufnahme. Eine Löschung Ihrer personenbezogenen Daten erfolgt regelmäßig, sofern der verfolgte Zweck der Kommunikation entfallen und eine Speicherung nicht mehr erforderlich ist. Dies kann sich beispielsweise aus einer Bearbeitung ihres Anliegens ergeben.
13. Newsletter	

a) Art und Umfang der Datenverarbeitung

Auf unserer Webseite besteht die Möglichkeit, einen kostenfreien regelmäßigen E-Mail Newsletter zu abonnieren Um Ihnen regelmäßig den Newsletter zusenden zu können, benötigen wir von Ihnen ihre E-Mail-Adresse.

Für den Newsletterversand verwenden wir das sog. Double Opt-In-Verfahren.

Dies bedeutet, dass wir Ihnen erst dann einen E-Mail Newsletter zuschicken werden, wenn Sie uns ausdrücklich bestätigt haben, dass Sie in den Versand des Newsletters einwilligen. Wir schicken Ihnen dann eine Bestätigungs-E-Mail, mit der Sie gebeten werden durch Anklicken eines entsprechenden Links zu bestätigen, dass Sie künftig Newsletter von uns erhalten wollen. 

Dies dient der Sicherstellung, dass nur Sie selbst sich als Inhaber der angegebenen E-Mail-Adresse zum Newsletter anmelden können. Ihre Bestätigung muss zeitnah nach Erhalt der Bestätigungs-E-Mail erfolgen, da andernfalls Ihre Newsletter-Anmeldung automatisch aus unserer Datenbank gelöscht wird.
Wenn Sie den Newsletter abonnieren, erheben und speichern wir die Daten, die Sie in die Eingabemaske eingeben (z.B. Nachname, Vorname, E-Mail-Adresse). 
Bei der Anmeldung zum Newsletter speichern wir zudem Ihre vom Internet Service-Provider (ISP) eingetragene IP-Adresse sowie das Datum und die Uhrzeit der Anmeldung, um einen möglichen Missbrauch Ihrer E-Mail- Adresse zu einem späteren Zeitpunkt nachvollziehen zu können. Bei der zu Kontrollzwecken ausgesandten Bestätigungsmail (Double-Opt in der 
E-Mail) speichern wir ebenfalls Datum und die Uhrzeit des Klicks auf den Bestätigungslink und die vom Internet Service-Provider (ISP) eingetragene IP-Adresse. 
b) Zweck und Rechtsgrundlage	

Die von uns bei der Anmeldung zum Newsletter erhobenen Daten werden ausschließlich für Zwecke der werblichen Ansprache im Wege des Newsletters benutzt.
Die Verarbeitung Ihrer E-Mail-Adresse für den Newsletterversand beruht nach Art. 6 Abs. 1 lit. a) DS-GVO und § 7 Abs. 2 Nr. 3 UWG auf der von Ihnen im Folgenden freiwillig abgegebenen und jederzeit für die Zukunft widerrufbaren Einwilligungserklärung.
Zudem beruht die Verarbeitung Art. 6 Abs. 1 lit f) DS-GVO aufgrund berechtigter Interessen von uns den Nachweis der erforderlichen Einwilligung zu dokumentieren.


c) Speicherdauer
Ihre E-Mail-Adresse wird solange gespeichert, wie Sie den Newsletter abonniert haben. Nach einer Abmeldung vom Newsletterversand wird Ihre E-Mail-Adresse gelöscht, soweit Sie nicht ausdrücklich in eine weitere Nutzung Ihrer Daten eingewilligt haben.

14. Tracking- und Analysetools

Eine exakte Übersicht zu den von uns verwendeten Web Analyse- und Social Media Tools finden Sie hier.

15. Datensicherheit und Sicherungsmaßnahmen 
Wir verpflichten uns, Ihre Privatsphäre zu schützen und Ihre personenbezogenen Daten vertraulich zu behandeln. Dazu treffen wir umfangreiche technische und organisatorische Sicherheitsvorkehrungen, welche regelmäßig überprüft und dem technologischen Fortschritt angepasst werden.  
Hierzu gehört unter anderem die Verwendung anerkannter Verschlüsselungsverfahren (SSL oder TLS). Unverschlüsselt preisgegebene Daten, beispielsweise wenn dies per unverschlüsselter E-Mail erfolgt, können aber eventuell von Dritten mitgelesen werden. Darauf haben wir keinen Einfluss. Es liegt im Verantwortungsbereich des jeweiligen Nutzers, die von ihm zur Verfügung gestellten Daten durch Verschlüsselung oder in sonstiger Weise gegen Missbrauch zu schützen.

16. Änderungen der Datenschutzerklärung 
Wir behalten uns jederzeit das Recht vor, diese Erklärung bei Bedarf entsprechend zu aktualisieren.

17. Ihre Rechte
Hier finden Sie Ihre Rechte in Bezug auf Ihre personenbezogenen Daten. Einzelheiten dazu ergeben sich aus den Artikeln 7, 15-22 und 77 DS-GVO. Sie können sich diesbezüglich an die verantwortliche Stelle (Ziff. 2).

Recht auf Widerruf Ihrer datenschutzrechtlichen Einwilligung nach Art. 7 Abs. 3 S. 1 DS-GVO
Sie können eine Einwilligung in die Verarbeitung Ihrer personenbezogenen Daten jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung wird davon jedoch nicht berührt.

a)	Auskunftsrecht nach Art. 15 DS-GVO
Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob wir personenbezogene Daten verarbeiten, die Sie betreffen. Ist dies der Fall, so haben Sie das Recht auf Auskunft über diese personenbezogenen Daten sowie auf weitere Informationen, z.B. die Verarbeitungszwecke, die Kategorien verarbeiteter personenbezogener Daten, die Empfänger und die geplante Dauer der Speicherung bzw. die Kriterien für die Festlegung der Dauer.

b)	Recht auf Berichtigung und Vervollständigung nach Art. 16 DS-GVO
Sie haben das Recht, unverzüglich die Berichtigung unrichtiger Daten zu verlangen. Unter Berücksichtigung der Zwecke der Verarbeitung haben Sie das Recht, die Vervollständigung unvollständiger Daten zu verlangen.

c)	Recht auf Löschung („Recht auf Vergessenwerden“) nach Art. 17 DS-GVO
Sie haben ein Recht zur Löschung, soweit die Verarbeitung nicht erforderlich ist. 
Dies ist beispielsweise der Fall, wenn Ihre Daten für die ursprünglichen Zwecke nicht mehr notwendig sind, Sie Ihre datenschutzrechtliche Einwilligungserklärung widerrufen haben oder die Daten unrechtmäßig verarbeitet wurden. 	

d)	Recht auf Einschränkung der Verarbeitung nach Art. 18 DS-GVO
Sie haben ein Recht auf Einschränkung der Verarbeitung, z.B. wenn Sie der Meinung sind, die personenbezogenen Daten seien unrichtig.

e)	Recht auf Datenübertragbarkeit nach Art. 20 DS-GVO
Sie haben das Recht, die Sie betreffenden personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. 

f)	Widerspruchsrecht nach Art. 21 DS-GVO	
Sie haben das Recht, jederzeit aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung bestimmter Sie betreffender personenbezogener Daten Widerspruch einzulegen.	
	
Im Falle von Direktwerbung haben Sie als betroffene Person das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.

g)	Automatisierte Entscheidung im Einzelfall einschließlich Profiling nach Art. 22 DS-GVO
Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, außer in den in Art. 22 DS-GVO erwähnten Ausnahmetatbeständen.

Eine ausschließlich auf einer automatisierten Verarbeitung – einschließlich Profiling – beruhende Entscheidungsfindung findet nicht statt.

h)	Beschwerde bei einer Datenschutzaufsichtsbehörde nach Art. 77 DS-GVO
Außerdem können Sie jederzeit Beschwerde bei einer Datenschutzaufsichtsbehörde einlegen, beispielsweise wenn Sie der Meinung sind, dass die Datenverarbeitung nicht im Einklang mit datenschutzrechtlichen Vorschriften steht.
`;
