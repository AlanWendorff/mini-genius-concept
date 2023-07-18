import IMAGE from "../../assets/images/dvsr-logo.jpg";
import styles from "./Card.module.scss";

const Card = () => (
  <div className={styles.container}>
    <div className={styles.info}>
      <img className={styles.image} src={IMAGE} alt="" />
      <h1>DVSR</h1>
      <p className={styles.subtitle}>
        AKA: Designed via Strength & Respect, Devastator
      </p>

      {/* <div className={styles.about}>
        <h3>About "DVSR"</h3>

        <p>
          <span>DVSR</span> are a fusion of Rap/Hip Hop and Metal. Combing these
          two styles to create one of its own.
        </p>
      </div> */}
    </div>

    <div className={styles.albums}>albums</div>
  </div>
);

export default Card;
