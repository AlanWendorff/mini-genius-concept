import { ITrack } from "interfaces/album";
import styles from "./Lyric.module.scss";
import { AnimatePresence, motion } from "framer-motion";

interface props {
  selectedTrack: null | undefined | ITrack;
  show: boolean;
}

const Lyric = ({ selectedTrack, show }: props) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.animatedContainer}
          initial={{ x: -480 }}
          animate={{ x: 0 }}
          exit={{ x: -480 }}
          transition={{ type: "tween" }}
        >
          <h4>{selectedTrack?.name} lyrics</h4>
          <div className={styles.lyrics}>{selectedTrack?.lyric}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Lyric;
