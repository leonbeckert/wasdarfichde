import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Link from "next/link";
import firebase from "firebase/app";

// MUI
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  CssBaseline,
  Tooltip,
} from "@material-ui/core";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import { AccountCircle } from "@material-ui/icons";

// Components
//import LogoSVG from "./img/LogoSVG";
//import CustomButton from "../../util/CustomButton";
//import Feedback from "../feedback/Feedback";

// CSS import and additional configuration
const styles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    "position": "relative",
    "borderRadius": theme.shape.borderRadius,
    "backgroundColor": fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    "marginRight": theme.spacing(2),
    "marginLeft": 0,
    "width": "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

/**
 * UserNavBar shows up when user is logged in
 */
function UserNavBar() {
  const classes = styles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (e) => {
    setMobileMoreAnchorEl(e.currentTarget);
  };

  const handleLogout = () => {
    firebase.auth().signOut();
    handleMenuClose();
    //alert("Logged out.");
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogout}>Ausloggen</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleLogout}>Ausloggen</MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton> */}
            <Link href="/">
              <a style={{ marginRight: 20 }}>
                {/* <CustomButton tip="Homepage">
                                <LogoSVG />
                            </CustomButton> */}
              </a>
            </Link>
            <Typography className={classes.title} variant="h6" noWrap>
              <Link href="/">
                <a style={{ color: "white" }}>Was darf ich?</a>
              </Link>
            </Typography>
            {/* <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ "aria-label": "search" }}
                            />
                        </div> */}
            <div className={classes.grow} />
            {/* <Feedback /> */}
            <div className={classes.sectionDesktop}>
              {/* <IconButton
                                aria-label="show 3 new mails"
                                color="inherit"
                            >
                                <Badge badgeContent={3} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                aria-label="show 4 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton> */}
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Tooltip title="Account">
                  <AccountCircle />
                </Tooltip>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <Tooltip title="Account">
                  {/* <MoreIcon /> */}

                  <AccountCircle />
                </Tooltip>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </React.Fragment>
  );
}

UserNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(UserNavBar));
