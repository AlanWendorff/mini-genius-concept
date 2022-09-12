import type { NextPage } from "next";
import Image from "next/image";
import { getCountryFlag, getCountryName } from "@services/country.api";
import { PLAYERS } from "dummy-data";
import styles from "./roster.module.scss";

const index: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Roster of 9z</h1>
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
                  width={180}
                  height={180}
                  objectFit="contain"
                  loading="lazy"
                  draggable="false"
                />
                <img
                  className={styles.playerImage}
                  src={image_url}
                  alt={`player pic ${name}`}
                  loading="lazy"
                  draggable="false"
                />
              </div>

              <p className={styles.playerName}>
                {first_name} <span>"{name}"</span> {last_name}
              </p>

              <div className={styles.nationality}>
                <p>{/* getCountryName(nationality) */} Country name</p>
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
