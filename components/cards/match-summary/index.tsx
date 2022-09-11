import type { NextPage } from "next";
import Image from "next/image";
import TeamLogo from "../../team-logo";
import { logoValidator, resultValidator } from "@utils/team.validate";
import { ETeamComponentMode } from "@constants/enums";
import InformationOutlineIcon from "mdi-react/InformationOutlineIcon";
import { HISTORIC_MATCHES } from "dummy-data";
import styles from "./match-summary.module.scss";

const index: NextPage = () => {
  const HISTORIC_MATCH = HISTORIC_MATCHES[4];
  const UPCOMING_MATCH: never[] = [];
  const RUNNING = false;

  return (
    <div className={styles.container}>
      <section>
        <p className={styles.title}>Last Game</p>
        <div className={styles.historicMatch}>
          <TeamLogo
            componentMode={ETeamComponentMode.COLUMN}
            teamLogo={HISTORIC_MATCH.opponents[0].opponent.image_url}
            teamName={HISTORIC_MATCH.opponents[0].opponent.name}
          />

          <p
            className={resultValidator(
              HISTORIC_MATCH.results[0].score,
              HISTORIC_MATCH.results[1].score
            )}
          >
            {HISTORIC_MATCH.results[0].score}
          </p>

          <p>-</p>

          <p
            className={resultValidator(
              HISTORIC_MATCH.results[1].score,
              HISTORIC_MATCH.results[0].score
            )}
          >
            {HISTORIC_MATCH.results[1].score}
          </p>

          <TeamLogo
            componentMode={ETeamComponentMode.COLUMN}
            teamLogo={HISTORIC_MATCH.opponents[1].opponent.image_url}
            teamName={HISTORIC_MATCH.opponents[1].opponent.name}
          />
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
              <TeamLogo
                componentMode={ETeamComponentMode.COLUMN}
                teamLogo={HISTORIC_MATCH.opponents[0].opponent.image_url}
                teamName={HISTORIC_MATCH.opponents[0].opponent.name}
              />
              <p>vs</p>
              <TeamLogo
                componentMode={ETeamComponentMode.COLUMN}
                teamLogo={HISTORIC_MATCH.opponents[1].opponent.image_url}
                teamName={HISTORIC_MATCH.opponents[1].opponent.name}
              />
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
