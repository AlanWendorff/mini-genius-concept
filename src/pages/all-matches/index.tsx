import type { NextPage } from "next";
import getAllMatches from "@api/src/AllMatches/getAllMatches";
import UpcomingMatch from "src/components/Cards/UpcomingMatch/Live";
//import { REVALIDATE_TIME } from "@constants/config";
import { TMatch } from "types/api";
import styles from "../main-frame.module.scss";

interface IProps {
  upcoming_matches: TMatch[];
}

const AllMatches: NextPage<IProps> = ({ upcoming_matches }) => (
  <div className={styles.mainFrame}>
    {upcoming_matches.map((match) => (
      <UpcomingMatch key={match.id} match={match} />
    ))}
  </div>
);

export const getStaticProps = async () => {
  const matches = await getAllMatches();

  return {
    props: matches,
    //revalidate: REVALIDATE_TIME,
  };
};

export default AllMatches;
