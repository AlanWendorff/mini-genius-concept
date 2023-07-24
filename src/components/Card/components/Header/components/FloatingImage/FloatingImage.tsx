import { AnimatePresence, MotionValue, motion } from "framer-motion";
import styles from "./FloatingImage.module.scss";

interface props {
  x: MotionValue<number>;
  y: MotionValue<number>;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  show: boolean;
  image: string;
  alt: string;
}

const FloatingImage = ({ x, y, rotateX, rotateY, show, image, alt }: props) => (
  <AnimatePresence>
    {show && (
      <motion.img
        key="floating-image"
        className={styles.floatingImage}
        style={{
          x,
          y,
          rotateX,
          rotateY,
          z: 10_000,
          zIndex: 10_000,
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        draggable={false}
        src={image}
        alt={alt}
      />
    )}
  </AnimatePresence>
);

export default FloatingImage;
