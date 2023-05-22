import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import "./global.css";

export default function MyApp(props: any) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const muiTheme = createTheme({
    palette: {
      mode: "light",
      secondary: { dark: "rgba(28,28,28,1)", main: "rgba(52,52,52,1)" },
      primary: {
        dark: "rgba(132,132,132,1)",
        main: "rgba(28,28,28,1)",
        contrastText: "rgba(0,0,0,1)",
      },
    },
    typography: { fontFamily: "THICCCBOI", fontSize: 16 },
    shape: { borderRadius: 6 },
  });

  return (
    <>
      <Head>
        <title>ThirdR main site</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <title>Best Creative Website Agency in India -ThirdR.in</title>
        <link rel="icon" href="/thirdrlogo.ico" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={muiTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
