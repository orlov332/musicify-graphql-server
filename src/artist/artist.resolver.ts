import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ArtistService } from './artist.service';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';
import { IMutation, IQuery } from '../graphql.schema';

type IArtistQuery = Pick<IQuery, 'artist' | 'artists'>;
type IArtistMutation = Pick<
  IMutation,
  'createArtist' | 'updateArtist' | 'deleteArtist'
>;

@Resolver('Artist')
export class ArtistResolver {
  constructor(private readonly artistService: ArtistService) {}

  @Mutation('createArtist')
  create(@Args('createArtistInput') createArtistInput: CreateArtistInput) {
    return this.artistService.create(createArtistInput);
  }

  @Query('artist')
  findAll() {
    return this.artistService.findAll();
  }

  @Query('artist')
  findOne(@Args('id') id: number) {
    return this.artistService.findOne(id);
  }

  @Mutation('updateArtist')
  update(@Args('updateArtistInput') updateArtistInput: UpdateArtistInput) {
    return this.artistService.update(updateArtistInput.id, updateArtistInput);
  }

  @Mutation('deleteArtist')
  delete(@Args('id') id: number) {
    return this.artistService.remove(id);
  }
}
