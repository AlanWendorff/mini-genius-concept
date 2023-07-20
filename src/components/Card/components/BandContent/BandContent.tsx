import styles from "./BandContent.module.scss";
import { AnimatePresence } from "framer-motion";
import AlbumSongs from "./components/AlbumSongs";
import BandInformation from "./components/BandInformation";
import { ECardStatus } from "@components/Card/useChangeContent";
import props from "interfaces/sectionProps";

interface IBandContent extends props {
  handleSelectAlbum: (id: number) => void;
  handleSelectSong: (songName: string) => void;
}

const BandContent = ({
  cardStatus,
  selectedAlbum,
  selectedBand,
  handleSelectAlbum,
  handleSelectSong,
}: IBandContent) => (
  <div className={styles.container}>
    <AnimatePresence>
      {cardStatus === ECardStatus.BAND && (
        <BandInformation
          key="band-information"
          selectedBand={selectedBand}
          handleSelectAlbum={handleSelectAlbum}
        />
      )}

      {cardStatus === ECardStatus.ALBUM && (
        <AlbumSongs key="album-songs" selectedAlbum={selectedAlbum} />
      )}

      {/* {cardStatus === ECardStatus.SONG && <AlbumSongs />} */}
    </AnimatePresence>
  </div>
);

export default BandContent;
