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
import { setContentDataApi } from "../../redux/actions/dataActions";

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

// Incoming props : city
const CountryPage = (props) => {
  // Redux props
  const { classes } = props;
  const proppos = props.data.content;

  const { axiosName, axiosStates, country } = props;
  useEffect(() => {
    props.setContentDataApi({
      name: axiosName,
      states: axiosStates,
    });
  }, []);

  //const title = "wasdarfich.de – " + proppos.name;
  //const description = "Corona-Regeln in " + proppos.name;

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item sm={12} xs={12}>
            <Typography variant="body2">{proppos.name}</Typography>
          </Grid>
          <Grid item sm={12} xs={12}>
            <Paper className={classes.paper}>
              <h1 style={{ marginLeft: 10 }}>
                Links zu den Bundesländern in {proppos.name}
              </h1>
              {axiosStates ? (
                axiosStates.map((element) => (
                  <Link href={`/${country}/${element.id}`} key={element.id}>
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
                ))
              ) : (
                <div className={classes.root}>
                  <CircularProgress />
                </div>
              )}
            </Paper>
          </Grid>
          <Grid item sm={12} xs={12}></Grid>
        </Grid>
      </div>
      <div style={{ marginBottom: 200 }}></div>
    </Fragment>
  );
};

/**
 * blabla
 * @param {context} context
 */
export async function getServerSideProps(context) {
  let axiosName, axiosStates;
  const { country } = context.params;
  await axios
    .get(`/api/get/${country}`)
    .then((res) => {
      axiosName = res.data.name;
      axiosStates = res.data.states;
      return true;
    })
    .catch((err) => {
      console.error(err);
    });

  return {
    props: { axiosName, axiosStates, country }, // will be passed to the page component as props
  };
}

CountryPage.propTypes = {
  classes: PropTypes.object.isRequired,
  setContentDataApi: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
});

const mapDispatchToProps = {
  setContentDataApi,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CountryPage));
