import { MotionValue, motion } from "framer-motion";
import styles from "./BandHeader.module.scss";
import TAlbum from "../../../../types/album";

interface props {
  album: null | undefined | TAlbum;
  x: MotionValue<number>;
  y: MotionValue<number>;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  title: string;
  subtitle: string;
  image: string;
  handleMenu: () => void;
}

const BandHeader = ({
  album,
  x,
  y,
  rotateX,
  rotateY,
  title,
  subtitle,
  image,
  handleMenu,
}: props) => {
  const backgroundColor = album
    ? `linear-gradient(${album.colors.primary}, ${album.colors.secondary})`
    : `linear-gradient(#8e2a29, #6f2929)`;

  const arrowColor = album ? album.colors.secondary : "#6f2929";

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: backgroundColor }}
    >
      <div className={styles.arrow} style={{ borderTopColor: arrowColor }} />
      <motion.img
        className={styles.image}
        style={{ x, y, rotateX, rotateY, z: 10000 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        draggable={false}
        src={album ? album.image : image}
        alt="header image"
      />
      <div className={styles.bandName}>
        <motion.h1
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ type: "tween" }}
        >
          {album ? album.name : title}
        </motion.h1>
        {album ? (
          <div className={styles.albumInfo}>
            <h2 onClick={handleMenu}>
              {/*   <svg
                className={styles.goBack}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10.87 21.32"
              >
                <path d="M1.5 21.32L0 20l8.21-9.34L0 1.32 1.5 0l9.37 10.66L1.5 21.32"></path>
              </svg> */}
              {album.band}
            </h2>
            <p>
              Released {album.release_date}, {album.release_year}
            </p>
          </div>
        ) : (
          <motion.p
            className={styles.subtitle}
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ type: "tween" }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default BandHeader;
