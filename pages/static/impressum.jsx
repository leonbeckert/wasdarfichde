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

const impressum = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <MetaDecorator
        title={"wasdarfich.de – Impressum"}
        description={"Im Impressum finden Sie Angaben gemäß § 5 TMG"}
      />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography gutterBottom>{impressumString}</Typography>
        </Grid>
      </Grid>
      <div style={{ marginBottom: 200 }}></div>
    </div>
  );
};

impressum.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(impressum));

const impressumString = `<strong>Impressum</strong>
            Angaben gemäß § 5 TMG: Curioseaty UG (haftungsbeschränkt)
            Edelweißstraße 13 82194 Gröbenzell contact@curioseaty.de
            Vertretungsberechtigter Geschäftsführer: Herr Leon Beckert
            Registergericht Amtsgericht München HRB 250410 USt-IdNr. gemäß § 27
            a Umsatzsteuergesetz: DE 11712390443 Inhaltlich verantwortlich für
            journalistisch-redaktionell gestaltete Angebote i.S.v. § 55 RStV
            (Rundfunkstaatsvertrag): Herr Leon Beckert Online-Beilegung
            verbraucherrechtlicher Streitigkeiten; OS-Plattform Die Europäische
            Kommission hat eine Europäische Plattform zur Online-Streitbeilegung
            („OS-Plattform“) bereitzustellen. Die OS-Plattform ist im Internet
            unter der Internet-Adresse http://ec.europa.eu/consumers/odr/
            abrufbar. Inhalt des Onlineangebotes Der Betreiber der Webseite
            übernimmt keinerlei Gewähr für die Aktualität, Korrektheit,
            Vollständigkeit oder Qualität der bereitgestellten Informationen.
            Haftungsansprüche gegen den Autor, die sich auf Schäden materieller
            oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung
            der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter
            und unvollständiger Informationen verursacht wurden, sind
            grundsätzlich ausgeschlossen, sofern seitens des Betreiber der
            Webseite kein nachweislich vorsätzliches oder grob fahrlässiges
            Verschulden vorliegt. Verweise und Links Bei direkten oder
            indirekten Verweisen auf fremde Internetseiten („Links“), die
            außerhalb des Verantwortungsbereiches des Betreibers der Webseite
            liegen, tritt eine Haftungsverpflichtung ausschließlich in dem Fall
            in Kraft, in dem der Betreiber der Webseite von den Inhalten
            Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die
            Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Betreiber
            der Webseite erklärt hiermit ausdrücklich, dass zum Zeitpunkt der
            Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten
            erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die
            Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten hat
            der Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit
            ausdrücklich von allen Inhalten aller verlinkten/verknüpften Seiten,
            die nach der Linksetzung verändert wurden. Diese Feststellung gilt
            für alle innerhalb des eigenen Internetangebotes gesetzten Links und
            Verweise sowie für Fremdeinträge in vom Autor eingerichteten
            Gästebüchern, Diskussionsforen und Mailinglisten. Für illegale,
            fehlerhafte oder unvollständige Inhalte und insbesondere für
            Schäden, die aus der Nutzung oder Nichtnutzung solcherart
            dargebotener Informationen entstehen, haftet allein der Anbieter der
            Seite, auf die verwiesen wurde, nicht derjenige, der über Links auf
            die jeweilige Veröffentlichung lediglich verweist. Urheber- und
            Kennzeichenrecht Der Betreiber der Webseite ist bestrebt, in allen
            Publikationen die Urheberrechte der verwendeten Grafiken,
            Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst
            erstellte Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen
            oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und
            Texte zurückzugreifen. Alle innerhalb des Internetangebotes
            genannten und gegebenenfalls durch Dritte geschützten Marken- und
            Warenzeichen unterliegen uneingeschränkt den Bestimmungen des
            jeweils gültigen Kennzeichenrechts und den Besitzrechten der
            jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen
            Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht
            durch Dritte geschützt sind! Das Copyright für veröffentlichte, vom
            Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten.
            Eine Vervielfältigung oder Verwendung solcher Grafiken,
            Tondokumente, Videosequenzen und Texte in anderen elektronischen
            oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des
            Autors nicht gestattet. Rechtswirksamkeit dieses
            Haftungsausschlusses Dieser Haftungsausschluss ist als Teil des
            Internetangebotes zu betrachten, von dem aus auf diese Seite
            verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses
            Textes der geltenden Rechtslage nicht, nicht mehr oder nicht
            vollständig entsprechen, bleiben die übrigen Teile des Dokumentes in
            ihrem Inhalt und ihrer Gültigkeit davon unberührt. München, den
            10.07.2019 Recht 24/7 Schröder Rechtsanwaltsgesellschaft mbH`;
