import type { NextPage } from "next";
import Image from "next/image";
import { teamLogoValidator, teamResultValidator } from "@utils/team.validate";
import InformationOutlineIcon from "mdi-react/InformationOutlineIcon";
import { HISTORIC_MATCHES } from "dummy-data";
import styles from "./match-summary.module.scss";

const index: NextPage = () => {
  const HISTORIC_MATCH = HISTORIC_MATCHES[0];
  const UPCOMING_MATCH: never[] = [];
  const RUNNING = true;

  return (
    <div className={styles.container}>
      <section>
        <p className={styles.title}>Last Game</p>
        <div className={styles.historicMatch}>
          <div className={styles.team}>
            <Image
              src={teamLogoValidator(
                HISTORIC_MATCH.opponents[0].opponent.image_url
              )}
              width={50}
              height={50}
              objectFit="contain"
              loading="lazy"
            />

            <p className={styles.teamName}>
              {HISTORIC_MATCH.opponents[0].opponent.name}
            </p>
          </div>

          <p
            className={teamResultValidator(
              HISTORIC_MATCH.results[0].score,
              HISTORIC_MATCH.results[1].score
            )}
          >
            {HISTORIC_MATCH.results[0].score}
          </p>

          <p>-</p>

          <p
            className={teamResultValidator(
              HISTORIC_MATCH.results[1].score,
              HISTORIC_MATCH.results[0].score
            )}
          >
            {HISTORIC_MATCH.results[1].score}
          </p>

          <div className={styles.team}>
            <Image
              src={teamLogoValidator(
                HISTORIC_MATCH.opponents[1].opponent.image_url
              )}
              width={50}
              height={50}
              objectFit="cover"
              loading="lazy"
            />

            <p className={styles.teamName}>
              {HISTORIC_MATCH.opponents[1].opponent.name}
            </p>
          </div>
        </div>
        <InformationOutlineIcon size={"20px"} />
      </section>

      <hr />
      <section>
        {RUNNING && <div className={styles.live} />}
        {UPCOMING_MATCH ? (
          <>
            <p>Next Game</p>
            <div className={styles.upcomingMatch}>
              <div className={styles.team}>
                <Image
                  src={teamLogoValidator(
                    HISTORIC_MATCH.opponents[0].opponent.image_url
                  )}
                  width={50}
                  height={50}
                  objectFit="contain"
                  loading="lazy"
                />

                <p className={styles.teamName}>
                  {HISTORIC_MATCH.opponents[0].opponent.name}
                </p>
              </div>
              <p>vs</p>
              <div className={styles.team}>
                <Image
                  src={teamLogoValidator(
                    HISTORIC_MATCH.opponents[1].opponent.image_url
                  )}
                  width={50}
                  height={50}
                  objectFit="cover"
                  loading="lazy"
                />

                <p className={styles.teamName}>
                  {HISTORIC_MATCH.opponents[1].opponent.name}
                </p>
              </div>
            </div>
            <InformationOutlineIcon size={"20px"} />
          </>
        ) : (
          <div>
            <span>NO UPCOMING MATCH</span>
          </div>
        )}
      </section>
    </div>
  );
};

export default index;
