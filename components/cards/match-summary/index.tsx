import type { NextPage } from "next";
import Image from "next/image";
import { teamLogoValidator, teamResultValidator } from "@utils/team.validate";
import InformationOutlineIcon from "mdi-react/InformationOutlineIcon";
import { HISTORIC_MATCHES } from "dummy-data";
import styles from "./match-summary.module.scss";

const index: NextPage = () => {
  const HISTORIC_MATCH = HISTORIC_MATCHES[0];
  const UPCOMING_MATCH: never[] = [];

  return (
    <div className={styles.container}>
      <div className={styles.historicMatch}>
        <>
          <span>Last Game</span>
          <div>
            <div className="team">
              <Image
                src={teamLogoValidator(
                  HISTORIC_MATCH.opponents[0].opponent.image_url
                )}
                width={50}
                height={50}
                objectFit="cover"
                loading="lazy"
              />

              <span>{HISTORIC_MATCH.opponents[0].opponent.name}</span>
            </div>

            <span
              className={teamResultValidator(
                HISTORIC_MATCH.results[0].score,
                HISTORIC_MATCH.results[1].score
              )}
            >
              {HISTORIC_MATCH.results[0].score}
            </span>

            <span>-</span>

            <span
              className={teamResultValidator(
                HISTORIC_MATCH.results[1].score,
                HISTORIC_MATCH.results[0].score
              )}
            >
              {HISTORIC_MATCH.results[1].score}
            </span>

            <div className="team">
              <Image
                src={teamLogoValidator(
                  HISTORIC_MATCH.opponents[1].opponent.image_url
                )}
                width={50}
                height={50}
                objectFit="cover"
                loading="lazy"
              />

              <span>{HISTORIC_MATCH.opponents[1].opponent.name}</span>
            </div>
          </div>
          <InformationOutlineIcon size={"30px"} />
        </>
      </div>

      {/* <div className={styles.upcomingMatch}>
        {UPCOMING_MATCH ? (
          <>
            <span>
              Next Game{" "}
              {UPCOMING_MATCH.status === "running" && (
                <span>
                  <span>Live</span> <span className="dot-indicator"></span>
                </span>
              )}
            </span>
            <div>
              <div className="team">
                <ProgressiveImage
                  src={
                    UPCOMING_MATCH.opponents[0] !== false
                      ? !UPCOMING_MATCH.opponents[0].opponent.image_url
                        ? nopic
                        : UPCOMING_MATCH.opponents[0].opponent.image_url
                      : toBeDefined
                  }
                  placeholder={loaderGif}
                >
                  {(src) => <img src={src} alt="team A Next Match" />}
                </ProgressiveImage>
                <span>
                  {UPCOMING_MATCH.opponents[0] !== false
                    ? UPCOMING_MATCH.opponents[0].opponent.name
                    : "To be Defined"}
                </span>
              </div>
              <span>vs</span>
              <div className="team">
                <ProgressiveImage
                  src={
                    UPCOMING_MATCH.opponents[1] !== false
                      ? !UPCOMING_MATCH.opponents[1].opponent.image_url
                        ? nopic
                        : UPCOMING_MATCH.opponents[1].opponent.image_url
                      : toBeDefined
                  }
                  placeholder={loaderGif}
                >
                  {(src) => <img src={src} alt="team B Next Match" />}
                </ProgressiveImage>

                <span>
                  {UPCOMING_MATCH.opponents[1] !== false
                    ? UPCOMING_MATCH.opponents[1].opponent.name
                    : "To be Defined"}
                </span>
              </div>
            </div>
            <FontAwesomeIcon
              onClick={() => {
                window.scrollTo(0, 0);
                setVs();
              }}
              className="font-size-18px cursor-pointer"
              style={{ color: color.DarkVibrant }}
              icon={faInfoCircle}
            />
          </>
        ) : (
          <div>
            <span>NO UPCOMING MATCH</span>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default index;
