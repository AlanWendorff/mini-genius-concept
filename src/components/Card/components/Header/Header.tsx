import { StaticImageData } from "next/image";
import styles from "./Header.module.scss";
import IAlbum, { ITrack } from "interfaces/album";
import BandName from "./components/BandName";
import AlbumName from "./components/AlbumName";
import SongName from "./components/SongName";
import BackBtn from "./components/BackBtn";
import FloatingImage from "./components/FloatingImage";
import { AnimatePresence } from "framer-motion";
import { IBand } from "interfaces/band";
import { ECardStatus } from "@components/Card/useChangeContent";
import props from "interfaces/sectionProps";

const Header = ({ cardStatus, selectedAlbum, selectedBand }: props) => {
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

      <AnimatePresence>
        {cardStatus === ECardStatus.BAND && (
          <>
            <FloatingImage
              key="floating-image-band"
              image={selectedBand.band_image.src}
            />
            <BandName
              key="band-name"
              title={selectedBand.band_name}
              bandAka={selectedBand.band_aka}
            />
          </>
        )}

        {cardStatus === ECardStatus.ALBUM && (
          <>
            <BackBtn key="back" />
            <FloatingImage
              key="floating-image-selectedAlbum"
              image={selectedAlbum?.image.src ?? ""}
            />
            <AlbumName key="selectedAlbum-name" selectedAlbum={selectedAlbum} />
          </>
        )}

        {cardStatus === ECardStatus.SONG && (
          <>
            {/* <BackBtn key="back" /> */}
            <FloatingImage
              key="floating-image-selectedAlbum"
              image={selectedAlbum?.image.src ?? ""}
            />
            {/*  <SongName index={1} song={} show={false} /> */}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

/*   <SongName index={1} song={} show={false} /> */

// try to handle various AnimatePresence

export default Header;
