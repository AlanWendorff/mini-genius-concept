import type { NextPage } from "next";
import UpcomingMatch from "../../cards/upcoming-match/Upcoming";
import LiveMatch from "../../cards/upcoming-match/Live";
import { TMatch } from "types/api";

interface IProps {
  upcoming_match: TMatch[];
}

const UpcomingMatchesMapper: NextPage<IProps> = ({ upcoming_match }) => (
  <>
    {upcoming_match.map((match) => {
      return match.isLive ? (
        <LiveMatch key={match.id} match={match} />
      ) : (
        <UpcomingMatch key={match.id} match={match} />
      );
    })}
  </>
);

export default UpcomingMatchesMapper;
