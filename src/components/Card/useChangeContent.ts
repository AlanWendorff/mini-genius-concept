import { useState } from "react";
import BANDS from "data/band.data";
import IAlbum from "interfaces/album";

interface returnProps {
  album: null | undefined | IAlbum;
  handleAlbum: (id: number) => void;
  handleMenu: () => void;
}

const useChangeContent = (): returnProps => {
  const [album, setAlbum] = useState<null | IAlbum | undefined>(null);

  const handleAlbum = (albumId: number) => {
    const albumSelected = BANDS.dvsr.albums.find(({ id }) => id === albumId);
    setAlbum(albumSelected);
  };

  const handleMenu = () => {
    setAlbum(null);
  };

  return { album, handleAlbum, handleMenu };
};

export default useChangeContent;
