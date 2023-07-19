import { StaticImageData } from "next/image";
import styles from "./Header.module.scss";
import IAlbum from "interfaces/album";
import BandName from "./components/BandName";
import AlbumName from "./components/AlbumName";
import SongName from "./components/SongName";
import BackBtn from "./components/BackBtn";
import FloatingImage from "./components/FloatingImage";

interface props {
  album: null | undefined | IAlbum;
  title: string;
  subtitle: string;
  image: StaticImageData;
  handleMenu: () => void;
}

const Header = ({ album, title, subtitle, image, handleMenu }: props) => {
  const backgroundColor = album
    ? `linear-gradient(${album.colors.primary}, ${album.colors.secondary})`
    : `linear-gradient(#6f2929, #222222)`;

  const arrowColor = album ? album.colors.secondary : "#222222";

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: backgroundColor }}
    >
      <div className={styles.arrow} style={{ borderTopColor: arrowColor }} />

      <BackBtn show={false} handleMenu={handleMenu} />

      <FloatingImage image={image.src} key="band" show={false} />

      <FloatingImage image={album?.image.src ?? ""} key="album" show={false} />

      <BandName title={title} subtitle={subtitle} show={true} />
      <AlbumName album={album} show={false} />

      {/*   <SongName index={1} song={} show={false} /> */}
    </div>
  );
};

// try to handle various AnimatePresence

export default Header;
