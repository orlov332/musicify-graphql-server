import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { BandService } from './band.service';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';
import { IdResolver } from '../common/id-resolver';
import { BandRest } from './entities/band.entity';
import { GenreService } from '../genre/genre.service';
import { from, mergeMap, toArray } from 'rxjs';

@Resolver('Band')
export class BandResolver extends IdResolver {
  constructor(
    private readonly bandService: BandService,
    private readonly genreService: GenreService,
  ) {
    super();
  }

  @Query('bands')
  bands(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Args('filter') filter: string,
  ) {
    return this.bandService.findAll(limit, offset, filter);
  }

  @Query('band')
  band(@Args('id') id: string) {
    return this.bandService.findOne(id);
  }

  @Mutation('createBand')
  createBand(@Args('createBandInput') createBandInput: CreateBandInput) {
    return this.bandService.create(createBandInput);
  }

  @Mutation('updateBand')
  updateBand(@Args('updateBandInput') updateBandInput: UpdateBandInput) {
    return this.bandService.update(updateBandInput.id, updateBandInput);
  }

  @Mutation('deleteBand')
  deleteBand(@Args('id') id: number) {
    return this.bandService.remove(id);
  }

  @ResolveField('genres')
  getGenres(@Parent() { genresIds }: BandRest) {
    return from(genresIds).pipe(
      mergeMap((id: string) => this.genreService.findOne(id)),
      toArray(),
    );
  }
}
