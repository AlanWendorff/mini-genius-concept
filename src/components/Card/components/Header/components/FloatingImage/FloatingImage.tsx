import { AnimatePresence, MotionValue, motion } from "framer-motion";
import styles from "./FloatingImage.module.scss";

interface props {
  x: MotionValue<number>;
  y: MotionValue<number>;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  show: boolean;
  image: string;
  key: string;
}

const FloatingImage = ({ x, y, rotateX, rotateY, show, image, key }: props) => (
  <AnimatePresence>
    {show && (
      <motion.img
        key={key}
        className={styles.floatingImage}
        style={{
          x,
          y,
          rotateX,
          rotateY,
          z: 10000,
          zIndex: 10000,
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        draggable={false}
        src={image}
        alt={key}
      />
    )}
  </AnimatePresence>
);

export default FloatingImage;
