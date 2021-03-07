import { Typography, Grid } from "@material-ui/core";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MetaDecorator from "../../util/MetaDecorator";

const styles = (theme) => ({
  ...theme.spreadThis,
  root: {
    flexGrow: 1,
    paddingTop: 20,
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
  },
});

const agb = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <MetaDecorator
        title={"wasdarfich.de – Allgemeine Geschäftsbedingungen"}
        description={
          "Unsere Allgemeinen Geschäftsbedingungn geben Auskunft über Haftung"
        }
      />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography gutterBottom>{agbString}</Typography>
        </Grid>
      </Grid>
      <div style={{ marginBottom: 200 }}></div>
    </div>
  );
};

agb.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(agb));

const agbString = `<strong>Allgemeine Geschäftsbedingungen</strong>
            <strong>§ 1 Geltungsbereich</strong>
            (1) Diese Allgemeinen Verkaufsbedingungen (im Folgenden: AGB) gelten
            für alle über unseren Online-Shop geschlossenen Verträge zwischen
            uns, Firma Curioseaty UG (haftungsbeschränkt), Edelweißstraße 13,
            82194 Gröbenzell, Herr Leon Beckert, contact@curioseaty.de , und
            Ihnen als unseren Kunden. Die AGB gelten unabhängig davon, ob Sie
            Verbraucher, Unternehmer oder Kaufmann sind. (2) Alle zwischen Ihnen
            und uns im Zusammenhang mit dem Kaufvertrag getroffenen
            Vereinbarungen ergeben sich insbesondere aus diesen
            Verkaufsbedingungen, unserer schriftlichen Auftragsbestätigung und
            unserer Annahmeerklärung. (3) Maßgebend ist die jeweils bei
            Abschluss des Vertrags gültige Fassung der AGB. (4) Abweichende
            Bedingungen des Kunden akzeptieren wir nicht. Dies gilt auch, wenn
            wir der Einbeziehung nicht ausdrücklich widersprechen.
            <strong>§ 2 Vertragsschluss</strong>
            (1) Die Präsentation und Bewerbung von Artikeln in unserem
            Online-Shop stellt kein bindendes Angebot zum Abschluss eines
            Kaufvertrags dar. (2) Mit dem Absenden einer Bestellung über den
            Online-Shop durch Anklicken des Buttons „zahlungspflichtig
            bestellen“ geben Sie eine rechtsverbindliche Bestellung ab. Sie sind
            an die Bestellung für die Dauer von zwei (2) Wochen nach Abgabe der
            Bestellung gebunden; Ihr gegebenenfalls bestehendes Recht, Ihre
            Bestellung zu widerrufen, bleibt hiervon unberührt. (3) Wir werden
            den Zugang Ihrer über unseren Online-Shop abgegebenen Bestellung
            unverzüglich per E-Mail bestätigen. In einer solchen E-Mail liegt
            noch keine verbindliche Annahme der Bestellung, es sei denn, darin
            wird neben der Bestätigung des Zugangs zugleich die Annahme erklärt.
            (4) Ein Vertrag kommt erst zustande, wenn wir Ihre Bestellung durch
            eine Annahmeerklärung oder durch die Lieferung der bestellten
            Artikel annehmen. (5) Bestellungen von Lieferungen ins Ausland
            können wir nur ab einem Mindestbestellwert berücksichtigen. Den
            Mindestbestellwert können Sie den in unserem Online-Shop bereit
            gestellten Preisinformationen entnehmen. (6) Sollte die Lieferung
            der von Ihnen bestellten Ware nicht möglich sein, etwa weil die
            entsprechende Ware nicht auf Lager ist, sehen wir von einer
            Annahmerklärung ab. In diesem Fall kommt ein Vertrag nicht zustande.
            Wir werden Sie darüber unverzüglich informieren und bereits
            erhaltene Gegenleistungen unverzüglich zurückerstatten.
            <strong>
                § 3 Lieferbedingungen und Vorbehalt der Vorkassezahlung
            </strong>
            (1) Wir sind zu Teillieferungen berechtigt, soweit dies für Sie
            zumutbar ist. (2) Die Lieferfrist beträgt circa fünf Werktage,
            soweit nichts anderes vereinbart wurde. Sie beginnt – vorbehaltlich
            der Regelung in Abs. 3 – mit Vertragsschluss. (3) Bei Bestellungen
            von Kunden mit Wohn- oder Geschäftssitz im Ausland oder bei
            begründeten Anhaltspunkten für ein Zahlungsausfallrisiko behalten
            wir uns vor, erst nach Erhalt des Kaufpreises nebst Versandkosten zu
            liefern (Vorkassevorbehalt). Falls wir von dem Vorkassevorbehalt
            Gebrauch machen, werden wir Sie unverzüglich unterrichten. In diesem
            Fall beginnt die Lieferfrist mit Bezahlung des Kaufpreises und der
            Versandkosten.
            <strong>§ 4 Preise und Versandkosten</strong>
            (1) Sämtliche Preisangaben in unserem Online-Shop sind Bruttopreise
            inklusive der gesetzlichen Umsatzsteuer und verstehen sich zuzüglich
            anfallender Versandkosten. (2) Die Versandkosten sind in unseren
            Preisangaben in unserem Online-Shop angegeben. Der Preis
            einschließlich Umsatzsteuer und anfallender Versandkosten wird
            außerdem in der Bestellmaske angezeigt, bevor Sie die Bestellung
            absenden. (3) Wenn wir Ihre Bestellung durch Teillieferungen
            erfüllen, entstehen Ihnen nur für die erste Teillieferung
            Versandkosten. Erfolgen die Teillieferungen auf Ihren Wunsch,
            berechnen wir für jede Teillieferung Versandkosten. (4) Wenn Sie
            Ihre Vertragserklärung wirksam widerrufen, können Sie unter den
            gesetzlichen Voraussetzungen die Erstattung bereits bezahlter Kosten
            für den Versand zu Ihnen (Hinsendekosten) verlangen.
            <strong>
                § 5 Zahlungsbedingungen und Aufrechnung und
                Zurückbehaltungsrecht
            </strong>
            (1) Der Kaufpreis und die Versandkosten sind spätestens binnen zwei
            (2) Wochen ab Zugang unserer Rechnung zu bezahlen. (2) Sie können
            den Kaufpreis und die Versandkosten nach Ihrer Wahl nur mit den von
            uns angebotenen Zahlungsmöglichkeiten bezahlen. (3) Sie sind nicht
            berechtigt, gegenüber unseren Forderungen aufzurechnen, es sei denn,
            Ihre Gegenansprüche sind rechtskräftig festgestellt oder
            unbestritten. Sie sind zur Aufrechnung gegenüber unseren Forderungen
            auch berechtigt, wenn Sie Mängelrügen oder Gegenansprüche aus dem
            selben Kaufvertrag geltend machen. (4) Als Käufer dürfen Sie ein
            Zurückbehaltungsrecht nur dann ausüben, wenn Ihr Gegenanspruch aus
            demselben Kaufvertrag herrührt.
            <strong>§ 6 Eigentumsvorbehalt</strong>
            Die gelieferte Ware bleibt bis zur vollständigen Bezahlung des
            Kaufpreises in unserem Eigentum.
            <strong>§ 7 Gewährleistung</strong>
            (1) Wir haften für Sach- oder Rechtsmängel gelieferter Artikel nach
            den geltenden gesetzlichen Vorschriften, insbesondere §§ 434 ff.
            BGB. Die Verjährungsfrist für gesetzliche Mängelansprüche beträgt
            zwei Jahre und beginnt mit der Ablieferung der Ware. (2) Etwaige von
            uns gegebene Verkäufergarantien für bestimmte Artikel oder von den
            Herstellern bestimmter Artikel eingeräumte Herstellergarantien
            treten neben die Ansprüche wegen Sach- oder Rechtsmängeln im Sinne
            von Abs. 1. Einzelheiten des Umfangs solcher Garantien ergeben sich
            aus den Garantiebedingungen, die den Artikeln gegebenenfalls
            beiliegen.
            <strong>§ 8 Haftung</strong>
            (1) Wir haften Ihnen gegenüber in allen Fällen vertraglicher und
            außervertraglicher Haftung bei Vorsatz und grober Fahrlässigkeit
            nach Maßgabe der gesetzlichen Bestimmungen auf Schadensersatz oder
            Ersatz vergeblicher Aufwendungen. (2) In sonstigen Fällen haften wir
            – soweit in Abs. 3 nicht abweichend geregelt – nur bei Verletzung
            einer Vertragspflicht, deren Erfüllung die ordnungsgemäße
            Durchführung des Vertrags überhaupt erst ermöglicht und auf deren
            Einhaltung Sie als Kunde regelmäßig vertrauen dürfen (so genannte
            Kardinalpflicht), und zwar beschränkt auf den Ersatz des
            vorhersehbaren und typischen Schadens. In allen übrigen Fällen ist
            unsere Haftung vorbehaltlich der Regelung in Abs. 3 ausgeschlossen.
            (3) Unsere Haftung für Schäden aus der Verletzung des Lebens, des
            Körpers oder der Gesundheit und nach dem Produkthaftungsgesetz
            bleibt von den vorstehenden Haftungsbeschränkungen und –ausschlüssen
            unberührt.
            <strong>§ 9 Urheberrechte</strong>
            Wir haben an allen Bildern, Filme und Texten, die in unserem Online
            Shop veröffentlicht werden, Urheberrechte. Eine Verwendung der
            Bilder, Filme und Texte, ist ohne unsere ausdrückliche Zustimmung
            nicht gestattet.
            <strong>§ 10 Anwendbares Recht und Gerichtsstand</strong>
            (1) Es gilt das Recht der Bundesrepublik Deutschland unter
            Ausschluss des UN-Kaufrechts. Wenn Sie die Bestellung als
            Verbraucher abgegeben haben und zum Zeitpunkt Ihrer Bestellung Ihren
            gewöhnlichen Aufenthalt in einem anderen Land haben, bleibt die
            Anwendung zwingender Rechtsvorschriften dieses Landes von der in
            Satz 1 getroffenen Rechtswahl unberührt. (2) Wenn Sie Kaufmann sind
            und Ihren Sitz zum Zeitpunkt der Bestellung in Deutschland haben,
            ist ausschließlicher Gerichtsstand der Sitz des Verkäufers. Im
            Übrigen gelten für die örtliche und die internationale Zuständigkeit
            die anwendbaren gesetzlichen Bestimmungen.`;
