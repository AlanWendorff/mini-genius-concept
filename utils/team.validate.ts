import styles from "@cards/match-summary/match-summary.module.scss";
import { EMatchType } from "@constants/enums";
import { TMatchType } from "types/match";
import LOGO_TEAM_UNKNOWN from "@assets/images/logo-unknown.webp";

export const teamLogoValidator = (logo: string | null, type?: TMatchType) => {
  /* if (type === EMatchType.UPCOMING) {
    logo;
  }
 */
  return logo ?? LOGO_TEAM_UNKNOWN;
};

export const teamResultValidator = (scoreA: number, scoreB: number) =>
  scoreA > scoreB ? styles.winner : "";
