import IArtistInfoRepository from '../domain/repositories/ArtistInfo.repository';
import artistInfoService from '../domain/services/ArtistInfo.service';

interface IArtistInfoController extends IArtistInfoRepository {}

const artistInfoController = (repository: IArtistInfoRepository): IArtistInfoController => ({
  getArtistInfo: (name) => {
    return artistInfoService(repository).getArtistInfo(name);
  }
});

export default artistInfoController;