import { motion, useMotionValue, useTransform } from "framer-motion";
import IMAGE from "../../assets/images/dvsr-logo.jpg";
import styles from "./Card.module.scss";
import BandHeader from "./components/BandHeader/BandHeader";
import BandInfo from "./components/BandInfo/BandInfo";
import useChangeContent from "./useChangeContent";
import AlbumSongs from "./components/AlbumSongs/AlbumSongs";

const Card = () => {
  const { album, handleAlbum, handleMenu } = useChangeContent();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);

  const variants = {
    default: {
      translateX: 0,
      rotateZ: 0,
    },
  };

  return (
    <motion.div
      className={styles.container}
      style={{ x, y, rotateX, rotateY, z: 1000 }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.16}
      whileTap={{ cursor: "grabbing" }}
    >
      <BandHeader
        album={album}
        handleMenu={handleMenu}
        title="DVSR"
        subtitle="AKA: Designed via Strength & Respect, Devastator"
        x={x}
        y={y}
        rotateX={rotateX}
        rotateY={rotateY}
        image={IMAGE}
      />
      {album ? (
        <AlbumSongs album={album} />
      ) : (
        <BandInfo handleAlbum={handleAlbum} />
      )}
    </motion.div>
  );
};

export default Card;
