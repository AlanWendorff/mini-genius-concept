import { motion, AnimatePresence } from "framer-motion";
import styles from "../Texts.module.scss";

interface props {
  title: string;
  subtitle: string;
  show: boolean;
}

const BandName = ({ title, subtitle, show }: props) => (
  <div className={styles.container}>
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.animatedContainer}
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ type: "tween" }}
        >
          <h1>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default BandName;
