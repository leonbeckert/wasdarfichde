import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import axios from "axios";
import "../styles/globals.css";

// MUI
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// Components
import Head from "next/head";
import theme from "../theme/theme";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";

// Navbars
import NavBar from "../components/navbars/NavBar";
import BottomNavBar from "../components/navbars/BottomNavBar";
import BottomHomeNavBar from "../components/navbars/BottomHomeNavBar";

axios.defaults.baseURL =
  // "http://localhost:5000/codericculumdotcom/europe-west3/api";
  "https://europe-west3-codericculumdotcom.cloudfunctions.net/api";

// eslint-disable-next-line require-jsdoc
export default function WasDarfIchApp(props) {
  const { Component, pageProps } = props;

  const store = useStore(pageProps.initialReduxState);
  const router = useRouter();
  //const [isSignedIn, setIsSignedIn] = useState(false);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Provider store={store}>
        <Head>
          <title>Was darf ich?</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <NavBar />
          <CssBaseline />

          <Component {...pageProps} />
          {/* {isSignedIn ? <UserNavBar /> : <NavBar />} */}
          <div className="container">
            {router.pathname === "/" ? <BottomHomeNavBar /> : <BottomNavBar />}
          </div>
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

// eslint-disable-next-line require-jsdoc
export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

WasDarfIchApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
