import styles from "./Header.module.scss";
import BandName from "./components/BandName";
import AlbumName from "./components/AlbumName";
import SongName from "./components/SongName";
import FloatingImage from "./components/FloatingImage";
import { ECardStatus } from "@components/Card/useChangeContent";
import ICommonProps from "interfaces/common";
import { MotionValue } from "framer-motion";

interface IHeaderProps extends ICommonProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  handleReturnMenu: () => void;
  handleReturnAlbum: () => void;
}

const Header = ({
  x,
  y,
  rotateX,
  rotateY,
  cardStatus,
  selectedAlbum,
  selectedBand,
  selectedTrack,
  handleReturnMenu,
  handleReturnAlbum,
}: IHeaderProps) => {
  const backgroundColor = selectedAlbum
    ? `linear-gradient(${selectedAlbum.colors.primary}, ${selectedAlbum.colors.secondary})`
    : `linear-gradient(#6f2929, #222222)`;

  const arrowColor = selectedAlbum ? selectedAlbum.colors.secondary : "#222222";

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: backgroundColor }}
    >
      <div className={styles.arrow} style={{ borderTopColor: arrowColor }} />

      <FloatingImage
        x={x}
        y={y}
        rotateX={rotateX}
        rotateY={rotateY}
        image={selectedBand.band_image.src}
        show={cardStatus === ECardStatus.BAND}
        alt="band members portrait"
      />

      <FloatingImage
        x={x}
        y={y}
        rotateX={rotateX}
        rotateY={rotateY}
        image={selectedAlbum?.image.src ?? ""}
        show={
          cardStatus === ECardStatus.ALBUM || cardStatus === ECardStatus.SONG
        }
        alt="album portrait"
      />

      <div className={styles.textContainer}>
        <BandName
          title={selectedBand.band_name}
          bandAka={selectedBand.band_aka}
          show={cardStatus === ECardStatus.BAND}
        />

        <AlbumName
          selectedAlbum={selectedAlbum}
          show={cardStatus === ECardStatus.ALBUM}
          handleReturnMenu={handleReturnMenu}
        />

        <SongName
          selectedTrack={selectedTrack}
          handleReturnAlbum={handleReturnAlbum}
          handleReturnMenu={handleReturnMenu}
          show={cardStatus === ECardStatus.SONG}
        />
      </div>
    </div>
  );
};

export default Header;
