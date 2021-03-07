import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

// MUI
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Grid,
  Fab,
  Tooltip,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Search } from "@material-ui/icons";

// CSS import and additional configuration
const styles = (theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
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
    top: 10,
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
 * Displays NavBar with back-to-search button on pages other than the homepage
 */
const BottomNavBar = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Link href="/">
            <Tooltip title="Search">
              <Fab
                color="secondary"
                aria-label="add"
                className={classes.fabButton}
              >
                <Search />
              </Fab>
            </Tooltip>
          </Link>
          <Toolbar className={classes.links}>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <Link href="/static/impressum">
                  <a className="link"> Impressum </a>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/static/agb">
                  <a className="link"> AGB </a>
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

BottomNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNavBar);
