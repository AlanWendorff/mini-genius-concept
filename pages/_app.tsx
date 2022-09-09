import type { AppProps } from "next/app";
import NavBar from "../components/ui/nav-bar";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <NavBar />
  </>
);

export default MyApp;
