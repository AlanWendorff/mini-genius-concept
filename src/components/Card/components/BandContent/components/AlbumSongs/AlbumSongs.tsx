import { AnimatePresence, motion } from "framer-motion";
import styles from "./AlbumSongs.module.scss";
import IAlbum from "interfaces/album";

interface props {
  selectedAlbum: null | undefined | IAlbum;
  show: boolean;
}

const AlbumSongs = ({ show, selectedAlbum }: props) => (
  <AnimatePresence>
    {show && (
      <div className={styles.absoluteContainer}>
        <h2 className={styles.title}>{selectedAlbum?.name} TRACKLIST</h2>

        <motion.ul
          className={styles.tracklist}
          initial={{ x: 450 }}
          animate={{ x: 0 }}
          exit={{ x: 450 }}
          transition={{ type: "tween" }}
        >
          {selectedAlbum?.tracklist.map((song, index) => (
            <li key={index}>
              <p>
                <span>{index + 1}</span>
                {song.name}
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    )}
  </AnimatePresence>
);

export default AlbumSongs;
