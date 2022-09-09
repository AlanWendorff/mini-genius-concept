import type { NextPage } from "next";
import Image from "next/image";
import HistoryIcon from "mdi-react/HistoryIcon";
import logo from "../../../assets/images/9z-logo.webp";
import styles from "./top-bar.module.scss";

const index: NextPage = () => (
  <div className={styles.container}>
    <button className={styles.on}>
      <Image src={logo} width={30} height={30} placeholder="blur" />
    </button>
    <button className={styles.on}>
      <h2>VS</h2>
    </button>
    <button className={styles.on}>
      <HistoryIcon size={"30px"} />
    </button>
  </div>
);

export default index;
