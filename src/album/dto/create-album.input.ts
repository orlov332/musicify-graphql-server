import { Album } from '../entities/album.entity';

export type CreateAlbumInput = Omit<Album, '_id'>;
