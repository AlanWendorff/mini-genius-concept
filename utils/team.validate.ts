import styles from "@cards/match-summary/match-summary.module.scss";
import LOGO_TEAM_UNKNOWN from "@assets/images/logo-unknown.webp";
export const teamLogoValidator = (logo: string | null) =>
  logo ?? LOGO_TEAM_UNKNOWN;

export const teamResultValidator = (scoreA: number, scoreB: number) =>
  scoreA > scoreB ? styles.resultWinner : styles.resultLoser;
