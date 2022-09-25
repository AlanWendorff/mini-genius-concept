import { TEAM_ID } from "@constants/api";
import IMatchMapped, { IOpponent, IResult } from "@api/utils/interfaces/match";
import logo_unknown from "@assets/images/logo-unknown.webp";
import logo_team_to_be_defined from "@assets/images/team-tbd.webp";

export const whatMapArePlaying = (results: IResult[]) => {
  let mapPlaying;

  if (results[0].score === 0 && results[1].score === 0) {
    mapPlaying = "1st";
  } else if (
    (results[0].score === 1 && results[1].score === 0) ||
    (results[0].score === 0 && results[1].score === 1)
  ) {
    mapPlaying = "2nd";
  } else {
    mapPlaying = "3rd";
  }

  if (
    (results[0].score === 2 && results[1].score === 1) ||
    (results[0].score === 1 && results[1].score === 2)
  ) {
    mapPlaying = "4th";
  } else if (results[0].score === 2 && results[1].score === 2) {
    mapPlaying = "5th";
  }

  return mapPlaying;
};

export const opponentValidate = (opponents: IOpponent) => {
  if (!opponents) {
    return {
      id: 0,
      name: "To be defined",
      image_url: logo_team_to_be_defined.src,
    };
  }

  return {
    id: opponents.opponent.id,
    name: opponents.opponent.name,
    image_url: opponents.opponent.image_url ?? logo_unknown.src,
  };
};

export const makeStatistics = (HISTORIC_MATCHES: IMatchMapped[]) => {
  let win_strike = 0;

  const ALL_MATCHES_WINNED = HISTORIC_MATCHES.filter(
    ({ winner_id }) => winner_id === TEAM_ID
  ).length;

  const LAST_FIVE_GAMES = HISTORIC_MATCHES.slice(0, 5).map(({ winner_id }) => {
    return winner_id === TEAM_ID ? "W" : "L";
  });

  for (let index = HISTORIC_MATCHES.length - 1; index >= 0; index--) {
    if (HISTORIC_MATCHES[index].winner_id === TEAM_ID) {
      win_strike = win_strike + 1;
    } else {
      win_strike = 0;
    }
  }

  const WIN_RATE = (ALL_MATCHES_WINNED * 100) / HISTORIC_MATCHES.length;

  return {
    last_five_games: LAST_FIVE_GAMES,
    win_strike,
    win_rate: WIN_RATE,
  };
};
