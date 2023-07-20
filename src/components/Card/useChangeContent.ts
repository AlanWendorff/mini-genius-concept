import { useState } from "react";
import BANDS from "data/bands.data";
import IAlbum, { ITrack } from "interfaces/album";

export enum ECardStatus {
  "BAND" = 0,
  "ALBUM" = 1,
  "SONG" = 2,
}

interface IReturnProps {
  cardStatus: ECardStatus.BAND | ECardStatus.ALBUM | ECardStatus.SONG;
  selectedAlbum: null | undefined | IAlbum;
  selectedTrack: null | undefined | ITrack;
  handleSelectAlbum: (id: number) => void;
  handleSelectSong: (songName: string) => void;
  handleReturnMenu: () => void;
  handleReturnAlbum: () => void;
}

const useChangeContent = (): IReturnProps => {
  const [cardStatus, setCardStatus] = useState<
    ECardStatus.BAND | ECardStatus.ALBUM | ECardStatus.SONG
  >(ECardStatus.BAND);

  const [selectedAlbum, setSelectedAlbum] = useState<null | IAlbum | undefined>(
    null
  );

  const [selectedTrack, setSelectedTrack] = useState<null | ITrack | undefined>(
    null
  );

  const handleSelectAlbum = (albumId: number) => {
    const albumSelected = BANDS.dvsr.albums.find(({ id }) => id === albumId);
    setSelectedAlbum(albumSelected);
    setCardStatus(ECardStatus.ALBUM);
  };

  const handleSelectSong = (songName: string) => {
    const songSelected = selectedAlbum?.tracklist.find(
      ({ name }) => name === songName
    );
    setSelectedTrack(songSelected);
    setCardStatus(ECardStatus.SONG);
  };

  const handleReturnMenu = () => {
    setCardStatus(ECardStatus.BAND);
    setSelectedAlbum(null);
    setSelectedTrack(null);
  };

  const handleReturnAlbum = () => {
    setCardStatus(ECardStatus.ALBUM);
    setSelectedTrack(null);
  };

  return {
    cardStatus,
    selectedAlbum,
    selectedTrack,
    handleSelectAlbum,
    handleSelectSong,
    handleReturnMenu,
    handleReturnAlbum,
  };
};

export default useChangeContent;
