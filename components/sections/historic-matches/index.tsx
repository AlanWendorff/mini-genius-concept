import type { NextPage } from "next";
import HistoricMatch from "../../cards/historic-match";
import { HISTORIC_MATCHES } from "dummy-data";

const index: NextPage = () => {
  return (
    <>
      {HISTORIC_MATCHES.map((match) => (
        <HistoricMatch match={match} />
      ))}
    </>
  );
};

export default index;
