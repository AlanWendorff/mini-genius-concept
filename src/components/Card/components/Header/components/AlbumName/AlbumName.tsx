import { motion } from "framer-motion";
import styles from "../Texts.module.scss";
import IAlbum from "interfaces/album";

interface props {
  selectedAlbum: null | undefined | IAlbum;
}

const AlbumName = ({ selectedAlbum }: props) => (
  <div className={styles.container}>
    <motion.div
      className={styles.animatedContainer}
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ type: "tween" }}
    >
      <h1>{selectedAlbum?.name}</h1>

      <div className={styles.albumInfo}>
        <h2>{selectedAlbum?.band}</h2>
        <p>
          Released {selectedAlbum?.release_date}, {selectedAlbum?.release_year}
        </p>
      </div>
    </motion.div>
  </div>
);

export default AlbumName;
