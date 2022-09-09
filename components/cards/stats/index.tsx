import type { NextPage } from "next";
import styles from "./stats.module.scss";

const wl = ["W", "W", "W", "W", "W"];

const index: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className="container-estadistica">
        <span className="stadistic-span ">
          Winrate : <span className="font-stadistic-data">70.00%</span>
        </span>
        <span className="stadistic-span ">
          Winstrike : <span className="font-stadistic-data">10</span>{" "}
        </span>
      </div>
      <div className="win-and-loose" title="Last 5 games">
        {wl.map((status, index) => (
          <span key={index} className={status === "W" ? "W-green" : "L-red"}>
            {status}
          </span>
        ))}
      </div>
    </div>
  );
};

export default index;
