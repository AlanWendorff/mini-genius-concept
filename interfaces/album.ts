import { StaticImageData } from "next/image";

interface ITracklist {
  name: string;
  lyric: JSX.Element;
}

interface IColors {
  primary: string;
  secondary: string;
}

interface IAlbum {
  id: number;
  image: StaticImageData;
  name: string;
  release_year: number;
  release_date: string;
  band: string;
  colors: IColors;
  tracklist: ITracklist[];
}

export default IAlbum;
