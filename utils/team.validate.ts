import styles from "@cards/match-summary/match-summary.module.scss";
import logo_unknown from "@assets/images/logo-unknown.webp";

export const teamLogoValidator = (logo: string | null) => logo ?? logo_unknown;

export const teamResultValidator = (scoreA: number, scoreB: number) =>
  scoreA > scoreB ? styles.resultWinner : styles.resultLoser;
