import { useState } from "react";
import type { NextPage } from "next";
import TopBar from "@ui/top-bar";
import HistoricMatches from "@sections/historic-matches";
import TeamSummary from "@sections/team-summary";
import UpcomingMatches from "@sections/upcoming-matches";
import { TEAM_ID, API_KEY } from "@constants/api";
import { ESection } from "@constants/enums";
import { TSections } from "types/sections";
import styles from "./index.module.scss";

interface IProps {
  HISTORIC_MATCHES: any[];
  UPCOMING_MATCHES: any[];
}

const index: NextPage<IProps> = ({ HISTORIC_MATCHES, UPCOMING_MATCHES }) => {
  const [section, setSection] = useState(ESection.SUMMARY);

  const handleSection = (section: TSections) => {
    setSection(section);
  };

  const SECTIONS = {
    [ESection.SUMMARY]: <TeamSummary handleSection={handleSection} />,
    [ESection.UPCOMING]: <UpcomingMatches />,
    [ESection.HISTORIC]: <HistoricMatches />,
  };

  return (
    <div className={styles.mainFrame}>
      <TopBar section={section} handleSection={handleSection} />
      {SECTIONS[section]}
    </div>
  );
};

export const getStaticProps = async () => {
  const HISTORIC_MATCHES = await fetch(
    `https://api.pandascore.co/csgo/matches/past?filter[opponent_id]=${TEAM_ID}&filter[finished]=true&token=${API_KEY}`
  );

  const UPCOMING_MATCHES = await fetch(
    `https://api.pandascore.co/csgo/matches?sort=begin_at&filter[finished]=false&filter[unscheduled]=false&filter[opponent_id]=${TEAM_ID}&token=${API_KEY}`
  );

  return {
    props: {
      HISTORIC_MATCHES: await HISTORIC_MATCHES.json(),
      UPCOMING_MATCHES: await UPCOMING_MATCHES.json(),
    },
    revalidate: 1000,
  };
};

export default index;
