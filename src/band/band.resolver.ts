import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BandService } from './band.service';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';

@Resolver('Band')
export class BandResolver {
  constructor(private readonly bandService: BandService) {}

  @Mutation('createBand')
  create(@Args('createBandInput') createBandInput: CreateBandInput) {
    return this.bandService.create(createBandInput);
  }

  @Query('band')
  findAll() {
    return this.bandService.findAll();
  }

  @Query('band')
  findOne(@Args('id') id: number) {
    return this.bandService.findOne(id);
  }

  @Mutation('updateBand')
  update(@Args('updateBandInput') updateBandInput: UpdateBandInput) {
    return this.bandService.update(updateBandInput.id, updateBandInput);
  }

  @Mutation('removeBand')
  remove(@Args('id') id: number) {
    return this.bandService.remove(id);
  }
}
