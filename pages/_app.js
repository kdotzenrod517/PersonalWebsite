import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import createEmotionCache from "../styles/createEmotionCache";
import theme from "../styles/theme";
import Header from "../components/Header";
import Footer from "@components/Footer";
import SparkleCursor from "@components/SparkleCursor";
import { pageview } from "/lib/gtag";

const clientSideEmotionCache = createEmotionCache();

const SITE_TITLE = "Krista Dotzenrod — Backend Engineer";
const SITE_DESCRIPTION =
  "Backend engineer with ~7 years building scalable services, data pipelines, and AI-augmented platforms — Spotify, Target, and ad tech.";

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
  }, [router.events]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SparkleCursor />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}
