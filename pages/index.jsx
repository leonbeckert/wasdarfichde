import React from "react";
import Link from "next/link";

// MUI
import { withStyles, Grid, Paper, Typography } from "@material-ui/core";

// Components
import SearchBar from "../components/SearchBar";
import MetaDecorator from "../util/MetaDecorator";

// CSS import and additional configuration
const styles = (theme) => ({
  ...theme.spreadThis,
  root: {
    flexGrow: 1,
    paddingTop: 20,
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
  },
  hometitle: {
    margin: "auto",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  homesubtitle: {
    margin: "auto",
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  },
  center: {
    textAlign: "center",
  },
});

/**
 * Homepage with SearchBar, CityAddComponent and general info
 * @component
 */
const Home = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {
        <MetaDecorator
          title={"wasdarfich.de – Homepage"}
          description={
            "Lokale Corona-Regeln, Inzidenzwerte, Beschränkungen und Antworten auf deine Fragen, topaktuell"
          }
        />
      }
      <Grid container spacing={3}>
        <Grid item sm={12} xs={12}>
          <Typography variant="body2">
            <Link href={`/germany`}>Deutschland</Link>
            {" > "}
            <Link href={`/germany`}>Bundesländer</Link>
            {" > "}
            <Link href={`/germany`}>Landkreise</Link>
            {" > "}
            <Link href={`/germany`}>Gemeinden</Link>
          </Typography>
          <br />
          <Paper className={classes.paper}>
            <Typography
              gutterBottom
              variant="h6"
              className={classes.homesubtitle}
            >
              Gib deinen Aufenthaltsort ein um aktuelle Informationen zu
              Ausgangsbeschränkungen, Beschränkungen im Privatraum und weiteren
              Regeln zu erhalten.
            </Typography>
            <SearchBar />
            <br />
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <Typography
                  variant="h6"
                  style={{
                    textAlign: "center",
                    marginTop: 3,
                    color: "red",
                  }}
                >
                  Nicht fündig geworden? Klicke hier:
                </Typography>
              </Grid>
              <Grid item sm={6} xs={12}>
                {/* <CityAddComponent /> */}
              </Grid>
            </Grid>
            <br />
          </Paper>
        </Grid>
        <Grid item sm={12} xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6">
              <strong>
                Darf man sich jetzt eigentlich zu fünft oder zu zehnt treffen?
                Und muss mein Kind in der Schule am Platz eine Maske tragen?
              </strong>
            </Typography>
            <br />
            <Typography variant="body1">
              Leider sind die Antworten auf solche Fragen oft in schwer
              verständlichen Beschlüssen geregelt und es gibt von Ort zu Ort
              große Unterschiede.
              <br />
              <br />
              Auf <strong>wasdarfich.de</strong> kommen Bürger zusammen, um
              leicht verständliche Antworten auf diese Fragen zu geben.
              <br />
              <br />
              Gib deinen Ort in der Suche ein und füge in wenigen Klicks Fragen
              oder Antworten hinzu.
            </Typography>
            <br />
            <Typography variant="h6" style={{ color: "red" }}>
              <strong>
                Bitte unterstütze unser Projekt und teile den Link zu dieser
                Seite mit deinen Freunden und deiner Familie.
              </strong>
            </Typography>
            <br />
          </Paper>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6">
              <strong>Wer seid ihr?</strong>
            </Typography>
            <br />
            <Typography>
              Wir sind Johannes, Leon und Filip, drei Studenten aus der Nähe von
              München, die gerade die letzten Wochen ihrer Semesterferien damit
              verbracht haben, diese Webseite zu bauen.
            </Typography>
            <br />
          </Paper>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6">
              <strong>Wieso macht ihr das?</strong>
            </Typography>
            <br />
            <Typography>
              Von der Corona-Pandemie ist ausnahmslos jeder in Deutschland
              betroffen. Viele unserer Freunde und unserer Familienmitglieder
              finden auch, dass es extrem schwer ist, immer topaktuell
              informiert zu sein. Wir sind uns sicher, dass unser Projekt vielen
              Menschen helfen kann, indem es hyperlokale, aktuelle und relevante
              Informationen vermittelt.
            </Typography>
            <br />
            <Typography>
              Wir hoffen, damit einen soliden Beitrag zur Entspannung der
              aktuellen Situation leisten zu können.
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={12} xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6">
              <strong>Haftung</strong>
            </Typography>
            <br />
            <Typography variant="body1">
              <strong>
                Wir übernehmen keine Verantwortung für die Richtigkeit der
                angegebenen Inhalte. Die User sind stets angehalten sich bei
                offiziellen Quellen zu informieren. Mit dem Verwenden unserer
                Website erklärst Du dich mit unserem Haftungsausschluss
                einverstanden.
              </strong>
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={12} xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="body1">
              Daten zu regionalen Einschränkungen mit freundlicher Genehmigung
              des{" "}
              <a href="https://www.kompetenzzentrum-tourismus.de/">
                Kompetenzzentrums Tourismus des Bundes
              </a>
              .
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <div style={{ marginTop: 100 }}></div>
    </div>
  );
};

export default withStyles(styles)(Home);
