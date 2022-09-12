import LOGO_TEAM_UNKNOWN from "@assets/images/logo-unknown.webp";
import TEAM_TBD from "@assets/images/team-tbd.webp";
import styles from "../styles/utils.module.scss";

export const logoValidator = (logo: string | null | undefined) => {
  if (logo === undefined) {
    return LOGO_TEAM_UNKNOWN;
  }

  return logo ?? TEAM_TBD;
};

export const resultValidator = (scoreA: number, scoreB: number) =>
  scoreA > scoreB ? styles.fontBold : "";

export const nameValidator = (name: string | null) => name ?? "To be defined";
