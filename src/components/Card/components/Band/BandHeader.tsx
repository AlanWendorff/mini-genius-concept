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
      draggable={false}
      style={{ x, y, rotateX, rotateY, z: 10000 }}
      className={styles.image}
      src={image}
      alt="header image"
    />
    <h1>{title}</h1>
    <p className={styles.subtitle}>{subtitle}</p>
  </div>
);

export default BandHeader;
