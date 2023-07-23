import { AnimatePresence, motion } from "framer-motion";
import styles from "../Texts.module.scss";
import IAlbum from "interfaces/album";

interface props {
  show: boolean;
  selectedAlbum: null | undefined | IAlbum;
  handleReturnMenu: () => void;
}

const AlbumName = ({ show, selectedAlbum, handleReturnMenu }: props) => (
  <AnimatePresence>
    {show && (
      <motion.div
        key="album-name"
        className={styles.animatedContainer}
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ type: "tween" }}
      >
        <h1>{selectedAlbum?.name}</h1>

        <div className={styles.albumInfo}>
          <a onClick={handleReturnMenu} role="button" aria-label="back to band">
            <p>{selectedAlbum?.band}&nbsp;&nbsp;&nbsp;</p>
            <svg viewBox="0 0 6.6 16">
              <path d="M1.6 8.8l.6-.6 1 1 .5.7V6H0v-.8h4.5v4.6l.5-.6 1-1 .6.5L4 11.3 1.6 8.8z"></path>
            </svg>
          </a>
          <p>
            Released {selectedAlbum?.release_date},{" "}
            {selectedAlbum?.release_year}
          </p>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default AlbumName;
