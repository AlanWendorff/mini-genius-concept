import { useState } from "react";
import type { NextPage } from "next";
import TeamLogo from "../../team-logo";
import { ETeamComponentMode } from "@constants/enums";
import styles from "./historic-match.module.scss";

interface IProps {
  match: any;
}

const index: NextPage<IProps> = ({ match }) => {
  const [detailState, setDetailState] = useState(false);
  const { opponents } = match;

  return (
    <div className={styles.container}>
      <div className={styles.match}>
        <p>fase en la que se jugo</p>
        <div className={styles.team}>
          <TeamLogo
            componentMode={ETeamComponentMode.ROW}
            teamLogo={opponents[0].opponent.image_url}
            teamName={opponents[0].opponent.name}
          />
          <p>name</p>
          <p>points</p>
        </div>
        <div className={styles.team}>
          <TeamLogo
            componentMode={ETeamComponentMode.ROW}
            teamLogo={opponents[1].opponent.image_url}
            teamName={opponents[1].opponent.name}
          />
          <p>name</p>
          <p>points</p>
        </div>
        <p>Best of ?</p>
      </div>
      <button
        className={styles.arrow}
        onClick={() => setDetailState(!detailState)}
      >
        arrow
      </button>
      {detailState && (
        <div className={styles.matchDetail}>
          <p>liga y toda la wea</p>
          <p>Fecha en la que se jugo + hora</p>
          <div>componente social share</div>
        </div>
      )}
    </div>
  );
};

export default index;
