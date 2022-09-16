import type { AppProps } from "next/app";
import Head from "next/head";
import NavBar from "@components/Ui/NavBar";

import "@styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Next Match.ez</title>
    </Head>
    <Component {...pageProps} />
    <NavBar />
  </>
);

export default MyApp;
