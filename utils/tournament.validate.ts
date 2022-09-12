import styles from "../styles/utils.module.scss";

export const isMatchFinal = (stage: string) =>
  stage.toLowerCase().includes("final") &&
  !stage.toLowerCase().includes("semi") &&
  !stage.toLowerCase().includes("quarter") &&
  !stage.toLowerCase().includes("upper") &&
  !stage.toLowerCase().includes("lower")
    ? styles.fontBold
    : "";
