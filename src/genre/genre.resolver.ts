import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GenreService } from './genre.service';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';

@Resolver('Genre')
export class GenreResolver {
  constructor(private readonly genreService: GenreService) {}

  @Mutation('createGenre')
  create(@Args('createGenreInput') createGenreInput: CreateGenreInput) {
    return this.genreService.create(createGenreInput);
  }

  @Query('genre')
  findAll() {
    return this.genreService.findAll();
  }

  @Query('genre')
  findOne(@Args('id') id: number) {
    return this.genreService.findOne(id);
  }

  @Mutation('updateGenre')
  update(@Args('updateGenreInput') updateGenreInput: UpdateGenreInput) {
    return this.genreService.update(updateGenreInput.id, updateGenreInput);
  }

  @Mutation('removeGenre')
  remove(@Args('id') id: number) {
    return this.genreService.remove(id);
  }
}
