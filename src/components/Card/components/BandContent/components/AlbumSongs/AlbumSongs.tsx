import { motion } from "framer-motion";
import styles from "./AlbumSongs.module.scss";
import IAlbum from "interfaces/album";

interface props {
  selectedAlbum: null | undefined | IAlbum;
}

const AlbumSongs = ({ selectedAlbum }: props) => (
  <>
    <h2 className={styles.title}>{selectedAlbum?.name} TRACKLIST</h2>

    <motion.ul
      className={styles.tracklist}
      initial={{ x: 450 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
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
  </>
);

export default AlbumSongs;
