import { CreateAlbumInput } from './create-album.input';

export interface UpdateAlbumInput extends Partial<CreateAlbumInput> {
  id: string;
}
