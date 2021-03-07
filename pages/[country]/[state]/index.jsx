import React, { useEffect, Fragment } from "react";

// Axios
import axios from "axios";

// Next
import Link from "next/link";

// MUI
import { Grid, Paper, CircularProgress, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

// Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setContentDataApi } from "../../../redux/actions/dataActions";

// Components
import TwwInsert from "../../../components/twwapi/TwwInsert";
//import MetaDecorator from "../util/MetaDecorator";

const styles = (theme) => ({
  ...theme.spreadThis,
  root: {
    flexGrow: 1,
    paddingTop: 20,
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  paper: {
    padding: theme.spacing(2),
  },
});
// incoming props : city
const StatePage = (props) => {
  // Redux props
  const { classes } = props;
  const proppos = props.data.content;

  const { country, state, axiosCountry, axiosRegions, axiosName } = props;

  useEffect(() => {
    props.setContentDataApi({
      name: axiosName,
      country: axiosCountry,
      regions: axiosRegions,
    });
  }, []);

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item sm={12} xs={12}>
            <Typography variant="body2">
              <Link href={`/${country}`}>{country}</Link>
              {" > "}
              {proppos.name}
            </Typography>
          </Grid>
          <Grid item sm={12} xs={12}>
            <Paper className={classes.paper}>
              {!axiosRegions ? (
                <div className={classes.root}>
                  <CircularProgress />
                </div>
              ) : (
                <div>
                  <h1 style={{ marginLeft: 10 }}>
                    Links zu den Landkreisen in {proppos.name}
                  </h1>
                  {axiosRegions.map((element) => (
                    <Link
                      href={`/${country}/${state}/${element.id}`}
                      key={element.id}
                    >
                      <a
                        style={{
                          marginLeft: 10,
                          fontSize: 20,
                        }}
                      >
                        {element.name}
                        <br />
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </Paper>
          </Grid>

          <Grid item sm={12} xs={12}>
            <TwwInsert country={country} state={state} />
          </Grid>
        </Grid>
      </div>
      <div style={{ marginBottom: 200 }}></div>
    </Fragment>
  );
};

/**
 * blabla
 * @param {*} context
 */
export async function getServerSideProps(context) {
  let axiosName, axiosCountry, axiosRegions;
  const { country, state } = context.params;
  await axios
    .get(
      `https://europe-west3-codericculumdotcom.cloudfunctions.net/api/get/${country}/${state}`
    )
    .then((res) => {
      axiosName = res.data.name;
      axiosRegions = res.data.regions;
      axiosCountry = res.data.country;
      return true;
    })
    .catch((err) => {
      console.log("test [state]/index in getServerSideProps in axios.catch");
      console.error(err);
    });
  return {
    props: { country, state, axiosCountry, axiosRegions, axiosName },
  };
}

StatePage.propTypes = {
  classes: PropTypes.object.isRequired,
  setContentDataApi: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
  UI: state.UI,
});
const mapDispatchToProps = {
  setContentDataApi,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(StatePage));
