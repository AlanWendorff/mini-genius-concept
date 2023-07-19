import { StaticImageData } from "next/image";

interface IColors {
  primary: string;
  secondary: string;
}

interface ITracklist {
  name: string;
  lyric: JSX.Element;
}

interface IBand {
  [key: string]: {
    band_image: StaticImageData;
    albums: {
      id: number;
      image: StaticImageData;
      name: string;
      release_year: number;
      release_date: string;
      band: string;
      colors: IColors;
      tracklist: ITracklist[];
    }[];
  };
}

export default IBand;
