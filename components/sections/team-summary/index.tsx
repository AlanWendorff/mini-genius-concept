import type { NextPage } from "next";
import Stats from "@cards/stats";
import MatchSummary from "@cards/match-summary";
import Roster from "@cards/roster";

const index: NextPage = () => {
  return (
    <>
      <Stats />
      <MatchSummary />
      <Roster />
    </>
  );
};

export default index;
