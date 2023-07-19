import { motion, AnimatePresence } from "framer-motion";
import styles from "../Texts.module.scss";
import IAlbum from "interfaces/album";

interface props {
  album: null | undefined | IAlbum;
  show: boolean;
}

const AlbumName = ({ album, show }: props) => (
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
          <h1>{album?.name}</h1>

          <div className={styles.albumInfo}>
            <h2>{album?.band}</h2>
            <p>
              Released {album?.release_date}, {album?.release_year}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default AlbumName;
