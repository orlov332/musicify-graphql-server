import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ArtistService } from './artist.service';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';
import { IdResolver } from '../common/id-resolver';
import { from, mergeMap, toArray } from 'rxjs';
import { Artist } from './entities/artist.entity';
import { BandService } from '../band/band.service';

@Resolver('Artist')
export class ArtistResolver extends IdResolver {
  constructor(
    private readonly bandService: BandService,
    private readonly artistService: ArtistService,
  ) {
    super();
  }

  @Mutation('createArtist')
  create(@Args('createArtistInput') createArtistInput: CreateArtistInput) {
    return this.artistService.create(createArtistInput);
  }

  @Query('artists')
  findAll(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Args('filter') filter: string,
  ) {
    return this.artistService.findAll(limit, offset, filter);
  }

  @Query('artist')
  findOne(@Args('id') id: string) {
    return this.artistService.findOne(id);
  }

  @Mutation('updateArtist')
  update(@Args('updateArtistInput') updateArtistInput: UpdateArtistInput) {
    return this.artistService.update(updateArtistInput);
  }

  @Mutation('deleteArtist')
  delete(@Args('id') id: string) {
    return this.artistService.remove(id);
  }

  @ResolveField('bands')
  getBands(@Parent() { bandsIds }: Artist) {
    return from(bandsIds).pipe(
      mergeMap((id) => this.bandService.findOne(id)),
      toArray(),
    );
  }
}
