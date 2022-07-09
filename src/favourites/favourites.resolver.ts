import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { FavouritesService } from './favourites.service';
import { IdResolver } from '../common/id-resolver';
import { BandService } from '../band/band.service';
import { ArtistService } from '../artist/artist.service';
import { GenreService } from '../genre/genre.service';
import { TrackService } from '../track/track.service';
import { from, mergeMap, toArray } from 'rxjs';
import { Favourite } from './entities/favourite.entity';

@Resolver('Favourite')
export class FavouritesResolver extends IdResolver {
  constructor(
    private readonly favouritesService: FavouritesService,
    private readonly bandService: BandService,
    private readonly artistService: ArtistService,
    private readonly genreService: GenreService,
    private readonly trackService: TrackService,
  ) {
    super();
  }

  @Query('favourites')
  findAll() {
    return this.favouritesService.getFavorites();
  }

  @Mutation('addTrackToFavourites')
  addTrackToFavourites(@Args('trackId') id: string) {
    return this.favouritesService.addFavourite('tracks', id);
  }

  @Mutation('deleteTrackFromFavourites')
  deleteTrackFromFavourites(@Args('trackId') id: string) {
    return this.favouritesService.removeFavourite('tracks', id);
  }

  @Mutation('addBandToFavourites')
  addBandToFavourites(@Args('bandId') id: string) {
    return this.favouritesService.addFavourite('bands', id);
  }

  @Mutation('deleteBandFromFavourites')
  deleteBandFromFavourites(@Args('bandId') id: string) {
    return this.favouritesService.removeFavourite('bands', id);
  }

  @Mutation('addArtistToFavourites')
  addArtistToFavourites(@Args('artistId') id: string) {
    return this.favouritesService.addFavourite('artists', id);
  }

  @Mutation('deleteArtistFromFavourites')
  deleteArtistFromFavourites(@Args('artistId') id: string) {
    return this.favouritesService.removeFavourite('artists', id);
  }

  @Mutation('addGenreToFavourites')
  addGenreToFavourites(@Args('genreId') id: string) {
    return this.favouritesService.addFavourite('genres', id);
  }

  @Mutation('deleteGenreFromFavourites')
  deleteGenreFromFavourites(@Args('genreId') id: string) {
    return this.favouritesService.removeFavourite('genres', id);
  }

  @ResolveField('bands')
  getBands(@Parent() { bandsIds }: Favourite) {
    return from(bandsIds).pipe(
      mergeMap((id) => this.bandService.findOne(id)),
      toArray(),
    );
  }

  @ResolveField('genres')
  getGenres(@Parent() { genresIds }: Favourite) {
    return from(genresIds).pipe(
      mergeMap((id) => this.genreService.findOne(id)),
      toArray(),
    );
  }

  @ResolveField('artists')
  getArtists(@Parent() { artistsIds }: Favourite) {
    return from(artistsIds).pipe(
      mergeMap((id) => this.artistService.findOne(id)),
      toArray(),
    );
  }

  @ResolveField('tracks')
  getTracks(@Parent() { tracksIds }: Favourite) {
    return from(tracksIds).pipe(
      mergeMap((id) => this.trackService.findOne(id)),
      toArray(),
    );
  }
}
