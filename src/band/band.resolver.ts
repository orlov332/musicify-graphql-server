import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BandService } from './band.service';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';
import { IdResolver } from '../common/id-resolver';

@Resolver('Band')
export class BandResolver extends IdResolver {
  constructor(private readonly bandService: BandService) {
    super();
  }

  @Mutation('createBand')
  async createBand(@Args('createBandInput') createBandInput: CreateBandInput) {
    return this.bandService.create(createBandInput);
  }

  @Query('bands')
  async bands(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Args('filter') filter: string,
  ) {
    return this.bandService.findAll(limit, offset, filter);
  }

  @Query('band')
  async band(@Args('id') id: string) {
    return this.bandService.findOne(id);
  }

  @Mutation('updateBand')
  async updateBand(@Args('updateBandInput') updateBandInput: UpdateBandInput) {
    return this.bandService.update(updateBandInput.id, updateBandInput);
  }

  @Mutation('deleteBand')
  async deleteBand(@Args('id') id: number) {
    return this.bandService.remove(id);
  }
}
