import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { TrackService } from './track.service';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';
import { IdResolver } from '../common/id-resolver';
import { from, mergeMap, toArray } from 'rxjs';
import { BandService } from '../band/band.service';
import { ArtistService } from '../artist/artist.service';
import { Track } from './entities/track.entity';
import { GenreService } from '../genre/genre.service';

@Resolver('Track')
export class TrackResolver extends IdResolver {
  constructor(
    private readonly trackService: TrackService,
    private readonly bandService: BandService,
    private readonly artistService: ArtistService,
    private readonly genreService: GenreService,
  ) {
    super();
  }

  @Mutation('createTrack')
  create(@Args('createTrackInput') createTrackInput: CreateTrackInput) {
    return this.trackService.create(createTrackInput);
  }

  @Query('tracks')
  findAll(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Args('filter') filter: string,
  ) {
    return this.trackService.findAll(limit, offset, filter);
  }

  @Query('track')
  findOne(@Args('id') id: string) {
    return this.trackService.findOne(id);
  }

  @Mutation('updateTrack')
  update(@Args('updateTrackInput') updateTrackInput: UpdateTrackInput) {
    return this.trackService.update(updateTrackInput);
  }

  @Mutation('deleteTrack')
  remove(@Args('id') id: string) {
    return this.trackService.remove(id);
  }

  @ResolveField('bands')
  getBands(@Parent() { bandsIds }: Track) {
    return from(bandsIds).pipe(
      mergeMap((id) => this.bandService.findOne(id)),
      toArray(),
    );
  }

  @ResolveField('genres')
  getGenres(@Parent() { genresIds }: Track) {
    return from(genresIds).pipe(
      mergeMap((id) => this.genreService.findOne(id)),
      toArray(),
    );
  }

  @ResolveField('artists')
  getArtists(@Parent() { artistsIds }: Track) {
    return from(artistsIds).pipe(
      mergeMap((id) => this.artistService.findOne(id)),
      toArray(),
    );
  }
}
