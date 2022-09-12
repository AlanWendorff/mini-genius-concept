import type { NextPage } from "next";
import Image from "next/image";
import { logoValidator, nameValidator } from "@utils/team.validate";
import { ETeamComponentMode } from "@constants/enums";
import styles from "./team-logo.module.scss";

const COMPONENT_MODE = {
  [ETeamComponentMode.ROW]: styles.containerRow,
  [ETeamComponentMode.COLUMN]: styles.containerColumn,
};

interface IProps {
  componentMode: ETeamComponentMode.ROW | ETeamComponentMode.COLUMN;
  teamLogo: string | undefined | null;
  teamName: string | null;
}

const index: NextPage<IProps> = ({ componentMode, teamLogo, teamName }) => (
  <div className={COMPONENT_MODE[componentMode]}>
    <Image
      src={logoValidator(teamLogo)}
      width={50}
      height={50}
      objectFit="contain"
      loading="lazy"
      draggable="false"
    />

    <p className={styles.teamName}>{nameValidator(teamName)}</p>
  </div>
);

export default index;
