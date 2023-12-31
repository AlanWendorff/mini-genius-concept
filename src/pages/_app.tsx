import type { AppProps } from "next/app";
import Layout from "@components/Layout";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
