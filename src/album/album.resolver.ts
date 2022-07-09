import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { AlbumService } from './album.service';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';
import { IdResolver } from '../common/id-resolver';
import { Track } from '../track/entities/track.entity';
import { from, mergeMap, toArray } from 'rxjs';
import { BandService } from '../band/band.service';
import { ArtistService } from '../artist/artist.service';
import { GenreService } from '../genre/genre.service';
import { TrackService } from '../track/track.service';
import { Album } from './entities/album.entity';

@Resolver('Album')
export class AlbumResolver extends IdResolver {
  constructor(
    private readonly albumService: AlbumService,
    private readonly bandService: BandService,
    private readonly artistService: ArtistService,
    private readonly genreService: GenreService,
    private readonly trackService: TrackService,
  ) {
    super();
  }

  @Mutation('createAlbum')
  create(@Args('createAlbumInput') createAlbumInput: CreateAlbumInput) {
    return this.albumService.create(createAlbumInput);
  }

  @Query('albums')
  findAll(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Args('filter') filter: string,
  ) {
    return this.albumService.findAll(limit, offset, filter);
  }

  @Query('album')
  findOne(@Args('id') id: string) {
    return this.albumService.findOne(id);
  }

  @Mutation('updateAlbum')
  update(@Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput) {
    return this.albumService.update(updateAlbumInput);
  }

  @Mutation('deleteAlbum')
  remove(@Args('id') id: string) {
    return this.albumService.remove(id);
  }

  @ResolveField('bands')
  getBands(@Parent() { bandsIds }: Album) {
    return from(bandsIds).pipe(
      mergeMap((id) => this.bandService.findOne(id)),
      toArray(),
    );
  }

  @ResolveField('genres')
  getGenres(@Parent() { genresIds }: Album) {
    return from(genresIds).pipe(
      mergeMap((id) => this.genreService.findOne(id)),
      toArray(),
    );
  }

  @ResolveField('artists')
  getArtists(@Parent() { artistsIds }: Album) {
    return from(artistsIds).pipe(
      mergeMap((id) => this.artistService.findOne(id)),
      toArray(),
    );
  }

  @ResolveField('tracks')
  getTracks(@Parent() { trackIds }: Album) {
    return from(trackIds).pipe(
      mergeMap((id) => this.trackService.findOne(id)),
      toArray(),
    );
  }
}
