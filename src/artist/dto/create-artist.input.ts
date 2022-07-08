import { Artist } from '../entities/artist.entity';

export type CreateArtistInput = Omit<Artist, '_id'>;
