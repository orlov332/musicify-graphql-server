import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TrackService } from './track.service';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';
import { IdResolver } from '../common/id-resolver';

@Resolver('Track')
export class TrackResolver extends IdResolver {
  constructor(private readonly trackService: TrackService) {
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

  @Mutation('removeTrack')
  remove(@Args('id') id: string) {
    return this.trackService.remove(id);
  }
}
