import { motion, AnimatePresence } from "framer-motion";
import styles from "../Texts.module.scss";
import { ITrack } from "interfaces/album";

interface props {
  selectedTrack: null | undefined | ITrack;
  show: boolean;
  handleReturnAlbum: () => void;
  handleReturnMenu: () => void;
}

const SongName = ({
  selectedTrack,
  show,
  handleReturnAlbum,
  handleReturnMenu,
}: props) => (
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
          <h1>{selectedTrack?.name}</h1>

          <div className={styles.songInfo}>
            <a
              onClick={handleReturnMenu}
              role="button"
              aria-label="back to band"
            >
              {selectedTrack?.band}
            </a>
            &nbsp;
            <p>• Track {selectedTrack?.id} on</p>
            &nbsp;
            <a
              onClick={handleReturnAlbum}
              role="button"
              aria-label="back to album"
            >
              <p>{selectedTrack?.album}&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <svg viewBox="0 0 6.6 16">
                <path d="M1.6 8.8l.6-.6 1 1 .5.7V6H0v-.8h4.5v4.6l.5-.6 1-1 .6.5L4 11.3 1.6 8.8z"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default SongName;
