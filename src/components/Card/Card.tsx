import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "./Card.module.scss";
import Header from "./components/Header";
import Content from "./components/BandContent/components/BandInformation";
import useChangeContent from "./useChangeContent";
import AlbumSongs from "./components/BandContent/components/AlbumSongs/AlbumSongs";
import IBands from "interfaces/band";
import BandContent from "./components/BandContent/BandContent";

const Card = ({ band }: IBands) => {
  const {
    cardStatus,
    selectedAlbum,
    selectedTrack,
    handleSelectAlbum,
    handleSelectSong,
    handleReturnMenu,
  } = useChangeContent();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);

  return (
    <motion.div
      className={styles.container}
      style={{ x, y, rotateX, rotateY, z: 1000 }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.16}
      whileTap={{ cursor: "grabbing" }}
    >
      <Header
        cardStatus={cardStatus}
        selectedBand={band}
        selectedAlbum={selectedAlbum}
        selectedTrack={selectedTrack}
        handleReturnMenu={handleReturnMenu}
      />

      <BandContent
        cardStatus={cardStatus}
        selectedBand={band}
        selectedAlbum={selectedAlbum}
        selectedTrack={selectedTrack}
        handleSelectAlbum={handleSelectAlbum}
        handleSelectSong={handleSelectSong}
      />
    </motion.div>
  );
};

export default Card;
