import "../styles/globals.css";
import createEmotionCache from "../styles/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from "../components/Header";

import "/styles/globals.css";
import theme from "../styles/theme";
import Footer from "@components/Footer";
import { useEffect } from "react";
import { pageview } from "/lib/gtag";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    router,
  } = props;

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url, document.title);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

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
