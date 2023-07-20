import { StaticImageData } from "next/image";

export interface ITrack {
  id: number;
  name: string;
  band: string;
  album: string;
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
  tracklist: ITrack[];
}

export default IAlbum;
