import { CreateArtistInput } from './create-artist.input';

export interface UpdateArtistInput extends Partial<CreateArtistInput> {
  id: string;
}
