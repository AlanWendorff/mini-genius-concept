import { MotionValue, motion } from "framer-motion";
import styles from "./BandHeader.module.scss";

interface props {
  x: MotionValue<number>;
  y: MotionValue<number>;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  title: string;
  subtitle: string;
  image: string;
}

const BandHeader = ({
  x,
  y,
  rotateX,
  rotateY,
  title,
  subtitle,
  image,
}: props) => (
  <div className={styles.container}>
    <motion.img
      className={styles.image}
      style={{ x, y, rotateX, rotateY, z: 10000 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      draggable={false}
      src={image}
      alt="header image"
    />
    <div className={styles.bandName}>
      <motion.h1
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "tween" }}
      >
        {title}
      </motion.h1>
      <motion.p
        className={styles.subtitle}
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "tween" }}
      >
        {subtitle}
      </motion.p>
    </div>
  </div>
);

export default BandHeader;
