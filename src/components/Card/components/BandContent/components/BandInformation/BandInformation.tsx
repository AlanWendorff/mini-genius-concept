import styles from "./BandInformation.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { IBand } from "interfaces/band";

interface props {
  selectedBand: IBand;
  show: boolean;
  handleSelectAlbum: (id: number) => void;
}

const BandInformation = ({ show, selectedBand, handleSelectAlbum }: props) => {
  const description =
    " are a fusion of Rap/Hip Hop and Metal. Combing these two styles to create one of its own.";

  let i = 0;
  let speed = 10;

  const variants = {
    onImageHover: {
      scale: 0.9,
    },
  };

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
    show && typeWriter();
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <div className={styles.absoluteContainer}>
          <motion.div
            className={styles.about}
            initial={{ x: -480 }}
            animate={{ x: 0 }}
            exit={{ x: -480 }}
            transition={{ type: "tween" }}
          >
            <h3>About “{selectedBand.band_name}“</h3>

            <p id="description">
              <span>{selectedBand.band_name}</span>
            </p>
          </motion.div>

          <motion.div
            className={styles.albums}
            initial={{ x: -480 }}
            animate={{ x: 0 }}
            exit={{ x: -480 }}
            transition={{ type: "tween" }}
          >
            <h3>POPULAR {selectedBand.band_name} ALBUMS</h3>
            <div className={styles.grid}>
              {selectedBand.albums.map(({ id, image, name, release_year }) => (
                <motion.div
                  key={id}
                  className={styles.album}
                  whileHover="onImageHover"
                  onClick={() => handleSelectAlbum(id)}
                >
                  <motion.img
                    variants={variants}
                    draggable={false}
                    src={image.src}
                    alt={name}
                  />
                  <div className={styles.info}>
                    <p>{name}</p>
                    <p className={styles.year}>{release_year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default BandInformation;
