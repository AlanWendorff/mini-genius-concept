import { useState } from "react";
import type { NextPage } from "next";
import Moment from "moment";
import TeamLogo from "../../team-logo";
import SocialShare from "../../social-share";
import { isMatchFinal } from "@utils/tournament.validate";
import { resultValidator } from "@utils/team.validate";
import { ETeamComponentMode } from "@constants/enums";
import ChevronDownIcon from "mdi-react/ChevronDownIcon";
import ChevronUpIcon from "mdi-react/ChevronUpIcon";
import TrophyOutlineIcon from "mdi-react/TrophyOutlineIcon";
import CalendarClockIcon from "mdi-react/CalendarClockIcon";
import styles from "./historic-match.module.scss";

interface IProps {
  match: any;
}

const index: NextPage<IProps> = ({ match }) => {
  const [detailState, setDetailState] = useState(false);
  const { opponents, results, bestOf, league, serie, begin_at, stage } = match;

  return (
    <div className={styles.container}>
      <div className={styles.match}>
        <p className={isMatchFinal(stage)}>{stage}</p>
        <div
          className={`${styles.team} ${
            results[0].score < results[1].score ? styles.lost : ""
          }`}
        >
          <TeamLogo
            componentMode={ETeamComponentMode.ROW}
            teamLogo={opponents[0].opponent.image_url}
            teamName={opponents[0].opponent.name}
          />
          <p className={resultValidator(results[0].score, results[1].score)}>
            {results[0].score}
          </p>
        </div>
        <div
          className={`${styles.team} ${
            results[1].score < results[0].score ? styles.lost : ""
          }`}
        >
          <TeamLogo
            componentMode={ETeamComponentMode.ROW}
            teamLogo={opponents[1].opponent.image_url}
            teamName={opponents[1].opponent.name}
          />
          <p className={resultValidator(results[1].score, results[0].score)}>
            {results[1].score}
          </p>
        </div>
        <p>{bestOf}</p>
      </div>
      <button
        className={styles.arrow}
        onClick={() => setDetailState(!detailState)}
      >
        {detailState ? (
          <ChevronUpIcon size={"30px"} />
        ) : (
          <ChevronDownIcon size={"30px"} />
        )}
      </button>
      {detailState && (
        <div className={styles.matchDetail}>
          <p>
            <TrophyOutlineIcon size={"20px"} />
            {`${league.name} ${serie.full_name}`}
          </p>
          <p>
            <CalendarClockIcon size={"20px"} />
            {Moment(begin_at).format("Do")}{" "}
            {Moment(begin_at).format("MMMM - H:mm")} hs
          </p>
          <SocialShare />
        </div>
      )}
    </div>
  );
};

export default index;
