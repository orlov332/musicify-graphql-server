import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GenreService } from './genre.service';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { DeleteResult } from '../graphql.schema';
import { IdResolver } from '../common/id-resolver';

@Resolver('Genre')
export class GenreResolver extends IdResolver {
  constructor(private readonly genreService: GenreService) {
    super();
  }

  @Mutation('createGenre')
  async createGenre(
    @Args('createGenreInput') createGenreInput: CreateGenreInput,
  ) {
    return this.genreService.create(createGenreInput);
  }

  @Query('genres')
  async genres(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Args('filter') filter: string,
  ) {
    return this.genreService.findAll(limit, offset, filter);
  }

  @Query('genre')
  async genre(@Args('id') id: string) {
    return this.genreService.findOne(id);
  }

  @Mutation('updateGenre')
  async updateGenre(
    @Args('updateGenreInput') updateGenreInput: UpdateGenreInput,
  ) {
    return this.genreService.update(updateGenreInput);
  }

  @Mutation('deleteGenre')
  async deleteGenre(@Args('id') id: string): Promise<DeleteResult> {
    return this.genreService.remove(id);
  }
}
