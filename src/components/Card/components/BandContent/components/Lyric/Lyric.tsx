import { ITrack } from "interfaces/album";
import styles from "./Lyric.module.scss";
import { AnimatePresence, motion } from "framer-motion";

interface props {
  selectedTrack: null | undefined | ITrack;
  show: boolean;
}

const Lyric = ({ selectedTrack, show }: props) => (
  <AnimatePresence>
    {show && (
      <motion.div
        key="lyric"
        className={styles.animatedContainer}
        initial={{ y: 600 }}
        animate={{ y: 0 }}
        exit={{ y: 600 }}
        transition={{ type: "tween" }}
      >
        <h4>{selectedTrack?.name} lyrics</h4>
        <div className={styles.lyrics}>{selectedTrack?.lyric}</div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Lyric;
