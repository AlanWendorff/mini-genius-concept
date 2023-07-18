import styles from "./BandInfo.module.scss";
import { motion } from "framer-motion";
import ALBUMS from "./data";
import { useEffect } from "react";

const variants = {
  onImageHover: {
    scale: 0.9,
  },
};

const BandInfo = () => {
  const description =
    "DVSR are a fusion of Rap/Hip Hop and Metal. Combing these two styles to create one of its own.";

  let i = 0;
  let speed = 10;

  function typeWriter() {
    let timeout;
    if (i < description.length) {
      const elem = document.querySelector(
        "#description"
      ) as HTMLParagraphElement;

      if (elem) {
        elem.innerHTML += description.charAt(i);
      }
      i += 1;
      timeout = setTimeout(typeWriter, speed);
    } else {
      clearTimeout(timeout);
    }
  }

  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h3>About “DVSR“</h3>

        <p id="description">
          {/* <span>DVSR</span> are a fusion of Rap/Hip Hop and Metal. Combing these
          two styles to create one of its own. */}
        </p>
      </div>

      <div className={styles.albums}>
        <h3>POPULAR DVSR ALBUMS</h3>
        <div className={styles.grid}>
          {ALBUMS.map(({ id, image, name, release_year }) => (
            <motion.div
              key={id}
              className={styles.album}
              whileHover="onImageHover"
            >
              <motion.img
                variants={variants}
                draggable={false}
                src={image}
                alt={name}
              />
              <div className={styles.info}>
                <p>{name}</p>
                <p className={styles.year}>{release_year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BandInfo;
