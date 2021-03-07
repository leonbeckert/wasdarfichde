import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#35baf6",
      main: "#03a9f4",
      dark: "#0276aa",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffef62",
      main: "#ffeb3b",
      dark: "#b2a429",
      contrastText: "#000",
    },
  },
  spreadThis: {
    title: {
      flexGrow: 1,
      textAlign: "center",
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: 10,
    },
    bottomAppBar: {
      top: "auto",
      bottom: 0,
    },
    form: {
      textAlign: "center",
    },
    image: {
      margin: "20px auto 20px auto",
    },
    pageTitle: {
      margin: "10px auto 10px auto",
    },
    textField: {
      margin: "10px auto 10px auto",
    },
    searchField: {
      margin: "10px auto 10px auto",
    },
    button: {
      marginTop: 20,
      position: "relative",
    },
    progress: {
      position: "absolute",
    },
    submitButton: {
      position: "relative",
      textAlign: "center",
    },
  },
});

theme.overrides = {};
export default theme;
