import "../styles/globals.css";
import createEmotionCache from "../styles/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from "../components/Header";

import "/styles/globals.css";
import theme from "../styles/theme";
import Footer from "@components/Footer";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <head>
        <title>Personal Website</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}
