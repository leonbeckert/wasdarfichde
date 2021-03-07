import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// MUI
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

// Redux
import { connect } from "react-redux";
import { setContentDataApi } from "../../../../redux/actions/dataActions";

// Next
import Link from "next/link";

// Components
import CityAddComponent from "../../../../components/cityadd/CityAddComponent";
import TwwInsert from "../../../../components/twwapi/TwwInsert";
import RkiInsert from "../../../../components/rkiapi/RkiInsert";
import MetaDecorator from "../../../../util/MetaDecorator";

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
const RegionPage = (props) => {
  const { classes } = props;

  const {
    country,
    state,
    region,
    axiosCountry,
    axiosState,
    axiosName,
    axiosCountryId,
    axiosStateId,
    axiosSelfId,
    axiosCities,
  } = props;

  const proppos = props.data.content;

  useEffect(() => {
    props.setContentDataApi({
      country: axiosCountry,
      state: axiosState,
      name: axiosName,
      countryId: axiosCountryId,
      stateId: axiosStateId,
      selfId: axiosSelfId,
      cities: axiosCities,
    });
  }, []);

  const title = "wasdarfich.de – " + proppos.region + ", " + proppos.state;
  const description =
    "Lokale Corona-Regeln in " +
    proppos.name +
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
              <Grid item sm={12} xs={12}>
                <Accordion
                  TransitionProps={{ unmountOnExit: true }}
                  style={{ maxWidth: "100%" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <span className={classes.dot} style={{}}></span>
                    <Typography className={classes.heading}>
                      Links zu den Gemeinden in {proppos.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={3}>
                      <Grid item sm={12} xs={12}>
                        {
                          <div>
                            {axiosCities ? (
                              axiosCities.map((element) => (
                                <Fragment>
                                  <Link
                                    style={{
                                      marginLeft: 10,
                                    }}
                                    href={`/${country}/${state}/${region}/${element.id}`}
                                    key={element.id}
                                  >
                                    {element.name}
                                  </Link>
                                  <br />
                                </Fragment>
                              ))
                            ) : (
                              <div>Loading...</div>
                            )}
                          </div>
                        }
                      </Grid>
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
                        <CityAddComponent />
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <br />
            </Grid>
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
  const { country, state, region } = context.params;
  let axiosCountry,
    axiosState,
    axiosName,
    axiosCountryId,
    axiosStateId,
    axiosSelfId,
    axiosCities;
  await axios
    .get(
      `https://europe-west3-codericculumdotcom.cloudfunctions.net/api/get/${country}/${state}/${region}`
    )
    .then((res) => {
      axiosCountry = res.data.country;
      axiosState = res.data.state;
      axiosName = res.data.name;
      axiosCountryId = res.data.countryId;
      axiosStateId = res.data.stateId;
      axiosSelfId = res.data.selfId;
      axiosCities = res.data.cities;
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
      axiosCountry,
      axiosState,
      axiosName,
      axiosCountryId,
      axiosStateId,
      axiosSelfId,
      axiosCities,
    }, // will be passed to the page component as props
  };
}
RegionPage.propTypes = {
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
)(withStyles(styles)(RegionPage));
