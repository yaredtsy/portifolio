import "/styles/globals.scss";
import "/styles/reset.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import ReactGA from "react-ga4";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.initialize("G-29SJQK0429");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
