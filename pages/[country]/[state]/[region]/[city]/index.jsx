import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Link from "next/link";

// MUI
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

// Redux
import { connect } from "react-redux";
import MetaDecorator from "../../../../../util/MetaDecorator";
import {
  setContentDataApi,
  setContentDataQAndA,
} from "../../../../../redux/actions/dataActions";

// Components
import TwwInsert from "../../../../../components/twwapi/TwwInsert";
import RkiInsert from "../../../../../components/rkiapi/RkiInsert";
import AddQuestion from "../../../../../components/qanda/AddQuestion";
import Question from "../../../../../components/qanda/Question";

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
  paper: {
    padding: theme.spacing(2),
  },
});

// incoming props : city
const CityPage = (props) => {
  const { classes } = props;

  const {
    country,
    state,
    region,
    city,
    axiosQuestions,
    axiosAnswers,
    axiosSources,
    axiosName,
    axiosRegion,
    axiosState,
    axiosCountry,
  } = props;

  let questions = [];
  let i;
  let questionsMarkup;
  if (props.data.content.questions) {
    for (i = 0; i < props.data.content.questions.length; i++) {
      questions.push(props.data.content.questions[i]);
    }

    questionsMarkup = questions.map((question) => {
      return (
        // <li key={question.questionId}>
        <Question key={question.questionId} questionId={question.questionId} />
        // </li>
      );
    });
  }

  const proppos = props.data.content;

  useEffect(() => {
    props.setContentDataQAndA({
      questions: axiosQuestions,
      answers: axiosAnswers,
      sources: axiosSources,
      countryId: country,
      stateId: state,
      regionId: region,
      cityId: city,
    });

    props.setContentDataApi({
      name: axiosName,
      region: axiosRegion,
      state: axiosState,
      country: axiosCountry,
    });
  }, []);

  const title = "wasdarfich.de – " + proppos.name + ", " + proppos.region;
  const description =
    "Lokale Corona-Regeln in " +
    proppos.name +
    ", " +
    proppos.region +
    ", " +
    proppos.state +
    ", " +
    proppos.country;

  return (
    <Fragment>
      <MetaDecorator title={title} description={description} />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item sm={12} xs={12}>
            <Grid container spacing={3}>
              <Grid item sm={12} xs={12}>
                <Typography variant="body2">
                  <Link href={`/${country}`}>{country}</Link>
                  {" > "}
                  <Link href={`/${country}/${state}`}>{state}</Link>
                  {" > "}
                  <Link href={`/${country}/${state}/${region}`}>{region}</Link>
                  {" > "}
                  {proppos.name}
                </Typography>
                <h1 style={{ marginLeft: 10 }}>
                  Coronaregeln in {proppos.name}
                </h1>
                <h3
                  style={{
                    color: "rgb(90, 90, 90)",
                    marginLeft: 10,
                  }}
                >
                  Inzidenzwert, Beschränkungen und mehr
                </h3>
                <RkiInsert country={country} state={state} region={region} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} xs={12}>
            <h2 style={{ marginLeft: 20 }}>Fragen und Antworten</h2>
            <h5 style={{ marginLeft: 20 }}>
              Bei unangemessenen Inhalten, groben Falschinformationen oder
              Beleidigungen bitte melden!
            </h5>
            {questionsMarkup}
            <br />
            <AddQuestion />
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
export async function getServerSideProps(context) {
  let axiosQuestions,
    axiosAnswers,
    axiosSources,
    axiosName,
    axiosRegion,
    axiosState,
    axiosCountry;
  const { country, state, region, city } = context.params;
  await axios
    .get(`/get/${country}/${state}/${region}/${city}`)
    .then((res) => {
      axiosQuestions = res.data.questions;
      axiosAnswers = res.data.answers;
      axiosSources = res.data.sources;
      axiosAnswers = res.data.answers;
      axiosName = res.data.name;
      axiosRegion = res.data.region;
      axiosState = res.data.state;
      axiosCountry = res.data.country;
      return true;
    })
    .catch((err) => {
      console.error(err);
    });

  return {
    props: {
      country,
      state,
      region,
      city,
      axiosQuestions,
      axiosAnswers,
      axiosSources,
      axiosName,
      axiosRegion,
      axiosState,
      axiosCountry,
    }, // will be passed to the page component as props
  };
}
CityPage.propTypes = {
  classes: PropTypes.object.isRequired,
  setContentDataApi: PropTypes.func.isRequired,
  setContentDataQAndA: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
});
const mapDispatchToProps = {
  setContentDataApi,
  setContentDataQAndA,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CityPage));
