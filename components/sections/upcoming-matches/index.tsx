import type { NextPage } from "next";
import UpcomingMatch from "../../cards/upcoming-match";
import { UPCOMING_MATCHES } from "dummy-data";

const index: NextPage = () => {
  return (
    <>
      {UPCOMING_MATCHES.map((match) => (
        <UpcomingMatch match={match} />
      ))}
    </>
  );
};

export default index;
