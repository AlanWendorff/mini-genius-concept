import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import styles from "./FloatingImage.module.scss";

interface props {
  show: boolean;
  image: string;
  key: string;
}

const FloatingImage = ({ show, image, key }: props) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);

  return (
    <AnimatePresence>
      {show && (
        <motion.img
          key={key}
          className={styles.floatingImage}
          style={{ x, y, rotateX, rotateY, z: 1000 }}
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
};
export default FloatingImage;
