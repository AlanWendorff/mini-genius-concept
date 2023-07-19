import { motion } from "framer-motion";
import styles from "./AlbumSongs.module.scss";
import IAlbum from "interfaces/album";

interface props {
  album: null | undefined | IAlbum;
}

const AlbumSongs = ({ album }: props) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{album?.name} TRACKLIST</h2>

    <motion.ul
      initial={{ x: 450 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ type: "tween" }}
    >
      {album?.tracklist.map((song, index) => (
        <li key={index}>
          <p>
            <span>{index + 1}</span>
            {song.name}
          </p>
        </li>
      ))}
    </motion.ul>
  </div>
);

export default AlbumSongs;
