import { TEAM_ID, API_KEY } from "@constants/api";
import { matchesMapper, makeStatistics } from "./helper";
import IMatchMapped from "@api/interfaces/match";

const getTeamMatches = async () => {
  const HISTORIC_MATCHES = await fetch(
    `https://api.pandascore.co/csgo/matches/past?filter[opponent_id]=${TEAM_ID}&filter[finished]=true&token=${API_KEY}`
  );

  const UPCOMING_MATCHES = await fetch(
    `https://api.pandascore.co/csgo/matches?sort=begin_at&filter[finished]=false&filter[unscheduled]=false&filter[opponent_id]=${TEAM_ID}&token=${API_KEY}`
  );

  const HISTORIC_MAPPED: IMatchMapped[] = matchesMapper(
    await HISTORIC_MATCHES.json()
  );

  const UPCOMING_MAPPED: IMatchMapped[] = matchesMapper(
    await UPCOMING_MATCHES.json()
  );

  const STATS = makeStatistics(HISTORIC_MAPPED);

  return {
    historic_matches: HISTORIC_MAPPED,
    upcoming_matches: UPCOMING_MAPPED,
    team_stats: STATS,
  };
};

export default getTeamMatches;
