import { motion } from "framer-motion";
import styles from "./AlbumSongs.module.scss";
import TAlbum from "../../../../types/album";

interface props {
  album: null | undefined | TAlbum;
}

const AlbumSongs = ({ album }: props) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{album?.name} TRACKLIST</h2>

    <ul>
      {album?.tracklist.map((song, index) => (
        <li key={index}>
          <p>
            <span>{index + 1}</span>
            {song}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default AlbumSongs;
