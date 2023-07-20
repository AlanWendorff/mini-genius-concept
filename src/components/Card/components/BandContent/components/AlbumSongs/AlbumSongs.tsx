import { AnimatePresence, motion } from "framer-motion";
import styles from "./AlbumSongs.module.scss";
import IAlbum from "interfaces/album";

interface props {
  selectedAlbum: null | undefined | IAlbum;
  show: boolean;
  handleSelectSong: (songName: string) => void;
}

const AlbumSongs = ({ show, selectedAlbum, handleSelectSong }: props) => (
  <AnimatePresence>
    {show && (
      <div className={styles.absoluteContainer}>
        <motion.h2
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: -50 }}
          className={styles.title}
        >
          {selectedAlbum?.name} TRACKLIST
        </motion.h2>

        <motion.ul
          className={styles.tracklist}
          initial={{ x: 450 }}
          animate={{ x: 0 }}
          exit={{ x: 450 }}
          transition={{ type: "tween" }}
        >
          {selectedAlbum?.tracklist.map((song, index) => (
            <li className={styles.track} key={index}>
              <button onClick={() => handleSelectSong(song.name)}>
                <p>
                  <span>{index + 1}</span>
                  {song.name}
                </p>
              </button>
            </li>
          ))}
        </motion.ul>
      </div>
    )}
  </AnimatePresence>
);

export default AlbumSongs;
