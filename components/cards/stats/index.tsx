import type { NextPage } from "next";
import { LAST_FIVE_GAMES } from "dummy-data";
import TLastFiveStyle from "types/stats";
import styles from "./stats.module.scss";

const lastFiveStyle: TLastFiveStyle = {
  W: styles.winnedGame,
  L: styles.lostGame,
};

const index: NextPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.generalStats}>
        <p>
          Winrate: <span>70.00%</span>
        </p>
        <p>
          Winstrike: <span>0</span>
        </p>
      </section>
      <section className={styles.lastFive} title="Last 5 games">
        {LAST_FIVE_GAMES.map((status, index) => (
          <span key={index} className={lastFiveStyle[status]}>
            {status}
          </span>
        ))}
      </section>
    </div>
  );
};

export default index;
