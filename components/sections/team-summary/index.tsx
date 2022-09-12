import type { NextPage } from "next";
import Stats from "@cards/stats";
import MatchSummary from "@cards/match-summary";
import Roster from "@cards/roster";
import IProps from "@interfaces/section.props";

const index: NextPage<IProps> = ({ handleSection }) => {
  return (
    <>
      <Stats />
      <MatchSummary handleSection={handleSection} />
      <Roster />
    </>
  );
};

export default index;
