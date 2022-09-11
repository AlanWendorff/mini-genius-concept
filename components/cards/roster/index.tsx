import type { NextPage } from "next";
import Image from "next/image";
import { getCountryFlag, getCountryName } from "@services/country.api";
import { PLAYERS } from "dummy-data";
import styles from "./roster.module.scss";

const index: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>Roster of 9z</h2>
      <div className={styles.roster}>
        {PLAYERS.map(
          ({ first_name, image_url, last_name, name, nationality }) => (
            <div className={styles.player} key={name}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.backgroundLogo}
                  src={
                    "https://cdn.pandascore.co/images/team/image/126709/9996.png"
                  }
                  width={150}
                  height={150}
                  objectFit="contain"
                  loading="lazy"
                />
                <img
                  className={styles.playerImage}
                  src={image_url}
                  alt={`player pic ${name}`}
                  loading="lazy"
                />
              </div>

              <p className={styles.playerName}>
                {first_name} <span>"{name}"</span> {last_name}
              </p>

              <div className={styles.nationality}>
                <p>{getCountryName(nationality)}</p>
                <Image
                  className={styles.backgroundLogo}
                  src={getCountryFlag(nationality)}
                  width={24}
                  height={24}
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default index;
