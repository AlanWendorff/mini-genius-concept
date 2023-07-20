import { ECardStatus } from "@components/Card/useChangeContent";
import IAlbum, { ITrack } from "./album";
import { IBand } from "./band";

interface props {
  cardStatus: ECardStatus.BAND | ECardStatus.ALBUM | ECardStatus.SONG;
  selectedBand: IBand;
  selectedAlbum: null | undefined | IAlbum;
  selectedTrack: null | undefined | ITrack;
}

export default props;
