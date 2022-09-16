import type { NextPage } from "next";
//import HistoricMatch from "../../Cards/HistoricMatch";
import { TMatch } from "types/api";

interface IProps {
  historic_matches: TMatch[];
}

const HistoricMatchesMapper: NextPage<IProps> = ({ historic_matches }) => (
  <>
    {historic_matches.map((match) => (
      /*  <HistoricMatch key={match.id} match={match} /> */
      <div key={match.id}></div>
    ))}
  </>
);

export default HistoricMatchesMapper;
