import { CreateGenreInput } from './create-genre.input';

export interface UpdateGenreInput extends Partial<CreateGenreInput> {
  id: string;
}
