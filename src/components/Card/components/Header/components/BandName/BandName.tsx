import { AnimatePresence, motion } from "framer-motion";
import styles from "../Texts.module.scss";

interface props {
  show: boolean;
  title: string;
  bandAka: string;
  key: string;
}

const BandName = ({ show, title, bandAka, key }: props) => (
  <AnimatePresence>
    {show && (
      <motion.div
        key={key}
        className={styles.animatedContainer}
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ type: "tween" }}
      >
        <h1>{title}</h1>
        <p className={styles.bandAka}>{bandAka}</p>
      </motion.div>
    )}
  </AnimatePresence>
);

export default BandName;
