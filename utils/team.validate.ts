import styles from "@cards/match-summary/match-summary.module.scss";
import { EMatchType } from "@constants/enums";
import { TMatchType } from "types/match";
import LOGO_TEAM_UNKNOWN from "@assets/images/logo-unknown.webp";
import TEAM_TBD from "@assets/images/team-tbd.webp";

export const logoValidator = (logo: string | null | undefined) => {
  if (logo === undefined) {
    return LOGO_TEAM_UNKNOWN;
  }

  return logo ?? TEAM_TBD;
};

export const resultValidator = (scoreA: number, scoreB: number) =>
  scoreA > scoreB ? styles.winner : "";

export const nameValidator = (name: string | null) => name ?? "To be defined";
