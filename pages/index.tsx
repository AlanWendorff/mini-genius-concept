import type { NextPage } from "next";
import TopBar from "../components/ui/top-bar";
import styles from "./index.module.scss";

const index: NextPage = () => (
  <div className={styles.mainFrame}>
    <TopBar />
  </div>
);

export default index;
