import { useState } from "react";
import ALBUMS from "../../data/data";
import TAlbum from "../../types/album";

interface returnProps {
  album: null | undefined | TAlbum;
  handleAlbum: (id: number) => void;
  handleMenu: () => void;
}

const useChangeContent = (): returnProps => {
  const [album, setAlbum] = useState<null | TAlbum | undefined>(null);

  const handleAlbum = (albumId: number) => {
    const albumSelected = ALBUMS.find(({ id }) => id === albumId);
    setAlbum(albumSelected);
  };

  const handleMenu = () => {
    setAlbum(null);
  };

  return { album, handleAlbum, handleMenu };
};

export default useChangeContent;
