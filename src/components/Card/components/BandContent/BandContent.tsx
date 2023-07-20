import styles from "./BandContent.module.scss";
import AlbumSongs from "./components/AlbumSongs";
import BandInformation from "./components/BandInformation";
import { ECardStatus } from "@components/Card/useChangeContent";
import props from "interfaces/common";
import Lyric from "./components/Lyric/Lyric";

interface IBandContent extends props {
  handleSelectAlbum: (id: number) => void;
  handleSelectSong: (songName: string) => void;
}

const BandContent = ({
  cardStatus,
  selectedAlbum,
  selectedBand,
  selectedTrack,
  handleSelectAlbum,
  handleSelectSong,
}: IBandContent) => (
  <div className={styles.container}>
    <BandInformation
      selectedBand={selectedBand}
      handleSelectAlbum={handleSelectAlbum}
      show={cardStatus === ECardStatus.BAND}
    />

    <AlbumSongs
      selectedAlbum={selectedAlbum}
      handleSelectSong={handleSelectSong}
      show={cardStatus === ECardStatus.ALBUM}
    />

    <Lyric
      selectedTrack={selectedTrack}
      show={cardStatus === ECardStatus.SONG}
    />
  </div>
);

export default BandContent;
