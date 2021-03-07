import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

// Redux
import { setRKIapiData } from "../../redux/actions/dataActions";

// MUI
import {
  Grid,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  CircularProgress,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

// Components
import SimpleDialog from "../SimpleDialog";

// CSS import and additional configuration
const styles = (theme) => ({
  ...theme.spreadThis,
  root: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: "50%",
    display: "inline-block",
    marginTop: 10,
    marginRight: 15,
  },
});

/**
 * Inserts an Accordion that displays RKI API data
 * @param {classes} props
 */
export const RkiInsert = (props) => {
  const { classes } = props;
  const [loading, setLoading] = React.useState(true);

  const { country, state, region } = props;
  const proppos = props.data.rkiapidata;
  useEffect(() => {
    axios
      .get(`/get/${country}/${state}/${region}`)
      .then((res) => {
        props.setRKIapiData({
          cases7per100k: res.data.cases7per100k.toString().split(".")[0],
          lastUpdate: new Date(
            Date.parse(res.data.rkiTimestamp)
          ).toLocaleString(),
        });
        setLoading(false);
        return true;
      })
      .catch((err) => console.error(err));
  }, []);

  /**
   * Takes an input of numbers and returns a color
   * @param {*} cases7per100k
   */
  function ampel(cases7per100k) {
    if (cases7per100k < 35) {
      return "green";
    } else if (cases7per100k < 50) {
      return "yellow";
    } else if (cases7per100k < 100) {
      return "red";
    } else {
      return "#8B0000";
    }
  }

  return (
    <div>
      {loading ? (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          <Accordion TransitionProps={{ unmountOnExit: true }} style={{}}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <span
                className={classes.dot}
                style={{
                  backgroundColor: ampel(proppos.cases7per100k),
                }}
              ></span>
              <Typography variant="h6" className={classes.heading}>
                7-Tage-Inzidenz: <strong>{proppos.cases7per100k}</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item sm={8} xs={12}>
                  <Grid container spacing={3}>
                    <Grid item sm={12} xs={12}>
                      <Typography variant="body2" style={{ color: "grey" }}>
                        Letzte Aktualisierung: {proppos.lastUpdate}
                      </Typography>
                    </Grid>
                    <br />
                    <br />
                    <Grid item sm={12} xs={12}>
                      <Typography>
                        Die 7-Tage-Inzidenz ist ein epidemiologischer Richtwert,
                        der als Entscheidungsgrundlage für die Aufhebung oder
                        Intensivierung von eindämmenden Maßnahmen dient.
                        <br />
                        <br />
                        Mit der 7-Tage-Inzidenz wird angegeben, wie viele
                        gemeldete Neuinfektionen je 100.000 Einwohner es in den
                        letzten sieben Tagen gab.
                      </Typography>
                    </Grid>
                    <br />
                    <br />
                  </Grid>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <SimpleDialog />
                </Grid>
                <Grid item sm={12} xs={12}>
                  <Typography variant="body2" style={{ color: "grey" }}>
                    Daten zur 7-Tage-Inzidenz mit freundlicher Genehmigung des{" "}
                    <a
                      className="greylinkonwhite"
                      href="https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0"
                    >
                      Robert-Koch-Instituts
                    </a>
                    .
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </div>
      )}
    </div>
  );
};

RkiInsert.propTypes = {
  classes: PropTypes.object.isRequired,
  setRKIapiData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  country: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
});

const mapDispatchToProps = {
  setRKIapiData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(RkiInsert));
