import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

// Pages
import AGB from "../pages/static/AGB";
import Impressum from "../pages/static/Impressum";
import Datenschutz from "../pages/static/Datenschutz";
import Home from "../pages/Home";
import CityPage from "../pages/CityPage";
import NewContentPage from "../pages/NewContentPage";
import RegionPage from "../pages/RegionPage";
import StatePage from "../pages/StatePage";
import CountryPage from "../pages/CountryPage";
import NotFound from "../pages/static/NotFound";

export const BrowserRouterLinks = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/agb" component={AGB} />
        <Route exact path="/datenschutz" component={Datenschutz} />
        <Route exact path="/impressum" component={Impressum} />
        {/* <Route exact path="/Login" component={Login} /> */}
        <Route
          exact
          path="/:country/:state/:region/:city/new"
          component={NewContentPage}
        />
        <Route
          exact
          path="/:country/:state/:region/:city"
          component={CityPage}
        />
        <Route exact path="/:country/:state/:region" component={RegionPage} />

        <Route exact path="/:country/:state" component={StatePage} />
        <Route exact path="/:country" component={CountryPage} />
        <Redirect from="/login" to="/" />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
};

BrowserRouterLinks.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BrowserRouterLinks);
