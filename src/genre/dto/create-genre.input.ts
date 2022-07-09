import { GenreRest } from '../entities/genre.entity';

export type CreateGenreInput = Omit<GenreRest, '_id'>;
