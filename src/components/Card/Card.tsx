import IMAGE from "../../assets/images/dvsr-logo.jpg";
import styles from "./Card.module.scss";
import ALBUMS from "./data";

const Card = () => (
  <div className={styles.container}>
    <div className={styles.info}>
      <img className={styles.image} src={IMAGE} alt="" />
      <h1>DVSR</h1>
      <p className={styles.subtitle}>
        AKA: Designed via Strength & Respect, Devastator
      </p>
    </div>

    <div className={styles.bandInfo}>
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
  </div>
);

export default Card;
