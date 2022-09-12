import type { NextPage } from "next";
import Moment from "moment";
import TeamLogo from "../../team-logo";
import SocialShare from "../../social-share";
import { ETeamComponentMode } from "@constants/enums";
import TrophyOutlineIcon from "mdi-react/TrophyOutlineIcon";
import FormatListGroupIcon from "mdi-react/FormatListGroupIcon";
import CalendarClockIcon from "mdi-react/CalendarClockIcon";
import TrophyAwardIcon from "mdi-react/TrophyAwardIcon";
import styles from "./upcoming-match.module.scss";

interface IProps {
  match: any;
}

const index: NextPage<IProps> = ({ match }) => {
  const { opponents, bestOf, league, serie, begin_at, stage } = match;

  return (
    <div className={styles.container}>
      <div className={styles.team}>
        <TeamLogo
          componentMode={ETeamComponentMode.COLUMN}
          teamLogo={opponents[1].opponent.image_url}
          teamName={opponents[1].opponent.name}
          big
        />
      </div>
      <div className={styles.matchDetail}>
        <p>
          <TrophyOutlineIcon size={"20px"} />
          {`${league.name} ${serie.full_name}`}
        </p>
        <p>
          <FormatListGroupIcon size={"20px"} />
          {stage}
        </p>
        <p>
          <CalendarClockIcon size={"20px"} />
          {Moment(begin_at).format("Do")}{" "}
          {Moment(begin_at).format("MMMM - H:mm")} hs
        </p>
        <p>
          <TrophyAwardIcon size={"20px"} />
          {bestOf}
        </p>
        <SocialShare distanceOfSocials={120} />
      </div>
    </div>
  );
};

export default index;
