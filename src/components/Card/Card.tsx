import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "./Card.module.scss";
import Header from "./components/Header";
import Content from "./components/Content";
import useChangeContent from "./useChangeContent";
import AlbumSongs from "./components/AlbumSongs/AlbumSongs";
import IBand from "interfaces/band";

const Card = ({ band }: IBand) => {
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
      <Header
        album={album}
        handleMenu={handleMenu}
        title="DVSR"
        subtitle="AKA: Designed via Strength & Respect, Devastator"
        image={band.band_image}
      />
      {album ? (
        <AlbumSongs album={album} />
      ) : (
        <Content handleAlbum={handleAlbum} />
      )}
    </motion.div>
  );
};

export default Card;
