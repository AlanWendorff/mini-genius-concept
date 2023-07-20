import { StaticImageData } from "next/image";
import IAlbum from "./album";

export interface IBand {
  band_image: StaticImageData;
  band_name: string;
  band_aka: string;
  band_description: string;
  albums: IAlbum[];
}

interface IBands {
  [key: string]: IBand;
}

export default IBands;
