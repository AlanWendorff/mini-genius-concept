import { motion, useMotionValue, useTransform } from "framer-motion";
import IMAGE from "../../assets/images/dvsr-logo.jpg";
import styles from "./Card.module.scss";
import BandHeader from "./components/Band/BandHeader";
import BandInfo from "./components/BandInfo/BandInfo";

const Card = () => {
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
        title="DVSR"
        subtitle="AKA: Designed via Strength & Respect, Devastator"
        x={x}
        y={y}
        rotateX={rotateX}
        rotateY={rotateY}
        image={IMAGE}
      />

      <BandInfo />
    </motion.div>
  );
};

export default Card;
