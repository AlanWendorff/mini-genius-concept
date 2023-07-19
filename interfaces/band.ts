import { StaticImageData } from "next/image";
import IAlbum from "./album";

interface IBand {
  [key: string]: {
    band_image: StaticImageData;
    albums: IAlbum[];
  };
}

export default IBand;
