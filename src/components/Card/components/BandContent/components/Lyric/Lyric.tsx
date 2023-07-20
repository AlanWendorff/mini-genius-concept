import styles from "./Lyric.module.scss";
import { AnimatePresence, motion } from "framer-motion";

interface props {
  show: boolean;
}

const Lyric = ({ show }: props) => {
  return (
    <AnimatePresence>
      {show && (
        <div className={styles.absoluteContainer}>
          <motion.div
            className={styles.about}
            initial={{ x: -480 }}
            animate={{ x: 0 }}
            exit={{ x: -480 }}
            transition={{ type: "tween" }}
          >
            Lyrics
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default Lyric;
