import { motion, AnimatePresence } from "framer-motion";
import styles from "../Texts.module.scss";
import { ITrack } from "interfaces/album";

interface props {
  index: number;
  song: null | undefined | ITrack;
  show: boolean;
}

const SongName = ({ index, song, show }: props) => (
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
          <h1>{song?.name}</h1>

          <div className={styles.songInfo}>
            <p>
              {song?.band} • Track {index} on {song?.album}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default SongName;
