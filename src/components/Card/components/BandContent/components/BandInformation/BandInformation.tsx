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
  let letterIndex = 0;
  const speed = 10;

  const variants = {
    onImageHover: {
      scale: 0.9,
    },
  };

  const typeWriter = () => {
    let timeout;
    if (letterIndex < selectedBand.band_description.length) {
      const elem = document.querySelector(
        "#description"
      ) as HTMLParagraphElement;

      if (elem) {
        elem.innerHTML += selectedBand.band_description.charAt(letterIndex);
      }
      letterIndex++;
      timeout = setTimeout(typeWriter, speed);
      return;
    }
    clearTimeout(timeout);
  };

  useEffect(() => {
    if (show) typeWriter();
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="band-information"
          className={styles.animatedContainer}
          initial={{ x: -480 }}
          animate={{ x: 0 }}
          exit={{ x: -480 }}
          transition={{ type: "tween" }}
        >
          <div className={styles.about}>
            <h2>About “{selectedBand.band_name}“</h2>

            <p id="description">
              <span>{selectedBand.band_name}</span>
            </p>
          </div>

          <h3 className={styles.popularAlbums}>
            POPULAR {selectedBand.band_name} ALBUMS
          </h3>

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
      )}
    </AnimatePresence>
  );
};
export default BandInformation;
