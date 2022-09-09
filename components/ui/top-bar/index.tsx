import type { NextPage } from "next";
import Image from "next/image";
import { ESection } from "../../../constants/enums";
import { TSections } from "../../../types/sections.types";
import HistoryIcon from "mdi-react/HistoryIcon";
import logo from "../../../assets/images/9z-logo.webp";
import styles from "./top-bar.module.scss";

interface IProps {
  section: TSections;
  handleSection: (section: TSections) => void;
}

const index: NextPage<IProps> = ({ section, handleSection }) => {
  return (
    <div className={styles.container}>
      <button
        className={section === ESection.SUMMARY ? styles.on : ""}
        onClick={() => {
          handleSection(ESection.SUMMARY);
        }}
      >
        <Image src={logo} width={30} height={30} placeholder="blur" />
      </button>
      <button
        className={section === ESection.UPCOMING ? styles.on : ""}
        onClick={() => {
          handleSection(ESection.UPCOMING);
        }}
      >
        <h2>VS</h2>
      </button>
      <button
        className={section === ESection.HISTORIC ? styles.on : ""}
        onClick={() => {
          handleSection(ESection.HISTORIC);
        }}
      >
        <HistoryIcon size={"30px"} />
      </button>
    </div>
  );
};

export default index;
