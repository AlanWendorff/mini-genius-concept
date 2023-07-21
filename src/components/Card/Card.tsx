import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "./Card.module.scss";
import Header from "./components/Header";
import useChangeContent from "./useChangeContent";
import IBands from "interfaces/band";
import BandContent from "./components/BandContent";

const Card = ({ band }: IBands) => {
  const {
    cardStatus,
    selectedAlbum,
    selectedTrack,
    handleSelectAlbum,
    handleSelectSong,
    handleReturnMenu,
    handleReturnAlbum,
  } = useChangeContent();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [100, -100], [-30, 30]);

  return (
    <motion.div
      className={styles.container}
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.18}
      whileTap={{ cursor: "grabbing" }}
    >
      <Header
        x={x}
        y={y}
        rotateX={rotateX}
        rotateY={rotateY}
        cardStatus={cardStatus}
        selectedBand={band}
        selectedAlbum={selectedAlbum}
        selectedTrack={selectedTrack}
        handleReturnMenu={handleReturnMenu}
        handleReturnAlbum={handleReturnAlbum}
      />

      {/*  <motion.div
        style={{ x: x, y: y, translateZ: 10, zIndex: 10 }}
        className={styles.shadow}
      ></motion.div> */}

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
