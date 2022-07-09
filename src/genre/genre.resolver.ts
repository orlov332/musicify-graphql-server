import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GenreService } from './genre.service';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { IdResolver } from '../common/id-resolver';

@Resolver('Genre')
export class GenreResolver extends IdResolver {
  constructor(private readonly genreService: GenreService) {
    super();
  }

  @Mutation('createGenre')
  createGenre(@Args('createGenreInput') createGenreInput: CreateGenreInput) {
    return this.genreService.create(createGenreInput);
  }

  @Query('genres')
  genres(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Args('filter') filter: string,
  ) {
    return this.genreService.findAll(limit, offset, filter);
  }

  @Query('genre')
  genre(@Args('id') id: string) {
    return this.genreService.findOne(id);
  }

  @Mutation('updateGenre')
  updateGenre(@Args('updateGenreInput') updateGenreInput: UpdateGenreInput) {
    return this.genreService.update(updateGenreInput);
  }

  @Mutation('deleteGenre')
  deleteGenre(@Args('id') id: string) {
    return this.genreService.remove(id);
  }
}
