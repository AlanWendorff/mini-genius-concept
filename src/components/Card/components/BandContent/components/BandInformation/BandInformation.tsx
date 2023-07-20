import styles from "./BandInformation.module.scss";
import { motion } from "framer-motion";
import BANDS from "data/band.data";
import { useEffect } from "react";
import { IBand } from "interfaces/band";
import IAlbum from "interfaces/album";

interface props {
  selectedBand: IBand;
  handleSelectAlbum: (id: number) => void;
}

const BandInformation = ({ selectedBand, handleSelectAlbum }: props) => {
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
    typeWriter();
  }, []);

  return (
    <>
      <div className={styles.about}>
        <h3>About “{selectedBand.band_name}“</h3>

        <p id="description">
          <span>{selectedBand.band_name}</span>
        </p>
      </div>

      <div className={styles.albums}>
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
      </div>
    </>
  );
};
export default BandInformation;
