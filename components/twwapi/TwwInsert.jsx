import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

// MUI
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid, CircularProgress } from "@material-ui/core";

// Components
import AmpelAccordion from "./AmpelAccordion";
import { setTWWapiData } from "../../redux/actions/dataActions";

const styles = (theme) => ({
  ...theme.spreadThis,
  root: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
    marginLeft: 10,
  },
});

export const TwwInsert = (props) => {
  const { classes } = props;
  const [loading, setLoading] = React.useState(true);

  const { country, state } = props;
  const proppos = props.data.twwapidata;
  useEffect(() => {
    axios
      .get(`/get/${country}/${state}`)
      .then((res) =>
        props.setTWWapiData({
          alert: res.data.alert,
          shortDescription: res.data.shortDescription,
          importantLinks: res.data.importantLinks,
          regionalRestrictions: res.data.regionalRestrictions,
          general: res.data.general,
          tourism: res.data.tourism,
          lastRulesUpdate: res.data.lastRulesUpdate,
        })
      )
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm={12} xs={12} className={classes.paper}>
          <Typography variant="h5">Alle Themen</Typography>
        </Grid>
        <Grid item sm={12} xs={12}>
          {loading ? (
            <div className={classes.root}>
              <CircularProgress />
            </div>
          ) : (
            <div>
              {/* <div
                        dangerouslySetInnerHTML={{
                            __html: proppos.shortDescription,
                        }}
                    />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: proppos.importantLinks,
                        }}
                    />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: proppos.regionalRestrictions,
                        }}
                    /> */}
              <Typography
                variant="body2"
                style={{ color: "grey", marginLeft: 10 }}
              >
                Letzte Aktualisierung: {proppos.lastRulesUpdate}
              </Typography>
              <br />
              <AmpelAccordion content={proppos} />
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

TwwInsert.propTypes = {
  classes: PropTypes.object.isRequired,
  setTWWapiData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
});
const mapDispatchToProps = {
  setTWWapiData,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TwwInsert));
