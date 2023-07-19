type TAlbum = {
  id: number;
  image: string;
  name: string;
  release_year: number;
  release_date: string;
  band: string;
  colors: {
    primary: string;
    secondary: string;
  };
  tracklist: string[];
};

export default TAlbum;
