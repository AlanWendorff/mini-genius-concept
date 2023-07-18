import styles from "./BandInfo.module.scss";
import ALBUMS from "./data";

const BandInfo = () => (
  <div className={styles.container}>
    <div className={styles.about}>
      <h3>About “DVSR“</h3>

      <p>
        <span>DVSR</span> are a fusion of Rap/Hip Hop and Metal. Combing these
        two styles to create one of its own.
      </p>
    </div>

    <div className={styles.albums}>
      <h3>POPULAR DVSR ALBUMS</h3>
      <div className={styles.grid}>
        {ALBUMS.map(({ id, image, name, release_year }) => (
          <div key={id} className={styles.album}>
            <img draggable={false} src={image} alt={name} />
            <div className={styles.info}>
              <p>{name}</p>
              <p className={styles.year}>{release_year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BandInfo;
