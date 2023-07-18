import { motion, useMotionValue, useTransform } from "framer-motion";
import IMAGE from "../../assets/images/dvsr-logo.jpg";
import styles from "./Card.module.scss";
import ALBUMS from "./data";

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
      <div className={styles.info}>
        <motion.img
          style={{ x, y, rotateX, rotateY, z: 10000 }}
          className={styles.image}
          src={IMAGE}
          alt=""
        />
        <h1>DVSR</h1>
        <p className={styles.subtitle}>
          AKA: Designed via Strength & Respect, Devastator
        </p>
      </div>

      <div className={styles.bandInfo}>
        <div className={styles.about}>
          <h3>About “DVSR“</h3>

          <p>
            <span>DVSR</span> are a fusion of Rap/Hip Hop and Metal. Combing
            these two styles to create one of its own.
          </p>
        </div>

        <div className={styles.albums}>
          <h3>POPULAR DVSR ALBUMS</h3>
          <div className={styles.grid}>
            {ALBUMS.map(({ id, image, name, release_year }) => (
              <div key={id} className={styles.album}>
                <img src={image} alt={name} />
                <div>
                  <p>{name}</p>
                  <p className={styles.year}>{release_year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
