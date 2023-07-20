import { motion } from "framer-motion";
import styles from "../Texts.module.scss";

interface props {
  title: string;
  bandAka: string;
}

const BandName = ({ title, bandAka }: props) => (
  <div className={styles.container}>
    <motion.div
      className={styles.animatedContainer}
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ type: "tween" }}
    >
      <h1>{title}</h1>
      <p className={styles.bandAka}>{bandAka}</p>
    </motion.div>
  </div>
);

export default BandName;
