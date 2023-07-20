import styles from "./BandContent.module.scss";
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
    <BandInformation
      key="band-information"
      selectedBand={selectedBand}
      handleSelectAlbum={handleSelectAlbum}
      show={cardStatus === ECardStatus.BAND}
    />

    <AlbumSongs
      key="album-songs"
      selectedAlbum={selectedAlbum}
      show={cardStatus === ECardStatus.ALBUM}
    />

    {/* {cardStatus === ECardStatus.SONG && <AlbumSongs />} */}
  </div>
);

export default BandContent;
