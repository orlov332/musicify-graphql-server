import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GenreService } from './genre.service';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { Genre, GenreList, IMutation, IQuery } from '../graphql.schema';
import { GenreListRest, GenreRest } from './entities/genre.entity';
import { restEntityToGraph, restListToGraph } from '../utils';

type IGenreQuery = Pick<IQuery, 'genres' | 'genre'>;
type IGenreMutation = Pick<
  IMutation,
  'createGenre' /*| 'updateGenre' | 'deleteGenre'*/
>;

@Resolver('Genre')
export class GenreResolver implements IGenreQuery, IGenreMutation {
  constructor(private readonly genreService: GenreService) {}

  @Mutation('createGenre')
  async createGenre(
    @Args('createGenreInput') createGenreInput: CreateGenreInput,
  ): Promise<Genre> {
    return this.genreService.create(createGenreInput).then(restEntityToGraph);
  }

  @Query('genres')
  async genres(
    @Args('limit') limit: number,
    @Args('offset') offset: number,
    @Args('filter') filter: string,
  ): Promise<GenreList> {
    return this.genreService
      .findAll(limit, offset, filter)
      .then(restListToGraph<GenreListRest, GenreRest>);
  }

  @Query('genre')
  async genre(@Args('id') id: string): Promise<Genre> {
    return this.genreService.findOne(id).then(restEntityToGraph);
  }

  @Mutation('updateGenre')
  update(@Args('updateGenreInput') updateGenreInput: UpdateGenreInput) {
    return this.genreService.update(updateGenreInput.id, updateGenreInput);
  }

  @Mutation('deleteGenre')
  remove(@Args('id') id: number) {
    return this.genreService.remove(id);
  }
}
