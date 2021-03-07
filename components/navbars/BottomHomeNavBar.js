import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

// MUI
import { AppBar, CssBaseline, Toolbar, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

// CSS import and additional configuration
const styles = (theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    //paddingBottom: 20,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  links: {
    position: "absolute",
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  containers: {
    paddingTop: 40,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

/**
 * Displays a NavBar on the bottom of the homepage
 * @param {classes} props
 */
const BottomHomeNavBar = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Toolbar className={classes.links}>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <Link href="/static/impressum">
                  <a className="link"> Impressum </a>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/static/datenschutz">
                  <a className="link"> Datenschutz </a>
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

BottomHomeNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomHomeNavBar);
